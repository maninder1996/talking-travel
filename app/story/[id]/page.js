"use client";
import Image from "next/image";
import styles from "../../styles/story.module.scss";
import Link from "next/link";
import { changane } from "../../styles/font";
import Contact from "../../src/components/contact";
import SectionTitle from "@/app/src/components/common/section-title";
import { useEffect, useState } from "react";
import client from "@/app/client";

export default function Story({ params: id }) {
  let pid = id?.id;
  const [entries, setEntry] = useState([]);
  // console.log("post-data", entries);
  // console.log("image gallery path", entries);

  useEffect(() => {
    client
      .getEntry(pid)
      .then((entry) => setEntry(entry))
      .catch(console.error);
  }, []);
  return (
    <>
      <div className={styles.single_blog_container}>
        <section className={styles.blog_header}>
          <SectionTitle
            title={entries.fields?.kyotoJapan?.fields?.location}
            subTitle="popular destinations"
          />
          <div className={styles.blog_author}>
            <div className={styles.author_img}>
              <Image
                src="/assets/images/Avatar.png"
                width={35}
                height={35}
                alt=""
              />
            </div>
            <div className={styles.details}>
              <h5 className={styles.author_name}>Darrell Steward</h5>
              <p className={styles.authposition}>Author / Photographer</p>
            </div>
          </div>
        </section>
        <section className={styles.video_location}>
          <Image
            src="/assets/images/featured_image.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "540px" }}
            alt=""
          />
          <Image
            src="/assets/images/play_btn85.png"
            width={80}
            height={80}
            alt=""
            className={styles.play_video_btn}
          />
        </section>
        <section className={styles.country_story}>
          <h2 className={changane.className}>
            {entries.fields?.kyotoJapan?.fields?.title}
          </h2>
          <p>
            Location location location! Zermatt Switzerland offers majestic
            landscapes that cannot be seen elsewhere. The Matterhorn for
            example. This peak is a sight to behold and seeing it upclose is
            more magical that we’ve ever imagined. ‘Want to enjoy a nice and
            cozy swiss breakfast! Well, Zermatt will never fail you.
          </p>
        </section>
        <section className={styles.gallery_story}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className={styles.gallery_img}>
                <div className={styles.item}>
                  <Image
                    src={`${
                      entries.fields?.kyotoJapan?.fields?.galleryImg1?.fields?.file?.url.startsWith(
                        "/"
                      )
                        ? "https:"
                        : ""
                    }${
                      entries.fields?.kyotoJapan?.fields?.galleryImg1?.fields
                        ?.file?.url ?? ""
                    }`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "480px" }}
                  />
                </div>
                <div className={styles.item}>
                  <Image
                    src={`${
                      entries.fields?.kyotoJapan?.fields?.galleryImg2?.fields?.file?.url.startsWith(
                        "/"
                      )
                        ? "https:"
                        : ""
                    }${
                      entries.fields?.kyotoJapan?.fields?.galleryImg2?.fields
                        ?.file?.url ?? ""
                    }`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "263px" }}
                  />
                </div>
                <div className={styles.item}>
                  <Image
                    src={`${
                      entries.fields?.kyotoJapan?.fields?.galleryImg3?.fields?.file?.url.startsWith("/"
                      )
                        ? "https:"
                        : ""
                    }${
                      entries.fields?.kyotoJapan?.fields?.galleryImg3?.fields
                        ?.file?.url ?? ""
                    }`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "202px" }}
                  />
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={styles.gallery_data}>
                <h2 className={`${changane.className} ${styles.title}`}>
                  One of the best hikes we’ve done so far...
                  <Image
                    src="/assets/icons/quot.svg"
                    alt=""
                    width={34}
                    height={26}
                    className={styles.quot_icon}
                  />
                </h2>
                <p>{entries.fields?.kyotoJapan?.fields?.galleryDes}</p>

                {/* <p>
                  The advantage is that tourism in Switzerland benefits of a
                  large diversity of beautiful landscapes in a relatively small
                  space.
                </p> */}
                <Link href="#" className="darkButton">
                  View full gallery
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.gallery_description}>
          <p>{entries.fields?.kyotoJapan?.fields?.galleryDes1}</p>
        </div>
        <section className={styles.hightlight}>
          <div className="row">
            <div className="col-sm-12">
              <h2 className={`${changane.className} ${styles.title}`}>
                Hightlights
              </h2>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className={styles.img_box}>
                <Image
                  src="/assets/images/highlight_image1.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "350px" }}
                />
              </div>
              <p>The barns built in the 13th and 14th century</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className={styles.img_box}>
                <Image
                  src="/assets/images/highlight_image2.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "350px" }}
                />
              </div>
              <p>Riding the the amazing Bernina Express</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className={styles.img_box}>
                <Image
                  src="/assets/images/highlight_image3.jpg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "350px" }}
                />
              </div>
              <p>The Matterhorn glacier cable car ride</p>
            </div>
          </div>
        </section>
        <div className={styles.disclaimer}>
          <h6>Disclaimer</h6>
          The COVID-19 pandemic has dealt a severe blow to the tourism business
          in Switzerland. Although it is a minor position in the Swiss export
          balance, it is nevertheless of considerable importance for those
          regions of the country that attract domestic and foreign visitors. As
          a consequence of the lockdown measures, combined with close borders
          and travel bans, tourism collapsed and only briefly and partly
          recovered in summer. Its future is uncertain and depends on people’s
          (future guests’) attitudes and decisions as much as on the economy,
          political measures and, of course, the progress of the pandemic.
        </div>
      </div>
      <Contact />
    </>
  );
}
