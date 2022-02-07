import React from "react";
import SupplierTableRow from "./SupplierTableRow";

const SupplierTable = (props)=>{
    return(
        <table className="table table-sm table-striped table-bordered">
            <thead>
                <tr>
                    <th colSpan="5" className="bg-primary text-white text-center h4 p-2">
                        Suppliers
                    </th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Products</th>
                </tr>
            </thead>
            <tbody>
                {props.suppliers.map(s=>
                    <SupplierTableRow
                        supplier = {s}
                        key = {s.id}
                        editCallback = {props.editCallback}
                        deleteCallback = {props.deleteCallback}
                    />    
                )}
            </tbody>
        </table>
    )
}
export default SupplierTable