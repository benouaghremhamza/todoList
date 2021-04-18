# Todo List App

# 1. Getting Started

Install node modules: `npm install`

## 1.1. Scripts

### Run the development server

`npm run start`

### Build the application

`npm run build`

### Linting the code

`npm run lint:fix`

## 1.2 Docker Support

-Docker image of this app is available at my docker Hub registory. You can pull the image from this repository.

`https://hub.docker.com/repository/docker/testoftodolist/todo-list1`

## 2.1 Project architecture

```
| src/
    |- components/
        |- atoms/
    |- routes/
        |-AppRoutes.jsx
        |-index.js
        |-Routes.jsx
    |- pages/
      |-Dashboard/
      |-Login/
    |- redux/
        |- todo/
            |-actions
                |-constants.js
                |-index.js
            |-reducer
                |-index.js
                |-todoReducer.js
            |-selectors
                |-index.js
                |-selectors.js
        |- user/
            |-actions
                |-constants.js
                |-index.js
            |-reducer
                |-index.js
                |-userReducer.js
            |-selectors
                |-index.js
                |-selectors.js
        |- rootReducer.js
        |- store.js
    |- shared/
        |- Layout/
            |-components/
                |-Footer/
                |-Navbar/
        |- utils/
    |- theme/
        |- styles/

    |- App.jsx
    |- index.jsx
```

- **index.js** : is the main file of the front end application.
- **components/**: is a folder containing the app's custom reusable components.

  - **Atoms** are small components like Inputs, Headings, Image .etc.

- **routes/**: This folder contains our react app routes that are grouped to ensure data encapsulation,
  i.e:

  - **Routes.jsx** will contain our app public routes like the login , as well as the main route to the dashboard
  - **AppRoutes.jsx** will contain our main app dashboard pages.

- **pages/**: Pages are our app screens, each page will contain its own components. Every component is composed of 3 or more files:

  - **component.jsx** will contain basic jsx declarations and logic
  - **withStyle.js** contains the css styling of the component. This way each component will have its own css.
  - **index.js** will help import the main react jsx component
  - A component can contain other files like custom hooks for retrieving, or doing any other logic.

- **Redux/**: Contains the Redux definitions for the app. I've chosen to divide it this way:

  - **todo** this folder will contain the all necessary actions , reducers and selectors for the todos
  - **user/** this folder will contain the all necessary actions , reducers and selectors for the user
  - The **rootReducer** will contain the Redux rootReducers combining all reducers of the app.

- **shared/**: This folder will have shared app layout (i.e. a navbar, footer ...), hooks, or other components to be used everywhere.

- **theme/**: In here we will define the theme for our application. I've chosen to work with styled components for its simplicity in creating a theme and
  defining variables like colors, screen sizes, font sizes, etc ...

- **utils/**: Contains of subset of helper functions & constants, ... to be used everywhere in our app.

## 2.2 Explanation

### - Creating custom hooks:

This will ensure separating the UI from the application logic, like retrieving the data or searching it.

### - Persisting the data:

- All Redux data will be persisted using redux-persist. data will be persisted in the localStorage.

### - Styling:

- **Style wrapping:** In the entire app, I've chosen to style my components using a HOC pattern using the StyledComponent library.
  This way we will avoid writing our CSS styled-components into our JSX file.
