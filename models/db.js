var mysql   = require('mysql');


/* DATABASE CONFIGURATION */
var connection = mysql.createConnection({
    host: 'cwolf.cs.sonoma.edu',
    user: 'mdelaserna',
    password: '003543818'
    //user: 'your_username',
    //password: 'your_password'
});

var dbToUse = 'mdelaserna';

//use the database for any queries run
var useDatabaseQry = 'USE ' + dbToUse;

exports.GetAllView = function(callback) {
    connection.query('select * from GetAllView',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}



exports.GetByID = function(landmarkInfo, callback) {
    var query = 'select Landmark_Name, City, Country, Type_Name from Landmark WHERE Landmark_Name=' + landmarkInfo.Landmark_ID + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


// LANDMARK
//create the User table if it does not exist
connection.query(useDatabaseQry, function (err) {
    if (err) throw err;
    //var DropTableQry = 'DROP TABLE IF EXISTS Landmark';
    var createTableQry = 'CREATE TABLE IF NOT EXISTS Landmark('
        + 'Landmark_ID INT AUTO_INCREMENT PRIMARY KEY'
	+ ',Landmark_Name VARCHAR(50)'
        + ',City VARCHAR(50)'
        + ',Country VARCHAR(50)'
        + ',Type_Name Varchar(50)'
        + ')';
    connection.query(createTableQry, function (err) {
        if (err) throw err;
    });
});


//  BUDDY
//create the User table if it does not exist
connection.query(useDatabaseQry, function (err) {
    if (err) throw err;
    //var DropTableQry = 'DROP TABLE IF EXISTS Landmark';
    var createTableQry = 'CREATE TABLE IF NOT EXISTS Buddy('
        + 'Phone_Num VARCHAR(20) PRIMARY KEY'
	+ ',Buddy_Name VARCHAR(50)'
        + ')';
    connection.query(createTableQry, function (err) {
        if (err) throw err;
    });
});


// HOTEL
//create the User table if it does not exist
connection.query(useDatabaseQry, function (err) {
    if (err) throw err;
    var createTableQry = 'CREATE TABLE IF NOT EXISTS Hotel('
        + 'Hotel_ID INT AUTO_INCREMENT PRIMARY KEY'
	+ ',Hotel_Name VARCHAR(50)'
	+ ',Room_Rate VARCHAR(50)'
        + ',City VARCHAR(50)'
        + ',Country VARCHAR(50)'
        + ')';
    connection.query(createTableQry, function (err) {
        if (err) throw err;
    });
});

// RESTAURANT
//create the User table if it does not exist
connection.query(useDatabaseQry, function (err) {
    if (err) throw err;
    var createTableQry = 'CREATE TABLE IF NOT EXISTS Restaurant('
        + 'Restaurant_ID INT AUTO_INCREMENT PRIMARY KEY'
	+ ',Restaurant_Name VARCHAR(50)'
        + ',City VARCHAR(50)'
        + ',Country VARCHAR(50)'
        + ')';
    connection.query(createTableQry, function (err) {
        if (err) throw err;
    });
});


exports.GetAll = function(callback) {
    connection.query('SELECT Landmark_Name, City, Country from Landmark',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.Insert = function(landmarkInfo, callback) {
    console.log(landmarkInfo);
    var query = 'INSERT INTO Landmark (Landmark_Name, City, Country, Type_Name) VALUES (\'' 
	+ landmarkInfo.landmark_name 
	+ '\', \'' 
	+ landmarkInfo.city 
	+ '\', \'' 
 	+ landmarkInfo.country 
	+ '\', \''
	+ landmarkInfo.type_name
	+ '\');';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

//change to landmarkinfo orig: Landmark_ID
exports.GetLandmark_ID = function(Landmark_Name, callback) {
    var query = 'SELECT Landmark_Name, City, Country, Type_Name from Landmark WHERE Landmark_Name =' + Landmark_Name;
    console.log(query);
    connection.query('SELECT Landmark_Name, City, Country, Type_Name from Landmark WHERE Landmark_Name =' + Landmark_Name,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


// BUDDY
exports.GetAll = function(callback) {
    connection.query('select Phone_Num, Buddy_Name FROM Buddy',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.Insert = function(buddyInfo, callback) {
    console.log(buddyInfo);
    var query = 'INSERT INTO Buddy (Phone_Num, Buddy_Name) VALUES (\'' 
	+ buddyInfo.phone_num 
	+ '\', \'' 
	+ buddyInfo.buddy_name 
	+ '\');';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.GetPhone_Num = function(Phone_Num, callback) {
    var query = 'SELECT Phone_Num, Buddy_Name FROM Buddy WHERE Phone_Num =' + Phone_Num;
    console.log(query);
    connection.query('SELECT Phone_Num, Buddy_Name FROM Buddy WHERE Phone_Num =' + Phone_Num,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


// HOTEL 
exports.GetAll = function(callback) {
    connection.query('select Hotel_Name, Room_Rate, City, Country FROM Hotel',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.Insert = function(hotelInfo, callback) {
    console.log(hotelInfo);
    var query = 'INSERT INTO Hotel (Hotel_Name, Room_Rate, City, Country) VALUES (\'' 
	+ hotelInfo.hotel_name 
	+ '\', \'' 
	+ hotelInfo.room_rate
	+ '\', \''
	+ hotelInfo.city
	+ '\', \''
	+ hotelInfo.country 
	+ '\');';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.GetHotel_ID = function(Hotel_ID, callback) {
    var query = 'SELECT Hotel_Name, Room_Rate, City, Country FROM Hotel WHERE Hotel_ID =' + Hotel_ID;
    console.log(query);
    connection.query('SELECT Hotel_Name, Room_Rate, City, Country FROM Hotel WHERE Hotel_ID =' + Hotel_ID,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


// RESTAURANT
exports.GetAll = function(callback) {
    connection.query('select Restaurant_Name, City, Country FROM Restaurant',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.Insert = function(restaurantInfo, callback) {
    console.log(restaurantInfo);
    var query = 'INSERT INTO Restaurant (Restaurant_Name, City, Country) VALUES (\'' 
	+ restaurantInfo.restaurant_name 
	+ '\', \'' 
	+ restaurantInfo.city
	+ '\', \''
	+ restaurantInfo.country 
	+ '\');';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.GetRestaurant_ID = function(Restaurant_ID, callback) {
    var query = 'SELECT Restaurant_Name,  City, Country FROM Restaurant WHERE Restaurant_ID =' + Restaurant_ID;
    console.log(query);
    connection.query('SELECT Restaurant_Name, City, Country FROM Restaurant WHERE Restaurant_ID =' + Restaurant_ID,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}




