import { GeneralInfo } from "./Dashboard";
import React, { useState, useEffect } from 'react';
import { api_path } from '../index';

function sortTransactionsByGroup(array, key) {
    return array.reduce((accumulator, currentValue) => {
        const value = currentValue[key];
        if (!accumulator[value]) {
            accumulator[value] = [];
        }
        accumulator[value].push(currentValue);
        return accumulator;
        
    }, {});
};

function getGroupName(group_array) {
    let group_name_object = {};
    for (let i of group_array) {
        group_name_object[i['id']] = i['name'];
    }
    return group_name_object;
}

function SingleStat({percentage, group_name, color}) {
    return (
        <div className="d-flex">
            <label className="fw-semibold w-25 mx-2">{group_name}:</label>
            <div className="w-100 m-2 progress" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                <div className={"progress-bar bg-" + color} style={{ width: `${percentage}%` }}>{percentage}%</div>
            </div>
        </div>
    )
}

function Stats() {

    const [transactions, setTransactions] = useState([]);
    const [groups, setGroups] = useState([]);
    const [[total_withdrawals_sum], setTotalWithdrawalsSum] = useState([]);
    const colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

    useEffect(() => {

        fetch(api_path + '/api/groups/all')
        .then(res => res.json())
        .then(data => setGroups(data));

        fetch(api_path + '/api/transactions/withdrawals')
        .then(res => res.json())
        .then(data => setTransactions(data));

        fetch(api_path + '/api/transactions/withdrawals/sum')
        .then(res => res.json())
        .then(data => setTotalWithdrawalsSum(data));

    }, []);
    const grouped_transactions = sortTransactionsByGroup(transactions, 'merchant_group');
    const groupedTransactionsArray = Object.entries(grouped_transactions);
    const indexedGroupNames = getGroupName(groups);

    return (

        <div className="container px-0 mt-3">
            <div className="text-center text-light"><h4>Here is a breakdown of your expenses:</h4></div>
            <div className="card bg-transaprent p-3">
                {groupedTransactionsArray.map((group, index) => {
                    let group_sum = 0;
                    group[1].map((transaction) => (
                        group_sum += Number(transaction.amount)
                    ));
                    let group_name_index  = group[1][0].merchant_group;
                    let current_group_percentage = group_sum / (total_withdrawals_sum.all_withdrawals / 100);
                    let percentage_rounded = Math.round(current_group_percentage * 100) / 100;
                    return <SingleStat 
                                key={group} 
                                percentage={percentage_rounded} 
                                group_name={indexedGroupNames[group_name_index]} 
                                color={colors[ index <= colors.length ? index : index - colors.length ]}/>
                    
                        }                    
                    )
                }
            </div>
            <div className="text-center text-secondary mt-1"><small>Expense groups that are not listed have no transactions designated to them.</small></div>
        </div>
    )
}

function TrackerPage() {
    return (
        <div className="container">
            <GeneralInfo/>
            <Stats/>
        </div>
    )
}

export default TrackerPage;