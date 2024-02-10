let current_balance = 1024.53;
let current_user = "Benas";
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

function GeneralInfo ({ balance, username }) {
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

function RecentTransaction({transaction}) {
    return (
        <a href="/#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{transaction.merchant}</h5>
                <span>{transaction.deposit ? "+" : "-"}{transaction.amount} EUR</span>
            </div>
            <p className="mb-1">{transaction.status}</p>
            <small>{transaction.date}</small>
        </a>   
    )
}

function RecentTransactionsList() {
    return (
        <div className="list-group card mt-4">
            <p className="text-center card-header">Recent transactions:</p>

            {transactions_list.map((transaction) => (
                <RecentTransaction 
                key={transaction.id}
                transaction={transaction} />
            ))}

        </div>
    )
}


function Dashboard() {
    return (
        <div className="container text-light card bg-transparent">
            <GeneralInfo 
                balance={current_balance}
                username={current_user}
            />
            <RecentTransactionsList/>
        </div>
    )
}


export default Dashboard;