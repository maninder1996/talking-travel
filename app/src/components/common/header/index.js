import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [isActive , setActive]= useState(false);
  const handletoggle = () => {
    setActive(!isActive);
    console.log('hii');
  }
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-12">
            <div className={styles.logo_wrap}>
              <Link href="/">
                <Image src="/assets/images/logo.svg" width={100} height={64} />
              </Link>
              <span className={styles.menu_icon} onClick={handletoggle}>
                <Image src="/assets/icons/menu.svg"
                width={50}
                height={40}
                />
              </span>
            </div>
          </div>
          <div className="col-md-10 col-sm-12">
            <div className={`${isActive ? styles.active: styles.nav_wrap} ${styles.nav_wrap}`}  >
              <ul className={styles.nav}>
                 <li className={styles.close_icon} >
                  <button type="button" onClick={handletoggle}><Image src="/assets/icons/close_icon.svg" alt="" width={40} height={40}/></button>
                </li>

                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="/stories">Story</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
              {/* <div className={styles.user_seardh}>
                <ul>
                  <li>
                    <Image
                      src="/assets/icons/search_icon.svg"
                      width={20}
                      height={20}
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/icons/header_profile.svg"
                      width={24}
                      height={24}
                    />
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
