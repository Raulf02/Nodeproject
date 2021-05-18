const express = require('express');
const fs = require('fs')

const app = express();


app.use(express.static('public'))

//   Källa: Udmey - The Web Developer Bootcamp 2021

// Return a number between 0-1023 

app.get('/api/random' ,(req, res) => {
    res.json({"number": Math.floor(Math.random() * 1023 + 1)})
});

// Källa: https://www.digitalocean.com/community/tutorials/nodejs-express-basics

// Källa://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU (NetNinja)


// Return a number between 0 and :num 

app.get('/api/custom_random/:num', (req, res) => {
    res.send({'number': Math.floor(Math.random() * req.params.num) + 1})
});

// count_vowels

app.get('/api/count_vowels/:word', (req, res) => {
  res.send({'vowels': vowel_count(req.params.word)})  
});


function vowel_count(str1) {
    let vowel_list = 'aeiouåäöAEIOUÅÄÖ';
    let vcount = 0;
    
    for(let i = 0; i < str1.length ; i++) {
        if (vowel_list.indexOf(str1[i]) !== -1) {
        vcount += 1;
        }
    }
    return vcount;
};


app.listen(3000, () => console.log('Listening on port 3000.'))


/* Länk till publik repo: https://github.com/Raulf02/Nodeproject */