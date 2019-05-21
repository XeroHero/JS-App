import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Weather extends React.Component {
  var unirest = require('unirest');

  request()
  {
    unirest.get("http://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=-2172797&units=metric&mode=html&q=Dunshaughlin")
    .header("X-RapidAPI-Key","a86209baebmsh384b78fcb1d3c38p121c34jsnda3266b5473a")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
     });

  }
}
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
