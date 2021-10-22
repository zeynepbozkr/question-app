import React from "react";
import Link from "next/Link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a> Home </a>
          </Link>
        </li>

        <li>
          <Link href="/questions ">
            <a> Questions </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
