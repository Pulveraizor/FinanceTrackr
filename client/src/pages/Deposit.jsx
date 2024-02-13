// import React, { useState, useEffect } from 'react';

function DepositForm() {
    return (
        <div className="h-75 d-flex align-items-center justify-content-center bg-transparent">
            
            <form className="" action="http://localhost:5000/api/transactions/deposit" method="post">
                <div className="row">
                    <div className="text-light">
                    <h1>Add funds:</h1>
                        <div className="row input-group has-validation mt-3 mx-0">
                            <div className="px-0">
                                <label htmlFor="amount" className="text-light form-label">Amount:</label>
                                <input type="number" id="amount" name="amount" className="form-control" required></input>
                            </div>
                            <div className="mt-3 px-0">
                                <button type="submit" className="w-100 btn btn-main-dark-blue">Deposit</button>
                            </div>
                            <div className="invalid-feedback col-12">
                                Please enter a valid amount
                            </div>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default DepositForm;