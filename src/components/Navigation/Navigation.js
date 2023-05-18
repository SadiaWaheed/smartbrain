import React from "react";

const Navigation = ({onRouteChange}) =>{
    return(
        <div style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </div>
    );
}

export default Navigation;