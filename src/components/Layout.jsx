import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../App.css'

const Layout = (props) =>{
  return(
  <>
    <Header/>
    <div className="layout">
      {props.children}
    </div>
    <Footer/>
  </> 
  )
   
};

export default Layout;