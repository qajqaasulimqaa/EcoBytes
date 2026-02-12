"use client" 
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export type TeamandtextProps = SliceComponentProps<Content.TeamandtextSlice>;

const Teamandtext: FC<TeamandtextProps> = ({ slice }) => {
  return (
    <section style={{
      padding: '6rem 2rem',
      background: '#f8f9fa',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}>
        {/* Image Side */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
        }}>
          <PrismicNextImage 
            field={slice.primary.imageteam}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>

        {/* Text Side */}
        <div style={{
          padding: '2rem',
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#1a1a1a',
            lineHeight: 1.2,
          }}>
            {slice.primary.team}
          </h2>

          <div style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            color: '#4a5568',
          }}>
            <PrismicRichText field={slice.primary.texta_bout} />
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Teamandtext;