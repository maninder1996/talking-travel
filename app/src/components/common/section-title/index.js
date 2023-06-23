import styles from "./sectionTitle.module.scss";
import { changane } from "@/app/styles/font";
export default function SectionTitle(props) {
  const { title, subTitle, customStyle, restrictStyle } = props;
  return (
    <div
      className={`${customStyle} ${restrictStyle ? styles.center_title : ""}`}
    >
      <h4 className={styles.sub_title} data-aos="fade-up">{subTitle}</h4>
      <h2 className={`${changane.className} ${styles.title}`} data-aos="fade-up" data-aos-delay="500">{title}</h2>
    </div>
  );
}
