# Wingman Dashboard

**Wingman - Frontend Engineering Role Coding Assignment**

## Project Overview

This project implements a responsive **dashboard** for Wingman, providing live, one-on-one shopping assistance on e-commerce websites. The dashboard is designed with pixel-perfect accuracy based on the [Figma design](https://www.figma.com/design/2iyOE3Sud9sLjtJcGIFhEE/Frontend-Coding-Assignment?node-id=1-3499&m=dev&t=A7o3UA3Byp66iWCO-1). It highlights key metrics and functionalities:

1. **At a Glance**: Overview of key business metrics like consultations, orders placed, conversions, and sales performance.
2. **Insights**: Graphical representation of consultations and sales trends.
3. **Orders Table**: Displays detailed order data with **pagination** and **sorting** capabilities for columns such as date, time spent, order value, and commission.

**Live demo**: [Wingman Dashboard](https://wingman-mh.vercel.app/)

---

## Features

### 1. **Table Pagination and Sorting**

- **Pagination**: The orders table uses pagination to display a fixed number of rows per page, ensuring usability and performance.
- **Sorting**: Allows sorting on the current page for columns like date, time spent, order value, and commission. Hovering over column headers shows a sort icon that toggles between ascending and descending order on click.

### 2. **Responsive Design**

- Fully responsive to adapt seamlessly across devices including desktops, tablets, and mobile phones.
- Layout built with **Next.js 15.1.1**'s app routing and layout functionality, allowing smooth navigation between multiple routes using a sidebar.

### 3. **Styling**

- **Tailwind CSS**: Used for consistent and efficient styling across all components.
- **Shadcn**: Integrated for visually appealing charts and graphs, enhancing the dashboard's insights section.

### 4. **Data Integration**

- **API Integration**: Dummy data is fetched from a public API ([JSONPlaceholder](https://jsonplaceholder.typicode.com)) and formatted to match the design requirements.

### 5. **Deployment**

- Deployed on **Vercel** for fast and reliable hosting. Visit the live version [here](https://wingman-mh.vercel.app/).

---

## Technologies Used

- **Next.js (v15.1.1)**: Provides the foundation for building this project with server-side rendering and layout functionality.
- **Tailwind CSS**: For utility-first, responsive design.
- **Shadcn**: For interactive and aesthetic graph components.
- **React Icons**: For intuitive iconography.
- **JSONPlaceholder API**: As a source of fake data.
- **Vercel**: For seamless deployment and hosting.

---

## Installation and Usage

Follow these steps to clone and run the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/manishmh/wingman.git
   cd wingman
   ```
2. **Install Dependencies**  
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```
3. **Run the application in your local system**
    ```bash
    npm run dev
    ```

### Open the App
Visit http://localhost:3000 in your browser to view the app.
