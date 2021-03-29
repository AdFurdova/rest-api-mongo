# REST API mongo

This is Ad's first REST API with mongo.

# Before start

- Please make sure that you have:
 - Node.js installed (https://nodejs.org/)
 - MongoDB installed and running locally (https://www.mongodb.com/)
   - Using Windows, just open the terminal at where you installed mongo and run `mongod.exe`
 - Run `npm install` or `yarn` in your root project folder

# Start

To run the project, please use a command line the following:
 - `npm start`
    - It will run the server at port 3600.
 - `npm run dev`
    - This is for development purposes.


# Testing
```
curl -X POST -H 'Content-type: application/json' -d '{"fullName": "Elon Musk Jr.", "expectedSalary": 0, "listOfSkills": ["python"]}' http://localhost:3600/candidates
```

```
curl -X DELETE http://localhost:3600/candidates/<candidateID>
```

```
curl -X POST -H 'Content-type: application/json' -d '{"jobTitle": "Backend Dev", "jobSalary": 0, "fullAdText": "Work with us!"}' http://localhost:3600/job_ads
```

```
curl -X POST http://localhost:3600/candidates/606241cdee1529f3f4668ac6/job_ads/6062430aa3da8ff435723707
```

