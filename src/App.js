import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import Header from './components/Header.js'
import ImageCard from './components/ImageCard.js'
import Images from "./images.json"

const shuffleArray = (array) => {
  
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};

class App extends Component {
  
  state = {
    Images: Images,
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    gameOver: false
  }

  componentDidMount() {
    this.setState({result: "Click an image to get started!"})
  }

  handleClick = (id) => {

    if(!this.state.clicked.includes(id)) {
      // console.log(`Picture clicked with id: ${id}`);
      console.log(this.state.currentScore);
      this.state.clicked.push(id);
      this.pointIncrease();
      this.setState({
        gameOver: false
      });
    } else {
      this.resetGame();
    }
  }

  pointIncrease() {

    let score = this.state.currentScore + 1;
    
    if (score === this.state.Images.length) {
      this.setState({
        result: "You win! Start clicking to play again!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        Images,
        gameOver: false
      });

    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "You guessed correctly! New high score!",
      });

    } else {
      this.setState({
        currentScore: score,
        result: "You guessed correctly!"
      });
    }
    this.resetIconArray();
  }

  resetGame() {

    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      result: "You guessed incorrectly! Try again!",
      clicked: [],
      Images,
      gameOver: true
    });
  
    this.resetIconArray();
  }

  resetIconArray() {

    let newScramble = shuffleArray(Images);
    this.setState({Images: newScramble})
  }

  render() {

    return (
      <div className="App">
        <Nav 
          currentScore={this.state.currentScore} 
          topScore={this.state.topScore} 
          result={this.state.result}/>

        <Header />

        {this.state.Images.map(images =>
          <ImageCard
            key={images.id}
            id={images.id}
            image={images.image} 
            onClick={this.handleClick}/>
        )}
        
      </div>
    );
  }
}

export default App;