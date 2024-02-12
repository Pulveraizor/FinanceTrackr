// import React, { useState, useEffect } from 'react';

function DepositForm() {
    return (
        <div>
            <form action="http://localhost:5000/api/transactions/deposit" method="post">
                <div className="card-body">
                    <div className="row input-group has-validation mt-3 mx-0">
                        <div className="px-0">
                            <label htmlFor="amount" className="text-light form-label">Amount:</label>
                            <input type="number" id="amount" name="amount" className="form-control" required></input>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-main-dark-blue">Deposit</button>
                        </div>
                        <div className="invalid-feedback col-12">
                            Please enter a valid amount
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DepositForm;