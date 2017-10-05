
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mentorlist" || "mongodb://admin:admin@ds111895.mlab.com:11895/heroku_4vhhh8rq",
  {
    useMongoClient: true
  }
);

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UsersSchema = new Schema({
  firstName: { 
        type: String, 
        required: true 
      },
  lastName: { 
        type: String, 
        required: true 
      },
  email: { 
        type: String, 
        required: true, 
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
      },
  password: { 
        type: String, 
        required: true 
      },
  photo: { 
        type: String,
        required: false 
      },
  city: {
        type: String, 
        required: true 
      },
  state: { 
        type: String,
        required: true 
      },
  zipcode: { 
        type: String,
        required: true 
      },
  aboutMe: { 
        type: String, 
        required: false 
      },
  skills: { 
        type: String, 
        required: false 
      },
  cost: { 
        type: String, 
        required: false 
      }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
