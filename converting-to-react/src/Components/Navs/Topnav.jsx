import React from 'react';
import { NavLink } from 'react-router-dom';
const Topnav = () => {
    return ( 
        <nav>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <ul>
              <li>
                <NavLink to="/" style={({isActive})=> ({
                  color: isActive ? '#20991d' : '#fff'
                })}>صفحه اصلی  </NavLink>
                <a href=""> درباره ما </a>
                <a href=""> تماس با ما </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="clientarea">
              <div className="signin">
                <i className="zmdi zmdi-account"></i>
                <NavLink to="/login" style={({isActive})=> ({
                  color: isActive ? '#20991d' : '#fff'
                })}> ورود </NavLink> /
                <NavLink to="/register" style={({isActive})=> ({
                  color: isActive ? '#20991d' : '#fff'
                })}> عضویت </NavLink>
              </div>
              <div className="loggein ">
                <i className="zmdi zmdi-account"></i>
                <NavLink to="/account" style={({isActive})=> ({
                  color: isActive ? '#20991d' : '#fff'
                })}> ایمان مدائنی ، خوش آمدی </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
     );
}
 
export default Topnav;