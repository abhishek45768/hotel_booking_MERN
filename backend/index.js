const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Clintmodel = require('./modeals/client'); // Import your client model


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/client');

app.post('/Login', (req, res) => {
    const { email, password } = req.body;
    Clintmodel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password == password) {
                    res.json('success');
                } else {
                    res.json('the password is incorrect');
                    
                }
            } else {
                res.json('no record existed');
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json('server error');
        });
});

app.post('/Register', (req, res) => {
    Clintmodel.create(req.body)
        .then(client => res.json(client))
        .catch(err => res.status(500).json(err));
});

app.listen(3001, () => {
    console.log('server is running');
});
