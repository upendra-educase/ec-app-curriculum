import React from "react";
import { Card, CardBody } from "react-bootstrap";
import { Menu, LogOut } from "react-feather";

function ActionBar() {

  return (
    <>
      <Card className={`mb-4 d-xl-none`}>
        <CardBody>
          <div className="d-flex justify-content-between p-2">
            <Menu color="#4D8EFF" />
            <LogOut color="#4D8EFF" />
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default ActionBar;
