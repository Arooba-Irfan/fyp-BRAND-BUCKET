// import React from 'react'
// import "./Home.css"
// import Paragraph from "../../Components/Paragraph/Paragraph"
// import Button from "../../Components/Button/Button"
// import { Link } from 'react-router-dom' 


// const Home = () => {
//     return (
//         <div className="home">
//           <div style={{backgroundColor:'red'}} className="text-side">
//             <div className="para">
//               <Paragraph style={{letterSpacing:"0.2em"}} color="white" fontSize="20">The Number 1</Paragraph>
//               <Paragraph style={{letterSpacing:"0.2em"}} color="white" fontSize="20">Secret Of Success</Paragraph>
//             </div>
//             <div className="button" style={{alignSelf:"start"}}>
//               <Link to="/categories">
//                 <Button background="rgba(245, 174, 22,0.8)" style={{borderRadius:"5em", boxShadow: "5px 10px 8px 1px #ffa805" }}> Shop Now</Button>
//               </Link>
//             </div>
//           </div>
          
//           <div className="img-container center">
//           </div>
//         </div>
//     )
// }

// export default Home

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


import React from "react";
import Announcement from "../../Components/Announcement/Announcement";
import Categories from "../../Components/Categories/Categories";
import HomeNavbar from "../../Components/HomeNavBar/HomeNavBar";
import Slider from "../../Components/Slider/Slider";
import Products from "../../Components/Products/Products";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
  return (
    <div>
      <Announcement />
      <HomeNavbar/>
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/> 
    </div>
  );
};

export default Home;
