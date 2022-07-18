import './Product.css'

const Product = ({id,title,category,price}) => {
  return (
    <div className='product_card'>
        <div>
        <h3>{id+1} - {title}</h3>
        <p>{category}</p>
        </div>
    
     <p>{price} &#36;</p>
    </div>
  )
}

export default Product