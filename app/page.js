"use client";
import Image from "next/image";
import styles from "../app/styles/home.module.scss";
import { changane, roboto } from "./styles/font";
import Link from "next/link";
import SectionTitle from "./src/components/common/section-title";
import Contact from "./src/components/contact";
import client from "./client";
import { useEffect, useState } from "react";
import HeroBanner from "./src/components/herobanner";

export default function Home() {
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
  const [entries, setEntry] = useState([]);
  console.log(client);
  useEffect(() => {
    client
      .getEntries({
        content_type: "blog",
      })
      .then((entry) => setEntry(entry))
      .catch(console.error);
  }, []);
  console.log("refrence check", entries);
  /*****set banner*****/
  const [banner, setBanner] = useState();
  console.log(banner);

  useEffect(() => {
    client
      .getEntries({
        content_type: "heroBanner",
      })
      .then((entry) => setBanner(entry))
      .catch(console.error);
  }, []);

  const [ListData, setData] = useState();
  // console.log(entries);
  // console.log(entries?.items?.[0].fields.image.fields.file.url);

  function handleclickDes(item) {
    console.log("id check", item.sys.id);
    setData(item);
  }
  return (
    <>
      <section
        className={`${styles.hero_banner} `}
        style={{
          backgroundImage: `linear-gradient(90deg, #FFFFFF -0.92%, rgba(255, 255, 255, 0) 75.6%), url('/assets/images/hero_background_image.jpg')`,
        }}
      >
        <div className="container">
          <div className={styles.hero_content}>
            <h1 className={`${changane.className} ${styles.title}`} >
              {banner?.items[0]?.fields.title}
            </h1>
            <p>
              Share your favorite travel destination and we will feature it in
              our next blog!
            </p>
            <div className={styles.btn_wrap}>
              <Link href="#" className="darkButton">
                Share your story
              </Link>
              <button
                type="button"
                className={`playButton ${styles.watch_btn}`}
              >
                <Image
                  src="./assets/icons/light_play_icon.svg"
                  width={36}
                  height={36}
                  alt=""
                />{" "}
                <span className="watch_text">Watch highlights</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.feature_des}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className={styles.feature_img} data-aos="fade-left">
                <Image 
                  src="/assets/images/featured_image.jpg"
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
                  title="Our swiss adventure blog"
                  subTitle="Featured Destination"
                />
                <p>
                  Visiting the swiss alps? Want to know the requirements on
                  travelling to Switzerland during the pandemic? Our blog might
                  help!{" "}
                </p>
                <button
                  type="button"
                  className={`playButton ${styles.watch_btn}`}
                >
                  <Image
                    src="./assets/icons/video_play_icon.svg"
                    width={36}
                    height={36}
                    alt=""
                  />{" "}
                  <span className="watch_text">Watch Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.adventures}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <SectionTitle
                customStyle={styles.center_title}
                restrictStyle={true}
                title="Discover the world with us"
                subTitle="Join our adventures"
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
                          width:"100%", height:"320px"
                        }}
                        alt=""
                        className="cover"
                      />
                    </div>
                    <h4 className={`mb-1 mt-3 ${changane.className}`}>
                      {item.title}
                    </h4>
                    <p className="mb-0">{item.subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Contact />
      <section className={styles.story}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className={styles.left_box}>
                <div className={styles.img}>
                  <img
                    src={
                      ListData &&
                      ListData.fields &&
                      ListData.fields.image &&
                      ListData.fields.image.fields &&
                      ListData.fields.image.fields.file &&
                      ListData.fields.image.fields.file.url
                        ? ListData.fields.image.fields.file.url
                        : entries &&
                          entries.items &&
                          entries.items[0] &&
                          entries.items[0].fields &&
                          entries.items[0].fields.image &&
                          entries.items[0].fields.image.fields &&
                          entries.items[0].fields.image.fields.file &&
                          entries.items[0].fields.image.fields.file.url
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "362px" }}
                    alt=""
                  />
                </div>
                <div className={styles.left_box_inner}>
                  <div className={styles.description_wrap}>
                    <h4 className={`${changane.className}`}>
                      {ListData
                        ? ListData.fields.title
                        : entries?.items?.[0].fields.title}
                    </h4>
                    <p className="mb-0">
                      {ListData
                        ? ListData.fields.description
                        : entries?.items?.[0].fields.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={`playButton ${styles.watch_btn}`}
                  >
                    <Image
                      src="./assets/icons/video_play_icon.svg"
                      width={36}
                      height={36}
                      alt=""
                    />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={`row ${styles.right_box}`}>
                {entries.items?.map((item, index) => {
                  return (
                    <div className="col-md-12 col-sm-12 mb-3" key={index}>
                      <div className={`row ${styles.right_box_inner}`}>
                        <div className="col-md-4 col-sm-12">
                          <div
                            className={styles.img}
                            onClick={() => handleclickDes(item)}
                          >
                            <Image
                              src={`https:${
                                item?.fields?.image?.fields?.file?.url ?? ""
                              }`}
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                          <h4
                            onClick={() => handleclickDes(item)}
                            className={`mb-1 mt-3 ${changane.className}`}
                          >
                            {item.fields.title}
                          </h4>
                          <p className="mb-0">
                            {item.fields.description}
                            <Link href={`/story/${item.sys.id}`}>
                              view full blog...
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
