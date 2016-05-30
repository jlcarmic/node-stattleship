var os = require('os');
var Q = require('q');
var rp = require('request-promise');
var util = require('util');
var version = require('./package.json').version;

// Private Vars
var options = {
  method: 'GET',
  uri: '',
  json: true,
  resolveWithFullResponse: true,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '',
    'Accept': 'application/vnd.stattleship.com; version=1',
    'User-Agent': util.format('Stattleship-Node/%s (%s)', version, platform)
  },
  qs: {}
};
var platform = util.format('%s-%s%s', os.arch(), os.platform(), os.release());

// Private Functions
function callEndPoint(sport, league, endpoint, params, paginate, data, total) {
  var deferred = Q.defer();
  options.uri = util.format("https://www.stattleship.com/%s/%s/%s", sport, league, endpoint);
  options.qs = params;
  options.qs.page = options.qs.page || 1;
  console.log(options.qs.page);

  rp(options).then(function(response) {
    total = response.headers.total;
    console.log(total);
    data = data.concat(response.body[endpoint]);
    console.log(Object.keys(data).length);
    options.qs.page++;

    // Page is 0 if use did not specify specific page, if they did no need to recurse
    if(paginate && Object.keys(data).length < total) {
      callEndPoint(sport, league, endpoint, params, paginate, data, total).then(function(data) {
        deferred.resolve(data);
      });
    } else {
      deferred.resolve(data);
    }
  });

  return deferred.promise;
}

// Object
function Stattleship(token) {
  options.headers.Authorization = util.format('Token token=%s', token);
}

// Public Functions
Stattleship.prototype.feats = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "feats", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.game_logs = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "game_logs", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.games = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "games", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.injuries = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "injuries", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.penalties = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "penalties", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.players = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "players", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.rankings = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "rankings", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.rosters = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "rosters", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.scoring_plays = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "scoring_plays", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.stat_leaders = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "stat_leaders", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.stats = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "stats", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.team_game_logs = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "team_game_logs", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.team_outcome_streaks = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "team_outcome_streaks", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.teams = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "teams", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.top_stats = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "top_stats", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

Stattleship.prototype.total_stats = function(sport, league, params) {
  var data = [];
  var total = 0;
  var paginate = (params.page === undefined);

  return callEndPoint(sport, league, "total_stats", params, paginate, data, total)
    .then(function(data) {
      return data;
  });
};

module.exports = Stattleship;
