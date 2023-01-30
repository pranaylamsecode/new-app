import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Beardcrum = () => {
  return (
    <Breadcrumb listTag="div">
      <BreadcrumbItem href="#" tag="a">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#" tag="a">
        Library
      </BreadcrumbItem>
      <BreadcrumbItem href="#" tag="a">
        Data
      </BreadcrumbItem>
      <BreadcrumbItem active tag="span">
        Bootstrap
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Beardcrum;
