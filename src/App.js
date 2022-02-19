import React from 'react';
import './App.css';
function App() {
  return (
    <>
   <Board  />
   </>
  );
}


class Board extends React.Component {
  renderSquare(i,txt) {
    return <Square value={i} txt={txt}/>;  }

  render(){

    return(
      <body>
      <div>
      <div className='row'>
      {this.renderSquare(1,',.?!')}
      {this.renderSquare(2,'ABC')}
      {this.renderSquare(3,'DEF')}
      </div>
      <div className='row'>
      {this.renderSquare(4,'GHI')}
      {this.renderSquare(5,'JKL')}
      {this.renderSquare(6,'MNO')}
      </div>
      <div className='row'>
      {this.renderSquare(7,'PQRS')}
      {this.renderSquare(8,'TUV')}
      {this.renderSquare(9,'WXYZ')}
      </div>
      </div>
      </body>

    );

  }
}
class Square extends React.Component {
  constructor(props){

    super(props);
    this.state = {

      txt_str:null,
      value:null
    };


  }
  render() {
    return (
      <button className="square" onClick={()=>console.log(this.props.value)}>
        <div className='Num'>
        {this.props.value} 
        </div>
        <div className='Txt'>
        {this.props.txt} 
        </div>   
      </button>
    );
  }
}

export default App;
