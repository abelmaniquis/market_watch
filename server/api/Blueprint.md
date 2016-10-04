https://www.draw.io/#G0B3FOEHElpFfKYm9XLTZsZGM1Wms

Here's an example of what I want the API object to look like:

{
  login:{
    username: Abel,
    password: 12345,
    required: true
  },
  info:{
    firstName: Abel,
    lastName: Maniquis,
    emailAdress: abelmaniquis@gmail.com
  },
  
  cash: 100000,
  
  portfolio:{
    stocks: [
    {name:GOOG,quant:30},       // The user buys a certain amount of stock in a company
    {name:NFLX,quant:17},       // This number is multiplied by the price of the stock and then subtracted from the user's cash. 
    {name:TSLA,quant:5},        // When the price changes, the change is multiplied by the current value and then added to the user's cash.
    {name:AMZN,quant:7},
    {name:BRK_B,quant:6}
    ]
  }
}


Should be able to add(buy) stock to portfolio, and remove(sell) stock from portfolio

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
    "desc": "updates and returns the matching user with new stock",
    "response": "200 application/json",
    "data":{}
  }
  
  "DELETE /users/:id":{
   "desc": "deletes and returns a matching user",
   "response": "deletes and returns the matching user",
   "data":{}
  }
}
