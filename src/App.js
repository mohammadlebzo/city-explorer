import React from 'react';
import axios from 'axios';
import FormCom from './components/FormCom';
import CardCom from './components/CardCom';
import TableCom from './components/TableCom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locationResult: {},
      searchQuery: '',
      showLocInfo: false
    }
  }

  getLocInformation = async (event) => {
    event.preventDefault();
    await this.setState({
      searchQuery: event.target.city.value
    })

    let reqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;

    let locResult = await axios.get(reqUrl);
    this.setState({
      locationResult: locResult.data[0],
      showLocInfo: true
    })
  }


  render() {
    return (
      <div>
        
        <div className="left-box">
          <FormCom locationInfo={this.getLocInformation} />

          {this.state.showLocInfo && <TableCom query={this.state.searchQuery} lat={this.state.locationResult.lat} lon={this.state.locationResult.lon} />}

        </div>

        <div className="right-box">
          {this.state.showLocInfo && <CardCom locationName={this.state.searchQuery} lat={this.state.locationResult.lat} lon={this.state.locationResult.lon} />}
        </div>

      </div>
    )
  }
}

export default App;
