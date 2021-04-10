import { NavBar } from "Components/Layout/NavBar";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

// Custom CSS
import "../styles/style.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <NavBar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
