# Exercises for Valley Software Developers [GraphQL Meetup](https://www.meetup.com/Valley-Software-Developers/events/253658772/)

## Setup Steps

1. Install a recent version of [nodejs](https://nodejs.org/)
2. `cd` into the `exercises` folder and run the command: `npm install`
3. Rename the file `example.env` to just `.env`

## Starting the server

To start the nodejs/graphql server, cd into the `exercises` folder and run the command `npm start`

### First Challenge Instructions (You'll be prompted when to do this)

1. Create a new field in the GraphQL server named `hello`.
2. Create a resolver function for this new field, and have the function return the string `World`
3. Start the server by keying `npm start`
4. Open up the [GraphQL playground](http://localhost:5000/graphql) and run the following GraphQL query:

```
{
  hello
}
```

which should return

```
{
  "data": {
    "hello": "World"
  }
}
```
