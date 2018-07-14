#  CSMING

The initial version was designed during the first month of my exchange term to University of Waterloo. This project heavily relies on Python Flask framework.

## Demo

[Ming · 刘明宇 · Liu Mingyu](https://csming.com)

##  Getting Started

> Since July 2018, the website has migrated into a React + Redux model. Therfore, the following instructions are no longer applicable.

To run the project, you will need

- Python 3 (refer to prerequisites for modules)

- MySQL (database schema is available in sql folder)
  
You will also need to add MySQL credentials and secret-key into config.py file. The file is not presented in [this repo](#), you have to create one by yourself.

After configuration, run
```

$ python test.py

```

  

###  Prerequisites

You need the following modules installed for Python 3.

It is recommended that you run setup.py to install all dependencies.

```

Flask

Flask-MySQL

Flask-Mail

WTForms

Passlib.hash

beautifulsoup4

Flask-Uploads

```

## Deployment

I recommend using Nginx + Gunicorn for deployment.

The demo site is hosted at DigitalOcean. [Sign up here](https://m.do.co/c/467683057277) to get $10 credits.

## Update Notes

Refer to [Update Notes](https://www.csming.com/archive/update-notes)

##  Contributing

Please feel free to make contribution. 

Refer to **TODOs** at [Facts about this website...](https://www.csming.com/archive/facts-about-this-website)


##  Authors

*  **刘明宇 Liu Mingyu** \- *Initial work* \- [lyming90](https://github.com/lyming90)

##  License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


##  Acknowledgments

Refer to **Credits and Inspirations** at [Facts about this website...](https://www.csming.com/archive/facts-about-this-website)
