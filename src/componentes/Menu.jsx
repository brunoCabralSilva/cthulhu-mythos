import React, { useState } from 'react';
import '../css/navegacao-inicial.css';

function Menu() {
  
  const [ open, setOpen ] = useState(false);

  const openChange = () => {
    setOpen(!open);
  }

  const returnDiv1 = () => {
    if(open) {
      return 'div1';
    } return 'div1-open';
  }

  const returnDiv2 = () => {
    if(open) {
      return 'div2';
    } return 'div2-open';
  }

  const returnDiv3 = () => {
    if(open) {
      return 'div3';
    } return 'div3-open';
  }

  const enableMenu = () => {
    if(!open) {
      return 'menu';
    } return 'menu-disable';
  }

  return (
    <div>
      <section className="sideBar">
        <div className="icon" onClick={ openChange }>
          <div className={ returnDiv1() }> </div>
          <div className={ returnDiv2() }> </div>
          <div className={ returnDiv3() }> </div>
        </div>
      </section>
        <div className={enableMenu()}>
          <p className="route">Home</p>
          <p className="route">Blog</p>
          <p className="route">Contact</p>
          <p className="route">Setups</p>
          <p className="route">About</p>
        </div>

    </div>
  );
}

export default Menu;