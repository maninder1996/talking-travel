import React from "react";
import HeroBanner from "../src/components/herobanner";
import styles from "../styles/gallery.module.scss";
import Image from "next/image";
import { changane } from "../styles/font";
import SectionTitle from "../src/components/common/section-title";
import BestDestination from "../src/components/best-destination";
import Link from "next/link";

const Gallery = () => {
  const gallertyImage = [
    {
      img: "/assets/images/callout_swiss_winter.jpg",
      customClass: styles.tall,
    },
    {
      img: "/assets/images/Iceland_card_image.jpg",
      customClass: "",
    },
    {
      img: "/assets/images/Italy_card_image.jpg",
      customClass: "",
    },
    {
      img: "/assets/images/featured_image.jpg",
    },
    {
      img: "/assets/images/dubai_card_image.jpg",
    },

    {
      img: "/assets/images/patagonia_card _image.jpg",
    },

    {
      img: "/assets/images/callout_switzerland_mountains.jpg",
    },

    {
      img: "/assets/images/callout_switzerland_sunset.jpg",
    },
    {
      img: "/assets/images/featured_image.jpg",
    },
    {
      img: "/assets/images/highlight_image1.jpg",
    },
    {
      img: "/assets/images/highlight_image2.jpg",
    },
  ];
  return (
    <>
      <HeroBanner
        title="Gallery"
        description="Lorem ipsum is placeholder text commonly used in the graphic."
        img="/assets/images/gallery-banner.jpg"
      />
      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className={styles.about_img}>
                <Image
                  src="/assets/images/powerfulReasons_hero.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={styles.featute_content}>
                <SectionTitle
                  title="Travel to the any corner of the world"
                  subTitle="About Us"
                />
                <p>
                  Our vision is to make travel planning stress-free and make
                  travel more fun.
                </p>

                <Link href="#" className="darkButton">
                  Explore about us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.gallary_wrap}>
        <div className="container">
          <SectionTitle
            title=" Amazing Gallery"
            subTitle=""
            customStyle={styles.center_title}
            restrictStyle={true}
          />
          <div className={styles.gallery_image}>
            {gallertyImage.map((img, index) => {
              return (
                <div
                  className={`${img.customClass} ${styles.image_box}`}
                  key={index}
                >
                  <Image
                    src={img.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BestDestination />
    </>
  );
};

export default Gallery;
