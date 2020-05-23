import React, { Component } from "react";
import { CardList } from "./component/card_list/card_list.component";
import { SearchBox } from "./component/search_box/search-box.component";
import "./App.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ pokemon: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { pokemon, searchField } = this.state;
    const filteredPokemon = pokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App"> 
        <h1>Pokedex</h1>
        <SearchBox placeholder="Search Pokemon" handleChange={this.handleChange}/>
        <CardList pokemon={filteredPokemon}></CardList>
      </div>
    );
  }
  
}

export default App;
