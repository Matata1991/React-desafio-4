import {useState} from 'react'
import { Card, Button } from 'react-bootstrap';
const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    function suma() {
        if(count < 5){
            setCount(count + 1) 
        }
    }
    function resta() {
        if(count > 0){
            setCount(count - 1) 
        }
    }
    function agregarAlCarrito(){
        onAdd(count)
    }
    return (
        <div>
            <Card className="card text-center bg-success mx-auto" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="/humildad.svg" />
                <Card.Body>
                <Card.Title >Stock { stock } Agregados { count }</Card.Title>
                <Button onClick={resta} variant="primary">-</Button>
                <Button onClick={agregarAlCarrito} variant="primary">Agregar Carrito</Button>
                <Button onClick={suma} variant="primary">+</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCount
