import React, { useState } from 'react'
import Item from './Item';

const productos = [
    { id: 1, titulo: 'Torta Multicolor', precio: '1000', imagen:'https://www.bettycrocker.lat/wp-content/uploads/2020/12/BClatam-recipe-pastel-arcoiris.png'},
    { id: 2, titulo: 'Torta Chocolate', precio: '1500', imagen:'https://www.bettycrocker.lat/wp-content/uploads/2020/12/BClatam-recipe-pastel-de-chocolate-con-glaseado-de-chocolate.png'},
    { id: 3, titulo: 'Torta tiramisú', precio: '2000', imagen: 'https://www.bettycrocker.lat/wp-content/uploads/2021/04/BCL-Tiramisu_Recipe_770x514.jpg'}
  ];


  const get = new Promise((res,rej) => {
    let respuesta = '200';
    if (respuesta === '200'){
      setTimeout(() => {
        res(productos);
      }, 2000);
    } else {
        rej('404')
    }
})


function ItemList() {
    
     const [productos, setProductos] = useState([])

     get 
     .then(respuesta =>{
        setProductos(respuesta)
     })
     .catch(error => console.log(error))
     .then(resp => console.log(resp))
    
    console.log(productos)



      return (
        <div>
          { productos.map(producto => <h1 key={producto.id}>{ <Item titulo={producto.titulo} precio={producto.precio} Imagen={producto.imagen}/> }</h1>) }
        </div>
      );
  }


export default ItemList
