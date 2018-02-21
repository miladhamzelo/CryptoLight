import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styleCard = {
  width: 400,
  height:400,
  paddingTop: 10,
  paddingRight: 10,
  paddingLeft: 10,
  paddingBottom: 10,
  marginRight: 1,
  marginLeft: 1,
  marginTop: 10,
  marginBottom: 10,
}

const StellarCard = (props) => {
  return(
    <Card style={styleCard}>
      <CardHeader
        title="XLM"
        subtitle="stellar stats"
      />
      <CardText>
        <div>
          XLM/USD: {props.xlmPrice}
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  );
}
export default StellarCard;
