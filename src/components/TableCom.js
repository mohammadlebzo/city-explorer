import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import '../cssCom/TableCom.css';

class TableCom extends React.Component {

    render() {
        return (
            <>
                <Table className="table" striped bordered hover>
                    <tbody>
                        <tr>
                            <td>City Name</td>
                            <td>{this.props.query}</td>
                        </tr>
                        <tr>
                            <td>Latitude:</td>
                            <td>{this.props.lat}</td>
                        </tr>
                        <tr>
                            <td>Longitude:</td>
                            <td>{this.props.lon}</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

export default TableCom;