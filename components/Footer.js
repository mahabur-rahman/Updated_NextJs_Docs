import Link from "next/link";
// scss
import styles from "../styles/footer.module.scss";

const Footer = () => {
  const name = " Mahabur Rahman ";
  const year = new Date().getFullYear();
  return (
    <>
      <footer id={styles.footerId}>
        <div className={styles.bg}>
          <p className={styles.change}>
            Copyright and {year}. Developed by
            <Link href="/">
              <a>{name}</a>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
