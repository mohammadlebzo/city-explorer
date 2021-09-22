import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import '../cssCom/TableCom.css';

class Weather extends React.Component {

    render() {
        return (
            <>
                <Table className="table" striped bordered hover>
                    <tbody>
                        <tr>
                            <td>{this.props.forcast.weatherData[0].date}</td>
                            <td>{this.props.forcast.weatherData[0].description}</td>
                        </tr>
                        <tr>
                            <td>{this.props.forcast.weatherData[1].date}</td>
                            <td>{this.props.forcast.weatherData[1].description}</td>
                        </tr>
                        <tr>
                            <td>{this.props.forcast.weatherData[2].date}</td>
                            <td>{this.props.forcast.weatherData[2].description}</td>
                        </tr>
                        <tr>
                            <td>{this.props.forcast.weatherData[3].date}</td>
                            <td>{this.props.forcast.weatherData[3].description}</td>
                        </tr>
                        <tr>
                            <td>{this.props.forcast.weatherData[4].date}</td>
                            <td>{this.props.forcast.weatherData[4].description}</td>
                        </tr>
                        <tr>
                            <td>{this.props.forcast.weatherData[5].date}</td>
                            <td>{this.props.forcast.weatherData[5].description}</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Weather;