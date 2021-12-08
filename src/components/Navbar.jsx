import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CartWidget  from './CartWidget';
import '../App.css';


const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand> <Link to="/" style={{ textDecoration: 'none' }}> Diamond Solutions</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink> <Link to="/category/notebooks/" style={{ textDecoration: 'none' }}> Notebooks </Link> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link to="/category/discos/" style={{ textDecoration: 'none' }}> Discos Rigidos </Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink> <Link to="/category/placas/" style={{ textDecoration: 'none' }}>Placa de Video</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link to="/category/pc/" style={{ textDecoration: 'none' }}>PC Gamer</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <CartWidget  />
      </Navbar>
    </div>
  );
}

export default Menu;