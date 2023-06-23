import React from "react";
import styles from "./destination.module.scss";
import SectionTitle from "../common/section-title";
import { changane } from "@/app/styles/font";
import Image from "next/image";
const BestDestination = () => {
  const destination = [
    {
      title: "Iceland",
      subTitle: "Discover",
      img: "/assets/images/Iceland_card_image.jpg",
    },
    {
      title: "Italy",
      subTitle: "Discover",
      img: "/assets/images/Italy_card_image.jpg",
    },
    {
      title: "Dubai",
      subTitle: "Discover",
      img: "/assets/images/dubai_card_image.jpg",
    },
    {
      title: "Patagonia",
      subTitle: "Discover",
      img: "/assets/images/patagonia_card _image.jpg",
    },
  ];
  return (
    <section className={styles.adventures}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <SectionTitle
              customStyle={styles.center_title}
              restrictStyle={true}
              title="Tranding Destination"
              subTitle="Where to go"
            />
          </div>
          {destination.map((item, index) => {
            return (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className={styles.adventures_location} data-aos="fade-up" data-aos-delay="600">
                  <div className={styles.img}>
                    <Image
                      src={item.img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "320px",
                      }}
                      alt=""
                      className="cover"
                    />
                  </div>
                  <div className={styles.location_content}>
                    <h4 className={`mb-1 mt-0 ${changane.className}`}>
                      {item.title}
                    </h4>
                    <p className="mb-0">{item.subTitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestDestination;
