const express = require('express');
const fs = require('fs')

const app = express();


// app.use middleware function
// app.use((req, res, next) => {
//     console.log('Time: ', Date.now());
//     next();
// });
    // Next() tells the middleware to go to the next middleware function, importent to include, otherwise the request till get stuck there.


// .get metod takes in two arguments 
// First argument What path or ULR you want to listen to.
// Secound argument is a function, this function takes in a req and res object.  (3)

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})

// Return a number between 0-1023 (1),(2)
app.get('/api/random' ,(req, res) => {
    res.json({"number": Math.floor(Math.random() * 1023 + 1)})
});



// Return a number between 0 and :num (1),(2)

app.get('/api/custom_random/:num', (req, res) => {
    res.send({'number': Math.floor(Math.random() * req.params.num) + 1})
})

// count_vowels

app.get('/api/count_vowels/:word', (req, res) => {
  res.send({'vowels': vowel_count(req.params.word)})  
})

// app.get('/', (req, res) => {
//     res.send('Seccessful response.');
// });

function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
    
    for(var x = 0; x < str1.length ; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
        vcount += 1;
        }
    }
    return vcount;
}


app.listen(3000, () => console.log('Listening on port 3000.'))


/* ----------------  Sources -------------------- */

/*
    1. https://www.digitalocean.com/community/tutorials/nodejs-express-basics

    2. https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU (NetNinja)

    3. Udmey - The Web Developer Bootcamp 2021


*/