import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({
    company_name,
    complete,
    design_company_id,
    design_file,
    designer_id,
    designer_specs,
    id,
    manufacturer_id,
    manufacturer_name,
    manufacturer_specs,
    product_id,
    specialty,
    user_id,
    editButton,
    product_name
}) => (
        <Link className='product-link' to={`/products/${product_id}`} >
            <img src={design_file} alt={company_name} id='product-img' />  <br />
            <div className='designer-products'>
                <h1>{product_name}</h1>
                <p>
                    <strong>Company Name:</strong> {company_name} <br />
                    <strong>Manufacturer Name:</strong> {manufacturer_name} <br />
                    <strong>Status:</strong> {JSON.stringify(complete)} <br />
                </p>
            </div>
        </Link>
    )

export default Product