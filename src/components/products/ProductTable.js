import React from "react";
import ProductTableRow from './ProductTableRow';

const ProductTable = (props)=>{
    return(
        <table className="table table-sm table-striped table-bordered">
            <thead>
                <tr>
                    <th colSpan="5" className="bg-primary text-white text-center h4 p-2">
                        Products
                    </th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { props.products.map(p =>(
                        <ProductTableRow 
                            key={p.id}
                            product={p}
                            editCallback = {props.editCallback}
                            deleteCallback = {props.deleteCallback}
                        />
                    )
                )}
            </tbody>
        </table>
    )
}
export default ProductTable