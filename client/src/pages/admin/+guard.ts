import {GuardAsync} from "vike/types";
import {redirect, render} from "vike/abort";


const guard: GuardAsync = async (pageContext): ReturnType<GuardAsync> => {
    if (!pageContext.token && pageContext.urlPathname !== '/admin/login' && pageContext.urlPathname !== '/admin/register') {
        throw render('/admin/login')
    }
    else if (pageContext.token && (pageContext.urlPathname === '/admin/login' || pageContext.urlPathname === '/admin/register')) {
        throw redirect('/admin/home')
    }
}

export { guard }
