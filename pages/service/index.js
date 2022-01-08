import Head from "next/head";
import Link from "next/link";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      posts: data.slice(0, 26),
    },
  };
};

const Service = ({ posts }) => {
  // console.log(posts);

  return (
    <>
      <Head>
        <title>Service Page</title>
      </Head>

      <section id="postsId">
        <Container>
          <Row>
            <Col xl={12}>
              <h1>Service Page</h1>
              <div className="posts">
                {posts.map((post) => {
                  const { id, title } = post;
                  return (
                    <div key={id} className="post_link">
                      <Link href={`/service/${post.id}`}>
                        <a className="d-flex my-3">
                          <h2
                            style={{
                              width: "50px",
                              height: "50px",
                              background: "#fff",
                              borderRadius: "50%",
                              textAlign: "center",
                              lineHeight: "50px",
                            }}
                          >
                            {id}
                          </h2>
                          <h3 className="mx-3">{title}</h3>
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Service;
