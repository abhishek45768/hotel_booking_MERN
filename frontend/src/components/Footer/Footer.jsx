import React from "react";

const Footer=()=>{
return<>
<div id="contact">
  <div className="heading">LET'S CHAT! </div>
  <div className="line2">I WOULD LOVE TO HELP YOU TO FIND A GOOD STAY.</div>
  <div className="email">
    <div className="email-icon">
      <i className="fa-solid fa-envelope fa-lg" style={{ color: '#d1d1d1' }}></i>
    </div>
    -----------Email me at-----------<br /><u>abhishekbhardwaj@gmail.com</u>
  </div>
  <div className="number">--DM ME AT--<br /><u>8427395781</u>
    <div className="wp-icon">
      <i className="fa-brands fa-whatsapp fa-xl" style={{ color: '#d1d1d1' }}></i>
    </div>
  </div>
  <div className="contact">CONTACT ME--<br /><u>8427395781</u>
    <div className="phone-logo">
      <i className="fa-solid fa-phone fa-xl" style={{ color: '#d1d1d1' }}></i>
    </div>
  </div>
  <footer>
 <h3 className="copy"> Copyright &#169; 2023 Designed by</h3><div className="nam">Abhishek</div>
</footer>
</div>


</>
};
export default Footer;