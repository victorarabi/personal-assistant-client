<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

# Personal Assistant

![Personal Assistant Logo][site-logo]

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the project

This project is made to be an automation for Google Calendar. The idea of the project is to facilitate the creation of related events and the visualization of any upcoming event in a list like style.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

### Client

- [![React][react.js]][react-url]
- [![Sass][sass]][sass-url]
- [![Axios][axios]][axios-url]

### Server

- [![Node][node.js]][node-url]
- [![Express][express.js]][express-url]
- [![Passport][passport.js]][passport-url]
- [![Google Cloud API][google-cloud]][google-cloud-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- Ability to login using Google credentials or by creating a local user within the app.
- Create, Request, Update and Delete events and calendars from user's Google Account.
- Privacy; Only events created through the app will be fetched by the app, maintaning user security and privacy for private events and calendars.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Node.js must be installed on the machine in which you wish to test this app.

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalation

**Server**

1. Set up the app, credentials and Auth Screen on [Google Cloud Console](https://console.cloud.google.com/). For more details, please follow this [guide](https://developers.google.com/calendar/api/quickstart/nodejs)
2. Clone the repo
   ```sh
   git clone https://github.com/victorarabi/personal-assistant-server.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Change .env-model to .env and add the credentials acquired on step 1. You also need to define the URL and port for both the server and client.
5. Run the server
   ```sh
   nodemon server.js
   ```

**Client**

1. Clone the repo
   ```sh
   git clone https://github.com/victorarabi/personal-assistant-client.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Change .env-model to .env and copy the settings defined on server installation, step 4.
4. Start the client

   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Add ability to delete related events in one click
- [ ] Add JWT token support
- [ ] Implement SQL as the database
- [ ] Deploy website
- [ ] Create daily preview and weather info on homepage
- [ ] Support section

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Victor Arabi - victorarabi@hotmail.com

Project Link:
[Server](https://github.com/victorarabi/personal-assistant-server)
[Client](https://github.com/victorarabi/personal-assistant-client)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Links and guides that helped contribute to this project

- [Google Calendar API Documentation](https://developers.google.com/calendar)
- [Google OAuth 2.0 for Wev Server Applications](https://developers.google.com/identity/protocols/oauth2/web-server)
- [BrainStation](https://brainstation.io)
- [OAuth Google and Facebook guide](https://dev.to/asim_ansari7/setting-up-social-logins-with-node-js-and-passport-js-1m16)
- [GitHub Pages](https://pages.github.com)
- [Markdown badges](https://ileriayo.github.io/markdown-badges/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/victor-arabi/
[site-logo]: /src/assets/images/logo.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en/
[express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[express-url]: https://expressjs.com
[passport.js]: https://img.shields.io/badge/-Passport.js-lightgrey
[passport-url]: https://www.passportjs.org
[google-cloud]: https://img.shields.io/badge/-Google%20Cloud%20API-blue
[google-cloud-url]: https://cloud.google.com/apis
[axios]: https://img.shields.io/badge/-Axios-blueviolet
[axios-url]: https://axios-http.com
[sass]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[sass-url]: https://sass-lang.com
