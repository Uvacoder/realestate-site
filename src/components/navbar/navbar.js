import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MDBNavbar dark expand="md" className="position-sticky">
      <MDBNavbarBrand
        onClick={() => {
          history.push("/");
        }}
      >
        <strong className="gbBlueFont">Jeanne Town</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <div></div>
          </MDBNavItem>
          <MDBNavItem>
            <div></div>
          </MDBNavItem>
          <MDBNavItem>
            <div></div>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <div className="text-white m-3 font-weight-bold gbBlueFont">
              Contact Me
            </div>
          </MDBNavItem>
          <MDBNavItem>
            <div className="text-white m-3 font-weight-bold gbBlueFont">
              Listed Properties
            </div>
          </MDBNavItem>
          <MDBNavItem>
            <div className="text-white m-3 font-weight-bold gbBlueFont">
              About Me
            </div>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
