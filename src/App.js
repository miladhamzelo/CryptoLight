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

    this.state = {
      coins: ['btc', 'eth', 'xlm'],
      btc_usd_price : 'undefined',
      xlm_usd_price: 'undefined',
      eth_usd_price: 'undefined'
    };

    //create socket to stream data
    const socket = require('socket.io-client').connect('https://streamer.cryptocompare.com/', () => {
      console.log('connecting...');
    });
    //subscribe to the currency you want data on(TEST w/ BTC)
    socket.emit('SubAdd', { subs: ['2~Poloniex~BTC~USD','2~Poloniex~ETH~USD','2~Poloniex~XLM~USD']});
    this.socketData = socket.on('m', (message) => {
      const dataBuffer = message.split("~");
      //dataBuffer[5] is the price of BTC/ETH/XLM in USD
      //dataBuffer[2] is the coin identity
      if(dataBuffer[2] === 'BTC') {
        console.log('btc');
        let price = dataBuffer[5];
        this.updateBtcPrice(price);
      } else if(dataBuffer[2] === 'ETH') {
        this.updateEthPrice(dataBuffer[5]);
        console.log('eth');
      } else if(dataBuffer[2] === 'XLM') {
        this.updateXlmPrice(dataBuffer[5]);
      } else {
        console.log('something is broken');
      }
      console.log(dataBuffer);
    });

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
        <tr>
          <td>
            <BitcoinCard btcPrice={this.state.btc_usd_price}/>
          </td>
          <td>
            <StellarCard xlmPrice={this.state.xlm_usd_price}/>
          </td>
          <td>
            <EthereumCard ethPrice={this.state.eth_usd_price}/>
          </td>
        </tr>
      <div>
      </div>
      </MuiThemeProvider>
    );
  }
  updateBtcPrice(price) {
    this.setState({btc_usd_price: price});
    console.log(`btc state: ${this.state.btc_usd_price}`);
  }

  updateEthPrice(price) {
    this.setState({eth_usd_price: price});
  }

  updateXlmPrice(price) {
    this.setState({xlm_usd_price: price});
  }
}

export default App;
