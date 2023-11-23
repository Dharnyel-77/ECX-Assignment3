# ECX-Assignment3
ENDPOINTS PERFORMING CRUD OPERATIONS WITH ONE MIDDLEWARE
```
Install dependencies including express, body-parser, nodemon by using 'npm install'
```
Next, we then create an app.js file where we run our server.

We go on by importing our dependencies in the app.js file using 'require' as shown;
```
const express = require('express')
const app = express();
```

MIIDDLEWARE
```
app.use(body-parser.json());
```
This is necessary to convert the entries into JSON format when a request is sent.

ROUTES
```
app.get('/', (req,res)=>{
})
```
To send requests through specific paths in the app. The GET request helps to retrieve data already saved, the POST request helps to create or add data, the PUT request updates data while the DELETE request deletes data from the database.


CUSTOM MIDDLEWARE
```
const rating = (req, res, next) => {
  console.log("It is rated 8.9/10 by IMDb");
  next();
};
```
This custom middleware was added to illustrate how middlewares work in backend development. It showed that the middleware is executed before the request and response functions.



And lastly, to connect to the server, app.listen is used as shown:
```
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
We log it to the console so we can see that the server is truly running.
