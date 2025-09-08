import React from 'react';
import styles from '../Styles/style.module.css';
const Product = () => {
    const products = [
        {
          name: 'Accessories',
          price: '$19.99',
          imageSrc: '/src/assets/Accessories1.jpg',
          link: '#',
        },
        {
          name: 'Men Outfit',
          price: '$29.99',
          imageSrc: '/src/assets/menc2.jpg',
          link: '#',
        },
        {
          name: 'Women Outfit',
          price: '$39.99',
          imageSrc: '/src/assets/womenc.jpg',
          link: '#',
        },
        {
          name: 'Glasses',
          price: '$49.99',
          imageSrc: '/src/assets/glasses.jpg',
          link: '#',
        },
        {
          name: 'Jeans',
          price: '$59.99',
          imageSrc: '/src/assets/jeans.jpg',
          link: '#',
        },
        {
          name: 'Men Outfit',
          price: '$69.99',
          imageSrc: '/src/assets/menc3.jpg',
          link: '#',
        },
        {
          name: 'Heels',
          price: '$79.99',
          imageSrc: '/src/assets/heels.jpg',
          link: '#',
        },
        {
          name: 'Dress',
          price: '$89.99',
          imageSrc: '/src/assets/women2.jpg',
          link: '#',
        },
      ];
    
    return (
        <>
            <h2 className='text-2xl md:text-3xl font-extrabold mb-10 ml-4 md:ml-6 tracking-wide '>Top Products</h2>
            <div className={styles.card}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product,index) => (
            <a key={index} href={product.link} className="group">
              <img
                alt={`product-${index}`}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
        </>
    );
};

export default Product;