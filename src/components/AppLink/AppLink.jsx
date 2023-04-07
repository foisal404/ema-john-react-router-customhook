import React from 'react';
import { NavLink } from 'react-router-dom';
import "./AppLink.css"

const AppLink = ({to,children}) => {
    return (
        <NavLink to={to} className={({ isActive}) =>isActive? "active": ""}
                  >
                    {children}
                  </NavLink>
    );
};

export default AppLink;