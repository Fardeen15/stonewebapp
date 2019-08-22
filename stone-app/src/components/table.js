import { db } from '../firebaseconfig';
import React from 'react';
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";

class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : null
        }
    }
    componentWillMount(){
        // if(this.props.value){
            // this.props.history.push('/MainPage')
        // }
    }

    render() {
        // console.log(this.props.state)
        return (
            < tr >
                <td>{this.props.index + 1}</td>
                <td>{this.props.value}</td>
                <td>
                <Link to = "/customerData"><button name={this.props.value} type="button" onClick={(ev) => {
                        this.props.viewlist(this.props.value)
                        this.props.data(this.props.value)
                    }} className="btn btn-secondary">View list</button></Link>
                </td>
            </tr >

        )
    }
}
export default withRouter(Table)