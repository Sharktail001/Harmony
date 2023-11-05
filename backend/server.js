const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const File = require('./models/file');
const jose = require('jose');
const bcrypt = require('bcrypt');
const multer = require('multer');
const upload1 = multer();
const storage = multer.memoryStorage();
const upload2 = multer({storage});

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use("/", express.static("public"));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MongoURL);

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.json({status: 'error', error: 'Invalid username/password'});
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (isPasswordCorrect) {
        const token = await new jose.SignJWT({
            name: user.name,
            email: user.email,
        }).setProtectedHeader({alg: 'HS256'}).setIssuedAt().sign(new TextEncoder().encode(process.env.JWTKey));

        return res.json({status: 'ok', user: token})
    } else {
        return res.json({status:'error', user: false})
    }
})

app.listen(1337, () => {
    console.log('Server started');
})