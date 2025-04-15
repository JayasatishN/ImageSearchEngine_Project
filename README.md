# Image Search Engine with Database Integration

This is a Java-based full-stack image search engine using the Unsplash API and MySQL database.

## Features

- Search images using the Unsplash API
- Infinite scroll for results
- Save search history using Servlets and JDBC
- View history from a separate page
- Responsive front-end with HTML, CSS, and JavaScript

## Setup

1. Clone the repository
2. Configure your MySQL credentials in `SearchHistoryServlet.java` and `HistoryServlet.java`
3. Run the SQL below to create your database and table:
    ```sql
    CREATE DATABASE IF NOT EXISTS image_search_db;
    USE image_search_db;
    CREATE TABLE IF NOT EXISTS search_history (
        id INT AUTO_INCREMENT PRIMARY KEY,
        query VARCHAR(255) NOT NULL,
        result_count INT NOT NULL,
        search_time DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    ```
4. Deploy the project on Apache Tomcat or any Java EE server

## Notes

- Replace `YOUR_ACCESS_KEY` in `script.js` with your actual Unsplash API key
- Java 8+ recommended"# ImageSearchEngine_Project" 
