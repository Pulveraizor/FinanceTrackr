import { TransactionName, MerchantGroup, Amount, SubmitBtn } from './Deposit';
import { api_path } from '../index';


function WithdrawalForm() {
    return (
        <div className="h-75 d-flex align-items-center justify-content-center bg-transparent">
            
            <form className="" action={api_path + "/api/transactions/withdraw"} method="post">
                <div className="row">
                    <div className="text-light">
                    <h1>Withdraw funds:</h1>
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

export default WithdrawalForm;