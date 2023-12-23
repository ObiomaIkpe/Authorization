
#### Auth

To run this application on your device:
- clone this repository into your local device || download as zip file.
- cd into the folder containing these codes.
- at the root of the folder, run **npm install**.
- create a **.env** file at the root of the repository.
- Provide the following values: 
    1. MONGO_URI
    2. JWT_SECRET
    3. JWT_EXPIRES_IN
    4. PORT

-Run **npm start**

Auth links  
##### User sign up  
**127.0.0.1:4000/api/v1/auth/signUp**  
the user is expected to provide a name, email and a password.  
Each of these must be unique.

##### User login  
**127.0.0.1:4000/api/v1/auth/login**    
Only the email and password fields are required for login. 

