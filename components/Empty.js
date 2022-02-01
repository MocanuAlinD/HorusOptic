import React from "react";

const Empty = () => {
  return (
    <div className="container">
      <h1>HORUS TOP OPTIC</h1>
      <style jsx>
        {`
            .container{
                // background: red;
                width: 100%;
                height: 79vh;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .container h1{
              font-family: Poppins;
            }
                `}
      </style>
    </div>
  );
};

export default Empty;
