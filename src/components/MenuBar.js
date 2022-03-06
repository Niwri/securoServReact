import React from 'react'
import { MenuBarItems } from './MenuBarItems.js';
import icon from './images/icon.png';

const MenuBar = () => {

    const pathName = (item) => {
        let path = window.location.pathname;

        if(item.anchor === path) 
            return (
                <div style={{backgroundColor: item.color}}>
                    <p style={{color: 'black', fontWeight: 'bold', fontSize: 32}}>{item.name}</p>
                </div>
            )
         else 
            return (
                <div>
                    <p>{item.name}</p>
                </div>
            )
        
    }

  return (
    <div id="menuBarContainer">
        <div id="header">
            <h1>SecuroServ</h1>
            <img src={icon} alt=""/>
        </div>
        
        {MenuBarItems.map((item) => {
            return (
                <a href={item.anchor}>
                    {pathName(item)}
                </a>
            )
        })}

    </div>
  )
}

export default MenuBar