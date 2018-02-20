import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styleCard = {
  width: 400,
  height: 400,
  paddingTop: 10,
  paddingRight: 10,
  paddingLeft: 10,
  paddingBottom: 10,
  marginRight: 1,
  marginLeft: 30,
  marginTop: 10,
  marginBottom: 10,
};

class BitcoinCard extends Component {
  constructor(props) {
    super(props);
    //require socket and subscribe to currency data
    /*
    const socket = require('socket.io-client').connect('https://streamer.cryptocompare.com/', () => {
      console.log('connecting to cryptocompare for bitcoin...');
    });
    //subscribe to the currency you want data on(TEST w/ BTC)
    socket.emit('SubAdd', { subs: ['2~Poloniex~BTC~USD']});
    this.socketData = socket.on('m', (message) => {
      const dataBuffer = message.split("~");
      //dataBuffer[5] is the price of BTC in USD
      console.log(`Bitcoin data: ${dataBuffer}`);
    });
    */
    this.state = {
      priceUsd : 'error',
      volume : 'error',
      lastPrice : 'error',
      hr24low: 'error',
      hr24high: 'error'
    };
  }

  render() {
    return(
      <Card style={styleCard}>
        <CardHeader
          title="BTC"
          subtitle="bitcoin stats"
        />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}

export default BitcoinCard;
