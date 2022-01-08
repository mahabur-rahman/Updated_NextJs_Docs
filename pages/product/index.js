import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Product = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>

      <h1>Product Page</h1>

      <div className="pt-3 pb-5">
        {data.slice(0, 10).map((elem) => {
          const { id, title } = elem;
          return (
            <div key={id}>
              <h1>{id}</h1>
              <Link href={`product/${id}`}>
                <a>{title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
