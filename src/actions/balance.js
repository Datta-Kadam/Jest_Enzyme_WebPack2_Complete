import * as constants from './constants';
export const setBalance = balance =>{
    return {
        type:constants.SET_BALANCE,
        balance
    }
}

export const desposit = desposit =>{
    return {
        type :constants.DEPOSIT,
        desposit
    }
}

export const withdraw = withdrawal =>{
    return {
        type : constants.WITHDRAW,
        withdrawal
    }
}