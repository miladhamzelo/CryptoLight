import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styleCard = {
  width: 300,
  height: 300,
  paddingTop: 10,
  paddingRight: 10,
  paddingLeft: 10,
  paddingBottom: 10,
  marginRight: 1,
  marginLeft: 30,
  marginTop: 10,
  marginBottom: 10,
};

const BitcoinCard = (props) =>  {
  return(
    <Card style={styleCard}>
      <CardHeader
        title="BTC"
        subtitle="bitcoin stats"
      />
      <CardText>
        <div>
          BTC/USD: {props.btcPrice}
        </div>
      </CardText>
    </Card>
  );
}

export default BitcoinCard;
