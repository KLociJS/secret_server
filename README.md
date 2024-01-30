# Secret Safe

## Live website:

[Visit Live!](https://klocijs.com/)

## Description

Secret Safe is a lightweight app for sharing secrets.
Share your secrets as text and access them with secret code!

## Key Features:

- Easy Sharing: Share secrets with a unique code that expires after a specified time or a set number of views.
- Security: Secrets are encrypted on the server, ensuring data confidentiality.
- Limited Access: Define expiration time or view limits for added control over secret accessibility.
- User-Friendly Interface: Intuitive and responsive design for a seamless user experience.

## Installation:

1. Clone repository
2. install dependencies:
   - cd client
   - npm i
3. Create environment variables:
   - on backend, create a appSetting.json file based on the sample in the properties folder:
     - example key: R8zUuYScEm1qmtP7xLvnVbFyZdYK1wvX
     - example connection string: "Host=localhost;Port=5432;Database=secretdb;Username=postgres;Password=yourpassword"
   - on frontend, create .env.development file based on the sample:
     - example: REACT_APP_API_URI=https://localhost:7187/
4. Set up database (postgresql), migrate db on backend:
   - migrate database: dotnet ef migrations add Initial
   - update database: dotnet ef database update
5. Start project:
   - react dev server: npm run start
   - start api in IDE

## Tech:

- React.js
- React Router
- ASP .NET Web API
- Entity framework core (ORM)
- PostgreSQL

## Preview:

### Landing page

![Landing page](https://i.imgur.com/oMwc2Do.png)

### Secret form

![Secret form](https://i.imgur.com/4TTLvKO.png)

### Secret successfully saved

![Secret saved](https://i.imgur.com/bOZWBAU.png)

### Retrieve secret

![View secret](https://i.imgur.com/iY4ZL3Y.png)

### Secret not found

![View secret error](https://i.imgur.com/hwNy7ta.png)

### Secret successfully retrieved

![Retrieved secret](https://i.imgur.com/TdJwlsG.png)
