import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <div className="info">
      <div className="col">
        <img width="100%" height="100%" src="/third.jpg" alt="third" />
      </div>
      <div className="col">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          mollitia, sed magnam amet voluptatem quae dicta, aut explicabo
          deleniti beatae aperiam tempora, quibusdam earum nostrum soluta
          aliquid adipisci est rerum.
        </p>
      </div>
    </div>
  );
};

export default Info;
