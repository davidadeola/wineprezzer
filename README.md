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

## Lessons Learned

![Logo](https://res.cloudinary.com/devkp5za2/image/upload/v1664244174/wineprezzer-logo_fb01j0.png)

## Optimizations

## Roadmap

- Additional browser support

- Add more integrations

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
