import React, {useState} from 'react';
import ProductTable  from './ProductTable';
import { ProductEditor } from './ProductEditor';

function ProductDisplay(props){

    const [userRequest, setuserRequest] = useState({
        showEditor: false,
        selectedProduct: null
    })

    const startEditing = (product)=>{
        setuserRequest({
            showEditor: true,
            selectedProduct: product 
        })
    }

    const createProduct = ()=>{
        setuserRequest({
            showEditor: true,
            selectedProduct: {}
        })
    }

    const cancelEditing = ()=>{
        setuserRequest({
            showEditor: false,
            selectedProduct: null
        })
    }

    const saveProduct = (product)=>{
        props.saveCallback(product);
        setuserRequest({
            showEditor: false,
            selectedProduct: null 
        })
    }
    
    const {showEditor, selectedProduct} = userRequest;

    if(showEditor){
        return(
            <ProductEditor 
                key = {selectedProduct.id || -1}
                product = {selectedProduct}
                saveCallback = {saveProduct}
                cancelCallback = {cancelEditing}
            />
        )
    }else {
        return(
            <div className="m-2">
                <ProductTable 
                    products = {props.products}
                    editCallback = {startEditing}
                    deleteCallback = {props.deleteCallback}
                />
                <div className="text-center">
                    <button className="btn btn-primary m-1" 
                        onClick = {createProduct}
                    >
                        Create Product
                    </button>
                </div>
            </div>
        )
    }
}
export default ProductDisplay