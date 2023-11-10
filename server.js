// importing modules
const web = require("express");
const bodyParser = require('body-parser')
const app = web();
const { authRoute } = require("./routes/auth.route");
const { connectDataBase, connection } = require("./database");

connectDataBase();

app.use(web.json()); // for parsing application/json
app.use(web.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/index", (req, res) => {
  res.render("index", { title: "My Shop Project" });
});

app.get("/submit", (req, res) => {
  res.render("submit", { title: "Form submitted successfully" });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/chatroom", (req, res) => {
  const guest = { Name: "Guest", Email: "guest" }
  const speakers = [{ 
    speakerQuestion: "Hi", 
   
}, { 
    speakerAnswer: "Hello"}]

  res.render("chatroom", { user: guest, speakers } );
});

app.get("/display", (req, res) => {
  const sql = "SELECT * FROM shoppers";
  connection.query(sql, (err, data) => {
    if (err) throw err;
    // res.status(200).json({ data });
    res.render("display", { title: "Data Display", userData: data });
  });
});


app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({    
     extended: true
}))
// app.use(dataBaseRoute)
app.use("/auth", authRoute);

app.listen(3000, function (error) {
  if (error) {
    console.log("something went wrong");
  } else {
    console.log("🎶🎶Home!🔥🔥🔥");
  }
});
