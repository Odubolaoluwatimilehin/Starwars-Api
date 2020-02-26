## Starwars-Api Documentaation

To consume RestAPI

Append appropriate request to get response.

```bash
BaseURl: https://starwars-2020.herokuapp.com/api/movie/
```

**Endpoints**

**GET**     / -- Get a all film resource<br> 
**GET**     /:id -- Get a specific film resource<br> 
**POST**    /:id  -- Add a comment<br> 
**DELETE**  /:id -- Delete a comment<br> 



To get the list of movie 

**GET** https://starwars-2020.herokuapp.com/api/movie/

would return response of all movie.

```bash
{
    "status": "ok",
    "data": [
        {
        "_id": "5e56a1dc9de7450017f7d75a",
        "title": "A New Hope",
        "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "created": "2014-12-10T14:23:31.880Z",
        "__v": 0,
        "comment": {
            "commentDate": "2020-02-26T17:34:24.462Z",
            "_id": "5e56ade1da7c7122267b4298",
            "comment": "My very First Comment",
            "__v": 0
        },
        {
            "_id": "5e56a1dc9de7450017f7d75f",
            "title": "The Empire Strikes Back",
            "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
            "created": "2014-12-12T11:26:24.656Z",
            "__v": 0
        }
}
```

To get a specific movie

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

To get add a comment

**POST** https://starwars-2020.herokuapp.com/api/movie/5e56a1dc9de7450017f7d75a

would return response of comment added to a movie.

```bash
{
    "status": "ok",
    "data": {
        "commentDate": "2020-02-26T17:34:24.462Z",
        "_id": "5e56aca3da7c7122267b4297",
        "comment": "My very First Comment",
        "__v": 0
    }
}
```

To get delete a comment.

**DELETE** https://starwars-2020.herokuapp.com/api/movie/5e56a1dc9de7450017f7d75a

would return response of successful.

```bash
{
    "status": "ok",
    "message": "Record Deleted"
}

```


### The following where implemented

- rest API endpoints for listing the names of Star Wars
movies along with their opening crawls adding and
listing anonymous comments for a movie.
- data from third party api was gotten and data required filterd. 
- Movie names in the movie list endpoint where sorted
- Comments should be stored in a database
- Error responses where returned in case of
errors 
- Comments should be retrieved with UTC date-time they were stored
- Comment length should be limited to 500 characters


### The following was not implemented
- Character list requirements.
- Public IP address of the commenter was not added.

