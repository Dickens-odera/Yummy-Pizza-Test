# Yummy Pizza Test
---
<p align="center"><img src="public/uploads/pizza1.png" alt="pizza" style="width:100%; height:100px" class="text-center"></p>

## Overview
This is a simple web application that enables clients to order pizza from the available menu

### Url
The application can be found at the url below:<br>
 [here](https://yummy-pizza-store.herokuapp.com)
 
#### Installation (Backend)
first clone the repository
```php
git clone https://github.com/Dickens-odera/Yummy-Pizza-Test.git
```
Change the directory to the clone path
```php
cd Yummy-Pizza-Test
```
then install the packages with composer
```php
composer install
```
Generate app key
```php
php artisan key:generate
```
Make a copy of the .env.exaple and create a database in your db server
```php
cp .env.example .env
```
<p>At the Created .env file add the follwing:</p>
DB_PORT=3306<br>
DB_DATABASE=<your_database_name></br>
DB_USERNAME=root<br>

Run the database migrations to create the tables
```php
php artisan migrate
```

### Installation (Frontend)
<p>npm install</p>

## Run the app (Backend)
Open your terminal and type the following command:
```php
php artisan serve
```
## Run the app (Frontend)
For the frontend scafolding run the following command:

npm run watch

### Feature Testing
Run the following command in your terminal
```php
./vendor/bin/phpunit
```