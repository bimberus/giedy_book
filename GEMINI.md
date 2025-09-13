## Project Overview

This is a Next.js project for a landing page to promote and sell a book about the "Mazowsze" folk ensemble. The website is built with Next.js, React, TypeScript, and Tailwind CSS. It features a single-page layout with sections for the book description, author biography, image gallery, and a sales section.

**Key Technologies:**

*   Next.js
*   React
*   TypeScript
*   Tailwind CSS

**Architecture:**

The project follows the standard Next.js App Router architecture. The main page is `src/app/page.tsx`, and the layout is defined in `src/app/layout.tsx`. Global styles and color definitions are in `src/app/globals.css`.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3.  **Build for production:**

    ```bash
    npm run build
    ```

4.  **Start the production server:**

    ```bash
    npm run start
    ```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Custom styles and color variables are defined in `src/app/globals.css`.
*   **Fonts:** The project uses the `Playfair Display` and `Roboto` fonts from Google Fonts, configured in `src/app/layout.tsx`.
*   **Components:** The entire page is currently in a single component (`src/app/page.tsx`). For future development, it would be beneficial to break down the page into smaller, reusable components.
*   **Images:** Images are stored in the `public` directory and rendered using the Next.js `Image` component for optimization.
