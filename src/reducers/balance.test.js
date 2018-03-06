import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';


describe('BalanceReducer',()=>{
    describe('when initializing',()=>{
        const balance=10;
        it('sets  a balance',()=>{
           
            expect(balanceReducer(undefined,{type:constants.SET_BALANCE,balance}))
            .toEqual(balance);
        });
        describe('then re-initializing',()=>{
            it('reads the balance from cookies',()=>{
                expect(balanceReducer2(undefined,{})).toEqual(balance)
            });
        });
    });
   


    it('Desposits into balance',()=>{
        const initialState=10;
        const desposit=10;
        expect(balanceReducer(initialState,{type:constants.DEPOSIT,desposit}))
        .toEqual(initialState+desposit);
    });

    it('Withdraws from balance',()=>{
        const initialState=20;
        const withdrawal=10;
        expect(balanceReducer(initialState,{type:constants.WITHDRAW,withdrawal}))
        .toEqual(initialState - withdrawal);
    });

});
