import { AppProps } from "next/app";
import '../styles/globals.css'
import "../styles/tailwind.css";
import "../styles/slick.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
