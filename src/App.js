import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then (response => response.json())
      .then(data => {this.setState({monsters: data});})
      .catch(err => console.log(err));

  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <SearchBox  placeholder="Search monsters" 
                  handleChange={e => this.setState({ searchField: e.target.value })} />
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
