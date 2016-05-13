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
});
