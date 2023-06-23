"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/home.module.scss";
import client from "../client";
import { changane } from "../styles/font";
import Link from "next/link";
import HeroBanner from "../src/components/herobanner";
function Stories() {
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
  return (
    <>
      <HeroBanner
        title="Our Stories"
        description="Suggest a new travel destination that you want to see and we will feature it in our blog."
        img="/assets/images/travel-stories.jpg"
      />
      <section className={`${styles.story} ${styles.stories}`}>
        <div className="container">
          <div className={`row ${styles.right_box}`}>
            {entries.items?.map((item, index) => {
              return (
                <div className="col-md-6 col-sm-12 mb-3" key={index}>
                  <div className={`row ${styles.right_box_inner}`}>
                    <div className="col-md-4 col-sm-12">
                      <div
                        className={styles.img}
                        onClick={() => handleclickDes(item)}
                      >
                        <img
                          src={
                            item &&
                            item.fields &&
                            item.fields.image &&
                            item.fields.image.fields &&
                            item.fields.image.fields.file &&
                            item.fields.image.fields.file.url
                              ? `https:${item.fields.image.fields.file.url}`
                              : ""
                          }
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
      </section>
    </>
  );
}

export default Stories;
