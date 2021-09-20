import React from 'react';
import axios from 'axios';
import FormCom from './components/FormCom';
import CardCom from './components/CardCom';
import TableCom from './components/TableCom';
import AlertCom from './components/AlertCom';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      locationResult: {},
      searchQuery: '',
      showLocInfo: false,
      showError: false
    }
  }

  getLocInformation = async (event) => {
    event.preventDefault();
    await this.setState({
      searchQuery: event.target.city.value
    })
    let serverUrl = `${process.env.REACT_APP_SERVER_LINK}/weather?city=${this.state.searchQuery}`
    try {
      // let reqUrl = `https://us1.locationiq.com/v1/searc.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      

      // let locResult = await axios.get(reqUrl);
      let serverResult = await axios.get(serverUrl);

      this.setState({
        locationResult: serverResult.data,
        showLocInfo: true,
        showError: false
      })
    } catch {
      fetch(serverUrl)
        .then(response => {
          this.setState({
            code: response.status,
            showError: true,
            showLocInfo: false
          })
        })
    }
  }

  render() {
    return (
      <div>

        <div className="left-box">
          <FormCom locationInfo={this.getLocInformation} />

          {this.state.showLocInfo && <TableCom col1={['City Name', 'Latitude:', 'Longitude:']} col2={[this.state.searchQuery, this.state.locationResult.lan, this.state.locationResult.lon]} />}
          {this.state.showLocInfo && <Weather forcast={this.state.locationResult} />}

          {this.state.showError && <AlertCom showError={this.state.showError} message={this.state.code} />}

        </div>

        <div className="right-box">
          {this.state.showLocInfo && <CardCom locationName={this.state.searchQuery} lat={this.state.locationResult.lan} lon={this.state.locationResult.lon} />}
        </div>

      </div>
    )
  }
}

export default App;
