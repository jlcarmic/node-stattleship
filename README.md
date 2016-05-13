# node-stattleship

A NodeJS wrapper for the Stattleship sports analytics API

## Install
`npm install node-stattleship`

## Usage
```javascript
var StattleshipAPI = require('node-stattleship');

var stattleship = new StattleshipAPI('YOUR_ACCESS_TOKEN');

var params = {
  team_id: "mlb-bos"
};

stattleship.players('baseball', 'mlb', params).then(function(players) {
  players.forEach(function(element, index, array) {
    console.log(element.name);
  });
});
```

## Stattleship API Documentation
The Stattleship API can be found at http://developers.stattleship.com

## Contributing
Please open issues with feature requests and bugs.

## License
MIT
