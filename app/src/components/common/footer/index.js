import Link from "next/link";
import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 ">
              <div className={styles.copy_right}>
                © 2023, Talking Travel. All Rights Reserved.
              </div>
            </div>
            <div className="col-md-6 col-sm-12 px-0">
              <ul className={` nav ${styles.nav}`}>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">Story</Link>
                </li>
                <li>
                  <Link href="#">Gallery</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
