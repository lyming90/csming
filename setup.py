from setuptools import setup

setup(
    name='csming',
    packages=['csming'],
    include_package_data=True,
    install_requires=[
        'flask',
        'flask-mysql',
        'passlib.hash',
        'beautifulsoup4',
        'flask-mail',
        'wtforms'
    ],
)