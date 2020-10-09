"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var Controller = require('./Controller/controller');
var Middleware = require('./middleware');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/**This api is used to display episode list */
app.get('/TopEpisodes/:seriesId/:seasonNumber', Middleware.my_Validation, Controller.episodeDetail);
/**This api is used to display TV series list */
app.get('/analytics/popularSeries/:seriesId', Middleware.my_Validation, Controller.seriesDetail);
app.listen(8080, function () {
    console.log('App is listening on port 8080.');
});
