# Fitness Exercises App with React 18

In this project, learned how to Build and Deploy a Modern React 18 Fitness Exercises App
With APIs.

## Functionality

    1. Choose exercise categories.
    2. Target specific muscle groups.
    3. Browse hundreds of exercises with practical examples.
    4. Pagination, Exercise details.
    5. View related youtube videos.
    6. Display similar exercises.

## Tech Stack

**Client:** 1. React, Material UI, React Router, React Player.

**Server:** RapidAPI

## API Reference

#### Get Exercises data

```http
  GET https://youtube-search-and-download.p.rapidapi.com/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Youtube videos

```http
  GET https://youtube-search-and-download.p.rapidapi.com/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

## Run Locally

Clone the project

```bash
  git clone https://github.com/rv20197/gym-site
```

Go to the project directory

```bash
  cd gym-site
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Deployment

To deploy this project run

```bash
  npm install serve
  npm run build
  serve -s build
```

## Authors

- [Vatsal Rajgor](https://www.linkedin.com/in/vatsal-rajgor/)
