import React, { Component } from 'react';
import './Navmenu.css';

class Navmenu extends Component {
  render() {
    return (

        <nav className="navigationBar">
            <ul className="unordred-list">
                <li>
                    <a href="https://imgur.com/N2bSV39" >Home</a>
                </li>
                <li  className="dropdown"> <a href="https://imgur.com/N2bSV39" className="dropbtn" >Services</a>
                <div className="dropdown-content">
      <a href="https://imgur.com/N2bSV39">For entrepreneurs</a>
      <a href="https://imgur.com/N2bSV39">For students</a>
      <a href="https://imgur.com/N2bSV39">For hobbyists</a>
    </div>
                </li>
                <li><a href="https://imgur.com/N2bSV39" >Contact</a>
                </li>
            </ul>
        </nav>

        );
    }
  }
  
  export default Navmenu;
  