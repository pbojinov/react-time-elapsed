var test = require('tape');
var SecondsToHHMMSS = require('../src/SecondsToHHMMSS');

test('Seconds is converted correctly to string output', function(t) {
  t.equal(SecondsToHHMMSS(2), "00:00:02");
  t.equal(SecondsToHHMMSS(70), "00:01:10");
  t.end();
});
