import React from 'react';
import axios from 'axios';
import FormCom from './components/FormCom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

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
        <FormCom locationInfo={this.getLocInformation} />

        {this.state.showLocInfo &&
          <>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>City Name</td>
                  <td>{this.state.searchQuery}</td>
                </tr>
                <tr>
                  <td>Latitude:</td>
                  <td>{this.state.locationResult.lat}</td>
                </tr>
                <tr>
                  <td>Longitude:</td>
                  <td>{this.state.locationResult.lon}</td>
                </tr>
              </tbody>
            </Table>
            
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`} alt="city" />

          </>
        }


      </div>
    )
  }
}

export default App;
