# Screen Shots 
![Dark Theme](https://github.com/KareemE125/posts-app-nextjs-client-side/assets/61433385/747d968e-95f7-47bf-a26b-adcab4ec43b3)
![Light Theme](https://github.com/KareemE125/posts-app-nextjs-client-side/assets/61433385/9a680293-f69a-439d-a508-0c49b8f32091)

# Project Documentation: Posts App

1.Introduction
The Posts App is a Next.js application that allows users to view and interact with a list of posts. The app consists of two main pages: the Posts Listing page and the Favorite Posts Listing page. Users can navigate between these pages using the navigation bar. The app also provides the functionality to mark posts as favorites, which are stored in local storage or cookies. The heart icon is used to indicate whether a post has been added to favorites.

2.Project Structure
The project follows a modular structure and consists of:
2.1 Two pages
1) Posts listing
2) Favorite posts listing

2.2 NavBar Component
The “NavBar” component displays the navigation bar at the top of the application. It uses the “Link” component from Next.js for navigation and dynamically renders different icons or text based on the screen width. The home icon (or "Home" text) represents the Posts Listing page, and the heart icon (or "Favorites" text) represents the Favorite Posts Listing page.

2.3 PostListView Component
The “PostListView” component is a reusable component used in both the Posts Listing page and the Favorite Posts Listing page. It accepts a list of “Post” objects and renders each post using the “PostCard” component. If there are no posts, it displays a message indicating that there are no posts available. If the data is still loading, a loading spinner is displayed.



2.4 PostCard Component
The “PostCard” component represents an individual post and displays its details. It receives a “Post” object as a prop and renders the post’s details. The heart icon is used to toggle the post's favorite status. Clicking on the heart icon triggers the “toggleFavHandler” function, which adds or removes the post from the favorites list using the “AppContext”.

2.5 App Context
The “AppContext” provides the application-wide context and holds the state for the posts list and the favorites list. It uses the “createContext” function from React to create the context and provides default values. The “AppContextProvider” component is responsible for initializing the posts list and favorites list from local storage or cookies, as well as updating the lists when changes occur. It also exposes functions to add or remove posts from the favorites list. The “useAppContext” hook is used to consume the context within components.

2.6 Posts Model
The “Post” type defines the structure of a post object. Each post has an ID, a favorite status, profile image, owner name, main image, title, description, number of likes, caption, tags, and comment count. The “Post” type is used throughout the application to represent individual posts.

3. Dependencies and Technologies
The project utilizes the following technologies and dependencies:
- Next.js: A React framework for server-side rendering and building web applications.
- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that provides static typing capabilities.
- SCSS: A CSS preprocessor that adds features such as variables and nesting to CSS.
- react-icons: A library that provides a set of customizable icons for React applications.


4. Usage
To run the Posts App locally, follow these steps:
1. Make sure you have Node.js and npm (Node Package Manager) installed on your machine.
2. Clone the project repository to your local machine.
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Run the command “npm install” to install the project dependencies.
5. After the installation is complete, run the command “npm run dev” to start




Note: In “_constants.scss” You have the variables to apply a Dark and Light Theme, activate either of them by commenting the other, Just to show different coloring

Note: The app is developed to be client side using 'use client' for components as “Localstorage” is only available on the client side as well as the “Context”.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
