import { useRouter } from "next/router";
import Head from "next/head";


const blogDetails = () => {
  const router = useRouter();
  //   console.log(router.query.blogId);
  //   const blogId = router.query.blogId;
  //   console.log(router.query);
  const { blogId } = router.query;
  return (
    <>
      <Head>
        <title>Product page</title>
      </Head>
      <h1>blogDetails page : {blogId}</h1>
    </>
  );
};

export default blogDetails;
