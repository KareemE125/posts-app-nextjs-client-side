# Screen Shot
![app](https://github.com/KareemE125/posts-app-nextjs-client-side/assets/61433385/684d5883-67c6-4350-bd20-140a6d6dec39)

# Project Documentation: Posts App
Project Documentation: Posts App

1.Introduction:
The Posts App is a Next.js application that uses Next.js 13 features such as: layout, loading and error indicator pages. It allows users to view and interact with a list of posts. It includes two main pages: Home Posts and Favorite Posts. Users can navigate between these pages using the navigation bar. The app provides the functionality to mark posts as favorites, which are stored in local storage. The heart icon is used to indicate whether a post has been added to favorites.

2.Project Structure:
The project follows a modular structure and includes the following components:
2.1 Pages:
- Home Page (Posts Page): Displays a list of posts retrieved from an API or local storage. It utilizes the PostListView component for rendering the posts.
- Favorites Page: Displays a list of posts marked as favorites. It also utilizes the PostListView component.

2.2 Components:
- NavBar Component: Displays the navigation bar at the top of the application to navigate between the Home page (Posts page) and the Favorite Posts page.
- PostListView Component: A reusable component used in both the Home page and the Favorites page. It accepts a list of post objects and renders each post using the PostCard component. The component uses infinite scrolling to load more posts as the user scrolls down the page.
- PostCard Component: Represents an individual post and displays its details. It includes the heart icon for toggling the favorite status of a post.
- Loading Component: A component that displays a loading spinner while waiting for data to be fetched or loaded.



3.Dependencies and Technologies:
The project utilizes the following technologies and dependencies:
- Next.js: A React framework for server-side rendering and building web applications.
- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that provides static typing capabilities.
- SCSS: A CSS preprocessor that adds features such as variables and nesting to CSS.
- react-icons: A library that provides a set of customizable icons for React applications.
- react-infinite-scroll-component: A library used for implementing infinite scrolling functionality.

4.Usage:
To run the Posts App locally, follow these steps:
1. Make sure you have Node.js and npm (Node Package Manager) installed on your machine.
2. Clone the project repository to your local machine.
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Run the command "npm install" to install the project dependencies.
5. After the installation is complete, run the command "npm run dev" to start the application.

5.Notes: 
1. In the "_constants.scss" file, you can find variables to apply a Dark and Light Theme. You can activate either of them by commenting the other, demonstrating different color options.
2. The app is developed to be client-side, utilizing "useClient" for components. The "Context" and "LocalStorage" are available on the client side only.
3. The implementation of scrolling UI virtualization is not utilized in the project. Instead, the project relies solely on infinite scrolling. This decision is based on the maximum number of posts being limited to 20.



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
