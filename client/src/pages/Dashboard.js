

function Dashboard() {
    return (
        <div className="container text-light card bg-transparent">
            <div class="text-center card">
                <div class="card-body">
                    <h3>Hello username</h3>
                    <div><small>Current balance:</small></div>
                    <h1>129.45 EUR</h1>
                </div>
                
                
            </div>
            <div class="text-center">Recent transactions:</div>
            <div class="card container">
                <ul class="list-group row">
                    <li class="list-group-item">
                        <div class="merchant">
                            Circle-K
                        </div>
                        <div class="amount">
                            58.24
                        </div>
                    </li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard;