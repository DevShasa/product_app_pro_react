import React, { useState } from 'react'; 

export default function SupplierEditor(props){
    const [data, setData] = useState({
        id: props.supplier.id || "",
        name: props.supplier.name || "",
        city: props.supplier.city || "",
        products: props.supplier.products || [],
    })

    function handleChange(ev){
        ev.persist()
        setData({
            ...data,
            [ev.target.name]: ev.target.name === "products" ? ev.target.value.split(","): ev.target.value
        })
    }

    function handleClick(){
        props.saveCallback({
            ...data,
            products: data.products.map(value => Number(value))
        })
    }

    return(
        <div className="m-2">
            <div className="form-group">
                <label>ID</label>
                <input 
                    className="form-control"
                    disabled
                    name="id"
                    value={data.id}
                    onChange = {handleChange}
                />
            </div>
            <div className="form-group">
                <label>Name</label>
                <input 
                    className="form-control"
                    name="name"
                    value={data.name}
                    onChange = {handleChange}
                />
            </div>
            <div className="form-group">
                <label>City</label>
                <input 
                    className="form-control"
                    name="city"
                    value={data.city}
                    onChange = {handleChange}
                />
            </div>
            <div className="form-group">
                <label>Products</label>
                <input 
                    className="form-control"
                    name="products"
                    value={data.products}
                    onChange = {handleChange}
                />
            </div>

            <div className="text-center">
                <button 
                    className="btn btn-primary m-1"
                    onClick={handleClick}
                >
                    Save
                </button>
                <button 
                    className="btn btn-secondary"
                    onClick={props.cancelCallback}
                >
                    Cancel
                </button>
            </div>
        </div>
    )

}