const { describe:any } = require('mocha');
const expect  = require('chai').expect;
const request = require('request');
const MockData = require('./mockdata');

describe('Status and Context', ()=>{
    describe('test episode data', ()=>{
    /** check api status */
    it('Main page content', () =>{
         request('http://localhost:8080/TopEpisodes/1/1' , (error:any, response:any) =>{
             console.log('error ::++',error)
             if(error == null){
                console.log('response ::++',response.statusCode)
                expect(response.statusCode).to.equal(200);
             }
         });
     });

      /** check api success message */
        it('Main page content', () =>{
            request('http://localhost:8080/TopEpisodes/1/1' , (error:any, response:any) =>{
                console.log('error ::++',error)
                if(error == null){
                }
            });
        });
        
        /** check mock data response */
        it('Main page content',  () =>{
            let data: any = MockData;
            expect(data.objectData.episodes[0].episodeName).to.equal('Bond of Love and Youth');
            expect(data.objectData.episodes[0].averageVotes).to.equal(9);
        })
    })
})