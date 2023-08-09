/*import 'dotenv/config';
import mysql from "mysql2";

// Créer une connexion à la base de données
const connection = mysql.createConnection({
   // port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Supprimer la base de données
connection.query(`DROP DATABASE ${process.env.DB_NAME}`, (error) => {
    if (error) {
        console.error('Erreur lors de la suppression de la base de données :', error);
    } else {
        console.log('Base de données supprimée avec succès');
    }

    // Fermer la connexion
    connection.end();
});
*/