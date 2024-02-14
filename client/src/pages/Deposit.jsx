import React, { useState, useEffect } from 'react';


function TransactionName() {
    return(
        <div className="px-0">
            <label htmlFor="merchant_name" className="text-light form-label">Transaction name:</label>
            <input type="text" id="merchant_name" name="merchant_name" className="form-control" required></input>
        </div>
    )
}
function MerchantGroup() {

    const [group, setGroup] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/transactions/groups')
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
function Amount() {
    return(
        <div className="px-0">
            <label htmlFor="amount" className="text-light form-label">Amount:</label>
            <input type="number" id="amount" name="amount" className="form-control" required></input>
            <div className="invalid-feedback col-12">
                Please enter a valid amount
            </div>
        </div>
        
    )
}
function SubmitBtn() {
    return(
        <div className="mt-3 px-0">
            <button type="submit" className="w-100 btn btn-main-dark-blue">Deposit</button>
        </div>
    )
}
function DepositForm() {
    return (
        <div className="h-75 d-flex align-items-center justify-content-center bg-transparent">
            
            <form className="" action="http://localhost:5000/api/transactions/deposit" method="post">
                <div className="row">
                    <div className="text-light">
                    <h1>Add funds:</h1>
                        <div className="row input-group has-validation mt-3 mx-0">
                            <TransactionName/>
                            <MerchantGroup/>
                            <Amount />
                            <SubmitBtn />
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default DepositForm;