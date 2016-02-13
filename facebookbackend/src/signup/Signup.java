package signup;
import javax.jws.WebService;
import java.sql.*;

public class Signup {
	public String validate(String email, String firstname,String lastname,String gender, String pwd){
		
String user="root";
String password="";
	    try
	    {	

	    	 Class.forName("com.mysql.jdbc.Driver");
	    	System.out.println("trying");
	    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
	    	System.out.println("trying1");
	    	Statement Stmt = conn.createStatement();
	    	System.out.println("trying2");
	    	String query = " insert into users (email,first_name, last_name, password,gender)"
	                + " values ('"+email+"','"+firstname+"','"+lastname+"','"+pwd+"','"+gender+"')";
	        
	       Stmt.executeUpdate(query);
	        return "true";
	    }
	    catch (Exception e)
	    {
	    	e.printStackTrace();
	        System.out.println("NO CONNECTION =(");
	        return "false";
	    }

}
	
	public String[] login(String email,String pwd){
		String[] result=new String[20]; 
		String user="root";
		String password="";
			    try
			    {	
			    int i=0;

			    	 Class.forName("com.mysql.jdbc.Driver");
			    	System.out.println("trying");
			    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
			    	System.out.println("trying1");
			    	Statement Stmt = conn.createStatement();
			    	System.out.println("trying2");
			    	String query = " select * from users"
			                + " where email='"+email+"' and password='"+pwd+"' ";
			        
			       ResultSet res=Stmt.executeQuery(query);
			       while(res.next())
			       {
			    	   result[i]=res.getString("first_name");
			    	   result[i+1]=res.getString("email");
			      	 
			    	
			    	   
			    	   i+=2;
			       }
			        return result;
			    }
			    catch (Exception e)
			    {
			    	e.printStackTrace();
			        System.out.println("NO CONNECTION =(");
			        result[0]="false";
			        return result;
			    }

		}
	
