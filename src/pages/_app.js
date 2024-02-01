import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/globals-responsive.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
	  const getLayout = Component.getLayout || ((page) => page);
  return   (
  <>
  {getLayout(<Component {...pageProps} />)}
  </>
  )
}