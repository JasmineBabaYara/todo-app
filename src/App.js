import React from 'react' 
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      todo:'',
      Arr:[]
    }
    this.hanldeChange= this.hanldeChange.bind(this);
    this.handleClick=this.handleClick.bind(this)
  }
  hanldeChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  } 

    handleClick(){
      this.setState({
        Arr:[...this.state.Arr,this.state.todo]
      })
    }
  
  render(){
    return(
      <div>
        <input 
        type='text' 
        name='todo' 
        onChange={this.hanldeChange} 
        value={this.state.todo} />
        <button onClick={this.handleClick} >Add todo</button>
        
        {this.state.Arr.map((item) =>{
          return(
            <p>{item}
              <button>
                <i class="bi bi-check"></i>
              </button>
              <button>
                <i class="bi bi-trash"></i>
              </button>
            </p>
          )
        })}
      </div>
    )
  }
}

export default App;