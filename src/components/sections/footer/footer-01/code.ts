// export raw source to allow "copy code" feature
export const code = {
  "Footer01.tsx": `/* Footer01.tsx (TSX) */
"use client";
import React, { useRef } from "react";
import Explosion from "../../../ui/explosion/Explosion";
import styles from "./footer-01.module.css";

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
`,
  "Explosion.tsx": `/* Explosion.tsx (TSX) - placed under src/components/ui/explosion */
"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./explosion.module.css";
// ... (full Explosion implementation as above)
`,
};