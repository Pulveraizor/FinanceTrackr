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
            <button className="btn btn-main-dark-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#filter_options" aria-controls="filter_options">Filter Options</button>


            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="filter_options" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Filter transactions:</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">
                    
                </div>
            </div>


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
        <div className="container text-light card bg-transparent">
            <GeneralInfo/>
            <FilterOptions/>
            <TransactionsList/>
        </div>
    )
}

export default AllTransactions;