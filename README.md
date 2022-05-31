
The application is a calendar for 2022.

The months are changed using the 'Prev' and 'Next' keys.
 
Each day is expressed by a number in the month and contains the name of the asteroid approaching the earth 
and 'About' button.

If the name of the asteroid is inside the green field for a certain day, the asteroid does not pose a threat, but if it is inside the red background ... beware :)

Clicking on the 'About' button opens a window with additional information about that asteroid.

Information is loaded using NASA's api.

You should be aware that an average of 30 calls per month are established, so it is to be expected that the loading and updating of the calendar will slow down after the change of the month.

Also the code does not include the api key which is otherwise located in the .env file.

You can get one for free on the Nasa api page.

.env variable should be called REACT_APP_ API_KEY as 'key' variable located in 'Day.js' component suggest.
