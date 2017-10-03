
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://MentorMeetup:noodles123@ds161584.mlab.com:61584/heroku_x6v4p28p",
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
  skill1: { 
        type: String, 
        required: false 
      },
  cost1: { 
        type: String, 
        required: false 
      },
  skill2: { 
        type: String, 
        required: false 
      },
  cost2: { 
        type: String, 
        required: false 
      },
  skill3: { 
        type: String, 
        required: false 
      },
  cost3: { 
        type: String, 
        required: false 
  }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
