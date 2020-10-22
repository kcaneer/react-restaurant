import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

function Menu(props) {
  var appetizers = [];
  var lunch = [];
  var main = [];
  var sides = [];
  var desserts = [];
  if (props.menuItems.length > 0) {
    for (let i = 0; i <= 7; i++) {
      appetizers.push(props.menuItems[i]);
    }
    for (let i = 8; i <= 15; i++) {
      lunch.push(props.menuItems[i]);
    }
    for (let i = 16; i <= 40; i++) {
      main.push(props.menuItems[i]);
    }
    for (let i = 41; i <= 47; i++) {
      sides.push(props.menuItems[i]);
    }
    for (let i = 48; i <= 48; i++) {
      desserts.push(props.menuItems[i]);
    console.log(desserts)
    }
  }
  return (
    <div>
      <div className="row text-center d-block pb-2">
        <Button
          color="warning"
          id="appetizers"
          style={{ marginBottom: "1rem" }}
        >
          Appetizers
        </Button>
        <UncontrolledCollapse toggler="#appetizers">
          <Card>
            <CardBody>
              <div className="row h-50 d-inline-block">
                <ul className="list-group col mx-auto">
                  {appetizers.map((obj, ind) => {
                    return (
                      <li>
                        <li className="pt-1" key={ind}>
                          <strong> {obj.title} </strong>
                          <br />
                        </li>
                        <li className="pt-1" key={ind}>
                          {obj.description} <br />
                        </li>
                        <li className="pt-1" key={ind}>
                          {obj.price} <br />
                        </li>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block pb-2">
        <Button color="warning" id="lunch" style={{ marginBottom: "1rem" }}>
          Lunch
        </Button>
        <UncontrolledCollapse toggler="#lunch">
          <Card>
            <CardBody>
              <div className="row h-50 d-inline-block">
                <ul className="list-group col mx-auto">
                  {lunch.map((obj, ind) => {
                    return (
                      <li>
                        <li className="pt-1" key={ind}>
                          <strong> {obj.title} </strong>
                          <br />
                        </li>
                        <li className="pt-1" key={ind}>
                          {obj.description} <br />
                        </li>
                        <li className="pt-1" key={ind}>
                          {obj.price} <br />
                        </li>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block pb-2">
        <Button color="warning" id="main" style={{ marginBottom: "1rem" }}>
          Main Courses
        </Button>
        <UncontrolledCollapse toggler="#main">
          <Card>
            <CardBody>
              <div className="row h-50 d-inline-block">
                <ul className="list-group col mx-auto">
                  {main.map((obj, ind) => {
                    return (
                      <li>
                        <li className="pt-1" key={ind}>
                          <strong> {obj.title} </strong>
                          <br />
                        </li>
                        <li className="pt-1" key={ind}>
                          {obj.description} <br />
                        </li>
                        <li className="pt-1" key={ind}>
                          {obj.price} <br />
                        </li>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block pb-2">
        <Button color="warning" id="sides" style={{ marginBottom: "1rem" }}>
          Sides
        </Button>
        <UncontrolledCollapse toggler="#sides">
          <Card>
            <CardBody>
              <div className="row h-50 d-inline-block">
                <ul className="list-group col mx-auto">
                  {sides.map((obj, ind) => {
                    return (
                      <li>
                        <li className="pt-1" key={ind}>
                          <strong> {obj.title} </strong>
                          <br />
                        </li>
                        <li className="pt-1" key={ind}>
                          {obj.description} <br />
                        </li>
                        <li className="pt-1" key={ind}>
                          {obj.price} <br />
                        </li>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block pb-2">
        <Button color="warning" id="desserts" style={{ marginBottom: "1rem" }}>
          Desserts
        </Button>
        <UncontrolledCollapse toggler="#desserts">
          <Card>
            <CardBody>
              <div className="row h-50 d-inline-block">
                <ul className="list-group col mx-auto">
                  {desserts.map((obj, ind) => {
                    return (
                      <li>
                        <li className="pt-1" key={ind}>
                          <strong> {obj.title} </strong>
                          <br />
                        </li>
                        <li className="pt-1" key={ind}>
                          {obj.description} <br />
                        </li>
                        <li className="pt-1" key={ind}>
                          {obj.price} <br />
                        </li>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
}

export default Menu;
