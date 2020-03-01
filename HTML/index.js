var admin = [
	{
		username : "admin",
		password : "123456"
	},
	{
		username : "Peki",
		password : "654321"
	},
	{
		username : "Guli",
		password : "24680"
	}
]

function getInfo()
{
	var username = document.getElementById("userInput").value;
	var password = document.getElementById("passInput").value;
	var isLogged = false;
	if(password == "" || username == "")
		console.log("You need to enter your info");
	for (i = 0; i < admin.length; i++) {
		if(username == admin[i].username && password == admin[i].password)
		{
			console.log("You are logged in as "+ username + ".");
			alert("Welcome back.You are logged in as "+ username + ".")
			if(isLogged = true)	break;
		}
		else if(username == admin[i].username && password != admin[i].password || username != admin[i].username && password == admin[i].password)
		{
			console.log("Incorrect info");
			alert("Incorrect info");
			if(isLogged = false) 	break;
		}
	}
	if (username == "guest" && password == "pass") {
		console.log("Logged as guest");
		alert("Logged in as guest");
		isLogged = true;
	}
	else if(username == "guest" && password != "pass"){
		console.log("Incorrect info");
		alert("Incorrect info");
		isLogged = false;
	}

	if(isLogged == true)
	{
		document.getElementById("userInput").style.display = "none";
		document.getElementById("passInput").style.display = "none";
		document.getElementById("btnLogIn").style.display = "none";
		document.getElementById("btnLogOut").style.display = "inline";
	}
	else if(isLogged == false) document.getElementById("btnLogOut").style.display = "none";
 }

 function logOut()
{
	document.getElementById("userInput").style.display = "inline";
	document.getElementById("passInput").style.display = "inline";
	document.getElementById("btnLogIn").style.display = "inline";
	document.getElementById("btnLogOut").style.display = "none";
	console.log("Logged out");
}