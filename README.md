Quick Kart - Live Demo

Built with:

React
React Router
Deployed with Netlify
Vite
Project Overview

Quick Kart is a front-end simulation of an e-commerce site, designed to provide users with a seamless shopping experience. The project leverages React and React Router for efficient navigation, Netlify for deployment, and Vite for a fast development environment.

Key Features
Multi-Page Structure:
The application comprises at least two pages: a homepage and a shop page, accessible through a navigation bar present on both routes.
Shopping Cart Functionality:
Users can add items to their cart from the main shopping page, which displays a list of multiple items, or from the individual item page, providing detailed information about a single item.
Data Population:
Utilized the FakeStoreAPI to populate the site with realistic product data, enhancing the user experience.
Routing with React Router:
Implemented React Router for seamless navigation, defining link paths between pages using the BrowserRouter component and Routes.
State Management with React Context:
Employed React Context to manage the state of items in the cart, facilitating the addition, removal, and updating of items. Implemented functionality to calculate and adjust the total price at checkout.
Implementation Challenges
1. Card Navigation:

Implemented a Route in App.jsx to direct users from the main shopping page to a single item page. Each card component on the shopping page is linked to the single item page, with the Card.id used to retrieve specific item data from the API.
2. Search Functionality:

Developed a search functionality on the main shopping page using the filter function against product titles. The search bar allows users to filter products based on their input, dynamically updating the displayed items.
Future Enhancements
User Authentication:
Implement user authentication to personalize the shopping experience, allowing users to track their order history and save preferences.
Responsive Design:
Enhance the application's responsiveness for a seamless experience across various devices.
Product Reviews:
Integrate a review system to allow users to provide feedback on purchased items, enhancing product transparency.
Feel free to explore the live demo and experience the seamless shopping journey with Quick Kart!




