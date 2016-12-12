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

This is version 1.0 of the app. As of now it pulls data from the Quandl API and displays that
information on a responsive page, So it is at the moment a very basic watchlist.

As of now, I have been working with D3js and have been figuring out ways to display the data in chart form.

I am also working on restyling the app to be more aesthetically pleasing. I've been told that financial apps
are difficult to style, and I can now see why, at the moment my priority is to simply make the information easy
to read.

