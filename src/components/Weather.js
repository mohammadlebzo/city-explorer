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
                        {this.props.forcast.weatherData.map(day => {
                            return (
                                <tr>
                                    <td>{day.date}</td>
                                    <td>{day.description}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Weather;