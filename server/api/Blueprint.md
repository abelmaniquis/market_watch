Here's an example of what I want the API object to look like:

{
  login:{
    username: Abel,
    password: 12345
  },
  info:{
    firstName: Abel,
    lastName: Maniquis,
    emailAdress: abelmaniquis@gmail.com
  },
  watchlist:{
    stocks: [GOOG,NFLX,TSLA,AMZN,BRK_B]
  }
}

Should be able to add stock to watchlist, and remove from watchlist.

CRUD OPERATIONS:

{
  "GET /users":{
    "desc": "returns all users",
    "response": "200 application/json"
    "data": [{}, {}, {}]
  },
  
  "GET /users/:id":{
    "desc": "returns one user represented by its id",
    "response": "200 application/json",
    "data": {}
  }
  
  "POST /users":{
   "desc": "create and return a new user using the posted object as a user" 
   "response":"201 application/json",
   "data":{}
  }
  
  "PUT /users/:id":{
    "desc": "updates and returns the matching user with a new stock",
    "response": "200 application/json",
    "data":{}
  }
  
  "DELETE /users/:id":{
   "desc": "deletes and returns a matching user",
   "response": "deletes and returns the matching user",
   "data":{}
  }
}
