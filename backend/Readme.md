# Running the project

## Required:

- .env file (with ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET variables)
- mysql database (edit the ormconfig.json)

## Run migration with:

```
npm run typeorm migration:run
```
# Add the truffle-config.js file to your ganache server in the "Contracts" tab

## API End-Points

- /auth/login
- /auth/check
- /auth/logout
- /auth/signup
- /polls/
- /polls/start
- /polls/status
- /polls/end
- /polls/reset
- /polls/voters
- /polls/vote
- /users/all
- /users/verify
- /users/delete/:id
