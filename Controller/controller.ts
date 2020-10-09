const rp = require('request-promise');
const config = require('../config')

/** Call third Party API to display Episodes list and use seriesId & seasonNumber as a params */

const episodeDetail =  (req:any,res:any) =>{
    const { seriesId, seasonNumber } = req.params;
    let result: any= [];
    let obj = {
        uri: `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?api_key=${config.api_key}`,
        method:'GET',
        json: true
    }
    rp(obj)
    .then((data:any) =>{
        let resp:any = data.episodes;
        /** Use Inbuild filter function */
        resp.filter((item:any)=>{
            result.push({
                episodeName:item.name,
                averageVotes:item.vote_average
            }); 
        })
        /** Use Inbuild sort function for data Sorting */
        result.sort((a:any,b:any)=>{
            return b.averageVotes - a.averageVotes;
        });
        /** Final Response */
        res.send({
            Response:{
                episodes:result
            }
        }); 
    })
    .catch((err:any) =>{
        res.send(err);
    });
};

/** Call third Party API to display Tv Series list and use seriesId as a params */
const seriesDetail =  (req:any,res:any) =>{
    let obj = {
        uri: `https://api.themoviedb.org/3/tv/${req.params.seriesId}?api_key=${config.api_key}`,
        method:'GET',
        json: true
    }
    rp(obj)
    .then((data:any) =>{
        /** Final Response */
        res.send({
            Response:{
                Series:[{
                    seriesName:data.name,
                    accessCount:data.vote_average
                }]
            }
        });
    })
    .catch((err:any) =>{
        console.error('err ::++',err)
    });
};



module.exports = {
    episodeDetail:episodeDetail,
    seriesDetail:seriesDetail
}

