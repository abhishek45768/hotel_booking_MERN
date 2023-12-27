import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{
return<>
<div className="containerhome">
<div className="right">
    <div className="intro">We Help you <br/>to find a,<br/> best Hotel here</div>
    <p> We are delighted to have you as our guest and are committed to providing you with a comfortable and memorable stay.As a first-time guest, we want to ensure that you have a seamless and enjoyable experience with us.</p>
    <Link to='/Hotel'><button className="contactnavi">Find a Hotel</button></Link></div>
<div className="left">
    <div className="slidecontainer">
    <div className="img1"></div>
    <div className="img2"></div>
    <div className="img3"></div>
</div></div>

</div>
</>
};
export default Home;