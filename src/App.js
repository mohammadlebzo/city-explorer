import React from 'react';
import axios from 'axios';
import FormCom from './components/FormCom';
import CardCom from './components/CardCom';
import TableCom from './components/TableCom';
import AlertCom from './components/AlertCom';
import Weather from './components/Weather';
import Movies from './components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieResult: {},
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
    let weatherUrl = `${process.env.REACT_APP_SERVER_LINK}/weather?city=${this.state.searchQuery}`
    let movieURL = `${process.env.REACT_APP_SERVER_LINK}/movies?query=${this.state.searchQuery}`
    try {
      let weatherResult = await axios.get(weatherUrl);
      let matchedMoviesResult = await axios.get(movieURL);
      this.setState({
        locationResult: weatherResult.data,
        movieResult: matchedMoviesResult.data,
        showLocInfo: true,
        showError: false
      })
      // console.log(this.state.movieResult);
    } catch {
      fetch(weatherUrl)
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

          {this.state.showLocInfo && <TableCom col1={['City Name', 'Latitude:', 'Longitude:']} col2={[this.state.searchQuery, this.state.locationResult.lat, this.state.locationResult.lon]} />}
          {this.state.showLocInfo && <Weather forcast={this.state.locationResult} />}

          {this.state.showError && <AlertCom showError={this.state.showError} message={this.state.code} />}

        </div>

        <div className="right-box">
          {this.state.showLocInfo && <CardCom locationName={this.state.searchQuery} lat={this.state.locationResult.lat} lon={this.state.locationResult.lon} />}
        </div>
        <div className='movie-cards'>
          {this.state.showLocInfo && this.state.movieResult.map(movie => {
            return(
              <Movies movieItem={movie} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
