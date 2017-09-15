var expect = require('chai').expect;
var nock = require('nock');
var util = require('util');

var StattleshipAPI = require('../index.js');

describe("stattleship", function() {
  var stattleship = new StattleshipAPI('TEST_KEY');

  describe("feats", function(done) {
    it("feats exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.feats).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/feats?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { feats: [ { level: "rare" } ] });

      stattleship.feats(sport, league, {}).then(function(feats) {
        expect(feats[0].level).equals("rare");
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("game_logs", function(done) {
    it("game_logs exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.game_logs).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/game_logs?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { game_logs: [ { home_team_outcome: "win" } ] });

      stattleship.game_logs(sport, league, {}).then(function(game_logs) {
        expect(game_logs[0].home_team_outcome).equals("win");
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("games", function(done) {
    it("game exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.games).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/games?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { games: [ { label: "X-Men vs Avengers" } ] });

      stattleship.games(sport, league, {}).then(function(games) {
        expect(games[0].label).equals("X-Men vs Avengers");
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("injuries", function(done) {
    it("injuries exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.injuries).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/injuries?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { injuries: [ { location_name: "Skull" } ] });

      stattleship.injuries(sport, league, {}).then(function(injuries) {
        expect(injuries[0].location_name).equals("Skull");
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("penalties", function(done) {
    it("penalties exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.penalties).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/penalties?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { penalties: [ { name: "Inappropriate Touching" } ] });

      stattleship.penalties(sport, league, {}).then(function(penalties) {
        expect(penalties[0].name).equals("Inappropriate Touching");
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("players", function(done) {
    it("players exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.players).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/players?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { players: [ { name: "Tony Stark" } ] });

      stattleship.players(sport, league, {}).then(function(players) {
        expect(players[0].name).equals("Tony Stark");
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("player_season_stats", function(done) {
    it("player_season_stats exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.player_season_stats).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/player_season_stats?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { player_season_stats: [ { range_factor: 5.0 } ] });

      stattleship.player_season_stats(sport, league, {}).then(function(player_season_stats) {
        expect(player_season_stats[0].range_factor).equals(5.0);
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("rankings", function(done) {
    it("rankings exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.rankings).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/rankings?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { rankings: [ { place: 42 } ] });

      stattleship.rankings(sport, league, {}).then(function(rankings) {
        expect(rankings[0].place).equals(42);
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("rosters", function(done) {
    it("rosters exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.rosters).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/rosters?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { rosters: [ { team_id: 'kjh34kj23hkjh' } ] });

      stattleship.rosters(sport, league, {}).then(function(rosters) {
        expect(rosters[0].team_id).equals('kjh34kj23hkjh');
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("scoring_plays", function(done) {
    it("scoring_plays exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.scoring_plays).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/scoring_plays?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { scoring_plays: [ { name: 'Touchdown' } ] });

      stattleship.scoring_plays(sport, league, {}).then(function(scoring_plays) {
        expect(scoring_plays[0].name).equals('Touchdown');
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("stat_leaders", function(done) {
    it("stat_leaders exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.stat_leaders).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/stat_leaders?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { stat_leaders: [ { stat_name: 'home_runs' } ] });

      stattleship.stat_leaders(sport, league, {}).then(function(stat_leaders) {
        expect(stat_leaders[0].stat_name).equals('home_runs');
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("stats", function(done) {
    it("stats exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.stats).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/stats?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { stats: [ { stat: 'passes_touchdowns' } ] });

      stattleship.stats(sport, league, {}).then(function(stats) {
        expect(stats[0].stat).equals('passes_touchdowns');
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("team_game_logs", function(done) {
    it("team_game_logs exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.team_game_logs).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/team_game_logs?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { team_game_logs: [ { home_team_outcome: 'win' } ] });

      stattleship.team_game_logs(sport, league, {}).then(function(team_game_logs) {
        expect(team_game_logs[0].home_team_outcome).equals('win');
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("team_outcome_streaks", function(done) {
    it("team_outcome_streaks exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.team_outcome_streaks).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/team_outcome_streaks?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { team_outcome_streaks: [ { streak_length: 42 } ] });

      stattleship.team_outcome_streaks(sport, league, {}).then(function(team_outcome_streaks) {
        expect(team_outcome_streaks[0].streak_length).equals(42);
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("teams", function(done) {
    it("teams exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.teams).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/teams?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { teams: [ { nickname: 'Avengers' } ] });

      stattleship.teams(sport, league, {}).then(function(teams) {
        expect(teams[0].nickname).equals('Avengers');
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("top_stats", function(done) {
    it("top_stats exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.top_stats).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/top_stats?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { top_stats: [ { stat_name: 'hits' } ] });

      stattleship.top_stats(sport, league, {}).then(function(top_stats) {
        expect(top_stats[0].stat_name).equals('hits');
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });

  describe("total_stats", function(done) {
    it("total_stats exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.total_stats).to.eql('function');
      done();
    });

    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/total_stats?page=1', sport, league);
      nock('https://api.stattleship.com')
        .get(endpoint)
        .reply(200, { total_stats: [ { stat: 'passes_touchdowns' } ] });

      stattleship.total_stats(sport, league, {}).then(function(total_stats) {
        expect(total_stats[0].stat).equals('passes_touchdowns');
        done();
      }).done(null, function(error) {
        done(error);
      });
    });
  });
});
