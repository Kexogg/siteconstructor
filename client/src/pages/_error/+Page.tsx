import {usePageContext} from "vike-react/usePageContext";

export { Page }

function Page() {
  const pageContext = usePageContext()
  let { abortReason } = pageContext
  if (!abortReason) {
    abortReason = pageContext.is404 ? 'Page not found.' : 'Something went wrong.'
  }
  return (
    <Center>
      <p style={{ fontSize: '1.3em' }}>{abortReason as string}</p>
    </Center>
  )
}

function Center({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      style={{
        height: 'calc(100vh - 100px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </div>
  )
}
