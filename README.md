# Quiz_App


## Question are given with  multiple choices to the end userto answer the questions.



### Prerequisites

You need to install the following packages for backend:

```

Django==3.0.1
djangorestframework==3.11.0


```
### Installation

Clone the repository

```
git clone https://github.com/Shoaibfy/Quiz-Application/.git
```

Setting up your virtual environment:

```
python3 -m venv qz_en
```

Activating Virtual  Environment

```
source qz_en/bin/activate
```


### Database 



Create a database user which we will use to connect to and interact with the database. Set the password.
```
python3 manage.py createsuperuser.

CREATE USER admin WITH PASSWORD 'admin';

Before running server make sure all migrations done. To exucute all migration
```
python3 manage.py migrate
python3 manage.py makemigrations

```

Then to run the server, go to the directory '/Quiz-Application/' and type the following code in terminal:

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
"react-axios":"^0.19".


```

Go to '/Quiz_APP/frontend' and type the following code in the terminal:
```


"npm install", 
"npm install react-axios".

```
Then to run the react server, type the code:
```
npm start
```

The server has been set up and you are ready to go.

"UI for Quiz Application "
![Image React user interface will look like this](quizapp.png)

