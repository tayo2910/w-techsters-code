const { connection } = require("../database");
const bcrypt = require("bcryptjs");

function registerUser(req, res) {
  const hash = bcrypt.hashSync(req.body.Password, (saltRounds = 10));
  const speakers = [{ 
    speakerQuestion: "Hi", 
  
}, { 
    speakerAnswer: "Hello"}]


app.get("/", function (req, res) { 
      res.render("chatroom", { 
          data: speakers
      }) 
  }) 
 
  
  const User = {
    Name: req.body.Name,
    Email: req.body.Email,
    Password: hash,
  };

  // var users = [];
  // var checkIfExists = ` SELECT * FROM shoppers WHERE Email  = ? `;
  // connection.query(checkIfExists, req.body.Email, (err, results) => {
  //   if (err) {
  //     console.error("Error:", err);
  //   } else {
  //     users = results;
  //   }
  // });

  // if (users.length > 0) {
  //   return res.status(409).send('User already exists')
  // }
  var insertDataQuery = "INSERT INTO shoppers SET ?";
  var dataToInsert = User;

  connection.query(insertDataQuery, dataToInsert, (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      console.log("Data inserted successfully");
    }
  });

  res.redirect("/submit");
}

function loginUser(req, res, next) {
  // check if user with req.body.email exists
  var user;
  var checkIfExists = ` SELECT * FROM shoppers WHERE Email  = ? LIMIT 1`;
  connection.query(checkIfExists, req.body.Email, (err, results) => {
    if (err) {
      console.error("Error:", err);
    } else {
      user = results[0];
      if (user) {
        // compare the req.body.password with the user from step 1
        bcrypt
          .compare(req.body.Password, user.Password)
          .then(function (result) {
            if (result) {
              console.log("Login successful");
              req.user = user
              next()
            } else {
              console.error("Password is incorrect");
              res.status(404, "Login Unsuccessful");
              res.redirect("/login?error=incorrectPassword");
            }

          });
      } else {
        console.error("No user with such email");
        res.redirect("/login?error=incorrectEmail");
      }
      // res.redirect('/submit');
    }
  });
}

module.exports = { registerUser, loginUser };
