# apollo-server-type-script
Boilerplate GraphQL server with Apollo server 2. 

## Docker
Start docker container :

```ssh
docker-compose up -d
```

Stop docker container :

```ssh
docker-compose stop
```

### Neo4j
Open http://localhost:7474/browser/
Loggin with neo4j/neo4j 
Change password: neo4j / Geraudi;01

#### Import data
Copy csv file in docker/neo4j/import/
Open http://localhost:7474/browser/
Cypher :

```
LOAD CSV WITH HEADERS FROM "file:///users.csv" AS row
CREATE (n:User)
SET n = row
```

Documentation: https://neo4j.com/developer/guide-import-csv/


## Playground
http://localhost:4000/

```
mutation AddUser {
  addUser(email: "mail3@new.com", password: "1234", firstName: "ok3") {
    email
  }
}

query getAllUsers {
  users {
    email
    firstName
    lastName
  }
}
```

## Resources

#### Dotenv
https://blog.morizyun.com/javascript/library-typescript-dotenv-environment-variable.html

### Graphql Apollo

#### Example:
https://github.com/apollographql/GitHunt-API/ : knex

#### Doc:
https://www.apollographql.com/docs/guides/access-control.html
https://www.apollographql.com/docs/graphql-tools/connectors.html

