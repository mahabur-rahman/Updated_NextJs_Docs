import Image from "next/image";
// import laptop from "../public/laptop.jpg";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>

      <div style={{ textAlign: "center" }}>
        <h1>About page</h1>
        {/* <Image src="/laptop.jpg" alt="laptop" height="400" width="650" /> */}
        {/* <Image src={laptop} alt="laptop" height="400" width="650" /> */}
        <Image
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="laptop"
          height="400"
          width="650"
        />
      </div>
    </>
  );
};

export default about;
