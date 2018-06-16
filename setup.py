from setuptools import setup

setup(
    name='csming',
    packages=['csming'],
    include_package_data=True,
    install_requires=[
        'Flask',
        'flask-mysql',
        'flask-mail',
        'flask-uploads',
        'passlib',
        'beautifulsoup4',
        'wtforms'
    ],
)