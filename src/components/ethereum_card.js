import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styleCard = {
  width: 300,
  height: 300,
  paddingTop: 10,
  paddingRight: 10,
  paddingLeft: 10,
  paddingBottom: 10,
  marginRight: 30,
  marginLeft: 1,
  marginTop: 10,
  marginBottom: 10,
};

const EthereumCard = (props) => {
  return(
    <Card style={styleCard}>
      <CardHeader
        title="ETH"
        subtitle="ethereum stats"
      />
      <CardText>
        <div>
          ETH/USD: {props.ethPrice}
        </div>
      </CardText>
    </Card>
  );
}
export default EthereumCard;
