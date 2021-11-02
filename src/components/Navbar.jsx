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
import CartWidget  from './CartWidget';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Diamond Solutions</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/category/notebooks/">Notebooks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/category/discos/">Discos Rigidos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/category/placas/">Placa de Video</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/category/pc/">PC Gamer</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <CartWidget  />
      </Navbar>
    </div>
  );
}

export default Menu;