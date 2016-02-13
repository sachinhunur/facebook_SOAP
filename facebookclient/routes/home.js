var soap = require('soap');
var sessionemail="";
var sessionname="";
var baseURL = "http://localhost:8080/facebookbackend/services";

function sign_up(req,res)
{
console.log(req.param("email")+"is the email");

var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
  var args = {email: req.param("email"),firstname: req.param("firstname"), lastname:req.param("lastname"),gender:req.param("gender"),pwd:req.param("password")};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.validate(args, function(err, result) {
    	  console.log("hhhhhhhhhhhhhhhhhhhhh"+result.validateReturn);
    	
    	  if(result.validateReturn!="false"){
    		
    		  console.log("valid Signup");
  			
  			res.render("login",{title:"Welcome"});
    	  }
    	  else{
    		 
    		  res.render("signUp",{title:"failed signup"});
    	  }
      });
  });


}

function login(req,res)
{
console.log(req.param("email")+"is the email");

var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
  var args = {email: req.param("email"),pwd:req.param("password")};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.login(args, function(err, result) {
    	  console.log("hhhhhhhhhhhhhhhhhhhhh"+result.loginReturn[0]);
    	
    	  if(result.loginReturn[0][0]!="false"){
    		
    		  console.log("valid login");
    		  sessionemail=result.loginReturn[1];
    		  sessionname=result.loginReturn[0];
  			console.log(sessionemail);
  			res.render("success",{user:result.loginReturn[0][1]});
    	  }
    	  else{
    		 
    		  res.render("signUp",{title:"failed login"});
    	  }
      });
  });


}


function edit_about(req,res)
{
	
console.log(req.param("email")+"is the email");

var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
 var args = {email:sessionemail,firstname: req.param("firstname"), city:req.param("city"),occupation:req.param("current"),dob:req.param("dob")};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.editAbout(args, function(err, result) {
    	  console.log("hhhhhhhhhhhhhhhhhhhhh"+result.editAboutReturn);
    	
    	  if(result.editAbout!="false"){
    		
    		  console.log("valid about update");
  			
  			res.render("success",{user:sessionname});
    	  }
    	  else{
    		 
    		  res.render("signUp",{title:"failed about update"});
    	  }
      });
  });


}



function get_about(req,res)
{


var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
  var args = {email: sessionemail};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.getAbout(args, function(err, result) {
    	
    		
    		  console.log("valid edit request");
    		  
  			console.log(sessionemail);
  			res.end(JSON.stringify(result.getAboutReturn));
    
      });
  });


}


function add_interest(req,res)
{

var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
 var args = {email:sessionemail,interest:req.param("interest")};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.addInterest(args, function(err, result) {
    	  if(result.addInterestReturn!="false"){
    		
    		  console.log("valid interestadd");
  			
  			res.render("success",{user:sessionname});
    	  }
    	  else{
    		 
    		  res.render("signUp",{title:"failed add interest"});
    	  }
      });
  });


}

function remove_interest(req,res)
{

var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
 var args = {email:sessionemail,interest:req.param("interest")};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.removeInterest(args, function(err, result) {
 
    	
    	  if(result.removeInterestReturn!="false"){
    		
    		  console.log("valid interest remove");
  			
  			res.render("success",{user:sessionname});
    	  }
    	  else{
    		 
    		  res.render("success",{user:"failed remove interest"});
    	  }
      });
  });


}

function get_interest(req,res)
{


var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
  var args = {email: sessionemail};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.getInterest(args, function(err, result) {
    	 
    	
    	
    		
    		  console.log("valid interest request");
    		  
  			console.log(sessionemail);
  			res.end(JSON.stringify(result.getInterestReturn));
    	
      });
  });


}


function add_news(req,res)
{

var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
 console.log("adddddddd neeeewwwwwwssssssssss");
 console.log(req.param("event"));
 var args = {email:sessionemail,news:req.param("event")};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.addNews(args, function(err, result) {
    	  console.log("hhhhhhhhhhhhhhhhhhhhh"+result.addNewsReturn);
    	
    	  
    		
    		  console.log("valid news add");
  			
  			res.render("success",{user:sessionname});
    	
      });
  });


}



function get_news(req,res)
{


var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
  var args = {};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.getNews(args, function(err, result) {
    	 
    	
    	
    		
    		  console.log("valid news get");
    		  
  			console.log(sessionemail);
  			res.end(JSON.stringify(result.getNewsReturn));
    	
      });
  });


}


function add_friend(req,res)
{

var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
 console.log("adddddddd neeeewwwwwwssssssssss");
 console.log(req.param("event"));
 var args = {femail:sessionemail,temail:req.param("email")};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.addFriend(args, function(err, result) {
    	  if(result.addFriendReturn!="false"){
    	  console.log("valid friend add");
  			
  			res.render("friend",{title:"Request Sent"});
    	  }
    	  else{
    			res.render("friend",{title:"user does not exsist"});  
    	  }
      });
  });


}

function get_friendrequest(req,res)
{


var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
  var args = {email:sessionemail};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.getFriendrequest(args, function(err, result) {
    	 
    	
    	
    		
    		  console.log("valid friend request get");
    		  if(result.getFriendReturn!="false"){  
  			console.log(sessionemail);
  			res.end(JSON.stringify(result.getFriendrequestReturn));
    		  }
    		  else
    			  {
    		  res.render("friend",{title:"Friend Page"});
    			  }
      });
  });


}


function respond_friend(req,res)
{

var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
 console.log("here");
console.log(req.body.email);
console.log(req.body.val);
 var args = {femail: sessionemail,temail:req.body.email,value:req.body.val};
  soap.createClient(url,option, function(err, client) {
	 
      client.respondFriend(args, function(err, result) {
    	  if(result.respondFriendReturn!="false"){
    	  console.log("valid friend add");
  			
  			res.render("friend",{title:"Responded successfully"});
    	  }
    	  else{
    			res.render("friend",{title:"could not respond"});  
    	  }
      });
  });


}



function get_friend(req,res)
{


var option = {
		ignoredNamespaces : true	
	};
 var url = baseURL+"/Signup?wsdl";
  var args = {email:sessionemail};
  soap.createClient(url,option, function(err, client) {
	  console.log(err,client);
      client.getFriend(args, function(err, result) {
    	 

    		  console.log("valid friend request get");
    		  if(result.getFriendReturn!="false"){  
  			console.log(sessionemail);
  			res.end(JSON.stringify(result.getFriendReturn));
    		  }
    		  else
    			  {
    		  res.render("friend",{title:"Friend Page"});
    			  }
      });
  });


}

exports.get_friend=get_friend;
exports.respond_friend=respond_friend;
exports.get_friendrequest=get_friendrequest;
exports.add_friend=add_friend;
exports.get_news=get_news;
exports.add_news=add_news;
exports.get_interest=get_interest;
exports.remove_interest=remove_interest;
exports.add_interest=add_interest;
exports.get_about=get_about;
exports.edit_about=edit_about;
exports.login=login;
exports.sign_up=sign_up;
