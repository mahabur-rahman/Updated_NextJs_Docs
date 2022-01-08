export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((e) => {
    return {
      params: {
        productId: e.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.productId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const ProductDetails = ({ data }) => {
  //   console.log(data);
  const { id, title, body } = data;
  return (
    <>
      <h1>details page</h1>
      <div>
        <h1>{id}</h1>
        <h2>{title}</h2>
        <pre>{body}</pre>
      </div>
    </>
  );
};

export default ProductDetails;
