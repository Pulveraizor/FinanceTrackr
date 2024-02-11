import { GeneralInfo } from "./Dashboard";
import { SingleTransaction } from "./Dashboard";

let transactions_list = [
    {
        id: 1,
        merchant: "Circle-K",
        amount: 12.96,
        group: "Transportation",
        deposit: false,
        status: "Complete",
        date: "2024-02-10"
    },
    {
        id: 2,
        merchant: "Maxima LT",
        amount: 34.52,
        group: "Groceries",
        deposit: false,
        status: "Pending",
        date: "2024-02-05"
    },
    {
        id: 3,
        merchant: "Rory Pub",
        amount: 7.80,
        group: "Restaurants",
        deposit: false,
        status: "Complete",
        date: "2024-02-07"
    },
    {
        id: 4,
        merchant: "Starbucks",
        amount: 9.99,
        group: "Groceries",
        deposit: false,
        status: "Pending",
        date: "2024-01-30"
    },
    {
        id: 5,
        merchant: "AB Klaipedos Juru Muziejus",
        amount: 15.00,
        group: "Groceries",
        deposit: false,
        status: "Pending",
        date: "2024-01-30"
    },
    {
        id: 6,
        merchant: "ATM Deposit",
        amount: 50.00,
        group: "Groceries",
        deposit: true,
        status: "Complete",
        date: "2024-01-30"
    }
]

function FilterOptions () {
    return(
        <div className="card mt-4">
            <p className="text-center card-header">Filter Options</p>
        </div>
    )
}

function TransactionsList() {
    return (
        <div className="list-group card mt-4">
            <p className="text-center card-header">All Transactions</p>

            {transactions_list.map((transaction) => (
                <SingleTransaction 
                key={transaction.id}
                transaction={transaction} />
            ))}

        </div>
    )
}

function AllTransactions() {
    return(
        <div>
            <GeneralInfo/>
            <FilterOptions/>
            <TransactionsList/>
        </div>
    )
}

export default AllTransactions;