import * as constants from './constants';
import * as actions from './balance';

it('creates an action to set the balance',()=>{
    const balance =0;
    const expectedAction = {type:constants.SET_BALANCE,balance};
    expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to desposit into a balance',()=>{
    const desposit=10;
    const expectedAction ={ type:constants.DEPOSIT,desposit};
    expect(actions.desposit(desposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from a balance',()=>{
    const withdrawal=10;
    const expectedAction ={ type:constants.WITHDRAW,withdrawal};
    expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});