const db = require('../database');

module.exports = (app) => {
  app.get("/api/v1_0/user", function (req, res) {
    const queryString = `SELECT USER_NAME,EMAIL_ID,LOCATION FROM USER_DETAILS;`;
    console.log("Select Query Fired is: %j", queryString);
    db.query(queryString).then((response) => {
      console.log("Select Query Fired is Successful " + queryString);
      var getObject = JSON.parse(JSON.stringify(response));
      res.send(getObject);

    }).catch((err) => {
      console.log("Select Query Fired is Failed" + queryString + " And Error Response is: " + err);
      res.sendStatus(500);
    });
  });

  app.post("/api/v1_0/checkUser", function (req, res) {
    const queryString = `SELECT USER_DETAILS_ID FROM USER_DETAILS where \
     USER_NAME='${req.body.userName}' OR EMAIL_ID= '${req.body.emailId}';`;
    console.log("Select Query Fired is: %j", queryString);
    db.query(queryString).then((response) => {
      console.log("Select Query Fired is Successful " + queryString);
      var getObject = JSON.parse(JSON.stringify(response));
      var objectcheck = typeof getObject[0];
      if (!(objectcheck === 'undefined')) {
        if ('USER_DETAILS_ID' in getObject[0]) {
          console.log("User Already Exists");
          res.send("true");
        }
      } else {
        res.send("false");
      }

    }).catch((err) => {
      console.log("Select Query Fired is Failed" + queryString + " And Error Response is: " + err);
      res.sendStatus(500);
    });
  });


  app.post("/api/v1_0/user", function (req, res) {
    const queryString = `INSERT INTO USER_DETAILS(USER_NAME,USER_PASS,EMAIL_ID,LOCATION,CREATION_DATE) VALUES`;
    const valueString = `( '${req.body.userName}','${req.body.userPass}','${req.body.emailId}','${req.body.location}', NOW());`;
    const inserQuery = queryString + valueString;
    db.query(inserQuery).then((response) => {
      console.log("Insert Query Fired is Successful " + inserQuery);
      res.sendStatus(200);
    }).catch((err) => {
      console.log("Insert Query Fired is Failed" + inserQuery + " And Error Response is: " + err);
      res.sendStatus(500);
    });
  });

  app.post("/api/v1_0/getUserInfoFromDB", function (req, res) {
   // const queryString = `SELECT USER_NAME,EMAIL_ID,LOCATION  FROM USER_DETAILS where EMAIL_ID= '${req.body.emailId}';`;
   const queryString = `SELECT USER_NAME,EMAIL_ID,LOCATION  FROM USER_DETAILS `;
   db.query(queryString).then((response) => {
      console.log("Select Query Fired is Successful " + queryString);
      var getObject = JSON.parse(JSON.stringify(response));      
      res.send(getObject);
    }).catch((err) => {
      console.log("Select Query Fired is Failed" + queryString + " And Error Response is: " + err);
      res.sendStatus(500);
    });
  });
}

