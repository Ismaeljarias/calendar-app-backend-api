# Calendar App - Backend

Node JS, Express, JWT to work with my react calendar app

For locally setup please create a `.env` file and configure the next variables:

- PORT
- DB_CNN = MongoAtlas DB
- SECRET_JWT_SEED

[Heroku API](https://calendarapp-backend.herokuapp.com/)

## API Documentation

The application is built under a small NodeJS backend, and uses the following endpoints:

<table>
  <tr>
    <th>METHOD</th>
    <th>ENDPOINT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>localhost + /api/auth/new</td>
    <td>Create an user</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>localhost + /api/auth/</td>
    <td>Log in</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>localhost + /api/events/</td>
    <td>Gets all event, Remember to add the JWT token `x-token` in the header.</td>
  </tr>

  <tr>
    <td>POST</td>
    <td>localhost + /api/events/</td>
  <td>Create an event, Remember to add the JWT token `x-token` in the header.</td>
  </tr>

  <tr>
    <td>PUT</td>
    <td>localhost + /api/events/:id</td>
  <td>Remember to add the JWT token `x-token` in the header.
and also keep in mind just the event creator can update the event.</td>
  </tr>

  <tr>
    <td>DELETE</td>
    <td>localhost + /api/events/:id</td>
  <td>Remember to add the JWT token `x-token` in the header.
and also keep in mind just the event creator can delete the event.</td>
  </tr>
 
</table>
