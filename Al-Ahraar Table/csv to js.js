var csv = require('jquery-csv');



 let data = [ 
 	{ Name: "HTML", Cat: "Web", Year: "1993" }, 
 	{ 
 		Name: "Java", 
 		Cat: "Programming", 
 		Year: "1995", 
 	}, 
 	{ Name: "JavaScript", Cat: "Web, Database", Year: "1995" }, 
 	{ Name: "MongoDB", Cat: "Database", Year: "2007" }, 
 	{ Name: "Python", Cat: "Programming", Year: "1991" }, 
]; 

document.getElementById("demo").innerHTML = data;