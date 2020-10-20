import React from "react";
import food from "./food.jpg";

function Header() {
  return (
    <div className="media">
      <img src={food} className="mr-3" alt="pic of food"></img>
      <div className="media-body text-center my-auto">
        <h2 className="mt-0">Restaurant Name</h2>
        <p>Welcome to!</p>
      </div>
    </div>
  );
}

export default Header;
