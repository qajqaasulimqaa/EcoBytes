import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

/**
 * Props for `Navbar`.
 */
export type NavbarProps = SliceComponentProps<Content.NavbarSlice>;

const Navbar: FC<NavbarProps> = ({ slice }) => {
  return (
    <section style={{
       position: 'fixed',        // Stays at top when scrolling
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,            // Above everything else
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem 3rem',
      backdropFilter: 'blur(10px)',              // Glass effect
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
<Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
  <PrismicNextImage 
    field={slice.primary.logo} 
    alt=""
    style={{
      width: '100px',
      height: 'auto',
      cursor: 'pointer'
    }}
  />
</Link>

      {/* Nav Links - Right side (grouped together) */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <PrismicNextLink 
          field={slice.primary.aboutus}
          style={{
            color: 'black',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.3s ease'
          }}
        >
          About Us
        </PrismicNextLink>
        
        <PrismicNextLink 
          field={slice.primary.read_more}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#9065A9',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background 0.3s ease'
          }}
        >
          Read More
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default Navbar;