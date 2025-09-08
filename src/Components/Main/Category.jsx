import React from 'react';
import styles from '../Styles/style.module.css';
const Category = () => {
    return (
        <>
            <h2 className={`text-2xl md:text-3xl font-extrabold mb-10 ml-4 md:ml-6 tracking-wide`}>
                Shop by Category
            </h2>

            <div className={styles.parent}>
                <div className={styles.div1}>
                    <h2 >New Arrivals</h2>
                    <button className={styles.btnbuy} type="button">Buy Now</button>
                </div>
                <div className={styles.div2}>
                    <h2>Accessories</h2>
                    <button type="button">Buy Now</button>
                     </div>
                <div className={styles.div3}>
                    <h2>Polo Outfit Men</h2>
                    <button type="button">Buy Now</button>
                     </div>
            </div>
        </>
    );
};

export default Category;