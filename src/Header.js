import React from "react";
import food from "./img/food.jpg";
import { Media } from 'reactstrap';

function Header() {
  return (
    <Media>
      <Media className="pt-2">
        <Media src={food} alt="food" />
      </Media>
      <Media body className="text-center my-auto pl-3">
        <Media heading>Welcome to Reaction!</Media>
        We are a locally sourced restaurant fueled by a passion for excellent
        customer experience. What you see on the front end of our restaurant is
        the result of days and days of hard work by our employees. Get a fresh
        cup of Java(script), sit back, and watch the restaurant flow!
      </Media>
    </Media>
  );
}

export default Header;
