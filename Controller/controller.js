"use strict";
var rp = require('request-promise');
var config = require('../config');
/** Call third Party API to display Episodes list and use seriesId & seasonNumber as a params */
var episodeDetail = function (req, res) {
    var _a = req.params, seriesId = _a.seriesId, seasonNumber = _a.seasonNumber;
    var result = [];
    var obj = {
        uri: "https://api.themoviedb.org/3/tv/" + seriesId + "/season/" + seasonNumber + "?api_key=" + config.api_key,
        method: 'GET',
        json: true
    };
    rp(obj)
        .then(function (data) {
        var resp = data.episodes;
        /** Use Inbuild filter function */
        resp.filter(function (item) {
            result.push({
                episodeName: item.name,
                averageVotes: item.vote_average
            });
        });
        /** Use Inbuild sort function for data Sorting */
        result.sort(function (a, b) {
            return b.averageVotes - a.averageVotes;
        });
        /** Final Response */
        res.send({
            Response: {
                episodes: result
            }
        });
    })
        .catch(function (err) {
        res.send(err);
    });
};
/** Call third Party API to display Tv Series list and use seriesId as a params */
var seriesDetail = function (req, res) {
    var obj = {
        uri: "https://api.themoviedb.org/3/tv/" + req.params.seriesId + "?api_key=" + config.api_key,
        method: 'GET',
        json: true
    };
    rp(obj)
        .then(function (data) {
        /** Final Response */
        res.send({
            Response: {
                Series: [{
                        seriesName: data.name,
                        accessCount: data.vote_average
                    }]
            }
        });
    })
        .catch(function (err) {
        console.error('err ::++', err);
    });
};
module.exports = {
    episodeDetail: episodeDetail,
    seriesDetail: seriesDetail
};
