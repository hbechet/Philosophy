# Philosophy WebApp

## Backend API Server
Local server (for double checking code and updating live server in Render):
https://github.com/hbechet/Philo-server

Sample URL for Production server:
https://philo-server.onrender.com/api/philos/all

### Users credentials for complete CRUD test purposes
Admin
```
email: haritz.bechet@gmail.com 
password: haritz
```
Client
```
email: lorena@gmail.com 
password: lorena
```

### Known bugs
1. Images are not uploading to Cloudinary from React.
2. Negative Dates (for BC dates) are not working by default. Function still needed.
3. Mozilla Firefox is showing very annoying errors, but the features work fine. Google Chrome / Safari is not showing these errors.