# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality. 

### Instructions

For up to date instructions go to [docs](./docs/INSTRUCTIONS.md)

### To Run This Project Locally

1. Clone or Download this repository. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. In my case, I had other static file servers available, `serve`, `http-server` but they didn't work so I just stuck with the Python Server. 

1. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

1. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

1. This site was optimized to be used with a screen reader, so if you browse the site with a tool like ChromVox or the MacOS Voice Assistant you will be able to hear all of the accessibility features built in to the site.

### If you would like to use this site online
You are going to have to wait.

I will host a version of this site, only thing pending really are modifications to the dbhelper.js, after that it should work on GitHub Pages, or Firebase Hosting.



### Screenshots
*(Updated Oct 15, 2018)*

While the project is a work in progress below are some screenshots of some of the features of the site. I understand that it can be a pain to download the repository just to see what I have done. 

*Example of Media Queries on Site, from 4 Columns, to 1*

[Example of Media Queries on Site, from 4 Columns, to 1](https://i.gyazo.com/f66c981f9211197f5b0dca59b27f866e.gif)

*Example of Media Queries on Site, narrow views*

![Example of Media Queries on Site, narrow views](https://i.gyazo.com/8aef866480c9891ae972381f607021c1.gif)

*Example of Media Queries on Site, iPhone X resolution*

![Example of Media Queries on Site, iPhone X resolution](https://i.gyazo.com/5da6b027629a502d7d0d68eb7103312f.gif)

*Example of Media Queries on Site, restaurant details page*

![Example of Media Queries on Site, restaurant details page](https://i.gyazo.com/9b92195b287c89e2c4bc9cf70fc86a8f.gif)


### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 



