import React from 'react';
import { Link } from "react-router-dom";

export const Test = () => {
    return (
        <>
          <h1>Test</h1>
          <ul>
            <li><Link to="/">test</Link></li>
            <li><Link to="login">login</Link></li>
            <li><Link to="signup">signup</Link></li>
          </ul>
    
        </>
      )
    
}
