import React, { useState, useEffect } from 'react';
import {api_path} from '../index';
import { BackBtn } from './Groups';


export function TransactionName() {
    return(
        <div className="px-0">
            <label htmlFor="merchant_name" className="text-light form-label">Transaction name:</label>
            <input type="text" id="merchant_name" name="merchant_name" className="form-control" required></input>
        </div>
    )
}
export function MerchantGroup() {

    const [group, setGroup] = useState([]);

    useEffect(() => {
        fetch(api_path + '/api/groups/all')
        .then(res => res.json())
        .then(data => setGroup(data))
    }, []);

    return(
        <div className="mb-3 px-0">
            <label htmlFor="group" className="text-light form-label">Merchant group:</label>
            <select className="form-select" id="group" name="merchant_group">
                {group.map((group) => (
                    <option key={group.id} value={group.id}>{group.name}</option>
                ))}
            </select>
        </div>
    )
}
export function Amount() {
    return(
        <div className="px-0">
            <label htmlFor="amount" className="text-light form-label">Amount:</label>
            <input type="number" id="amount" name="amount" className="form-control" step="0.01" required></input>
            <div className="invalid-feedback col-12">
                Please enter a valid amount
            </div>
        </div>
        
    )
}
export function SubmitBtn({name}) {
    return(
        <div className="mt-3 px-0">
            <button type="submit" className="w-100 btn btn-main-dark-blue">{name}</button>
        </div>
    )
}
function DepositForm() {
    return (
        <div className="container-sm h-75 d-flex align-items-center justify-content-center bg-transparent">
            
            <form action={api_path + "/api/transactions/deposit"} method="post">
                <div className="row">
                    <div className="text-light">
                    <BackBtn destination={"/dashboard"}/>
                    <h1>Add funds:</h1>
                        <div className="row input-group has-validation mt-3 mx-0">
                            
                            <TransactionName/>
                            <MerchantGroup/>
                            <Amount />
                            <SubmitBtn name={"Deposit"}/>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default DepositForm;