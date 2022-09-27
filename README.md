# Wineprezzer Application

This application retrieves a list of breweries from the Open Brewery API, that is appropriately sized and plots them on an interactive map according to their locations.
Thereby giving you extra information about the selected Brewery.

## API Reference

#### Get all items

```http
  GET https://api.openbrewerydb.org/breweries?
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET https://api.openbrewerydb.org/breweries/search?query=${searchQuery}
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | **Required**. searchQuery of item to fetch |

#### Search for breweries based on a search term.

## Authors

- [@davidadeola](https://www.github.com/davidadeola)

## Demo

https://wineprezzer.netlify.app/

## Color Reference

| Color            | Hex                                                              |
| ---------------- | ---------------------------------------------------------------- |
| Primary Color    | ![#fc7c6c](https://via.placeholder.com/10/fc7c6c?text=+) #fc7c6c |
| Background Color | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |

## Deployment

To deploy this project run

```bash
  npm start
```

## Features

- Pigeon map view
- Breweries search
- Breweries List
- Breweries information
- Breweries websites
- Live previews
- Fullscreen mode
- Cross platform

## Installation

Install wineprezzer with npm

```bash
  npm install
```

Install pigeon map

```bash
  # using yarn
yarn add pigeon-maps

  # using npm
npm install --save pigeon-maps
```

## 🛠 Skills

JavaScript, React, CSS (CSS Modules), API.

### Logo

![Logo](https://res.cloudinary.com/devkp5za2/image/upload/v1664244174/wineprezzer-logo_fb01j0.png)

## Roadmap

- Create react App

- Create Folder and File structure

- Install Pigeon map

- Fecth Brewery API and remote location to pigeon map

- Add onHover state and click state to display information

- Create Sidebar and add list of breweries and information of breweries

- Create sidebar Header content

- Implement Search functionality for Breweries

- Integrate Sidebar with Map location

- Document process in ReadMe

- Add License

## Design choices

Color choice is a neutral color to make user friendly Interface.
Used React because it creates more reactive response and it is faster.
used "module.css" because it is faster, and makes the code hard to break

## Challenges faced

- Had challenges making the UI more modern because there are no image URL from the API
- React strict mode causing double render
-

## Thoughts on API and Map

- Though the Brewery API documentation is great, it should have Image URLs to help with a more suitable User Interface.
- The Map API contains limited map tiles, would prefer a dark mode map tile offered out of the box.
- onMouseOut event on Map doesn't work properly.
- The Markers on the Map API does not render properly on IOS devices.

## Run Locally

Clone the project

```bash
  git clone https://github.com/davidadeola/wineprezzer.git
```

Go to the project directory

```bash
  cd wineprezzer
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Screenshots

![App Screenshot](https://res.cloudinary.com/devkp5za2/image/upload/v1664244687/wineprezzer_hde2kh.jpg)
