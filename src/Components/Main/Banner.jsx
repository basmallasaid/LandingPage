import { useState, useEffect } from "react";
import styles from "/src/Components/styles/style.module.css";
// Import images at the top
import banner1 from "../../assets/NewStyleCollectionBanner.png";
import banner2 from "../../assets/GrayModernNewCollectionSale Banner2.png";
import banner3 from "../../assets/T-ShirtScreenBanner.png";

const Banner = () => {
  const images = [banner1, banner2, banner3];
  const links = ["#", "#", "#"];
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
            src={img}  // Use the imported image directly
            alt={`banner-${index}`}
            className={styles.bannerImg}
          />
        </a>
      ))}
    </div>
  );
};

export default Banner;