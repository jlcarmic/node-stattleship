var os = require('os');
var rp = require('request-promise');
var util = require('util');
var version = require('./package.json').version;

var platform = util.format('%s-%s%s', os.arch(), os.platform(), os.release());

module.exports = function(key) {
  // Set the key
  this.key = key;

  // Set the options
  this.options = {
    method: 'GET',
    uri: '',
    json: true,
    resolveWithFullResponse: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': util.format('Token token=%s', this.key),
      'Accept': 'application/vnd.stattleship.com; version=1',
      'User-Agent': util.format('Stattleship-Node/%s (%s)', version, platform)
    },
    qs: {}
  };

  this.callEndPoint = function(sport, league, endpoint, params) {
    this.options.uri = util.format("https://www.stattleship.com/%s/%s/%s", sport, league, endpoint);
    this.options.qs = params;

    return rp(this.options).then(function(response) {
      return response.body[endpoint];
    }).catch(function(err) {
      throw (err);
    });
  };

  this.feats = function(sport, league, params) {
    return this.callEndPoint(sport, league, "feats", params);
  };

  this.game_logs = function(sport, league, params) {
    return this.callEndPoint(sport, league, "game_logs", params);
  };

  this.games = function(sport, league, params) {
    return this.callEndPoint(sport, league, "games", params);
  };

  this.injuries = function(sport, league, params) {
    return this.callEndPoint(sport, league, "injuries", params);
  };

  this.penalties = function(sport, league, params) {
    return this.callEndPoint(sport, league, "penalties", params);
  };

  this.players = function(sport, league, params) {
    return this.callEndPoint(sport, league, "players", params);
  };

  this.rankings = function(sport, league, params) {
    return this.callEndPoint(sport, league, "rankings", params);
  };

  this.rosters = function(sport, league, params) {
    return this.callEndPoint(sport, league, "rosters", params);
  };

  this.scoring_plays = function(sport, league, params) {
    return this.callEndPoint(sport, league, "scoring_plays", params);
  };

  this.stat_leaders = function(sport, league, params) {
    return this.callEndPoint(sport, league, "stat_leaders", params);
  };

  this.stats = function(sport, league, params) {
    return this.callEndPoint(sport, league, "stats", params);
  };

  this.team_game_logs = function(sport, league, params) {
    return this.callEndPoint(sport, league, "team_game_logs", params);
  };

  this.team_outcome_streaks = function(sport, league, params) {
    return this.callEndPoint(sport, league, "team_outcome_streaks", params);
  };

  this.teams = function(sport, league, params) {
    return this.callEndPoint(sport, league, "teams", params);
  };

  this.top_stats = function(sport, league, params) {
    return this.callEndPoint(sport, league, "top_stats", params);
  };

  this.total_stats = function(sport, league, params) {
    return this.callEndPoint(sport, league, "total_stats", params);
  };
};
