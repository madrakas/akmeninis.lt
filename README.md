![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![Static Badge](https://img.shields.io/badge/%20Coffe-Free-yellow)
![Eco Status](https://img.shields.io/badge/ECO-Friendly-green.svg)
[![Discord](https://discord.com/api/guilds/571393319201144843/widget.png)](https://discord.gg/dRwW4rw)

# Akmeninis.lt

_Stonework maestro's portfolio website_

<br>

## 🌟 About
Single page, responsive design portfolio webpage, with convenient content administration.
It's based on Laravel and React.

_Project is in works. You can follow my progress in [project site]()_


## 🎯 Project features/goals

*  Goals and features:
    *  Responsive design
    *  Sliding galleries selector
    *  Pop up galleries
    *  Collapsing FAQ tabs
    *  Pop up contact form
    *  Captcha
    *  Admin authentication
    *  Admin can edit texts
    *  Admin can edit categories
    *  Admin can add/remove photos in galleries
    *  Admin change order in galleries

## 🧰 Getting Started

### 💻 Prerequisites

xampp - _download and install_

```
https://www.apachefriends.org/
```

Node.js - _download and install_

```
https://nodejs.org
```

Composer - _download and install_

```
https://getcomposer.org/download/
```

Git - _download and install_

```
https://git-scm.com
```

### 🏃 Run locally

Would like to run this project locally? Open terminal and follow these steps:

1. Clone the repo to your xampp htdocs folder
    ```
    git clone https://github.com/madrakas/akmeninis.lt.git
    ```
2. Run Xampp Apache and MySQL components

3. Install NPM packages
    ```sh
    npm i
    ```
    or
    ```sh
    npm install
    ```
4. Install composer packages

    ```sh
    composer install
    ```
    
6. Run Webpack resource updater

   ```
   npm start
   ```

7. Create empty database in Xampp

    ```
    http://localhost/phpmyadmin
    ```

8. create _.env_ file in projects parent directory. You can simple copy and rename _.env.example_. Add your database info in _.env_ file

    ```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=akmeninis
    DB_USERNAME=
    DB_PASSWORD=
    ```
    
9. Run Seeder to add data to your database

    ```
    php artisan migrate:fresh --seed
    ```

11. Open [http://localhost/public](http://localhost/public) to view results in your browser.
   
### 🧪 Running tests

No tests to run

## 🎅 Authors

Arvydas [Github](https://github.com/madrakas)

## ⚠️ License

Distributed under the MIT License. See LICENSE.txt for more information.

## 🔗 Other resources

No other resources