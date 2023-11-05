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
// mongoose.connect(process.env.MongoURL);
mongoose.connect('mongodb+srv://AbelT:SyllaBye101@syllabyedb.vb955ru.mongodb.net/?retryWrites=true&w=majority');

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

app.post('/api/data', async (req, res) => {
    const token = req.body.token;
    const jwt = await jose.JWT.verify(token, new TextEncoder().encode(process.env.JWTKey));
    const user = await User.findOne({email: jwt.payload.email});
    if (!user) {
        return res.json({status: 'error', error: 'Invalid username/password'});
    }

    const data = {
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        industry: req.body.industry,
        employees: req.body.employees,
        security: req.body.security,
        claims: req.body.claims,
        risks: req.body.risks,
        interaction: req.body.interaction,
        age: req.body.age,
        fire: req.body.fire,
        nature: req.body.nature,
        safety: req.body.safety,
    };

    const file = new File(data);
    await file.save();

    return res.json({status: 'ok', user: token})
});

app.listen(1337, () => {
    console.log('Server started');
})