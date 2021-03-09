# Star Wars API Tutorial

## What is SWAPI?
The [Star Wars Open API](https://swapi.dev/) is the world's first quantified and programmatically-formatted set of accessible data from the Star Wars films. Formatted in JSON, this data allows you to programmatically collect and measure the data. The data set contains sets of information about the **Films**, as well as thorough breakdowns of all the **People**, **Species**, **Starships**, **Vehicles**, and **Planets** known in the Star WArs University 

## Additional Info
In order to utilize SWAPI, this tutorial will address the following topics:
* How to use SWAPI by making simple API requests
* Finding Films with Luke Skywalker
* Use the API to build a Star Wars Character Generator app

![Character Generator Screenshot](https://raw.githubusercontent.com/christylumm/swapi-tutorial/master/img/swapi-generator.png?token=APY6ZIRFPB3JFCXLFTWPYWLAKED4O "Character Generator Screenshot")

## How to use SWAPI
Being a public REST API, no authentication is required to query and get the data. To retrieve the information from the database through an HTTP request, you must use a GET request. Using cURL, httpie, postman or other data transfer tools, you can transfer data through HTTP requests. 

Any request will be made using SWAPI's Base URL:
`https://swapi.dev/api/`

In order to make specific API requests, you must follow object notation formatting and attach one of the six resources as a string along with the corresponding ID tag of the specific data. 

The six attributes include: 
* `films` _string_ -- The URL root for **Film** resources
* `people` _string_ -- The URL root for **People** resources
* `planets` _string_ -- The URL root for **Planets** resources
* `species` _string_ -- The URL root for **Species** resources
* `starships` _string_ -- The URL root for **Starships** resources
* `vehicles` _string_ -- The URL root for **Vehicles** resources

All API requests use this general format: 

```https://swapi.dev/api/<resource>/:id ```

To start, let's take the following `GET` request:

 ```GET https://swapi.dev/api/films/```

The response will contain all the Star Wars movies to date. If you wanted to see what movie species are stroed, you would use the following API request: 

```GET https://swapi.dev/api/species/```

## Finding Films with Luke Skywalker
To find films featuring Luke Skywalker, you will need to make use of SWAPI's **People** attribute:

```GET https://swapi.dev/api/people```

SWAPI's **People** attribute can be fildtered through its **name** property by making use of the `search` parameter. This will allow you to make a query to search for Luke Skywalker.

```GET https://swapi.dev/api/people/?search=luke```

This will return the following JSON file: 

```
{
 "name": "Luke Skywalker",
 "height": "172",
 "mass": "77",
 "hair_color": "blond",
 "skin_color": "fair",
 "eye_color": "blue",
 "birth_year": "19BBY",
 "gender": "male",
 "homeworld": "http://swapi.dev/api/planets/1/",
 "films": [
   "http://swapi.dev/api/films/1/",
   "http://swapi.dev/api/films/2/",
   "http://swapi.dev/api/films/3/",
   "http://swapi.dev/api/films/6/"
 ],
 "species": [],
 "vehicles": [
   "http://swapi.dev/api/vehicles/14/",
   "http://swapi.dev/api/vehicles/30/"
 ],
 "starships": [
   "http://swapi.dev/api/starships/12/",
   "http://swapi.dev/api/starships/22/"
 ],
 "created": "2014-12-09T13:50:51.644000Z",
 "edited": "2014-12-20T21:17:56.891000Z",
 "url": "http://swapi.dev/api/people/1/"
}
```

The object contains information on Luke Skywalker including the **film** property, which lists the IDs of all the films that Luke Skywalker appeared in. In order to see information about each movie, you must make an additional API request for the specific film. 

``` GET https://swapi.dev/api/films/1/```

## Star Wars Character Generator
To put SWAPI to use, let's explore the application of the API by building a simple Star Wars Character Generator using HTML, CSS, and JavaScript.

The project will contain three files: 
* app.js
* index.html
* style.css

For this app, you will be using the third party library called `axios` to make HTTP requests. This library allows you to use Promises to handle asynchronous requests. To use `axios`, navigate to the [axios library](https://cdnjs.com/libraries/axios) and copy the script tag into `index.html`.

```<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js" integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ==" crossorigin="anonymous"></script>```

The base HTML page will look like this:
![Base App](https://raw.githubusercontent.com/christylumm/swapi-tutorial/master/img/app-base.png?token=APY6ZIQX3PXEEK44PCZGMFTAKEC3I "Base App")

Below is a simple example of how to make a `GET` request to the **People** attribute using `axios`:

```
axios.get(apiURL).then(function(response) {
   updateInfo(response.data)
})
```

To present the fetched data from SWAPI, you need to create two different functions: 
1. `getData()` -- To fetch data from the API
2. `updateInfo()` -- To display the data on the webpage

In order to generate a random character's name each time the button is clicked, you must generate a random number to correspond with each character in the API using `Math.random`.

```
function getData() {
 let randomNumber = Math.floor((Math.random() * 82) + 1);
 
 let apiURL = 'http://swapi.dev/api/people/' + randomNumber;
 
 axios.get(apiURL).then(function(response) {
   updateInfo(response.data)
 })
}
```

This function will get passed each time the button is clicked by adding an event listener. 

```button.addEventListener('click', getData)```

In order to display the data on the webpage, you will need to access the JSON object by using dot notation for the specific property you're looking for. In this case, this will be the character's name. 

```
let character = document.querySelector('#character');
 
function updateInfo(data) {
 character.innerText = data.name
}
```

Clicking the "Generate Character" button will now generate a random Star Wars character. Other attributes may be added in a similar fashion, so long as the property label matches what is listed in the API. 

For example, writing `data.birthYear` will not work since the API lists the birth year as `birth_year`. The correct way to access this data is `data.birth_year`. 

The full code for this project is available in this repo.

## Wrap Up
With close to an instant response, the Star Wars API offers many possibilities for populating your own apps and testing app functionality with Star Wars data like moves, actors, characters, and vehicles. 