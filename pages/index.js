import { Container } from "react-bootstrap";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <section id="home">
        <Container>
          <h1>Welcome to home page</h1>
        </Container>
      </section>
    </>
  );
};

export default index;
