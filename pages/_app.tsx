import { NavBar } from "Components/Layout/NavBar";
import "semantic-ui-css/semantic.min.css";

// Custom CSS
import "../styles/style.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
