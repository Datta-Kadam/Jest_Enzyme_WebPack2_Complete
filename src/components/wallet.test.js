import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './wallet';
import { desposit } from '../actions/balance';

describe('Wallet',()=>{   
    const mockDesposit=jest.fn();
    const mockWithdraw=jest.fn();
    const props={balance :20,desposit:mockDesposit,withdraw:mockWithdraw}
    const wallet=shallow(<Wallet {...props}/>);
    
    it('Render properly',()=>{
       expect(wallet).toMatchSnapshot();
    });

    it('displays balance from props',()=>{
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20')
    });

    it('creates an input to deposit into or withdraw from balance',()=>{
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when the user types into wallet input',()=>{
        const userBalance='25';
        beforeEach(()=>{
            wallet.find('.input-wallet').simulate('change',{target :{value :userBalance}});
        })

        it('updatetes the local balance into the state or it converts to a number',()=>{
            expect(wallet.state().balance).toEqual(parseInt(userBalance,10));
        });

        describe('and user wants to make a Desposit',()=>{
            beforeEach(()=>{
                wallet.find('.btn-desposit').simulate('click');
            });
    
            it('dispatches the `desposit()` it receives from props with the local balance',()=>{
                expect(mockDesposit).toHaveBeenCalledWith(parseInt(userBalance,10));
            })
        });

        describe('and user wants to make a Withdraw',()=>{
            beforeEach(()=>{
                wallet.find('.btn-withdraw').simulate('click');
            });
    
            it('dispatches the `withdraw()` it receives from props with the local balance',()=>{
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance,10));
            })
        })

    });
    
});