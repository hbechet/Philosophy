# Philosophy WebApp

## Backend API Server
Local server (for double checking code and updating live server in Render):
https://github.com/hbechet/Philo-server

Sample URL for Production server:
https://philo-server.onrender.com/api/philos/all

## Users credentials for complete CRUD test purposes
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

> [!TIP]
> Use Google Chrome in order to avoid known bug below.

## Known bugs
1. Mozilla Firefox is showing very annoying errors, but the features work fine (still working to fix this). Google Chrome / Safari is not showing these errors.
    - "ResizeObserver loop completed with undelivered notifications."
2. Negative Dates (for BC dates) are not working by default. Function still needed.
3. Header and Footer images disappear: NS_BINDING_ABORTED

## New feature backlog
1. Allow to modify dates and image from Philosophers.
2. Allow to choose from Schools at new Philo creation.
3. Allow to define list of ideas / quotes at new Philo creation.
4. Allow to modify philosophers list from School of Thoughts.
5. Allow to choose from Philosophers at new School creation.
