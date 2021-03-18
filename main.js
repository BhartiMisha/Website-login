var num=[
    {
        username : "synans",
        password  : "company"
    },
    {
        username : "kiit",
        password  : "university"
    },
    {
        username : "harry",
        Password  : "potter"
    }
    ]
    
    function get()
    {   
        
        var user=document.getElementById("username").value;
        var pass=document.getElementById("password").value;
           for( i=0;i< num.length ;i++)
        {
            if(user==num[i].username && pass==num[i].password)
            {
                localStorage.setItem(user,pass);
                window.open("home.html");
                            
             }
        }
    }