"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./explosion.module.css";

interface ExplosionProps {
  footerRef: React.RefObject<HTMLElement | null>;
  // optional overrides
  config?: Partial<{
    gravity: number;
    friction: number;
    imageSize: number;
    horizontalForce: number;
    verticalForce: number;
    rotationSpeed: number;
    resetDelay: number;
  }>;
  // supply image paths
  images?: string[];
}

/* Particle class (keeps DOM update logic encapsulated) */
class Particle {
  element: HTMLImageElement;
  x = 0;
  y = 0;
  vx: number;
  vy: number;
  rotation = 0;
  rotationSpeed: number;

  constructor(element: HTMLImageElement, cfg: { horizontalForce: number; verticalForce: number; rotationSpeed: number; friction: number; gravity: number; }) {
    this.element = element;
    this.vx = (Math.random() - 0.5) * cfg.horizontalForce;
    this.vy = -cfg.verticalForce - Math.random() * 10;
    this.rotationSpeed = (Math.random() - 0.5) * cfg.rotationSpeed;
  }

  update(cfg: { gravity: number; friction: number; }) {
    this.vy += cfg.gravity;
    this.vx *= cfg.friction;
    this.vy *= cfg.friction;
    this.rotationSpeed *= cfg.friction;

    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotationSpeed;

    this.element.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.rotation}deg)`;
  }
}

export default function Explosion({
  footerRef,
  config: userConfig,
  images = [],
}: ExplosionProps) {
  const explosionContainerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[] | null>(null);
  const [explosionTriggered, setExplosionTriggered] = useState(false);

  const defaultConfig = {
    gravity: 0.25,
    friction: 0.99,
    imageSize: 220,
    horizontalForce: 30,
    verticalForce: 22,
    rotationSpeed: 12,
    resetDelay: 500,
  };

  const cfg = { ...defaultConfig, ...(userConfig || {}) };

  const imagePaths = images.length > 0 ? images : Array.from({ length: 10 }, (_, i) => `/img${i + 1}.png`);

  const createParticles = () => {
    const container = explosionContainerRef.current;
    if (!container) return;

    container.innerHTML = "";
    particlesRef.current = [];

    imagePaths.forEach((path) => {
      const img = document.createElement("img");
      img.src = path;
      img.className = styles.explosionParticleImg;
      img.style.width = `${cfg.imageSize}px`;
      img.style.height = "auto";
      container.appendChild(img);
    });

    const nodes = Array.from(container.querySelectorAll("img")) as HTMLImageElement[];
    particlesRef.current = nodes.map((el) => new Particle(el, {
      horizontalForce: cfg.horizontalForce,
      verticalForce: cfg.verticalForce,
      rotationSpeed: cfg.rotationSpeed,
      friction: cfg.friction,
      gravity: cfg.gravity,
    }));
  };

  const explode = () => {
    if (explosionTriggered) return;
    setExplosionTriggered(true);

    createParticles();

    let animationId = 0;
    let finished = false;

    const animate = () => {
      if (finished) return;
      const parts = particlesRef.current || [];
      parts.forEach((p) => p.update({ gravity: cfg.gravity, friction: cfg.friction }));

      const container = explosionContainerRef.current;
      if (
        container &&
        parts.length > 0 &&
        parts.every((p) => p.y > container.offsetHeight / 2)
      ) {
        cancelAnimationFrame(animationId);
        finished = true;
        setTimeout(() => setExplosionTriggered(false), cfg.resetDelay);
        return;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
  };

  const checkFooterPosition = () => {
    const footerEl = footerRef?.current;
    if (!footerEl || explosionTriggered) return;

    const rect = footerEl.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (rect.top >= 0 && rect.bottom <= viewportHeight) {
      explode();
    }
  };

  useEffect(() => {
    // preload images
    imagePaths.forEach((p) => {
      const img = new window.Image();
      img.src = p;
    });

    createParticles();

    let checkTimeout: number | undefined;
    const handleScroll = () => {
      window.clearTimeout(checkTimeout);
      checkTimeout = window.setTimeout(checkFooterPosition, 10);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => setExplosionTriggered(false));

    // initial check
    const initTimeout = window.setTimeout(checkFooterPosition, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(checkTimeout);
      window.clearTimeout(initTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]); // footerRef identity stable in usage

  return <div className={styles.explosionContainer} ref={explosionContainerRef} aria-hidden />;
}