import React from 'react'
import { Link } from 'react-router-dom'
import { items } from '../Data'

const Products = ({ products }) => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center">
        {products.map((items) => (
          <Link to={`/${items.id}`} key={items.id} className="col-md-4 d-flex justify-content-center align-items-center" style={{ textDecoration: "none" }}>
            <div className="card bg-dark text-light text-center my-3" style={{ width: "18rem" }}>
              <div className="d-flex justify-content-center align-items center p-3">
                <img src={items.imgSrc} className="card-img-top" alt="" style={{ width: "200px" }} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                {/* <p className="card-text">{items.description}</p> */}
                <a href="#" className="btn btn-warning mx-3">{items.price}</a>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </>
  )
}

export default Products