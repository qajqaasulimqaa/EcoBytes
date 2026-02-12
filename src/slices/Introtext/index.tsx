"use client";

import { FC, useEffect, useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

gsap.registerPlugin(ScrollTrigger);

export type IntrotextProps = SliceComponentProps<Content.IntrotextSlice>;

const Introtext: FC<IntrotextProps> = ({ slice }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      });

      // 1. Fade in and slide up
      tl.fromTo(
        sectionRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // 2. Animate title (NO word splitting - causes hydration issues)
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.2)" },
          "-=0.4"
        );
      }

      // 3. Animate line
      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
          "-=0.3"
        );
      }

      // 4. Fade in text
      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #849F9D 0%, #B4A3BE 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
      }}
    >
      <div style={{ maxWidth: '900px', textAlign: 'center', color: 'white' }}>
        <div
          ref={titleRef}
          style={{
            fontSize: 'clamp(2.5rem, 4vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '2rem',
            lineHeight: 1.2,
          }}
        >
          <PrismicRichText field={slice.primary.main_text} />
        </div>

        <div 
          ref={lineRef}
          style={{
            height: '4px',
            background: 'white',
            margin: '2rem auto',
            maxWidth: '200px',
            transformOrigin: 'center',
          }}
        />

        <p 
          ref={textRef}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            lineHeight: 1.8,
            opacity: 0.9,
          }}
        >
          {slice.primary.text} {slice.primary.text2}
        </p>

        <PrismicNextLink 
          field={slice.primary.read_more}
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '1rem 2rem',
            background: 'rgba(255, 182, 193, 0.15)',  
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            border: '1px solid rgba(255, 192, 203, 0.3)',  
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(255, 105, 180, 0.2)',  
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Read More
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default Introtext;