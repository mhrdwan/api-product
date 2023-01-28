import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = ()=>{
    const url = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState ([])

    const getDataProducts = async ()=> {
        const response = await fetch(url)
        const dataProduct = await response.json();
        setProducts (dataProduct)
        console.log(products)
    }

    useEffect (()=>{
        getDataProducts()
    })

    return(
        // <div className='container'>
            <div className="row">
                
                <h1>Test Product API</h1>
        { products.map((produk)=>{
            return(
         <div className="col-3"> 
        <Cardproducts
        key={produk.id}
        title={produk.title}
        price={produk.price}
        description={produk.description}
        image={produk.image}/>
        </div> )
    })
}

        
     
        
        </div>
            // </div>
    )
}




function Cardproducts(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Button variant="primary">${props.price}</Button>
      </Card.Body>
    </Card>
  );
}


export default Products;