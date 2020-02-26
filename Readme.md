# Starwars-Api

Starwars-Api web app micro-service is  buillt with Nodejs and Express framework employed to manipulate specific data gotten from their third party api.

## Installation
Endpoint can be consumed either from a remote server which is hosted on [Heroku](heroku.com) and database hosted on [MonogAtlas](https://www.mongodb.com/cloud/atlas)

 or 

Application installed locally on your system and Database set up locally. 


## Usage

#### To get endpoints of API check api documentation provided in the [Documentation.md](https://github.com/Odubolaoluwatimilehin/Starwars-Api/blob/master/Documentation.md) file on the repo.


### To consume from a remote server
 
```bash
 URl of remote endpoint deployed on Heroku
```
[https://starwars-2020.herokuapp.com/](https://starwars-2020.herokuapp.com/)

Append appropriate request to get response.
I.E To get a specific movie

**GET** https://starwars-2020.herokuapp.com/api/movie/5e56a1dc9de7450017f7d75a

would return response of a specific movie.

```bash
{
    "status": "ok",
    "data": {
        "_id": "5e56a1dc9de7450017f7d75a",
        "title": "A New Hope",
        "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "created": "2014-12-10T14:23:31.880Z",
        "__v": 0
    }
}

```


  #### OR

### To install locally on your system.

Clone this file to a location on your system. [Github repo](https://github.com/Odubolaoluwatimilehin/Starwars-Api.git).


You need a web browser or postman installed to test response of RestAPI.

You need MongoDB dabtabse installed on your local system or install it as a dev dependency.

NPM should also be installed for you to manage application dependencies.


#### After cloning repository and setting up.

Then run npm install to install dependencies.

```bash
$ npm install
```

Create .env file in root addresse and set credentials to connect to your database.

then serve your application


```bash
$ npm start
```
 
A successful serve would display a url in the terminal 


```bash
DB connection is successful!
App running on port3000
```



To consume RestAPI

Append appropriate request to get response.
I.E To get a specific movie

**GET** https://starwars-2020.herokuapp.com/api/movie/5e56a1dc9de7450017f7d75a

would return response of a specific movie.

```bash
{
    "status": "ok",
    "data": {
        "_id": "5e56a1dc9de7450017f7d75a",
        "title": "A New Hope",
        "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "created": "2014-12-10T14:23:31.880Z",
        "__v": 0
    }
}

```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
