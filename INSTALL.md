# Installing Real Time Polls

## Table of Contents
- [Installing RTP](#Installing-Real-Time-Polls)
	* [Basic information](#basics)
	* [Git](git)
	* [Application Setup](#applcation-setup)

## Basics
RealTimePolls (RTP) is a javascript application that uses the node.js framework as an backend. To have an live connection with the users RTP uses Socket.IO.

## Git
If you don't have git install it first
```
sudo dnf install git
```
Go to https://github.com/MrClan/RealTimePolls and click on fork (right top).
Now the RTP repository is forked to your own repositories.
Go to your git repositories and look for the forked RealTimePolls repository.
Click on the clone or download button and copy the url.
Now use your own command line to clone the repository
```
git clone https://github.com/MrClan/RealTimePolls
```
Add all changed files to your commit
```
git add -u
```
Add a new file to your commit
```
git add ./filepath
```
Commit your changes
```
git commit
```
or
```
git commit -m 'commit message'
```
And finally push your results to your forked repository
```
git push
```

## Application setup

If you use ubuntu you can just change dnf with apt-get.
It could be that some libraries have a different name.
You can use apt-get search 'lib name' to search it.

First you need to install javascript, node.js ,npm, mongodb and mongodb-server.
```
sudo dnf install js nodejs mongodb mongodb-server
```

After you installed every required libraries you need to install the node.js libraries.
Luckly this can be done with npm.
cd into RealTimePolls and then run
```
npm install
```
Because of the package.json file npm knows which libraries to install

## Running application
(Hopefully) all the libraries are now installed and working.
Before you can run RTP you need to run the mongodb server.
This can be done with
```

```
After you started the mongodb it is finally time to start RTP.
Go to RealTimePolls and
```
nodemon StartServer.js
```
If everything went right RTP should be running on [localhost:4000/](localhost:4000/)
