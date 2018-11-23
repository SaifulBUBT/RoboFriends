import React, { Component } from 'react';

import './App.css';

import CardList from './Components/Card/CardList';
//import {robots} from './Components/robots'
import SearchBox from './Components/SearchBox/SearchBox'
import Scroll from './Components/Scroll/Scroll'

class App extends Component {
  constructor(){
    super()

    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response =>{
        return Response.json()
    })
    .then(users =>{
      this.setState({
        robots: users
      })
    })
  }

  onSearchChange = (event) => {
  
    this.setState({
      searchfield: event.target.value
    })
  }

  render() {

    const filteredRobots = this.state.robots.filter((robot) => {
      return(
        robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      )
    })


    return (
      <div className="App tc"> 
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
        
      
      </div> 
      
    );
    

  }
}

export default App;
