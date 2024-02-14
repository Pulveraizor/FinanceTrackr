import { GeneralInfo } from "./Dashboard";
import { SingleTransaction } from "./Dashboard";
import React, { useState, useEffect } from 'react';
import { api_path } from '../index';

function FilterOptions () {
    return(
        <div className="card mt-4">
            <button className="btn btn-main-dark-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#filter_options" aria-controls="filter_options">Filter Options</button>


            <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="filter_options" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Filter transactions:</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small">
                    
                </div>
            </div>


        </div>
    )
}

function TransactionsList({data}) {

    if (!Array.isArray(data) || data.length === 0) {
        return <p>No data available</p>;
    }
    return (
        <div className="list-group card mt-4">
            <p className="text-center card-header">All Transactions</p>

            {data.map((transaction) => (
                <SingleTransaction 
                    key={transaction.id}
                    transaction={transaction} />
                ))}

        </div>
    )
}

function AllTransactions() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(api_path + '/api/transactions/all')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

    return(
        <div className="container text-light card bg-transparent">
            <GeneralInfo/>
            <FilterOptions/>
            <TransactionsList
                data={data}
            />
        </div>
    )
}

export default AllTransactions;