// This file isn't processed by Vite, see https://github.com/vikejs/vike/issues/562
// Consequently:
//  - When changing this file, you needed to manually restart your server for your changes to take effect.
//  - To use your environment variables defined in your .env files, you need to install dotenv, see https://vike.dev/env
//  - To use your path aliases defined in your vite.config.js, you need to tell Node.js about them, see https://vike.dev/path-aliases

// If you want Vite to process your server code then use one of these:
//  - vavite (https://github.com/cyco130/vavite)
//     - See vavite + Vike examples at https://github.com/cyco130/vavite/tree/main/examples
//  - vite-node (https://github.com/antfu/vite-node)
//  - HatTip (https://github.com/hattipjs/hattip)
//    - You can use Bati (https://batijs.dev/) to scaffold a Vike + HatTip app. Note that Bati generates apps that use the V1 design (https://vike.dev/migration/v1-design) and Vike packages (https://vike.dev/vike-packages)

import express, {Express} from 'express'
import compression from 'compression'
import {renderPage} from 'vike/server'
import {root} from './root.js'
import cookieParser from 'cookie-parser'
import {createProxyMiddleware} from "http-proxy-middleware";

const isProduction = process.env.NODE_ENV === 'production'

startServer()

// Augment the Express Request interface to include a `token` property.
declare module 'express-serve-static-core' {
    interface Request {
        token?: string;
    }
}


async function startServer() {
    const app = express()

    app.use(compression())
    await vite(app)
    auth(app)
    authCookieMock(app)
    logoutRoute(app)
    vike(app)

    const port = process.env.PORT ?? 3000
    app.listen(port)
    console.log(`Server running at http://localhost:${port}`)
}

async function vite(app: Express) {
    // Vite integration
    if (isProduction) {
        // In production, we need to serve our static assets ourselves.
        // (In dev, Vite's middleware serves our static assets.)
        const sirv = (await import('sirv')).default
        app.use(sirv(`${root}/dist/client`))
    } else {
        proxy(app)
        // We instantiate Vite's development server and integrate its middleware to our server.
        // ⚠️ We instantiate it only in development. (It isn't needed in production, and it
        // would unnecessarily bloat our production server.)
        const vite = await import('vite')
        const viteDevMiddleware = (
            await vite.createServer({
                root,
                server: {middlewareMode: true}
            })
        ).middlewares
        app.use(viteDevMiddleware)
    }
}

function proxy(app: Express) {
    app.use('/api', createProxyMiddleware({
        target: 'https://nyashdev-siteconstructor.stk8s.66bit.ru/api',
        changeOrigin: true,
    }));
}

function auth(app: Express) {
    app.use(cookieParser())
    app.use(function (req, res, next) {
        const {token} = req.cookies
        if (!token) return next()
        req.token = token
        next()
    })
}

function authCookieMock(app: Express) {
    app.get('/_auth/login', (req, res) => {
        res.cookie('token', '123', {
            maxAge: 24 * 60 * 60 * 1000, // One day
            httpOnly: true
        })
        res.send({success: true})
    })
}

function logoutRoute(app: Express) {
    app.get('/_auth/logout', (req, res) => {
        res.clearCookie('token')
        res.send({success: true})
    })
}

function vike(app: Express) {
    // Vike middleware. It should always be our last middleware (because it's a
    // catch-all middleware superseding any middleware placed after it).
    app.get('*', async (req, res, next) => {
        const pageContextInit = {
            urlOriginal: req.originalUrl,
            token: req.token
        }
        const pageContext = await renderPage(pageContextInit)
        if (pageContext.errorWhileRendering) {
            // Install error tracking here, see https://vike.dev/errors
        }
        const {httpResponse} = pageContext
        if (!httpResponse) {
            return next()
        } else {
            const {body, statusCode, headers, earlyHints} = httpResponse
            if (res.writeEarlyHints) res.writeEarlyHints({link: earlyHints.map((e) => e.earlyHintLink)})
            headers.forEach(([name, value]) => res.setHeader(name, value))
            res.status(statusCode)
            // For HTTP streams use httpResponse.pipe() instead, see https://vike.dev/streaming
            res.send(body)
        }
    })
}
