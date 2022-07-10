import '@/styles/globals.css'

import LayoutDefault from '@/components/Layout/Default'

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <LayoutDefault>{page}</LayoutDefault>)

  return getLayout(<Component {...pageProps} />)
}
