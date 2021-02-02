import React, {Component} from 'react';
import {Cards , Chart, Country} from './components'
import './App.css';
import {fetchdata} from './api/api'

class App extends Component {
  state = { data: {},
            country: ''              
}
  async componentDidMount() {
    const fedata = await fetchdata();
    this.setState({data : fedata});
    
  };
  handleCountry = async (country) => {
   const fedata = await fetchdata(country);
   this.setState({data: fedata, country: country});
   console.log(fedata);
  }


  render() { 
    return (   <div className="App">
    <h1>Covid-19</h1>
    <Cards datas = {this.state.data} />
    <Country  handleCont = {this.handleCountry} />
    <Chart  datas = {this.state.data} country = {this.state.country}/>
  </div> );
  }
}
 
export default App;
