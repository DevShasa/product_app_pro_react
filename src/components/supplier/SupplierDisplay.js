import React, {useState} from 'react';
import SupplierEditor from "./SupplierEditor";
import SupplierTable from './SupplierTable';

export function SupplierDisplay(props){

    const[userRequest, setuserRequest] = useState({
        showEditor: false,
        selectedSupplier: null
    })

    function startEditing(supplier) {
        setuserRequest({
            showEditor: true,
            selectedSupplier: supplier
        })
    }

    function createSupplier(){
        setuserRequest({
            showEditor: true,
            selectedSupplier: {}
        })
    }

    function cancelEditing(){
        setuserRequest({
            showEditor: false,
            selectedSupplier: null
        })
    }

    function saveSupplier(supplier){
        props.saveCallback(supplier)
        setuserRequest({
            showEditor: false,
            selectedSupplier:null, 
        })
    }

    const {showEditor, selectedSupplier} = userRequest

    if(showEditor){
        return(
            <SupplierEditor 
                key={selectedSupplier.id || -1}
                supplier = {selectedSupplier}
                saveCallback={saveSupplier}
                cancelCallback={cancelEditing}
            />
        )
    }else{
        return(
            <div className="m-2">
                <SupplierTable 
                    suppliers={props.suppliers}
                    editCallback = {startEditing}
                    deleteCallback = {props.deleteCallback}
                />
                <div className="text-center">
                    <button
                        className="btn btn-primary m-1"
                        onClick={createSupplier}
                    >
                        Create Supplier
                    </button>
                </div>
            </div>
        )
    }
}