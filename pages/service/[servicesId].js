// react bootstrap
import { Container, Row, Col } from "react-bootstrap";

// getStaticPaths

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((elem) => {
    return {
      params: {
        servicesId: elem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// getStaticProps

export const getStaticProps = async (context) => {
  const id = context.params.servicesId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      posts: data,
    },
  };
};

const ServicesDetails = ({ posts }) => {
  const { id, title, body } = posts;
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col xl={10} className="mx-auto">
              <div>
                <h1 className="text-center fw-bold">Service Details Page</h1>
                <h1>{id}</h1>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicesDetails;
