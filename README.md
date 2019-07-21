# Tops 👚

Check out a deployed version at:
https://victornguyen.github.io/tops

## Quick start

To run locally:

```sh
$ npm i
$ npm start
```

## Development notes

- The provided [API endpoint](https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3) is currently returning 403. Have written the app to use mock data when the endpoint responds with an error. This logic is in `src/hooks/useProducts.js`
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to get a quick scaffold
- Used [axios](https://github.com/axios/axios) to help with data fetching (we get JSON parsing for free amongst other benefits)
- Used a custom hook to fetch the product data and manage loading and error state
- Used [styled-components](https://www.styled-components.com/) for styling

## Roadmap / wishlist
- Skeleton screens during loading to increased perceived speed
- Ensure the size filter is accessible
- E2E component testing
