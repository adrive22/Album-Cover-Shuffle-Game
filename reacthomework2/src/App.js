import React, {Component}  from "react";
import Cards from "./components/cards/cards.js";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./components/cards/cardImages.json";


class App extends Component{
    state ={
        cards,
        score: 0,
        highscore: 0,
        usedIds: []
    };

    clickCount = ( id ) => {
        console.log(id);
        console.log(this.state.score);
        console.log(this.state.usedIds);


        
          if(this.state.usedIds.some(item => item===id)){
              console.log("game over");
              this.setState({
                  usedIds:[],
                  score:0
            })
          }
          else{
        
        this.state.cards.sort(()=>Math.random()-.5);

        this.setState({
            score: this.state.score + 1,
            usedIds : [...this.state.usedIds, id],
        })
        if(this.state.highscore<this.state.score){
            this.setState({
                highscore: this.state.score
            })
    }
          }
        
        

    };

    render(){
        return(
            <Wrapper>
                <Cards clickCount={this.clickCount}/>
            </Wrapper>
        )
    }
};


    


export default App;


