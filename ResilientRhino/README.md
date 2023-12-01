# Resilient Rhino Website Code Tree

This document provides an overview of the codebase structure for the ResilientRhino project.

## Directory Overview

- `public/`: Contains static assets that are served at the root path.
  - `cursors/`: Custom cursor designs for the web application.
    - `koiCursor.cur`: Cursor design featuring a koi fish.
    - `penguinCursor.cur`: Cursor design featuring a penguin.
    - `rhinoHeartCursor.cur`: Cursor design featuring a rhino with a heart.
  - `images/`: Images used throughout the application.
    - `mascots/`: Mascot images for branding and UI embellishments.
      - `rhino.webp`: WebP image of the rhino mascot.
      - `rhinoHeart.webp`: Image of the rhino mascot with a heart.
      - `rhinoMascot_512.png`: 512x512 PNG of the rhino mascot.
      - `heart.webp`: Generic heart image for UI elements.
    - `homeScreenshot.png`: Screenshot of the application's homepage.
    - `lightHeart.webp`: A lighter version of the heart image for different UI themes.

- `src/`: The source code for the application.
  - `components/`: React components used throughout the application.
    - `CountryCard.jsx`: Component for displaying individual country cards.
    - `CountryCardContainer.jsx`: Container component for grouping country cards.
    - `CountryDetails.jsx`: Detailed view component for country-specific information.
    - `Disclaimer.jsx`: Disclaimer component for legal notices.
    - `SearchBar.jsx`: Search bar component for finding countries.
    - `TopBar.jsx`: Top navigation bar component.
  - `pages/`: React components representing entire pages.
    - `home.jsx`: The home page component.
  - `styles/`: CSS files for styling the application.
    - `country-details.css`: Styles specific to the country details view.
    - `home.css`: Styles for the home page.
    - `refresh.css`: Styles for the refresh animation.
  - `App.jsx`: The main React component that bootstraps the application.
  - `index.jsx`: The entry point for the React application.
  - `vite.config.js`: Configuration file for Vite, the build tool used.

- `.eslintrc.js`: ESLint configuration for maintaining code quality.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `README.md`: Documentation for the project (this file).
- `package.json`: Defines npm package dependencies and scripts.
- `package-lock.json`: Automatically generated file for any operations where npm modifies either the node_modules tree or `package.json`.

## Notes

- All React components follow the `.jsx` extension convention.
- Images are optimized in `.webp` format for better performance where possible.
- The project uses ESLint to enforce coding standards.
- Vite is configured for an optimized build process.

For more details on each component and style, please refer to the inline documentation within the files.
