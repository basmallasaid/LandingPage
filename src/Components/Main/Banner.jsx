import { useState, useEffect } from "react";
import styles from "../Styles/style.module.css";
const Banner = () => {
  const images = [
    "/src/assets/NewStyleCollectionBanner.png",
    "/src/assets/GrayModernNewCollectionSale Banner2.png",
    "/src/assets/T-ShirtScreenBanner.png" 
  ];
  const links = [
    "#",
    "#",
    "#"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.banner}>
      {images.map((img, index) => (
        <a
        key={index}
        href={links[index]} 
        style={{ display: index === current ? "block" : "none" }}
      >
        <img
          key={index}
          src={img}
          alt={`banner-${index}`}
          className={styles.bannerImg}
          style={{ opacity: index === current ? 1 : 0}}
        />
      </a>
      ))}
    </div>
  );
};

export default Banner;
