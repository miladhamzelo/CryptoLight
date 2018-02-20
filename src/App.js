import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DataButton from './components/data_button.js';
import BitcoinCard from './components/bitcoin_card';
import StellarCard from './components/stellar_card';
import EthereumCard from './components/ethereum_card';

const appBarStyle = {
  backgroundColor: '#2196F3',
};
class App extends Component {
  constructor(props) {
    super(props);
    //create socket to stream data
    /*
    const socket = require('socket.io-client').connect('https://streamer.cryptocompare.com/', () => {
      console.log('connecting...');
    });
    //subscribe to the currency you want data on(TEST w/ BTC)
    socket.emit('SubAdd', { subs: ['2~Poloniex~BTC~USD','2~Poloniex~ETH~USD']});
    this.socketData = socket.on('m', (message) => {
      const dataBuffer = message.split("~");
      //dataBuffer[5] is the price of BTC in USD
      console.log(dataBuffer);
    });
    */
    this.state = {
      coins: ['btc', 'eth', 'xlm'],
      btc_usd_price : 'undefined',
      xlm_usd_price: 'undefined',
      eth_usd_price: 'undefined'
    };

    //console.log(this.socket);

  }
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <AppBar
          style={appBarStyle}
          backgroundColor='#2196F3'
          title="CryptoLite"/>
      </div>
      <div>
        <tr>
          <td>
            <BitcoinCard />
          </td>
          <td>
            <StellarCard />
          </td>
          <td>
            <EthereumCard />
          </td>
        </tr>
      </div>
      <div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
