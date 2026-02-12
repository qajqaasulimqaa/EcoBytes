"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * Props for `SlidesImages`.
 */
export type SlidesImagesProps = SliceComponentProps<Content.SlidesImagesSlice>;

/**
 * Component for "SlidesImages" Slices.
 */
const SlidesImages: FC<SlidesImagesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ padding: '4rem 0', background: '#f5f5f5' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          style={{ borderRadius: '16px' }}
        >
          <SwiperSlide>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
              <PrismicNextImage field={slice.primary.imageslides} fill style={{ objectFit: 'cover' }}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
              <PrismicNextImage field={slice.primary.image2} fill style={{ objectFit: 'cover' }} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
              <PrismicNextImage field={slice.primary.image3} fill style={{ objectFit: 'cover' }} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SlidesImages;