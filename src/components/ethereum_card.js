import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styleCard = {
  width: 400,
  height: 400,
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  );
}
export default EthereumCard;
