import React, { useEffect } from 'react'
import {ChooseByBrand, Discount, FurnitureSection, Header,PayThroughCredit,ServiceForHelp, TodayDeals, TodaysBestDeals, TopCategories} from '../components';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';




const Home = ({sectionRef1, sectionRef2, sectionRef3}) => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();


  useEffect(()=> {
    setProducts(data.data)
  },[data])

  
  return (
    <div>
        <Header/>
        <TopCategories sectionRef1={sectionRef1}/>
        <TodayDeals products={products} sectionRef2={sectionRef2}/>
        <ChooseByBrand/>
        <Discount sectionRef3={sectionRef3}/>
        <FurnitureSection/>
        <TodaysBestDeals products={products}/>
        <PayThroughCredit/>
        <ServiceForHelp/>
    
    </div>
  )
}


export default Home;