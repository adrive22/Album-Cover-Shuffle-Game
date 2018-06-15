import React from "react";

const Header = props =>(
    <div className="header">
    <p>Click Count: {props.count}</p>
    </div>
);

export default Header;