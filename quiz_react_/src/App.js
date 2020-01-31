import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    let right = 0;
    let wrong = 0;
    this.state = {
      quiz: [],
      answer: '',
      right: 0,
      wrong: 0,
      disabled:false,
      seconds:20,
      color:"white",
      Time: new Date(),

    }
    this.refreshList = this.refreshList.bind(this)
  }

  getStartTimer=(seconds)=> {
    
    if (this.state.Time >= 0) {
        this.setState({ 
          Time :this.state.Time - 1 });
    }
}



  answer(id) {
    if (id === true ) {
      this.setState({
        right: this.state.right + 1,
        color:"wheat"
      })
    }

    else {
      this.setState({
        wrong: this.state.wrong + 1
      })
    }
  //   axios.post("http://127.0.0.1:8000/quiz/"), { answer: id }
  //   this.setState({
  //     answer: id,
  //   })
  }
  refreshList() {
    axios.get("http://127.0.0.1:8000/quiz/")
      .then(res => {
        this.setState({ quiz: res.data });
      });
  }
  componentDidMount() {
    this.refreshList();
  }
  render() {
    return (
      <div className="border">
        <h4 className="choice2">  Quiz Application</h4>
        <div className="choice2">
            {/* <button onClick={() => this.getStartTimer() }>your time starts: {this.state.Time}sec </button><br></br> */}
        </div>
        <div >  <span className ="choice"> Correct Answer : {this.state.right} </span></div>
          <div>
          <span className ="choice1"> Wrong Answer   : {this.state.wrong} </span>
        </div>
        <div>
        {this.state.quiz.map((item, index) => (
          <ol key={index} >

          <div className='question'>{index+1}.  {item.question}</div>
              {item.choice.map((item, index) => (
              <ol key={index} className="row" >
                <input type="radio" value={item.isTrue} onChange={(event) => this.answer(item.isTrue)} /> {item.choice}
               
              </ol>))}
          </ol>
        ))}
        
        </div>
        </div>
    );
  }
}
export default App;

// if selected choice is true then the anwer counts +1 else wrong counts to +1