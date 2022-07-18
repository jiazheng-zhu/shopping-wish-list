import Product from './components/Product';
import {useState} from 'react';

function App() {

  const wishList = [
    
    {id:0,title:"Purse",category:"clothing",price:500},
    {id:1,title:"Casio watch",category:"accessories",price:120},
    {id:2,title:"T-Shirt",category:"clothing",price:25},
    {id:3,title:"hoodie",category:"clothing",price:60},
    {id:4,title:"iphone",category:"technology",price:60},
    {id:5,title:"Standing desk",category:"stationary",price:175},
    {id:6,title:"Apple monitor",category:"technology",price:175}
    ]
    const [products, setProducts] = useState(wishList)

    


  return (
    <div>
      <h1>
        Products page
      </h1>
  {/* <Product 
  id={products[0].id}
  title={products[0].title}
  category={products[0].category}
  price={products[0].price}
  /> */}

  {products.map(products =>{
    return(
      <Product 
    id={products.id}
    title={products.title}
    category={products.category}
    price={products.price}
    key={products.id}
  /> 
    )
  })}
    </div>
  )
}

export default App;
