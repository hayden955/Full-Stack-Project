# Beach Dayta (411project)

# **Commands to Run Local sServer That Displays the Project as a Webpage:**
##### cd ./411project/frontend 
##### npm install (installs all the packages/modules used - we didn't push it to github due to size)
##### npm start (will open a page on your browser (**NOTE:** may take a bit of time to load the page)
---------------
# ***(IMPORTANT)*** How We Met the 4 Project Requirements:

1.) **It must utilize a database**

Our project stores user data for the user’s convenience and to save profile information. We utilize Firebase (a Google application) to store a user’s liked beach locations as well as personal information such as their phone number for authentication. 

2.) **It must correlate at least two publicly available data sets via API from the Internet.** 

We utilize three APIs for the project (only two counts towards the API total). The first is Google Cloud Platform API, which has a variety of purposes such as storage. For additional information on the Google Cloud Platform API, visit https://cloud.google.com/apis/docs/overview for documentation. The second publicly available API used was the Open Weather Map API. This is a free to use API (with options for paid subscriptions) and can be used to gather current weather and future forecasts based on location. Documentation can be found here: https://openweathermap.org/guide.

We also used Google Places API, which is an API that returns information on places (includes establishments, prominent points of interests, etc) using HTTP requests. Documentation can be found here: https://openweathermap.org/guide. (NOTE: since Geolocation services are stated not to count towards our API total, this is just an extra API that we used and our project still fulfills the 2 API requirement using the previous 2 APIs).

3.) **It must use third-party authentication**

For third-party authentication, our application utilizes the texting/SMS method. To authenticate a user, the user gets a text-message with a code that he or she must enter into the site. We decided on this method of authentication over something like  Twitter or Google login for it’s convenience for the user (more people likely have a phone than Google account). Furthermore, authentication via SMS also has the added benefit of alerting the user every-time someones tries to access the account, so the user would be alerted  to any forced attempts to enter the account because he or she would see the SMS/text messages.

4.) **It must have a decoupled architecture.** 

Our frontend consists of Javascript and CSS with React and it’s decoupled from our backend and uses a RESTful interface. Our backend is done in Python.
