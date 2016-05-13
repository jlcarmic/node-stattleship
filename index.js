var rp = require('request-promise');
var util = require('util');

function createEndPointURL(sport, league, endpoint) {
  return util.format("https://www.stattleship.com/%s/%s/%s", sport, league, endpoint);
}

module.exports = function(key) {
  // Set the key
  this.key = key;

  // Set the options
  this.options = {
    method: 'GET',
    uri: '',
    json: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': util.format('Token token=%s', this.key),
      'Accept': 'application/vnd.stattleship.com; version=1'
    },
    qs: {}
  };

  this.feats = function(sport, league, params) {
    this.options.uri = createEndPointURL(sport, league, "feats");
    this.options.qs = params;

    return rp(this.options).then(function(body) {
      return body.feats;
    }).catch(function(err) {
      throw (err);
    });
  };

  this.game_logs = function(sport, league, params) {
    this.options.uri = createEndPointURL(sport, league, "game_logs");
    this.options.qs = params;

    return rp(this.options).then(function(body) {
      return body.game_logs;
    }).catch(function(err) {
      throw (err);
    });
  };

  this.games = function(sport, league, params) {
    this.options.uri = createEndPointURL(sport, league, "games");
    this.options.qs = params;

    return rp(this.options).then(function(body) {
      return body.games;
    }).catch(function(err) {
      throw (err);
    });
  };

  this.injuries = function(sport, league, params) {
    this.options.uri = createEndPointURL(sport, league, "injuries");
    this.options.qs = params;

    return rp(this.options).then(function(body) {
      return body.injuries;
    }).catch(function(err) {
      throw (err);
    });
  };

  this.penalties = function(sport, league, params) {
    this.options.uri = createEndPointURL(sport, league, "penalties");
    this.options.qs = params;

    return rp(this.options).then(function(body) {
      return body.penalties;
    }).catch(function(err) {
      throw (err);
    });
  };

  this.players = function(sport, league, params) {
    this.options.uri = createEndPointURL(sport, league, "players");
    this.options.qs = params;

    return rp(this.options).then(function(body) {
      return body.players;
    }).catch(function(err) {
      throw (err);
    });
  };
};
