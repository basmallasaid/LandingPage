import React from 'react';
import Nav from '../Main/Nav';
import Banner from '/src/Components/Main/Banner.jsx';
import Spacer from '../Main/Spacer';
import Category from '/src/Components/Main/Category.jsx';
import Product from '/src/Components/Main/Product.jsx';
import Promo from '/src/Components/Main/Promo.jsx';
import Footer from '/src/Components/Main/Footer.jsx';
const LandingPage = () => {
    return (
        <>
         <Nav/>
         <Banner/> 
         <Spacer height="130px" /> 
         <Category/>
         <Spacer height="130px" /> 
         <Product/>
         <Spacer height="130px" /> 
         <Promo/>
         <Spacer height="130px" /> 
         <Footer/>
         
        </>
    );
};

export default LandingPage;