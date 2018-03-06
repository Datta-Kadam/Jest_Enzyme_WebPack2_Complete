import React ,{ Component} from 'react';
import {connect} from 'react-redux';
import {desposit,withdraw} from '../actions/balance';

export class Wallet extends Component{
    constructor(){
        super();
        this.state={balance:undefined};
    }

    updateBalance = event =>{
        this.setState({balance:parseInt(event.target.value,10)});
    }

    desposit = () => {
        this.props.desposit(this.state.balance)
    }

    withdraw =() =>{
        this.props.withdraw(this.state.balance)
    }

    render(){
        return(
            <div>
                <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
                <br />
                <input className='input-wallet' 
                onChange={this.updateBalance}/>
                <button className='btn-desposit' onClick={this.desposit}>Desposit</button>
                <button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
            </div>
        )
    }
}


export default connect(state =>{ return {balance : state.balance}},{desposit,withdraw})(Wallet);