import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import '../style/raised-button.css'
import axios from 'axios';

// like this blue #2196F3

class DataButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  render() {
    return(
      <div>
        <RaisedButton
          backgroundColor='#2196F3'
          className="raised-button"
          onClick={this.retrieveData}
          label="get price data"
        />
      </div>
    );
  }
  //retrieves cryptocurrency data using axios
  retrieveData() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=XLM&tsyms=USD')
      .then(response => console.log(response.data.USD))
      .then(console.log('yes'));
  }
}
export default DataButton;
