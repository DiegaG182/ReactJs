import React from 'react'
import ItemCount from './ItemCount'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

export default function Item(product) {
    const handleClick=(contador) =>{
        alert(`La cantidad agregada es ${contador}`)
        }

        return (
            
            <Card key={product.key}>
                <CardImg top width="192px" src={require(product.picUrl)} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{product.title}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <ItemCount
                        inicial={1}
                        stock={product.stock}
                        onAdd={handleClick}
                    />
                <Button>Mas Info</Button>
                </CardBody>
                
            </Card>
            
        );      
}
