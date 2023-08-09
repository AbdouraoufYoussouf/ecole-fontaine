/*import 'dotenv/config';
import mysql from "mysql2";

const connection = mysql.createConnection({
  connectionLimit: 10000,
  //port:process.env.DB_PORT,
  host:process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connexion à MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");

  // Commande SQL pour créer la base de données
  const createDatabaseQuery = "CREATE DATABASE IF NOT EXISTS bouchrabelamri_blog";

  // Exécution de la commande SQL pour créer la base de données
  connection.query(createDatabaseQuery, (err, result) => {
    if (err) throw err;
    console.log("Database created");

    // Création de la table "users"
    const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )
  `;
  

    // Création de la table "roles"
    const createRolesTableQuery = `
      CREATE TABLE IF NOT EXISTS roles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      )
    `;

    // Création de la table de jointure "user_roles"
    const createUserRolesTableQuery = `
      CREATE TABLE IF NOT EXISTS user_roles (
        user_id INT,
        role_id INT,
        PRIMARY KEY (user_id, role_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
      )
    `;

    // Création de la table "category"
    const createCategoryTableQuery = `
    CREATE TABLE IF NOT EXISTS category (
      id INT AUTO_INCREMENT PRIMARY KEY,
      category_name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )    
  `;
  
    // Création de la table "articles"
    const createArticlesTableQuery = `
    CREATE TABLE IF NOT EXISTS articles (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT,
      image_path VARCHAR(255),
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      user_id INT,
      category_id INT,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
    )
  `;
  
  

    // Création de la table "comments"
    const createCommentsTableQuery = `
    CREATE TABLE IF NOT EXISTS comments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      content VARCHAR(255) NOT NULL,
      user_id INT NOT NULL,
      article_id INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
    );
    `;

    // Création de la table "comments"
    const createArticleCommentsTableQuery = `
    CREATE TABLE IF NOT EXISTS article_comments (
      article_id INT NOT NULL,
      comment_id INT NOT NULL,
      PRIMARY KEY (article_id, comment_id),
      FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
      FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE
    );
    `;

    // Création de la table "comments"
    const createUserCommentsTableQuery = `
    CREATE TABLE IF NOT EXISTS user_comments (
      user_id INT NOT NULL,
      comment_id INT NOT NULL,
      PRIMARY KEY (user_id, comment_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE
    );
    `;

    // Exécution des requêtes de création des tables
    connection.query(createUsersTableQuery, (error) => {
      if (error) throw error;
      console.log("Table 'users' created");
    });

    connection.query(createRolesTableQuery, (error) => {
      if (error) throw error;
      console.log("Table 'roles' created");
    });

    connection.query(createUserRolesTableQuery, (error) => {
      if (error) throw error;
      console.log("Table 'user_roles' created");
    });
    connection.query(createCategoryTableQuery, (error) => {
      if (error) throw error;
      console.log("Table 'category' created");
    });

    connection.query(createArticlesTableQuery, (error) => {
      if (error) throw error;
      console.log("Table 'articles' created");
    });

    connection.query(createCommentsTableQuery, (error) => {
      if (error) throw error;
      console.log("Table 'comments' created");
    });
    connection.query(createArticleCommentsTableQuery, (error) => {
      if (error) throw error;
      console.log("Table 'Article-comments' created");
    });
    connection.query(createUserCommentsTableQuery, (error) => {
      if (error) throw error;
      console.log("Table 'User-comments' created");
    });

    // Fermeture de la connexion à la base de données
    connection.end();
  });
});*/
