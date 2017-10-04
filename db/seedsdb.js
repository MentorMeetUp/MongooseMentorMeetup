
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mentorlist",
  {
    useMongoClient: true
  }
);

const UserSeed = [ 
 {  
  firstName: "Ernie",
  lastName: "Garcia",
  email: "egarcia@gmail.com",   
  password: "qwerty",
  photo: "http://dvcf.org/wordpress/wp-content/uploads/2014/01/Glen-Saunders-Thumb-250x200.jpg",    
  city: "Irvine",
  state: "CA",
  zipcode: "92570",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Web Development", "Photoshop", "Javascript"],
  cost: "Free"
  },
  {  
  firstName: "Louis",
  lastName: "Smith",
  email: "lsmith@gmail.com",   
  password: "qwerty",
  photo: "http://www.webbfound.org/wp-content/uploads/2010/08/Randy-250x200.jpg",    
  city: "Newport Beach",
  state: "CA",
  zipcode: "92571",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Web Development", "Photoshop", "Javascript"],
  cost: "Paid"
  },
  {  
  firstName: "Rhonda",
  lastName: "Lee",
  email: "rlee@gmail.com",   
  password: "qwerty",
  photo: "https://octaneseating.com/wp-content/uploads/2016/08/girl-computer.jpg",    
  city: "Orange",
  state: "CA",
  zipcode: "92572",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Web Development", "Photoshop", "Javascript"],
  cost: "Paid"
  },
  { 
  firstName: "Beatrice",
  lastName: "Douglas",
  email: "bdouglas@gmail.com",   
  password: "qwerty",
  photo: "https://msgraphics.azureedge.net/content/employee_photos/Freedman_250x200.jpg",    
  city: "Orange",
  state: "CA",
  zipcode: "92573",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Stocks", "Trading", "Options"],
  cost: "Free"
  },
  {  
  firstName: "Tom",
  lastName: "Nicholas",
  email: "tnicholas@gmail.com",   
  password: "qwerty",
  photo: "https://msgraphics.azureedge.net/cache/7/0/6/b/9/2/706b9235783ff75970240830539297aba496af82.jpg",    
  city: "Huntington",
  state: "CA",
  zipcode: "92574",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Stocks", "Web Development", "Options"],
  cost: "Paid"
  },
  {  
  firstName:"Roger",
  lastName: "Brown",
  email: "rbrown@gmail.com",   
  password: "qwerty",
  photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/4/005/08c/205/255319d.jpg",    
  city: "Brea",
  state: "CA",
  zipcode: "92575",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Stocks", "Trading", "Options"],
  cost: "Free"
  },
  {  
  firstName: "Yanna",
  lastName: "Gonzales",
  email: "ygonzales@gmail.com",   
  password: "qwerty",
  photo: "http://kokefm.com/wp-content/uploads/2015/07/Bonnie-Bishop-060910-250x200.jpg",    
  city: "Fullerton",
  state: "CA",
  zipcode: "92576",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Guitar", "Drums", "Keyboard"],
  cost: "Free"
  },
  {  
  firstName: "Larry",
  lastName: "Johnson",
  email: "ljohnson@gmail.com",   
  password: "qwerty",
  photo: "http://musicwhynot.com/wp-content/uploads/2017/09/2017-09-02_1217-250x200.png",    
  city: "Stanton",
  state: "CA",
  zipcode: "92577",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Guitar", "Drums", "Keyboard"],
  cost: "Paid"
  },
  {  
  firstName: "Paul",
  lastName: "Johnson",
  email: "pjohnson@gmail.com",   
  password: "qwerty",
  photo: "http://www.oxexpeditions.com/images/SurfGuatemalaSalvador/Guatemala%20Surf%20Main%20Menu%20Tab.jpg",    
  city: "Dana Point",
  state: "CA",
  zipcode: "92577",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Surfing", "Sailing", "Wind Surfing"],
  cost: "Paid"
  },
  {  
  firstName: "Cynthia",
  lastName: "Gonzales",
  email: "cgonzales@gmail.com",   
  password: "qwerty",
  photo: "https://i.pinimg.com/736x/20/15/21/201521159d88f30210324f2bc49c38b3--female-surfers-nike-ad.jpg",    
  city: "Aliso Viejo",
  state: "CA",
  zipcode: "92576",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Surfing", "Sailing", "Wind Surfing"],
  cost: "Free"
  },
  {  
  firstName: "Victor",
  lastName: "Brown",
  email: "vbrown@gmail.com",   
  password: "qwerty",
  photo: "http://www.2girls1asian.com/uploads/1/5/5/4/15546350/1495488.jpeg",    
  city: "Dana Point",
  state: "CA",
  zipcode: "92575",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Japanese", "Vietnamese", "Mandarin"],
  cost: "Paid"
  },
  {  
  firstName: "Diane",
  lastName: "Nicholas",
  email: "dnicholas@gmail.com",   
  password: "qwerty",
  photo: "https://sward.d123.org/wp-content/uploads/sites/7/2016/07/SchiestelMrs-250x200.jpg",    
  city: "Irvine",
  state: "CA",
  zipcode: "92574",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Spanish", "French", "English"],
  cost: "Free"
  },
    {  
  firstName: "Fiona",
  lastName: "Douglas",
  email: "fdouglas@gmail.com",   
  password: "qwerty",
  photo: "https://i0.wp.com/lariatnews.com/wp-content/uploads/2016/12/Breanna-Taboada.jpg?resize=250%2C200",    
  city: "",
  state: "CA",
  zipcode: "Santa Ana",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Soccer", "Exercise", "Juggling"],
  cost: "Paid"
  },
    {  
  firstName: "Natalie",
  lastName: "Lee",
  email: "nlee@gmail.com",   
  password: "qwerty",
  photo: "https://i.pinimg.com/564x/13/56/3a/13563a1d7c9333651ff980045849d637--soccer-pics-soccer-quotes.jpg",    
  city: "Garden Grove",
  state: "CA",
  zipcode: "92572",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Soccer", "Exercise", "Juggling"],
  cost: "Free"
  },
  {  
  firstName: "Charlie",
  lastName: "Smith",
  email: "csmith@gmail.com",   
  password: "qwerty",
  photo: "http://socalpreplegends.com/wp-content/uploads//2015/09/courtney.jpg",    
  city: "Santa Ana",
  state: "CA",
  zipcode: "92571",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Soccer", "Running", "Nutrition"],
  cost: "Paid"
  },
  {  
  firstName: "Gretchen",
  lastName: "Garcia",
  email: "ggarcia@gmail.com",   
  password: "qwerty",
  photo: "https://www.rcm.org.uk/sites/default/files/legacy/midwives_article/250x200-lesley-closing-speech.jpg",    
  city: "Hollywood",
  state: "CA",
  zipcode: "92570",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Presentations", "Public Speaking", "Powerpoint"],
  cost: "Paid"
  },
  {  
  firstName: "Nicole",
  lastName: "Johnson",
  email: "njohnson@gmail.com",   
  password: "qwerty",
  photo: "http://blog.ecu.edu/sites/cfac/files/2015/09/HopkinsWeb.jpg",    
  city: "Sunset Beach",
  state: "CA",
  zipcode: "",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Presentations", "Public Speaking", "Powerpoint"],
  cost: "Free"
  },
  {  
  firstName: "Brin",
  lastName: "Gonzales",
  email: "bgonzales@gmail.com",   
  password: "qwerty",
  photo: "http://r.ddmcdn.com/s_f/o_1/TLC/uploads/2014/07/marissa-lopez-250x200.jpg",    
  city: "Seal Beach",
  state: "CA",
  zipcode: "92576",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Presentations", "Public Speaking", "Powerpoint"],
  cost: "Paid"
  },
  {  
  firstName: "Tanya",
  lastName: "Brown",
  email: "tbrown@gmail.com",   
  password: "qwerty",
  photo: "http://r.ddmcdn.com/s_f/o_1/TLC/uploads/2014/07/jasmine-frank-250x200.jpg",    
  city: "The Valley",
  state: "CA",
  zipcode: "92575",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Cooking", "BBQ", "Baking"],
  cost: "Paid"
  },
  {  
  firstName: "Cathy",
  lastName: "Nicholas",
  email: "cnicholas@gmail.com",   
  password: "qwerty",
  photo: "http://socalpreplegends.com/wp-content/uploads//2015/09/loryn-carter.jpg",    
  city: "San Diego",
  state: "CA",
  zipcode: "92575",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Volleyball", "Basketball", "Exercise"],
  cost: "Free"
  },
  {  
  firstName: "Eden",
  lastName: "Douglas",
  email: "edouglas@gmail.com",   
  password: "qwerty",
  photo: "https://i0.wp.com/socalpreplegends.com/wp-content/uploads//2015/12/OMARISMITH.png",    
  city: "Mission Viejo",
  state: "CA",
  zipcode: "92573",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Volleyball", "Basketball", "Exercise"],
  cost: "Paid"
  },
  {  
  firstName: "Monica",
  lastName: "Lee",
  email: "mlee@gmail.com",   
  password: "qwerty",
  photo: "https://i1.wp.com/socalpreplegends.com/wp-content/uploads//2016/05/ciara-edgewood.jpg",    
  city: "Lake Forest",
  state: "CA",
  zipcode: "",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Volleyball", "Basketball", "Exercise"],
  cost: "Free"
  },
  {  
  firstName: "Brad",
  lastName: "Smith",
  email: "bsmith@gmail.com",   
  password: "qwerty",
  photo: "http://wnixradio.com/wp-content/uploads/2016/09/larry_kudlow-01-250x200.jpg",    
  city: "Tustin",
  state: "CA",
  zipcode: "92571",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Sales", "Networking", "Marketing"],
  cost: "Paid"
  },
  {  
  firstName: "Faith",
  lastName: "Garcia",
  email: "fgarcia@gmail.com",   
  password: "qwerty",
  photo: "http://hospitalitymgt.com/site/wp-content/uploads/2016/03/Ruthie-Web-380-x-304-2.jpg",    
  city: "Santa Margarita",
  state: "CA",
  zipcode: "92570",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Sales", "Networking", "Marketing"],
  cost: "Paid"
  },
  {  
  firstName: "Mary",
  lastName: "Duke",
  email: "mduke@gmail.com",   
  password: "qwerty",
  photo: "http://echslawndale.org/wp-content/uploads/2017/06/DanniWashington2017_headshot-250x200.jpg",    
  city: "Fountain Valley",
  state: "CA",
  zipcode: "92577",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Fashion", "Photography", "Film"],
  cost: "Free"
  },
  {  
  firstName: "Amanda",
  lastName: "White",
  email: "awhite@gmail.com",   
  password: "qwerty",
  photo: "http://rebeccawatson.org/wp-content/uploads/ewpt_cache/250x200_100_1_c_FFFFFF_9911063eb3e84b2231281c1da7cb850a_scan-3.jpg",    
  city: "Costa Mesa",
  state: "CA",
  zipcode: "92576",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Sketching", "Drawing", "Painting"],
  cost: "Paid"
  },
  {  
  firstName: "Sam",
  lastName: "Brady",
  email: "sbrady@gmail.com",   
  password: "qwerty",
  photo: "https://s3-eu-west-1.amazonaws.com/tutors.firsttutors.com/80/79546/med.jpg",    
  city: "Inglewood",
  state: "CA",
  zipcode: "92575",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Math", "Accounting", "Statistics"],
  cost: "Paid"
  },
  {  
  firstName: "Brittney",
  lastName: "Reed",
  email: "breed@gmail.com",   
  password: "qwerty",
  photo: "https://www.exede.com/wp-content/uploads/2016/08/iStock_85597567_SMALL-250x200.jpg",    
  city: "Long Beach",
  state: "CA",
  zipcode: "92574",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Math", "Accounting", "Statistics"],
  cost: "Free"
  },
  {  
  firstName: "Dana",
  lastName: "Mathews",
  email: "dmathews@gmail.com",   
  password: "qwerty",
  photo: "https://ymcanwnc.org/wp-content/uploads/2016/08/2014-06-25_AOF_11979_RGB-250x200.jpg",    
  city: "Watts",
  state: "CA",
  zipcode: "92573",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Weightlifting", "Crossfit", "Nutrition"],
  cost: "Free"
  },
  {  
  firstName: "Luke",
  lastName: "Ross",
  email: "lross@gmail.com",   
  password: "qwerty",
  photo: "https://ymcanwnc.org/wp-content/uploads/2016/06/High-Res-JPG-250x200.jpg",    
  city: "Crenshaw",
  state: "CA",
  zipcode: "92572",
  aboutMe: "I have lots of experience and I would be happy to share it with you",
  skills: ["Weightlifting", "Crossfit", "Nutrition"],
  cost: "Paid"
  }
];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });