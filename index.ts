import express = require('express');
const app = express();
import bodyParser = require('body-parser');
const Controller:any = require('./Controller/controller')
const Middleware:any = require('./middleware')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**This api is used to display episode list */
app.get('/TopEpisodes/:seriesId/:seasonNumber',Middleware.my_Validation, Controller.episodeDetail); 
/**This api is used to display TV series list */
app.get('/analytics/popularSeries/:seriesId',Middleware.my_Validation, Controller.seriesDetail);
 

app.listen(8080, () =>{
    console.log('App is listening on port 8080.');
});