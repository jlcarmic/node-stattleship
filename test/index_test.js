var expect = require('chai').expect;
var nock = require('nock');
var util = require('util');

var StattleshipAPI = require('../index.js');

describe("stattleship", function() {
  var stattleship = new StattleshipAPI('TEST_KEY');

  describe("feats", function(done) {
    // verify that the feats method exists
    it("feats exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.feats).to.eql('function');
      done();
    });

    // test successful run
    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/feats', sport, league);
      nock('https://www.stattleship.com')
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
    // verify that the game_logs method exists
    it("game_logs exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.feats).to.eql('function');
      done();
    });

    // test successful run
    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/game_logs', sport, league);
      nock('https://www.stattleship.com')
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
    // verify that the game_logs method exists
    it("game exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.games).to.eql('function');
      done();
    });

    // test successful run
    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/games', sport, league);
      nock('https://www.stattleship.com')
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
    // verify that the injuries method exists
    it("injuries exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.feats).to.eql('function');
      done();
    });

    // test successful run
    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/injuries', sport, league);
      nock('https://www.stattleship.com')
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
    // verify that the penalties method exists
    it("penalties exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.feats).to.eql('function');
      done();
    });

    // test successful run
    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/penalties', sport, league);
      nock('https://www.stattleship.com')
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
    // verify that the players method exists
    it("players exists as a public method on stattleship", function (done) {
      expect(typeof stattleship.players).to.eql('function');
      done();
    });

    // test successful run
    it("is successful when correct params are supplied", function(done) {
      var sport = 'baseball';
      var league = 'mlb';

      var endpoint = util.format('/%s/%s/players', sport, league);
      nock('https://www.stattleship.com')
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
});
