import React from "react";
import Header from "./Header.js";
import Menu from "./Menu";
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems:[],
    }
  }
  componentDidUpdate() {
    localStorage.setItem('menuItems', JSON.stringify(this.state.menuItems))
  }
  
  componentDidMount() {

    if (!localStorage.getItem('menuItems')){
    axios
      .all([
        axios.get('https://entree-f18.herokuapp.com/v1/menu/24'),
        axios.get('https://entree-f18.herokuapp.com/v1/menu/25')
      ])
      .then(
        axios.spread((firstResponse, secondResponse) => {
          let thirdArray = firstResponse.data.menu_items.concat(
            secondResponse.data.menu_items
          );

          // map  or loop thru all items

        const fourthArray = thirdArray.map((obj, i) => ({
          description: obj.description,
          title: obj.description.split("with").splice(0, 1).join(" ").trim(),
          price: Math.round(30 * Math.random()),
          key: i,
        }));

          this.setState({ 
            menuItems: fourthArray,
          });     
        })
      )
      .catch((error) => console.log(error));
    }
    else if(localStorage.getItem('menuItems')) {
      var storedItems = JSON.parse(localStorage.getItem('menuItems'))
      this.setState({
        menuItems: storedItems,
      })
    }
    
  }

  render() {
    return (
      <div className="container app">
        <Header />
        <Menu menuItems= {this.state.menuItems} />
      </div>
    );
  }
}

export default App;
