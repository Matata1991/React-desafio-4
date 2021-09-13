import { Card, Button } from 'react-bootstrap';

const Item = ({id, titulo, precio, Imagen}) => {
    return (
        <div>
            <Card className="card text-center bg-success mx-auto" style={{ width: '15rem' }}>
                <Card.Title > { titulo } </Card.Title>
                <Card.Img variant="top" src= {Imagen} />
                <Card.Body>
                <Card.Title >Precio ${ precio }</Card.Title>
                <Button variant="primary">Ver detalle del producto </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
