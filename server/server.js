const cors = require('cors');
const multer = require('multer');
const bodyParser = require("body-parser")

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const routes = require('./controllers');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//       cb(null, file.originalname);
//   },
// });
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
          cb(null, path.join(__dirname), "/uploads/");
      },

  filename : (req, file, cb) => {
      cb(null, file.fieldname);
  },

});

const upload = multer({ storage: storage });
const fileUpload = upload.fields([{name: "image-file", maxCount : 1}]);

// app.post("/files", Data.any("files"), (req, res) => {
//   if (res.status(200)) {
//       console.log("Your file has been uploaded successfully.");
//       console.log(req.files);
//       res.json({ message: "Successfully uploaded files" });
//       res.end();
//   }
// });
// const upload = multer({ dest: "./uploads" });

app.route('/').post(fileUpload, (req, res) => {
  // upload.single("files"), uploadFiles);
// function uploadFiles(req, res) {
//   console.log(req.body);
//   console.log(req.files);
  res.json({ message: "Successfully uploaded files" });
})



// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);