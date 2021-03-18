var xyz=[
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
        password  : "potter"
    }
    ]
    
    function get()
    {   
        
        var user=document.getElementById("username").value;
        var pass=document.getElementById("password").value;
        var num=xyz.length;
           for( i=0; i < num;i++)
        {
            if((user == xyz[i].username) && (pass == xyz[i].password))
            {
                window.open("home.html");
             }
        }
    }
