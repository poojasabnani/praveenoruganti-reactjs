Praveen Oruganti User Registration React App with Express JS Backend API and MYSQL

1. Create client using React 
npx create-react-app client
cd client
npm start
2. Create server using Express Js
npx express-generator server
cd server
npm install
npm install --save cors
npm start

- git init
- git remote add origin https://github.com/praveenoruganti/praveenoruganti-user-registration-app-mysql.git
- git add .
- git commit -m "updated"
- git push origin master


For creation of User Details Table
create table USER_DETAILS(USER_DETAILS_ID INT NOT NULL AUTO_INCREMENT,
USER_NAME VARCHAR(20) NOT NULL,
USER_PASS VARCHAR(20) NOT NULL,
EMAIL_ID VARCHAR(50) NOT NULL,
LOCATION VARCHAR(20) NOT NULL,
CREATION_DATE TIMESTAMP NOT NULL,
PRIMARY KEY(USER_DETAILS_ID));
