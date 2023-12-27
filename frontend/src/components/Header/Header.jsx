import {useEffect,useRef} from "react";

import {NavLink,Link} from 'react-router-dom'
const navLinks=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/hotel',
        display:'find a hotel'
    },
    {
        path:'/services',
        display:'Services'
    },
    
]
const Header=()=>{
return(<header className="header flex iteams-center">
     <div className="container">
        <div className="flex iteams-center justify-between">
           <div className="logo">"_"</div>
        </div>
    <div className="navigation">
        <ul className="menu flex iteam-center gap-[2.7rem]">
            {
                navLinks.map((link,index)=><li key={index}>
                    <NavLink to={link.path} className={navClass=>navClass.isActive ?
                        'text-primarycolor text-[16px] leading-7 font-[600]':
                        'text-textcolor text-[16px] leading-7 font-[500]'}>
                            {link.display}
                        </NavLink>
                </li>
            )}
        </ul>
        <div>
            <Link to="/">
                <figure>
                    <img src=""/>
                </figure>
            </Link></div>
            <Link to='login/'>
                <button className="login">Login</button>
            </Link>
       
    </div>
     </div>
</header>
)};
export default Header;