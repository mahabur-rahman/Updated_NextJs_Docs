// import { useRouter } from "next/router";
// import { useEffect } from "react";
import styles from "../styles/error.module.scss";

const ErrorPage = () => {
  // const router = useRouter();
  // const backToHome = () => {
  //   router.push("/");
  // };

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     router.push("/");
  //   }, 3000);

  //   clearTimeout(() => timeOut);
  // }, []);

  return (
    <>
      <section id={styles.errorPage}>
        <h1>404 ! Not Found</h1>
        <div className="my-4">
          <button className={`${styles.backBtn} ${styles.btn_color}`}>
            Back to home page
          </button>
          {/* <button onClick={() => router.push("/")}>Back to home page</button> */}
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
