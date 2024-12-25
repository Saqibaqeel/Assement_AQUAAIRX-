const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const { isAuthenticate, saveUrl } = require('./middleWare');
const destinationRoutes = require('./routes/destinationRoutes');
const wrapAsync = require('./utility/wrapAsync');
const expressError = require('./utility/expressError');
const User = require('./models/userModel');

const app = express();
const URL = 'mongodb://127.0.0.1:27017/tree';
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

const sessionOption = {
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};
app.use(session(sessionOption));
app.use(flash());

passport.initialize();
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

app.use('/destination', destinationRoutes);

app.get('/signUp', (req, res) => {
    res.render('signUp.ejs');
});

app.post('/signUp', wrapAsync(async (req, res, next) => {
    let { username, email, password } = req.body;
    if (!username || !email || !password) {
        req.flash('error', "All fields are required.");
        return res.redirect('/signup');
    }
    const newUser = new User({ username, email });
    let registerUser = await User.register(newUser, password);
    console.log(registerUser);
    req.login(registerUser, (err) => {
        if (err) return next(err);
        req.flash('success', "Welcome to Explore-More!");
        res.redirect('/');
    });
}));

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', saveUrl,
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true,
    }),
    (req, res) => {
        if (!res.locals.redirectUrl) {
            res.redirect('/');
        } else {
            res.redirect(res.locals.redirectUrl);
        }
    }
);

app.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash('success', 'You have been logged out');
        res.redirect('/login');
    });
});

app.get('/', (req, res) => {
    res.render('home');
});

app.all('*', (req, res, next) => {
    next(new expressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
    const { statuscode = 500, message = "Something went wrong" } = err;
    res.status(statuscode).render('error.ejs', { err });
});

const start = async () => {
    await mongoose.connect(URL);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

start();
