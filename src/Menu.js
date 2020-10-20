import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

function Menu() {
  return (
    <div>
      <div className="row text-center d-block">
        <Button
          color="warning"
          id="appetizers"
          style={{ marginBottom: "1rem" }}
        >
          Appetizers
        </Button>
        <UncontrolledCollapse toggler="#appetizers">
          <Card>
            <CardBody>Here are our appetizers.</CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block">
        <Button color="warning" id="lunch" style={{ marginBottom: "1rem" }}>
          Lunch
        </Button>
        <UncontrolledCollapse toggler="#lunch">
          <Card>
            <CardBody>Here are our lunch items.</CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block">
        <Button color="warning" id="main" style={{ marginBottom: "1rem" }}>
          Main Courses
        </Button>
        <UncontrolledCollapse toggler="#main">
          <Card>
            <CardBody>Here are our main courses.</CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block">
        <Button color="warning" id="sides" style={{ marginBottom: "1rem" }}>
          Sides
        </Button>
        <UncontrolledCollapse toggler="#sides">
          <Card>
            <CardBody>Here are our sides.</CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block">
        <Button color="warning" id="desserts" style={{ marginBottom: "1rem" }}>
          Desserts
        </Button>
        <UncontrolledCollapse toggler="#desserts">
          <Card>
            <CardBody>Here are our desserts.</CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
}

export default Menu;
