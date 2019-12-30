const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://temela:asdfghjkl30@cluster0-hqghk.mongodb.net/test?retryWrites=true&w=majority";

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('running at ' + port));
app.use(express.static(__dirname + '/public'));
app.use(express.json({limit:'1mb'})); 


    



app.post('/post', (req, resp)=>{
    console.log('incoming request:')
    console.log(req.body['action']);
    if(req.body['action'] == 'getResume'){
        resp.download('./public/Resume.pdf',);
        console.log('sending resume...')
    }else if(req.body['action'] == 'sendMessage'){

        const data = {
            name: req.body.name, 
            email: req.body.email, 
            message: req.body.message,
            time: Date.now()    
        };

      
        
      
        resp.json({
            status: 'success',
            name:data.name,
            email:data.email
        });
    }
});