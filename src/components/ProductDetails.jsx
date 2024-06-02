import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../Data'

const ProductDetails = () => {
  const { id } = useParams();
  
  const product = items.filter((d)=>d.id == id)
  console.log(product[0]);
  return (
    <>
  <div className="container d-flex justify-content-center align-items-center text-center my-3">
  <div className="card bg-dark text-light" style={{width:"20rem"}}>
    <div className="d-flex justify-content-center align-items-center my-5">
      <img src={product[0].imgSrc} className='card-img-top' alt="" style={{width:"19rem"}} />
    </div>
    <div className="card-body">
    <h3>{product[0].title}</h3>
    <p>{product[0].description}</p>
    <div className="my-3">
      <button className="btn btn-success mx-3">{product[0].price}</button>
      <button className="btn btn-danger">Add to Cart</button>
    </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default ProductDetails