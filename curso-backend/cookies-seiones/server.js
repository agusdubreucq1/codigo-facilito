const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
    name:'colo',
    keys: ['djdsjdkjgsdcnhccnj', 'jdndjfcndvcjncjsdk']

}));

app.get('/', (req, res)=>{
    req.session.visitas = req.session.visitas || 0;

    req.session.visitas += 1;

    res.send(`${req.session.visitas} visitas en este navegadore`);
})

app.listen(3000);