# E-Commerce - React JS -  Camada 16965 - Diego Garcia Sanchez
___

Este es el proyecto final del curso de react JS de Coderhouse, construido en [React 17.0.2	](https://github.com/facebook/react/blob/main/CHANGELOG.md#1702-march-22-2021) creado con [Create React App](https://github.com/facebook/create-react-app).

El proyecto de e-commerce en su primer entrega cuenta con un nabvar con carrito, ademas de links por categoria y un catalogo de productos a vender, con posibilidad de filtrar por cada categoria y ver el detalle de cada producto.

## Dependencias
___    

- [react-router-dom 5.3.0](https://reactrouter.com/web/guides/quick-start)
- [reactstrap 8.10.0](https://reactstrap.github.io/)
- [@mui/material 5.0.6](https://material.io/)

## Instalacion
___

Clonar el repositorio: necesitaras `node` y `npm`

`git clone https://github.com/DiegaG182/ReactJs.git`

acceder a ~~~cd diegogarciasanchez~~~
~~~
npm start run
~~~

### Repositorio
___

`https://github.com/DiegaG182/ReactJs.git`

## Como se ve hasta ahora mi e-commerce

`https://coderhouse-react-diegogarciasanchez.netlify.app/`


## Componentes Principales
___

### Navbar

Dibuja un menu con marca, y enlaces a las diferentes categorias de productos.
~~~
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
~~~

### CartWidget

Dibuja el icono del carrito de compras realizado con mui.

~~~
<div>
            <Link to='/cart'> 
                <IconButton aria-label="cart button" >
                  <ShoppingCartOutlinedIcon/>
                </IconButton>
            </Link>
            {totalItemsCart()}
</div>
~~~

### Loading

Componente para dibujar un Loading Circular realizado con mui.

~~~
 return (
    <div>
      <CircularProgress/>
    </div>
  );
~~~
### ItemCount 

Componente que dibuja y manipula el contador y el stock de cada producto, que podra agregarse al carrito.

Cuenta con 3 parametros, inical, stock y una funcion que realiza la suma o resta del contador.

~~~
<div>

         <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={onDecrease} disabled={count<=inicial}  color="info">-</Button>
            <span> {count} </span>
            <Button onClick={onIncrease} disabled={count===stock}  color="info">+</Button>
        </ButtonGroup> 
        
        <div style={{ marginTop: '.5rem' }}>
        <Button onClick={()=>onAdd(count)} color="primary" variant="contained">Agregar al Carrito</Button>
        </div>
</div> 
~~~
### Item

Dibuja en pantalla cada item.

~~~
<Grid item >
            <Card key={product.id} sx={{ maxWidth: 256 }}>
                <CardMedia 
                component="img"
                alt={product.description}
                height="186"
                image={(product.picUrl)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{product.description}</Typography>    
                    <ItemCount
                     inicial={1}
                     stock={product.stock}
                     onAdd={handleClick}
                    />
                <CardActions>
                    <Link to={`/product/${product.id}`}> 
                        <Button color="secondary" variant="contained" fullWidth="true"> Detalle </Button>
                    </Link>
                </CardActions>
                </CardContent>   
            </Card>
            </Grid>
~~~

### ItemDetail 

Muestra el detalle del producto seleccionado y permite agregar al carrito de compras la cantidad de items seleccionado en el ItemCount. 

~~~
<Card key={product.id} sx={{ maxWidth:"480" }}>
                <CardMedia 
                component="img"
                alt={product.description}
                height="300"
                image={(product.picUrl)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{product.description}</Typography>    
                    
                <CardActions>
                { finalizarBoton 
                ? <Link to="/cart"> <Button color="primary" variant="contained">Finalizar Compra</Button> </Link>  
                : <ItemCount inicial={initial} stock={product.stock} onAdd={onAdd} />
                }    
                </CardActions>
                </CardContent>   
            </Card>
~~~
### Cart 

Muestra el Checkout del carrito de compras, con el resumen de tu orden, el total de la compra, y el paso final de completar el formulario de datos para finalizar la compra 

### ItemDetailContainer 

Contenedor que se encarga de la logica para obtener el producto y mostrar el detalle del mismo en una Card
### ItemListContainer 

Contenedor que se encarga de la logica para obtener los productos de nuestro Carrito de compras, pudiento traer todos o filtrar por categorias de los productos.

### CartContex

trabaje con createContext  from "react"; 

### Base de Datos

firebase/firestore'
## Como se ve  mi e-commerce

`https://coderhouse-react-diegogarciasanchez.netlify.app/`