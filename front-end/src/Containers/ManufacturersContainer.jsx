import React, { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
import ManufacturerOrders from '../Components/ManufacturerOrders'
import ManufacturerMaterialRecipts from '../Components/ManufacturerMaterialRecipts';
import ManufacturerDesignersList from '../Components/ManufacturerDesignersList';
import axios from 'axios'
import ManufacturerTabs from '../Components/ManufacturerTabs';
import { connect } from 'react-redux';


const ManufacturersContainer = ({user}) => {    

    const [manufacturerProducts, setManufacturersProducts] = useState([]);

    const fetchAllManufacturers = async () => {
        try {
            const { data: { payload } } = await axios.get(`/products/manufacturer/${user.manufacture_id}`)
            setManufacturersProducts(payload)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchAllManufacturers()
    }, [user])

    return(
        <ManufacturerTabs>
        <div label="Orders">
                <ManufacturerOrders manufacturerOrders={manufacturerProducts}/>
            
        </div>
        <div label="Material Recipts">
            <ManufacturerMaterialRecipts />
        </div>
        <div label="Designers">
            List of all Designers
            <ManufacturerDesignersList />
        </div>
    </ManufacturerTabs>
    )

}

const mapSateToProps =(state) =>{
    return{
        user: state.authReducer.user
    }
}

export default connect(mapSateToProps,null)(ManufacturersContainer)