import React from 'react';
import Nav from '../Main/Nav';
import Banner from '../Main/Banner';
import Spacer from '../Main/Spacer';
import Category from '../Main/Category';
import Product from '../Main/Product';
import Promo from '../Main/Promo';
import Footer from '../Main/Footer';
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