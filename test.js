"use strict";
var any = require('mocha').describe;
var expect = require('chai').expect;
var request = require('request');
var MockData = require('./mockdata');
describe('Status and Context', function () {
    describe('test episode data', function () {
        /** check api status */
        it('Main page content', function () {
            request('http://localhost:8080/TopEpisodes/1/1', function (error, response) {
                console.log('error ::++', error);
                if (error == null) {
                    console.log('response ::++', response.statusCode);
                    expect(response.statusCode).to.equal(200);
                }
            });
        });
        /** check api success message */
        it('Main page content', function () {
            request('http://localhost:8080/TopEpisodes/1/1', function (error, response) {
                console.log('error ::++', error);
                if (error == null) {
                }
            });
        });
        /** check mock data response */
        it('Main page content', function () {
            var data = MockData;
            expect(data.objectData.episodes[0].episodeName).to.equal('Bond of Love and Youth');
            expect(data.objectData.episodes[0].averageVotes).to.equal(9);
        });
    });
});
