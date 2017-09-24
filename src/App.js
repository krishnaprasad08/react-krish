import React, { Component } from 'react';
import './App.css';
import TimeReport from './components/TimeReport';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      reports : [
        {
          reportId : 123,
          empId : 599480,
          empName : 'Krish',
          periodEndDate : '9/22/2017',
          creationDate : '9/22/2017',
          status : 'Pending',
        }
      ]
    };
    this.updateStatus = this.updateStatus.bind(this);
  }
  updateStatus(id,status){
    var reports = this.state.reports;
    reports = reports.map(rep => {
      if(id===rep.reportId)
      {
        rep.status = status;
      }
      return rep;
    })
    this.setState({
      reports : reports
    })
//    console.log(id,status);
  }
  render() {
    return (
      <div className="App">
      <TimeReport reports={this.state.reports} updateStatus={this.updateStatus}/>
      </div>
    );
  }
}

export default App;
