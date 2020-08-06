// connect to SQL and Inquirer
var mysql = require("mysql");
// put connection at the top

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Cbc2020!",
  database: "falesforce_DB"
});

// Create questions for inquirer .prompts and .thens

// Create tables in SQL for these Dept/ Employees/ Roles
    // Seeds - for testing
    
// Create helper Functions to use in the .then with inq Prompts as callbacks