	public String editAbout(String email, String firstname,String city,String occupation, String dob){
		
		String user="root";
		String password="";
			    try
			    {	

			    	 Class.forName("com.mysql.jdbc.Driver");
			    	System.out.println("trying");
			    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
			    	System.out.println("trying1");
			    	Statement Stmt = conn.createStatement();
			    	System.out.println("trying2");
			    	String query = " insert into about (email,first_name, city,occupation,dob)"
			                + " values ('"+email+"','"+firstname+"','"+city+"','"+occupation+"','"+dob+"')";
			        
			       Stmt.executeUpdate(query);
			        return "true";
			    }
			    catch (Exception e)
			    {
			    	e.printStackTrace();
			        System.out.println("NO CONNECTION =(");
			        return "false";
			    }

		}
	
	



public String[] getAbout(String email){
	String[] result=new String[20]; 
	String user="root";
	String password="";
		    try
		    {	
		    int i=0;

		    	 Class.forName("com.mysql.jdbc.Driver");
		    	System.out.println("trying");
		    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
		    	System.out.println("trying1");
		    	Statement Stmt = conn.createStatement();
		    	System.out.println("trying2");
		    	String query = " select * from about"
		                + " where email='"+email+"' ";
		        
		       ResultSet res=Stmt.executeQuery(query);
		       while(res.next())
		       {
		    	   result[i]=res.getString("first_name");
		    	   result[i+1]=res.getString("city");
		    	   result[i+2]=res.getString("occupation");
		    	   result[i+3]=res.getString("dob");
		    	
		    	   
		    	   i+=4;
		       }
		        return result;
		    }
		    catch (Exception e)
		    {
		    	e.printStackTrace();
		        System.out.println("NO CONNECTION =(");
		        result[0]="false";
		        return result;
		    }

	}


public String addInterest(String email, String interest){
	
	String user="root";
	String password="";
		    try
		    {	

		    	 Class.forName("com.mysql.jdbc.Driver");
		    	System.out.println("trying");
		    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
		    	System.out.println("trying1");
		    	Statement Stmt = conn.createStatement();
		    	System.out.println("trying2");
		    	String query = " insert into interest (email,interest)"
		                + " values ('"+email+"','"+interest+"')";
		        
		       Stmt.executeUpdate(query);
		        return "true";
		    }
		    catch (Exception e)
		    {
		    	e.printStackTrace();
		        System.out.println("NO CONNECTION =(");
		        return "false";
		    }
}


public String removeInterest(String email, String interest){
	
	String user="root";
	String password="";
		    try
		    {	

		    	 Class.forName("com.mysql.jdbc.Driver");
		    	System.out.println("trying");
		    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
		    	System.out.println("trying1");
		    	Statement Stmt = conn.createStatement();
		    	System.out.println("trying2");
		    	String query = " delete from interest "
		                + " where email='"+email+"' and interest='"+interest+"'";
		        
		       Stmt.executeUpdate(query);
		        return "true";
		    }
		    catch (Exception e)
		    {
		    	e.printStackTrace();
		        System.out.println("NO CONNECTION =(");
		        return "false";
		    }
}



public String[] getInterest(String email){
	String[] result=new String[20]; 
	String user="root";
	String password="";
		    try
		    {	
		    int i=0;

		    	 Class.forName("com.mysql.jdbc.Driver");
		    	System.out.println("trying");
		    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
		    	System.out.println("trying1");
		    	Statement Stmt = conn.createStatement();
		    	System.out.println("trying2");
		    	String query = " select * from interest"
		                + " where email='"+email+"' ";
		        
		       ResultSet res=Stmt.executeQuery(query);
		       while(res.next())
		       {
		    	   result[i]=res.getString("interest");
		    	 
		    	   
		    	   i++;
		       }
		        return result;
		    }
		    catch (Exception e)
		    {
		    	e.printStackTrace();
		        System.out.println("NO CONNECTION =(");
		        result[0]="false";
		        return result;
		    }

	}

public String addNews(String email, String news){
	
	String user="root";
	String password="";
		    try
		    {	

		    	 Class.forName("com.mysql.jdbc.Driver");
		    	System.out.println("trying");
		    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
		    	System.out.println("trying1");
		    	Statement Stmt = conn.createStatement();
		    	System.out.println("trying2");
		    	String query = " insert into news (email,news)"
		                + " values ('"+email+"','"+news+"')";
		        
		       Stmt.executeUpdate(query);
		        return "true";
		    }
		    catch (Exception e)
		    {
		    	e.printStackTrace();
		        System.out.println("NO CONNECTION =(");
		        return "false";
		    }
}


public String[] getNews(String email){
	String[] result=new String[20]; 
	String user="root";
	String password="";
		    try
		    {	
		    int i=0;

		    	 Class.forName("com.mysql.jdbc.Driver");
		    	System.out.println("trying");
		    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
		    	System.out.println("trying1");
		    	Statement Stmt = conn.createStatement();
		    	System.out.println("trying2");
		    	String query = " select * from news ";
		        
		       ResultSet res=Stmt.executeQuery(query);
		       while(res.next())
		       {
		    	   result[i]=res.getString("email");
		    	   result[++i]=res.getString("news");
		    	   
		    	   i+=2;
		       }
		        return result;
		    }
		    catch (Exception e)
		    {
		    	e.printStackTrace();
		        System.out.println("NO CONNECTION =(");
		        result[0]="false";
		        return result;
		    }

	}

public String addFriend(String femail, String temail){
	
	String user="root";
	String password="";
		    try
		    {	

		    	 Class.forName("com.mysql.jdbc.Driver");
		    	System.out.println("trying");
		    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
		    	System.out.println("trying1");
		    	Statement Stmt = conn.createStatement();
		    	System.out.println("trying2");
		    	String query = " insert into friendrequest (femail,temail)"
		                + " values ('"+femail+"','"+temail+"')";
		        
		       Stmt.executeUpdate(query);
		        return "true";
		    }
		    catch (Exception e)
		    {
		    	e.printStackTrace();
		        System.out.println("NO CONNECTION =(");
		        return "false";
		    }
}

public String[] getFriendrequest(String email){
	String[] result=new String[20]; 
	String user="root";
	String password="";
		    try
		    {	
		    int i=0;

		    	 Class.forName("com.mysql.jdbc.Driver");
		    	System.out.println("trying");
		    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
		    	System.out.println("trying1");
		    	Statement Stmt = conn.createStatement();
		    	System.out.println("trying2");
		    	String query = " select femail from friendrequest where temail='"+email+"' ";
		        
		       ResultSet res=Stmt.executeQuery(query);
		if(res != null)
			{while(res.next())
		       {
		    	   result[i]=res.getString("femail");
		    	
		    	   
		    	   i++;
		       }
		        return result;
			}
		else
			  result[0]="false";
        return result;
			}
		    catch (Exception e)
		    {
		    	e.printStackTrace();
		        System.out.println("NO CONNECTION =(");
		        result[0]="false";
		        return result;
		    }

	}

public String respondFriend(String femail, String temail, String value){
	
	String user="root";
	String password="";
		    try
		    {	

		    	 Class.forName("com.mysql.jdbc.Driver");
		    	System.out.println("trying");
		    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
		    	System.out.println("trying1");
		    	Statement Stmt = conn.createStatement();
		    	System.out.println("trying2");
		    	System.out.println(value);
		    	if(value.equals("yes"))
		    	{
		    	String query = " insert into friend (femail,temail)"
		                + " values ('"+femail+"','"+temail+"')";
		    	System.out.println("trying33333333");
		       Stmt.executeUpdate(query);
		       String query1 = " insert into friend (femail,temail)"
		                + " values ('"+temail+"','"+femail+"')";
		       Stmt.executeUpdate(query1);
		       System.out.println("trying444444444444444444444");
		       String query2="delete from friendrequest where temail='"+femail+"'";
		       Stmt.executeUpdate(query2);
		        return "true";
		    	}
		    	else
		    	{
		    		   String query2="delete from friendrequest where temail='"+femail+"'";
				       Stmt.executeUpdate(query2);
				       return "true";
		    	}
		    }
		    catch (Exception e)
		    {
		    	e.printStackTrace();
		        System.out.println("NO CONNECTION =(");
		        return "false";
		    }
}

public String[] getFriend(String email){
	String[] result=new String[20]; 
	String user="root";
	String password="";
		    try
		    {	
		    int i=0;

		    	 Class.forName("com.mysql.jdbc.Driver");
		    	System.out.println("trying");
		    	Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/facebook",user,password);
		    	System.out.println("trying1");
		    	Statement Stmt = conn.createStatement();
		    	System.out.println("trying2");
		    	String query = " select temail from friend where femail='"+email+"' ";
		        
		       ResultSet res=Stmt.executeQuery(query);
		if(res != null)
			{while(res.next())
		       {
		    	   result[i]=res.getString("temail");
		    	
		    	   
		    	   i++;
		       }
		        return result;
			}
		else
			  result[0]="false";
        return result;
			}
		    catch (Exception e)
		    {
		    	e.printStackTrace();
		        System.out.println("NO CONNECTION =(");
		        result[0]="false";
		        return result;
		    }

	}



}
