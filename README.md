# Quiz_App


## Question are given with  multiple choices to the end user,Timer has been set to answer the questions.



### Prerequisites

You need to install the following packages for backend:

```

Django==3.0.1
djangorestframework==3.11.0


```
### Installation

Clone the repository

```
git clone https://github.com/Shoaibfy/Quiz_App/.git
```

Setting up your virtual environment:

```
python3 -m venv .evnv
```

Activating Virtual  Environment

```
source .env/bin/activate
```
Once the repository is cloned and virtual environment set up, go to the directory where the requirements.txt(Catalogue-management-system/backend/) is and type the following code in your terminal:

```
pip install -r requirements.txt
```

### Database setup

If all requirements are installed, then  database must be set up.

```
sudo apt install sqlite


sqlite

```
To create a database for our Django project
```
CREATE DATABASE tripcontrol;

```
Create a database user which we will use to connect to and interact with the database. Set the password.
```
CREATE USER admin WITH PASSWORD 'admin';

```
Now, all we need to do is give our database user access rights to the database we created
```
GRANT ALL PRIVILEGES ON DATABASE tripcontrol TO admin;

```
Before running server make sure all migrations done. To exucute all migration
```
python3 manage.py migrate
python3 manage.py makemigrations

```

## Overall detail
```
Database Name: quizdb
Username: admin
Password: admin

```

Then to run the server, go to the directory '/Quiz_App/quizapp' and type the following code in terminal:

```
python3 manage.py runserver
```

For Frontend which is ReactJS,
Dependencies are: 
```

"npm":"^6.13.4",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-router-dom": "^5.1.2",


```

Go to '/Quiz_APP/frontend' and type the following code in the terminal:
```
"sudo apt install nodejs",
"node --version",
"npm install", 
"npm -v",

```
Then to run the react server, type the code:
```
npm start
```

The server has been set up and you are ready to go.

