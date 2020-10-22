import React from 'react';
import './sidebarOption.css';
// import SvgIcon from '@material-ui/core/SvgIcon';


function SidebarOption({active, text, Icon}) {
    return (
        <div className ={`sidebarOption ${active && "sidebarOption-active"}`}>
            <Icon />
            
            <h2>{text}</h2> 
        </div>
    );
}

export default SidebarOption;
