const expect = require('chai').expect;
const request = require('request');

describe("Random Number Generator", () => { 
    // specification code
    describe("get_random number 0-1023", () => {
        
        const url = 'http://localhost:3000/api/random'
        it("returns status of 200", (done) => {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done()
            })
        })

        it("returns json objects", (done) => {
            request(url, function(error, response, body) {
                expect(JSON.parse(body)).to.have.property('number');
                //expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                done()
            })
        })

        it("returns random number 0-1023", (done) => {
            request(url, function(error, response, body) {
                expect(body).to.include('number');
                done()
            })
        })

    })
});

describe('Get vowel number', () => {
    describe("count amount vowels", () => {
        
        const url = 'http://localhost:3000/api/count_vowels/:word'
        it("returns status of 200", (done) => {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done()
            })
        })

        it("returns json objects", (done) => {
            request(url, function(error, response, body) {
                expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                done()
            })
        })

        it("returns amout of vowels that's writen", (done) => {
            request(url, function(error, response, body) {
                expect(body).to.include('vowels');
                done()
            })
        })

    })
})

describe('Get random jokes', () => {
    describe("generate random jokes", () => {
        
        const url = 'http://localhost:3000/api/random_dadjokes'
        it("returns status of 200", (done) => {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done()
            })
        })

        it("returns json objects", (done) => {
            request(url, function(error, response, body) {
                // https://www.chaijs.com/api/bdd/
                expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                done()
            })
        })

        it("return a new joke", (done) => {
            request(url, function(error, response, body) {
                expect(body).to.include('Joke');
                done()
            })
        })
    })
});



