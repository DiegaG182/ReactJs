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
import {useCartContext} from '../context/CartContext'

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartList, totalCart   } = useCartContext();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand> <Link to="/"> Diamond Solutions</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink> <Link to="/category/notebooks/"> Notebooks </Link> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link to="/category/discos/"> Discos Rigidos </Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink> <Link to="/category/placas/">Placa de Video</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link to="/category/pc/">PC Gamer</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <CartWidget  />
      </Navbar>
    </div>
  );
}

export default Menu;