# Backend Documentation

* ## User Management Documentation 

  1. ### Get All Users Data
     * method :  **GET**
     * EndPoint :  **/user**

  2. ### For User Signup 
     * method: **POST**
     * EndPoint : **/user/signup**

     * #### Required Fields For Signup

       ```json 
       {
        "name":"String",
        "email": "String",
        "password": "String"
       }
        ```

  3. ### For User Login 
     * method: **POST**
     * EndPoint : **/user/login**

     * #### Required Fields For Login
       ```json 
       {
        "name":"String",
        "email": "String",
        "password": "String"
       }
        ```


* ## Blog Management Documentation 
  1. ### Get All Blogs Data
     * method :  **GET**
     * EndPoint :  **/blog**

  2. ### Create User Blog
     * method :  **POST**
     * EndPoint : **/createBlog**

  3. ### Delete User Blog
     * method : **DELETE**
     * EndPoint : **/deleteBlog/:_id**

  4. ### Update One Blog 
     * method : **PATCH**
     * EndPoint : **/updateOneBlog/:id**

  5. ### Update Many Blog 
     * method : **PUT**
     * EndPoint : **/updateManyBlog**

  6. ### Get Blog (Search)
     * method : **POST**
     * EndPoint : **/getBlog**


  
    



