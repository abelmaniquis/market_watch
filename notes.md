STATUS CODES FROM POSTMAN:

get(/api/users/signup): 200
post(/api/users/signup): This username already exists
get(/api/users/login): 200
post(/api/users/login): 403

put(api/users/stock): 404

          //React works with immutable structures
          //mutating this.state, There are things that are immutable
          //strings are immutable, objects are not.
          //On line 27, you are changing the value of the array
          //arrays are changeable.
          //In react, state is supposed to be immutable, you cannot change it yourself
          //You need to treat this state as if it doesn't have a push method.
          
          //We should be using setstate on line 27
          //Take a copy of a previous array, and return a new
          
          //BIG PICTURE: You should not mutate state
          //How to distinguish: in general: start your line with this.setState, this.state should be read only
          //.push modifies an existing array, concat does not.

Define all of my state here. (state must be in the parent)

The state must be here.

(In Redux all state belongs to store)

create a function on the profile.

use your stocks array here,
Must pass a function through props when button pushed on UserStockData
You call a function which will be on the profile.
This function will change the state on the parent.

children and parents in react

http://stackoverflow.com/questions/26176519/reactjs-call-parent-function

http://codepen.io/errorsmith/pen/mVQxMd?editors=0010

if you are on different files, you will be on a different scope,
so you will have to use bind(this)
