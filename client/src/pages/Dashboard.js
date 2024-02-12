import React, { useState, useEffect } from 'react';

let current_balance = 1024.53;
let current_user = "Benas";

export function GeneralInfo ({ balance, username }) {
    return (
        <div className="text-center card mt-3">
            <div className="card-body">
                <h3>Hello {username}</h3>
                <div><small>Current balance:</small></div>
                <h1>{balance} EUR</h1>
            </div>
            <div className="card-footer btn btn-main-dark-blue">Track your expenses</div>
        </div>
    )
}

export function SingleTransaction({transaction}) {
    return (
        <a href="/#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{transaction.merchant_name}</h5>
                <span>{transaction.deposit ? "+" : "-"}{transaction.amount} EUR</span>
            </div>
            <p className="mb-1">{transaction.transaction_status}</p>
            <small>{transaction.created_at}</small>
        </a>   
    )
}

function RecentTransactionsList({data}) {
    return (
        <div className="list-group card mt-4">
            <div className="row text-center card-header justify-content-between">
                <div className="col-4">Recent transactions:</div>
                <div className="col-5"><a className="btn btn-main-dark-blue" href="/transactions">View all transactions</a></div>
            </div>

            {data.map((transaction) => (
                <SingleTransaction 
                key={transaction.id}
                transaction={transaction} />
            ))}

        </div>
    )
}


function Dashboard() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/transactions/recent');
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <div className="container text-light card bg-transparent">
            <GeneralInfo 
                balance={current_balance}
                username={current_user}
            />
            <RecentTransactionsList
                data={data}
            />
        </div>
    )
}


export default Dashboard;