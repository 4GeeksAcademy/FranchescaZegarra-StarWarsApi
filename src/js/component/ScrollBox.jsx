import React from "react";

const ScrollBox = ({children}) => {
    return (
        <div className = "d-flex scroller">
            {children}
        </div>
    );
}

export default ScrollBox;