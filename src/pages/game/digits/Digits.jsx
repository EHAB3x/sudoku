import React, { useState } from 'react';

const Digits = () => {
  const[active,setActive] = useState(null);
  const digits = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div id="digits" style={{ marginTop: "20px" }}>
      {digits.map((digit)=>(
        <span 
          key={digit} 
          className={`number ${active === digit ? "active" : ""}`} 
          onClick={()=>{setActive(digit)}} 
          data-active={active === digit ? "true" : "false"}
        >
          {digit}
        </span>
      ))}
    </div>
  );
};

export default Digits;
