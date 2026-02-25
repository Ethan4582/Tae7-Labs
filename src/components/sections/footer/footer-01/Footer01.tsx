"use client";

import React, { useRef } from "react";
import Explosion from "../../../ui/explosion/Explosion";
import styles from "./footer-01.module.css";
import { footerAssets } from "../../../../lib/assets"; 

export default function Footer01(): JSX.Element {
  const footerRef = useRef<HTMLElement | null>(null);

  return (
    <div>
      <section className={styles.about}>
        <p>Please Scroll down</p>
      </section>

      <footer className={styles.footer} ref={footerRef}>
        <h1 className={styles.title}>Future is in your hands</h1>
        <div className={styles.copyrightInfo}></div>
        <Explosion footerRef={footerRef} />
      </footer>
    </div>
  );
}