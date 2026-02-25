"use client";

import React, { useRef } from "react";
import Explosion from "../../../ui/explosion/Explosion";
import styles from "./footer-01.module.css";
import { footerAssets } from "./data"

export default function Footer01() {
   const footerRef = useRef<HTMLElement | null>(null);

   return (
      <div>
         <section className={styles.about}>
            <p className="text-8xl font-bold tracking-tighter">Please Scroll down</p>
         </section>

         <footer className={styles.footer} ref={footerRef}>
            <div className={styles.copyrightInfo}></div>
            <Explosion
               footerRef={footerRef}
               images={footerAssets.footer01.explosionImages}
            />
         </footer>
      </div>
   );
}