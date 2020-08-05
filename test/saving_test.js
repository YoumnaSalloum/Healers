const assert = require('assert');
const User = require('../db/mongo');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Describe our tests
describe('Saving posts', function () {

    // Create tests
    it('Saves a post to the database', function (done) {

        const char = new User({
            userName : "hamadeh",
            phoneNumber:34567867890,
            email:'hamadeh@gmail.com',
            password : '1234',
            id:'hamadeh@gmail.com'
        });

        char.save().then(function () {
            assert(char.isNew===false);
            done();
        });

    });

});