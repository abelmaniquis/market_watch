##MARKET SOURCE:
Check out the Demo Here: https://safe-oasis-55337.herokuapp.com/

Introduction
=============
Market Source is an app built with React and Nodejs. It utilizes the Quandl API to allow users to create a watch list of stocks
that update daily.

Use Case
=============
This app allows a user to keep track of their stock market investments through their account. The app tracks the opening and
closing values of the stocks inside of the user's portfolio, as well as the stock's daily trend so that the user can make a
proper decision on how to further invest in the market.

Technical
=============
*This App is built using React, MongoDB and Nodejs with Express, it utilizes JSX and Ecmascript 6.
*CSS Styling is done through Sass.
*Market Source uses Passportjs for authentication, and bcrypt for secure password storage.
*Data is stored in a user object, and stocks are stored as an Array within the userSchema, this data
 is given to the Quandl API which returns market information.

Development Roadmap
===================

This is version 1.0 of the app. There are still improvements to be made, and features to be added.
I have much bigger plans for the app, with the final goal of turning it into a full fledged market
simulation. Some of the updated features will include:

*A user wallet that adjusts itself depending on the stocks that the user has bought and sold.
*The ability to buy multiple quantities of a stock.
*Graphs that showcase a stock's price overtime, to be built using the D3 js library

