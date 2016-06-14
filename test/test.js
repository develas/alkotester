const assert = require('assert');
const alk = require('../alkotester');

describe('Alkotest:', function() {
  const result = alk('male', 77);  

    describe('vodka', function() {
      it('should be 281', function() {
          assert.equal(281, +result.match(/\d{2,}/g)[0]);
      });
    });

    describe('beer', function() {
      it('should be 2395', function() {
          assert.equal(2395, +result.match(/\d{2,}/g)[1]);
      });
    });

    describe('wine', function() {
      it('should be 1023', function() {
          assert.equal(1023, +result.match(/\d{2,}/g)[2]);
      });
    });
});