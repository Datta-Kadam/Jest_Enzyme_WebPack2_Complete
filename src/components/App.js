import React from 'react';
import Wallet from './wallet';
import Loot from './Loot';


const App = () =>{   
        return(
            <div>
                <h2>Loot Check</h2>
                <hr />
                <Wallet />                
                <hr />
                <Loot />
                <div>Powered By <a target='_blank' href='https://www.coindesk.com/price'>Coindesk</a></div>
            </div>
        )    
}

export default App;