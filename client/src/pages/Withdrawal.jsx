import { TransactionName, MerchantGroup, Amount, SubmitBtn } from './Deposit';
import { api_path } from '../index';
import { BackBtn } from './Groups';

function WithdrawalForm() {
    return (
        <div className="h-75 d-flex align-items-center justify-content-center bg-transparent">
            
            <form action={api_path + "/api/transactions/withdraw"} method="post">
                <div className="row">
                    <div className="text-light">
                    <BackBtn destination={"/dashboard"}/>
                    <h1>Withdraw funds:</h1>
                        <div className="row input-group has-validation mt-3 mx-0">
                            <TransactionName/>
                            <MerchantGroup/>
                            <Amount />
                            <SubmitBtn name={"Withdraw"}/>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default WithdrawalForm;