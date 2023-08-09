

/*import pool from "./database.js";
import bcrypt from 'bcrypt';

// Fonction pour insérer des données aléatoires dans la table "users"
const insertRandomUsers = async () => {
  try {
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', password: 'Password1' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'Password2' },
      { id: 3, name: 'Michael Johnson', email: 'michael@example.com', password: 'Password3' },
      { id: 4, name: 'Sarah Davis', email: 'sarah@example.com', password: 'Password4' },
      { id: 5, name: 'John Smith', email: 'johne@example.com', password: 'Password1' },
      { id: 6, name: 'Emily Johnson', email: 'emily@example.com', password: 'Password2' },
      { id: 7, name: 'Michael Brown', email: 'michaele@example.com', password: 'Password3' },
      { id: 8, name: 'Sarah Davis', email: 'sarahe@example.com', password: 'Password4' },
      { id: 9, name: 'David Wilson', email: 'david@example.com', password: 'Password5' },
      { id: 10, name: 'Jessica Taylor', email: 'jessica@example.com', password: 'Password6' },
      { id: 11, name: 'Christopher Anderson', email: 'christopher@example.com', password: 'Password7' },
      { id: 12, name: 'Amanda Martinez', email: 'amanda@example.com', password: 'Password8' },
      { id: 13, name: 'Matthew Thompson', email: 'matthew@example.com', password: 'Password9' },
      { id: 14, name: 'Olivia Thomas', email: 'olivia@example.com', password: 'Password10' }
    ];

    const query = 'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)';

    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      await pool.query(query, [user.id, user.name, user.email, hashedPassword]);
    }

    console.log('Données insérées dans la table "users"');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données dans la table "users":', error);
  }
};

// Fonction pour insérer des données aléatoires dans la table "roles"
const insertRandomRoles = async () => {
  try {
    const roles = [
      { id: 1, name: 'Admin' },
      { id: 2, name: 'Editor' },
      { id: 3, name: 'User' },
    ];

    const query = 'INSERT INTO roles (id, name) VALUES (?, ?)';

    for (const role of roles) {
      await pool.query(query, [role.id, role.name]);
    }

    console.log('Données insérées dans la table "roles"');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données dans la table "roles":', error);
  }
};

// Fonction pour insérer des données aléatoires dans la table "category"
const insertRandomCategories = async () => {
  try {
    const categories = [
      { id: 1, category_name: 'Technology' },
      { id: 2, category_name: 'Science' },
      { id: 3, category_name: 'Sports' },
    ];

    const query = 'INSERT INTO category (id, category_name) VALUES (?, ?)';

    for (const category of categories) {
      await pool.query(query, [category.id, category.category_name]);
    }

    console.log('Données insérées dans la table "category"');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données dans la table "category":', error);
  }
};

// Fonction pour insérer des données aléatoires dans la table "articles"
const insertRandomArticles = async () => {
  try {
    const articles = [
      {
        id: 1, title: `L'impact de l'intelligence artificielle sur l'industrie de la santé`,
        content: `Paragraphe 1 : L'intelligence artificielle (IA) est en train de révolutionner de nombreux secteurs, y compris l'industrie de la santé. Grâce à des algorithmes sophistiqués et à l'apprentissage automatique, l'IA peut aider les médecins et les chercheurs à diagnostiquer les maladies, à développer de nouveaux traitements et à améliorer les résultats des patients. Les avancées dans ce domaine promettent d'ouvrir de nouvelles possibilités et de transformer radicalement la façon dont les soins de santé sont dispensés.
        Paragraphe 2 : Un domaine où l'IA a un impact significatif est le diagnostic médical. Les systèmes d'IA peuvent analyser des milliers d'images médicales et de données patient pour aider à détecter les signes précoces de maladies telles que le cancer. Cette capacité à repérer des motifs et des anomalies imperceptibles à l'œil humain permet une détection précoce et une intervention rapide, améliorant ainsi les chances de guérison des patients.
        Paragraphe 3 : L'IA est également utilisée dans la recherche médicale. Les scientifiques peuvent utiliser des algorithmes d'apprentissage automatique pour analyser d'énormes ensembles de données génétiques et identifier des relations complexes entre les gènes et les maladies. Cette compréhension approfondie de la génétique humaine ouvre la voie à des traitements personnalisés et à de nouvelles découvertes médicales.
        Paragraphe 4 : Cependant, l'intégration de l'IA dans l'industrie de la santé soulève également des questions éthiques et de confidentialité. Il est essentiel de garantir la protection des données des patients et d'assurer une utilisation responsable de l'IA. Les réglementations appropriées doivent être mises en place pour encadrer l'utilisation de l'IA et garantir qu'elle est utilisée de manière bénéfique pour les patients et la société dans son ensemble.`, image_path:"/images/article1.jpeg", user_id: 1, category_id: 1
      },
      {
        id: 2, title: 'Les défis de la colonisation de Mars', content: `Paragraphe 1 : La colonisation de Mars est un objectif ambitieux pour l'humanité, mais elle est également confrontée à de nombreux défis. L'un des défis majeurs est la distance énorme entre la Terre et Mars, ce qui rend les missions de ravitaillement et de communication extrêmement complexes. Les astronautes devront être autosuffisants pendant de longues périodes et développer des systèmes de soutien de vie durables sur la planète rouge.

      Paragraphe 2 : Un autre défi majeur est l'environnement hostile de Mars. La planète est exposée à des radiations intenses, à des températures extrêmes et à une atmosphère ténue. Les colons devront trouver des moyens de se protéger de ces dangers et de créer des habitats sûrs et confortables. De plus, la disponibilité limitée de ressources telles que l'eau et l'oxygène nécessitera des technologies avancées pour les exploiter efficacement.
      
      Paragraphe 3 : Les aspects psychologiques et physiologiques de la colonisation de Mars sont également des défis importants. Les colons devront faire face à l'isolement, à la distance de leur famille et de leurs amis sur Terre, ainsi qu'à la gravité réduite. Les études sur les effets de longue durée de l'espace sur le corps humain sont en cours, mais il reste encore beaucoup à apprendre pour préparer les futurs colons à ces conditions extrêmes.
      
      Paragraphe 4 : Malgré ces défis, la colonisation de Mars offre également de grandes opportunités. Elle pourrait ouvrir la voie à une exploration plus poussée de l'univers, à l'exploitation de ressources extraterrestres et à l'établissement de nouvelles sociétés humaines. Les progrès technologiques et les efforts internationaux collaboratifs sont essentiels pour surmonter ces défis et réaliser ce rêve audacieux de l'humanité.`, image_path:"/images/article2.jpeg", user_id: 2, category_id: 2
      },
      {
        id: 3, title: "Les avantages de l'énergie solaire pour un avenir durable", content: `Paragraphe 1 : L'énergie solaire est une source d'énergie propre et renouvelable qui présente de nombreux avantages pour un avenir durable. L'utilisation de panneaux solaires pour générer de l'électricité réduit les émissions de gaz à effet de serre, contribuant ainsi à la lutte contre le changement climatique. De plus, contrairement aux combustibles fossiles, le soleil est une ressource inépuisable et disponible gratuitement pour tous.

      Paragraphe 2 : L'énergie solaire est également décentralisée, ce qui signifie qu'elle peut être produite localement et utilisée directement sur place. Cela réduit la dépendance aux réseaux électriques centralisés et améliore la résilience des communautés face aux pannes de courant ou aux catastrophes naturelles. Les systèmes solaires peuvent être installés sur les toits des bâtiments ou dans des zones éloignées, offrant ainsi une flexibilité d'utilisation.
      
      Paragraphe 3 : Sur le plan économique, l'énergie solaire crée des emplois et stimule l'innovation technologique. L'industrie solaire connaît une croissance rapide et offre des opportunités d'emploi dans l'installation, la maintenance et la fabrication de systèmes solaires. De plus, la recherche et le développement dans le domaine de l'énergie solaire conduisent à des avancées technologiques qui améliorent l'efficacité et la rentabilité de cette source d'énergie.
      
      Paragraphe 4 : Enfin, l'énergie solaire offre une solution durable pour les régions éloignées et les pays en développement qui n'ont pas accès à un réseau électrique fiable. Les systèmes solaires hors réseau peuvent fournir de l'électricité aux communautés reculées, améliorant ainsi l'accès à l'éducation, à la santé et aux opportunités économiques. L'énergie solaire permet de réduire la pauvreté énergétique et de promouvoir un développement durable et inclusif.
      
      `, image_path:"/images/article3.jpeg", user_id: 3, category_id: 3
      },
      {
        id: 4, title: "Les avancées de l'intelligence artificielle dans le domaine de la traduction", content: `Paragraphe 1 : L'intelligence artificielle (IA) a considérablement amélioré les capacités de traduction, rendant les communications internationales plus faciles et plus rapides. Les systèmes de traduction automatique basés sur l'IA utilisent des algorithmes d'apprentissage automatique pour analyser et traduire rapidement des textes dans différentes langues. Cette technologie a révolutionné la façon dont les entreprises, les organisations et les individus interagissent à l'échelle mondiale.

      Paragraphe 2 : Grâce à l'apprentissage automatique, les systèmes de traduction basés sur l'IA sont capables de comprendre le contexte et d'effectuer des traductions plus précises. Ils peuvent également s'adapter à différents styles et registres de langue, ce qui améliore la qualité globale des traductions. Cette capacité à fournir des traductions rapides et fiables facilite les échanges culturels et commerciaux entre les pays et les cultures.
      
      Paragraphe 3 : L'intégration de l'IA dans les outils de traduction a également permis des avancées significatives dans la traduction en temps réel. Des applications mobiles et des services en ligne utilisent maintenant des systèmes de traduction automatique pour permettre des conversations en direct dans différentes langues. Cela facilite la communication entre les personnes qui ne parlent pas la même langue et élargit les horizons en termes de collaboration et d'échange culturel.
      
      Paragraphe 4 : Cependant, malgré ces avancées, les traductions basées sur l'IA peuvent encore présenter des erreurs et des limitations. Les nuances linguistiques, les expressions idiomatiques et les jeux de mots peuvent parfois être mal interprétés par les systèmes de traduction automatique. Il est donc important d'utiliser ces outils avec prudence et de toujours vérifier la précision des traductions, en particulier dans des situations sensibles ou professionnelles.
      
      `, image_path:"/images/article4.jpeg", user_id: 4, category_id: 1
      },

      {
        id: 5, title: "L'importance de la biodiversité pour l'équilibre des écosystèmes", content: `Paragraphe 1 : L'intelligence artificielle (IA) est en train de révolutionner de nombreux secteurs, y compris l'industrie de la santé. Grâce à des algorithmes sophistiqués et à l'apprentissage automatique, l'IA peut aider les médecins et les chercheurs à diagnostiquer les maladies, à développer de nouveaux traitements et à améliorer les résultats des patients. Les avancées dans ce domaine promettent d'ouvrir de nouvelles possibilités et de transformer radicalement la façon dont les soins de santé sont dispensés.

Paragraphe 2 : Un domaine où l'IA a un impact significatif est le diagnostic médical. Les systèmes d'IA peuvent analyser des milliers d'images médicales et de données patient pour aider à détecter les signes précoces de maladies telles que le cancer. Cette capacité à repérer des motifs et des anomalies imperceptibles à l'œil humain permet une détection précoce et une intervention rapide, améliorant ainsi les chances de guérison des patients.

Paragraphe 3 : L'IA est également utilisée dans la recherche médicale. Les scientifiques peuvent utiliser des algorithmes d'apprentissage automatique pour analyser d'énormes ensembles de données génétiques et identifier des relations complexes entre les gènes et les maladies. Cette compréhension approfondie de la génétique humaine ouvre la voie à des traitements personnalisés et à de nouvelles découvertes médicales.

Paragraphe 4 : Cependant, l'intégration de l'IA dans l'industrie de la santé soulève également des questions éthiques et de confidentialité. Il est essentiel de garantir la protection des données des patients et d'assurer une utilisation responsable de l'IA. Les réglementations appropriées doivent être mises en place pour encadrer l'utilisation de l'IA et garantir qu'elle est utilisée de manière bénéfique pour les patients et la société dans son ensemble.`, image_path:"/images/article5.jpeg", user_id: 1, category_id: 1
      },
      {
        id: 6, title: "L'importance de la biodiversité pour l'équilibre des écosystèmes", content: `Paragraphe 1 : La biodiversité est essentielle pour maintenir l'équilibre des écosystèmes et assurer le fonctionnement harmonieux de la nature. Les écosystèmes sont composés d'une multitude d'espèces interconnectées, chacune jouant un rôle spécifique dans la chaîne alimentaire, la pollinisation, la décomposition des déchets et d'autres processus écologiques. La perte de biodiversité peut perturber ces interactions et avoir des conséquences néfastes sur la santé des écosystèmes.

      Paragraphe 2 : La biodiversité contribue également à la résilience des écosystèmes face aux changements environnementaux. Des écosystèmes diversifiés sont mieux équipés pour faire face aux perturbations telles que les maladies, les invasions d'espèces nuisibles et les variations climatiques. La diversité génétique au sein des espèces permet une plus grande capacité d'adaptation, ce qui favorise la survie et la régénération des écosystèmes face à des défis changeants.
      
      Paragraphe 3 : En plus de ses avantages écologiques, la biodiversité présente également une valeur économique et culturelle. Les ressources naturelles, telles que les plantes médicinales, les aliments sauvages et les matériaux de construction, proviennent de la biodiversité. De plus, la biodiversité est un pilier important de nombreuses cultures et traditions, offrant une richesse de connaissances et de pratiques transmises de génération en génération.
      
      Paragraphe 4 : Malheureusement, la biodiversité est actuellement confrontée à des menaces sans précédent, telles que la déforestation, la pollution, la surpêche et le changement climatique. La préservation et la conservation de la biodiversité sont donc cruciales pour préserver l'équilibre des écosystèmes et maintenir la santé de notre planète. Des mesures de protection, la création de réserves naturelles et la promotion de pratiques durables sont nécessaires pour inverser la tendance et préserver la biodiversité pour les générations futures.
      `, image_path:"/images/article6.jpeg", user_id: 2, category_id: 2
      },

      {
        id: 7,
        title: "L'avenir de la conduite autonome dans l'industrie automobile",
        content: `Paragraphe 1 : La conduite autonome est en train de révolutionner l'industrie automobile. Grâce à l'intelligence artificielle et aux capteurs avancés, les voitures autonomes peuvent analyser leur environnement, prendre des décisions en temps réel et se déplacer en toute sécurité sans l'intervention d'un conducteur humain. Cette technologie promet de réduire les accidents de la route, d'améliorer l'efficacité du transport et de transformer la mobilité urbaine.
          Paragraphe 2 : Un aspect clé de la conduite autonome est la perception des véhicules. Les systèmes basés sur l'IA peuvent détecter les obstacles, les piétons, les panneaux de signalisation et les autres véhicules, leur permettant de naviguer de manière autonome sur les routes. Les progrès continus dans la vision par ordinateur et la reconnaissance des objets alimentent le développement de capteurs et d'algorithmes plus avancés pour une perception précise.
          Paragraphe 3 : L'impact de la conduite autonome va au-delà de la sécurité routière. Elle a le potentiel de réduire la congestion, d'optimiser l'utilisation de l'espace urbain et de minimiser l'empreinte carbone des transports. Les véhicules autonomes peuvent être intégrés à des systèmes de covoiturage et de transport en commun, offrant une solution de mobilité plus efficace et durable.
          Paragraphe 4 : Cependant, l'adoption généralisée de la conduite autonome soulève également des défis, notamment en matière de réglementation, de responsabilité et d'acceptation sociale. Les questions éthiques et juridiques entourant les décisions prises par les voitures autonomes en cas d'accident sont un sujet de débat important. De plus, il est essentiel de garantir la fiabilité et la sécurité des systèmes autonomes pour assurer la confiance du public dans cette technologie.`,
        image_path:"/images/article7.jpeg", user_id: 1,
        category_id: 2
      },
      {
        id: 8,
        title: "Les avancées de l'IA dans le domaine de l'assistance virtuelle",
        content: `Paragraphe 1 : Les assistants virtuels basés sur l'intelligence artificielle, tels que Siri, Alexa et Google Assistant, sont devenus des éléments essentiels de notre vie quotidienne. Ces systèmes utilisent des techniques d'apprentissage automatique pour comprendre et répondre aux commandes vocales des utilisateurs, offrant une assistance personnalisée et pratique.
          Paragraphe 2 : L'IA permet aux assistants virtuels d'apprendre et de s'adapter aux préférences et aux habitudes des utilisateurs. Ils peuvent fournir des recommandations personnalisées, effectuer des tâches telles que la planification d'itinéraires ou la réservation de restaurants, et même contrôler d'autres appareils intelligents dans la maison.
          Paragraphe 3 : L'amélioration de la reconnaissance vocale et du traitement du langage naturel a été l'un des principaux moteurs de l'évolution des assistants virtuels. Les algorithmes d'apprentissage automatique permettent aux systèmes d'IA de comprendre et d'interpréter les intentions des utilisateurs, ce qui rend l'interaction avec les assistants virtuels plus naturelle et fluide.
          Paragraphe 4 : Cependant, les assistants virtuels basés sur l'IA soulèvent également des préoccupations en matière de confidentialité et de protection des données. Étant donné qu'ils traitent des informations personnelles sensibles, il est essentiel de mettre en place des mesures de sécurité robustes pour protéger la vie privée des utilisateurs. De plus, la transparence dans les algorithmes et les décisions prises par les assistants virtuels est importante pour établir la confiance des utilisateurs.`,
        image_path:"/images/article8.jpeg", user_id: 1,
        category_id: 2
      },

      {
        id: 9,
        title: "L'impact de l'IA sur l'industrie de la finance",
        content: `Paragraphe 1 : L'intelligence artificielle (IA) joue un rôle de plus en plus important dans l'industrie de la finance. Grâce à l'apprentissage automatique et à l'analyse des données, les systèmes d'IA peuvent aider à détecter les fraudes, à prendre des décisions d'investissement basées sur des modèles prédictifs et à automatiser les processus de gestion des risques. Ces avancées technologiques transforment la façon dont les services financiers sont fournis et ouvrent de nouvelles opportunités.
          Paragraphe 2 : Un domaine où l'IA a un impact significatif est l'analyse des données financières. Les algorithmes d'apprentissage automatique peuvent analyser de vastes quantités de données en temps réel, identifier des tendances et des modèles cachés, et prendre des décisions éclairées. Cela permet aux professionnels de la finance de prendre des décisions d'investissement plus éclairées et de mieux gérer les risques.
          Paragraphe 3 : L'IA est également utilisée dans le domaine de la gestion des risques. Les modèles d'IA peuvent évaluer les risques liés aux prêts, aux investissements et aux opérations financières, ce qui aide les institutions financières à prendre des décisions plus éclairées. De plus, l'IA permet la détection précoce des fraudes et des activités suspectes, aidant ainsi à renforcer la sécurité financière.
          Paragraphe 4 : Cependant, l'adoption de l'IA dans l'industrie de la finance soulève des questions réglementaires et éthiques. Il est important de garantir que les systèmes d'IA sont transparents, équitables et responsables. De plus, la protection des données des clients et la conformité aux réglementations sur la confidentialité sont des aspects cruciaux lors de l'utilisation de l'IA dans le secteur financier.`,
        image_path:"/images/article9.jpeg", user_id: 1,
        category_id: 3
      },
      {
        id: 10,
        title: "L'IA dans le domaine de l'agriculture : une révolution en cours",
        content: `Paragraphe 1 : L'intelligence artificielle (IA) est en train de révolutionner le secteur agricole. Grâce à des capteurs avancés, à l'analyse des données et à l'apprentissage automatique, les agriculteurs peuvent optimiser la production, améliorer la gestion des cultures et réduire les impacts environnementaux. L'IA offre de nouvelles perspectives pour une agriculture plus durable, productive et résiliente.
          Paragraphe 2 : Un aspect clé de l'IA dans l'agriculture est la précision de la gestion des cultures. Les systèmes d'IA peuvent analyser des données telles que la composition du sol, les conditions météorologiques et la santé des plantes pour fournir des recommandations précises sur l'irrigation, la fertilisation et la protection des cultures. Cela permet aux agriculteurs d'optimiser l'utilisation des ressources, de réduire les coûts et d'augmenter les rendements.
          Paragraphe 3 : L'IA est également utilisée dans l'élevage et la santé animale. Les technologies basées sur l'IA peuvent surveiller la santé des animaux, détecter les maladies plus rapidement et fournir des soins individualisés. De plus, l'IA peut aider à prédire les rendements de l'élevage, à améliorer la sélection génétique et à optimiser les processus de production.
          Paragraphe 4 : Cependant, l'adoption de l'IA dans l'agriculture nécessite des investissements en infrastructures et en formation. Les agriculteurs doivent être formés à l'utilisation des technologies basées sur l'IA et disposer de l'infrastructure nécessaire pour collecter et traiter les données agricoles. De plus, il est crucial de garantir que l'IA est utilisée de manière responsable et éthique, en prenant en compte les préoccupations environnementales et sociales.`,
        image_path:"/images/article10.jpeg", user_id: 1,
        category_id: 3
      },
      {
        id: 11,
        title: "L'IA dans le secteur de la vente au détail : transformer l'expérience client",
        content: `Paragraphe 1 : L'intelligence artificielle (IA) a un impact majeur sur le secteur de la vente au détail. Les détaillants utilisent l'IA pour améliorer l'expérience client, personnaliser les offres, prédire les tendances et optimiser les opérations. Cette technologie permet de créer des expériences d'achat plus fluides, efficaces et engageantes pour les consommateurs.
          Paragraphe 2 : Un aspect clé de l'IA dans le commerce de détail est la personnalisation. Les systèmes d'IA peuvent analyser les données des clients, leurs préférences et leur comportement d'achat pour fournir des recommandations et des offres personnalisées. Cela permet aux détaillants de créer des interactions plus pertinentes et significatives avec les clients, renforçant ainsi la fidélité et les ventes.
          Paragraphe 3 : L'IA est également utilisée dans la gestion des stocks et la logistique. Les algorithmes d'apprentissage automatique peuvent analyser les données des ventes, les tendances saisonnières et les prévisions de demande pour optimiser les niveaux de stock, réduire les ruptures de stock et améliorer l'efficacité des livraisons. Cela permet aux détaillants d'optimiser leurs opérations et de fournir un service plus fiable aux clients.
          Paragraphe 4 : Cependant, l'adoption de l'IA dans le secteur de la vente au détail nécessite également de relever des défis. La protection des données des clients et la garantie de la confidentialité sont des préoccupations importantes. De plus, les détaillants doivent s'assurer que l'IA est utilisée de manière éthique, en évitant les biais et en respectant les réglementations en matière de protection des consommateurs.`,
        image_path:"/images/article11.jpeg", user_id: 1,
        category_id: 2
      },


    ];

    const query = 'INSERT INTO articles (id, title, content,image_path, user_id, category_id) VALUES (?,?, ?, ?, ?, ?)';

    for (const article of articles) {
      await pool.query(query, [article.id, article.title, article.content,article.image_path, article.user_id, article.category_id]);
    }

    console.log('Données insérées dans la table "articles"');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données dans la table "articles":', error);
  }
};

// Fonction pour insérer des données aléatoires dans la table "comments"
const insertRandomComments = async () => {
  try {
    const comments = [
      { id: 1, content: 'Super article !', user_id: 1, article_id: 11 },
      { id: 2, content: 'Lecture intéressante.', user_id: 2, article_id: 10 },
      { id: 3, content: "J'ai une question.", user_id: 3, article_id: 9 },
      { id: 4, content: 'Bon travail !', user_id: 4, article_id: 8 },
      { id: 5, content: 'Merci pour le partage.', user_id: 1, article_id: 11 },
      { id: 6, content: "Je suis totalement d'accord.", user_id: 2, article_id: 10 },
      { id: 7, content: 'Pouvez-vous fournir plus de détails ?', user_id: 3, article_id: 9 },
      { id: 8, content: 'Bien écrit !', user_id: 4, article_id: 8 },
      { id: 9, content: "J'ai apprécié la lecture.", user_id: 1, article_id: 11 },
      { id: 10, content: 'Très bon travail !', user_id: 2, article_id: 10 },
      { id: 11, content: 'Des recommandations ?', user_id: 3, article_id: 9 },
      { id: 12, content: "J'ai trouvé cela très utile.", user_id: 4, article_id: 8 },
      { id: 13, content: 'Continuez comme ça !', user_id: 1, article_id: 11 },
      { id: 14, content: 'Sujet fascinant !', user_id: 2, article_id: 7 },
      { id: 15, content: "J'ai un point de vue différent.", user_id: 3, article_id: 7 },
      { id: 16, content: "J'ai appris quelque chose de nouveau.", user_id: 4, article_id: 7 },
      { id: 17, content: "Cela m'a inspiré.", user_id: 1, article_id: 6 },
      { id: 18, content: 'Bons points soulevés.', user_id: 2, article_id: 6 },
      { id: 19, content: "J'attends avec impatience plus d'articles.", user_id: 3, article_id: 6 },
      { id: 20, content: "Je suis tout à fait d'accord.", user_id: 4, article_id: 6 },
      // Commentaires pour l'article 1
      { id: 21, content: 'Super article !', user_id: 1, article_id: 1 },
      { id: 22, content: 'Merci pour le partage.', user_id: 2, article_id: 1 },
      { id: 23, content: 'Très intéressant.', user_id: 3, article_id: 1 },
      { id: 24, content: 'J\'ai une question.', user_id: 4, article_id: 1 },
      { id: 25, content: 'Bonne analyse.', user_id: 1, article_id: 1 },
      { id: 26, content: 'Cela m\'a inspiré.', user_id: 2, article_id: 1 },
      { id: 27, content: 'Des recommandations ?', user_id: 3, article_id: 1 },
      { id: 28, content: 'Je suis totalement d\'accord.', user_id: 4, article_id: 1 },
      { id: 29, content: 'Continuez comme ça !', user_id: 1, article_id: 1 },
      { id: 30, content: 'J\'attends avec impatience plus d\'articles.', user_id: 2, article_id: 11 },

      // Commentaires pour l'article 2
      { id: 31, content: 'Lecture intéressante.', user_id: 1, article_id: 2 },
      { id: 32, content: 'Bien écrit !', user_id: 2, article_id: 2 },
      { id: 33, content: 'Merci pour les informations.', user_id: 3, article_id: 2 },
      { id: 34, content: 'J\'ai appris quelque chose de nouveau.', user_id: 4, article_id: 2 },
      { id: 35, content: 'Des exemples concrets seraient utiles.', user_id: 1, article_id: 2 },
      { id: 36, content: 'Pouvez-vous donner plus de détails ?', user_id: 2, article_id: 2 },
      { id: 37, content: 'Je suis d\'accord avec votre point de vue.', user_id: 3, article_id: 2 },
      { id: 38, content: 'Cela a élargi ma perspective.', user_id: 4, article_id: 2 },
      { id: 39, content: 'Je recommande cet article à tous.', user_id: 1, article_id: 2 },
      { id: 40, content: 'Les illustrations sont excellentes.', user_id: 2, article_id: 2 },

      // Commentaires pour l'article 3
      { id: 41, content: 'J\'ai une question.', user_id: 1, article_id: 3 },
      { id: 42, content: 'Je suis totalement d\'accord.', user_id: 2, article_id: 3 },
      { id: 43, content: 'Pouvez-vous expliquer plus en détail ?', user_id: 3, article_id: 3 },
      { id: 44, content: "Cela m'a inspiré.", user_id: 4, article_id: 3 },
      { id: 45, content: 'Très bon travail !', user_id: 1, article_id: 3 },
      { id: 46, content: "Je suis curieux d'en savoir plus.", user_id: 2, article_id: 3 },
      { id: 47, content: 'Je recommande cet article à mes collègues.', user_id: 3, article_id: 3 },
      { id: 48, content: 'Continuez à publier de tels contenus.', user_id: 4, article_id: 3 },
      { id: 49, content: 'Je vais partager cet article avec mes amis.', user_id: 1, article_id: 3 },
      { id: 50, content: 'Cela a éclairé ma compréhension.', user_id: 2, article_id: 3 },

      // ... Ajoutez les commentaires pour les autres articles de la même manière

      // Commentaires pour l'article 4
      { id: 51, content: 'Bon travail !', user_id: 1, article_id: 4 },
      { id: 52, content: 'Je suis d\'accord avec vos conclusions.', user_id: 2, article_id: 4 },
      { id: 53, content: "J'ai apprécié la lecture.", user_id: 3, article_id: 4 },
      { id: 54, content: "Cela m'a aidé à comprendre davantage le sujet.", user_id: 4, article_id: 4 },
      { id: 55, content: 'Des exemples pratiques seraient utiles.', user_id: 1, article_id: 4 },
      { id: 56, content: 'Je vais partager cet article avec mes collègues.', user_id: 2, article_id: 4 },
      { id: 57, content: 'Merci pour les informations détaillées.', user_id: 3, article_id: 4 },
      { id: 58, content: 'Continuez à publier des contenus de qualité.', user_id: 4, article_id: 4 },
      { id: 59, content: 'Les références sont très utiles.', user_id: 1, article_id: 4 },
      { id: 60, content: "J'ai hâte de lire vos prochains articles.", user_id: 2, article_id: 4 },

      // Commentaires pour l'article 5
      { id: 61, content: 'Superbe analyse !', user_id: 1, article_id: 5 },
      { id: 62, content: 'Merci pour ces informations précieuses.', user_id: 2, article_id: 5 },
      { id: 63, content: "J'ai une question concernant un point spécifique.", user_id: 3, article_id: 5 },
      { id: 64, content: 'Bravo pour votre recherche approfondie.', user_id: 4, article_id: 5 },
      { id: 65, content: 'Les graphiques sont très clairs.', user_id: 1, article_id: 5 },
      { id: 66, content: "Je suis d'accord avec votre analyse.", user_id: 2, article_id: 5 },
      { id: 67, content: "Pouvez-vous recommander d'autres sources ?", user_id: 3, article_id: 5 },
      { id: 68, content: 'Cela a élargi ma perspective sur le sujet.', user_id: 4, article_id: 5 },
      { id: 69, content: 'Je vais partager cet article avec mes amis.', user_id: 1, article_id: 5 },
      { id: 70, content: 'Très instructif.', user_id: 2, article_id: 5 },

    ];


    const query = 'INSERT INTO comments (id, content, user_id, article_id) VALUES (?, ?, ?, ?)';

    for (const comment of comments) {
      await pool.query(query, [comment.id, comment.content, comment.user_id, comment.article_id]);
    }

    console.log('Données insérées dans la table "comments"');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données dans la table "comments":', error);
  }
};

// Fonction d'insertion des relations user_roles
const insertRandomUserRoles = async () => {
  try {
    const userRoles = [
      { user_id: 1, role_id: 1 },
      { user_id: 2, role_id: 2 },
      { user_id: 3, role_id: 1 },
      { user_id: 4, role_id: 2 },
      { user_id: 5, role_id: 2 },
      { user_id: 6, role_id: 2 },
      { user_id: 7, role_id: 2 },
      { user_id: 8, role_id: 2 },
      { user_id: 9, role_id: 2 },
      { user_id: 10, role_id: 2 },
      { user_id: 11, role_id: 2 },
    ];

    const query = 'INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)';

    for (const userRole of userRoles) {
      await pool.query(query, [userRole.user_id, userRole.role_id]);
    }

    console.log('Données insérées dans la table "user_roles"');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données dans la table "user_roles":', error);
  }
};

// Fonction d'insertion des relations user_comments
const insertRandomUserComments = async () => {
  try {
    const userComments = [
      { user_id: 1, comment_id: 1 },
      { user_id: 2, comment_id: 2 },
      { user_id: 3, comment_id: 3 },
      { user_id: 4, comment_id: 4 },
      { user_id: 1, comment_id: 5 },
      { user_id: 2, comment_id: 6 },
      { user_id: 3, comment_id: 7 },
      { user_id: 4, comment_id: 8 },
      { user_id: 1, comment_id: 9 },
      { user_id: 2, comment_id: 10 },
      { user_id: 3, comment_id: 11 },
      { user_id: 4, comment_id: 12 },
      { user_id: 1, comment_id: 13 },
      { user_id: 2, comment_id: 14 },
      { user_id: 3, comment_id: 15 },
      { user_id: 4, comment_id: 16 },
      { user_id: 1, comment_id: 17 },
      { user_id: 2, comment_id: 18 },
      { user_id: 3, comment_id: 19 },
      { user_id: 4, comment_id: 20 },
      { user_id: 1, comment_id: 21 },
      { user_id: 2, comment_id: 22 },
      { user_id: 3, comment_id: 23 },
      { user_id: 4, comment_id: 24 },
      { user_id: 1, comment_id: 25 },
      { user_id: 2, comment_id: 26 },
      { user_id: 3, comment_id: 27 },
      { user_id: 4, comment_id: 28 },
      { user_id: 1, comment_id: 29 },
      { user_id: 2, comment_id: 30 },
      { user_id: 1, comment_id: 31 },
      { user_id: 2, comment_id: 32 },
      { user_id: 3, comment_id: 33 },
      { user_id: 4, comment_id: 34 },
      { user_id: 1, comment_id: 35 },
      { user_id: 2, comment_id: 36 },
      { user_id: 3, comment_id: 37 },
      { user_id: 4, comment_id: 38 },
      { user_id: 1, comment_id: 39 },
      { user_id: 2, comment_id: 40 },
      { user_id: 1, comment_id: 41 },
      { user_id: 2, comment_id: 42 },
      { user_id: 3, comment_id: 43 },
      { user_id: 4, comment_id: 44 },
      { user_id: 1, comment_id: 45 },
      { user_id: 2, comment_id: 46 },
      { user_id: 3, comment_id: 47 },
      { user_id: 4, comment_id: 48 },
      { user_id: 1, comment_id: 49 },
      { user_id: 2, comment_id: 50 },
      { user_id: 1, comment_id: 51 },
      { user_id: 2, comment_id: 52 },
      { user_id: 3, comment_id: 53 },
      { user_id: 4, comment_id: 54 },
      { user_id: 1, comment_id: 55 },
      { user_id: 2, comment_id: 56 },
      { user_id: 3, comment_id: 57 },
      { user_id: 4, comment_id: 58 },
      { user_id: 1, comment_id: 59 },
      { user_id: 2, comment_id: 60 },
      { user_id: 1, comment_id: 61 },
      { user_id: 2, comment_id: 62 },
      { user_id: 3, comment_id: 63 },
      { user_id: 4, comment_id: 64 },
      { user_id: 1, comment_id: 65 },
      { user_id: 2, comment_id: 66 },
      { user_id: 3, comment_id: 67 },
      { user_id: 4, comment_id: 68 },
      { user_id: 1, comment_id: 69 },
      { user_id: 2, comment_id: 70 },
    ];

    const query = 'INSERT INTO user_comments (user_id, comment_id) VALUES (?, ?)';

    for (const userComment of userComments) {
      await pool.query(query, [userComment.user_id, userComment.comment_id]);
    }

    console.log('Données insérées dans la table "user_comments"');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données dans la table "user_comments":', error);
  }
};

// Fonction d'insertion des relations article_comments
const insertRandomArticleComments = async () => {
  try {
    const articleComments = [
      { article_id: 1, comment_id: 21 },
      { article_id: 11, comment_id: 1 },
      { article_id: 10, comment_id: 2 },
      { article_id: 9, comment_id: 3 },
      { article_id: 8, comment_id: 4 },
      { article_id: 11, comment_id: 5 },
      { article_id: 10, comment_id: 6 },
      { article_id: 9, comment_id: 7 },
      { article_id: 8, comment_id: 8 },
      { article_id: 11, comment_id: 9 },
      { article_id: 10, comment_id: 10 },
      { article_id: 9, comment_id: 11 },
      { article_id: 8, comment_id: 12 },
      { article_id: 11, comment_id: 13 },
      { article_id: 7, comment_id: 14 },
      { article_id: 7, comment_id: 15 },
      { article_id: 7, comment_id: 16 },
      { article_id: 6, comment_id: 17 },
      { article_id: 6, comment_id: 18 },
      { article_id: 6, comment_id: 19 },
      { article_id: 6, comment_id: 20 },
        { article_id: 1, comment_id: 22 },
        { article_id: 1, comment_id: 23 },
        { article_id: 1, comment_id: 24 },
        { article_id: 1, comment_id: 25 },
        { article_id: 1, comment_id: 26 },
        { article_id: 1, comment_id: 27 },
        { article_id: 1, comment_id: 28 },
        { article_id: 1, comment_id: 29 },
        { article_id: 1, comment_id: 30 },
        { article_id: 2, comment_id: 31 },
        { article_id: 2, comment_id: 32 },
        { article_id: 2, comment_id: 33 },
        { article_id: 2, comment_id: 34 },
        { article_id: 2, comment_id: 35 },
        { article_id: 2, comment_id: 36 },
        { article_id: 2, comment_id: 37 },
        { article_id: 2, comment_id: 38 },
        { article_id: 2, comment_id: 39 },
        { article_id: 2, comment_id: 40 },
        { article_id: 3, comment_id: 41 },
        { article_id: 3, comment_id: 42 },
        { article_id: 3, comment_id: 43 },
        { article_id: 3, comment_id: 44 },
        { article_id: 3, comment_id: 45 },
        { article_id: 3, comment_id: 46 },
        { article_id: 3, comment_id: 47 },
        { article_id: 3, comment_id: 48 },
        { article_id: 3, comment_id: 49 },
        { article_id: 3, comment_id: 50 },
        { article_id: 4, comment_id: 51 },
        { article_id: 4, comment_id: 52 },
        { article_id: 4, comment_id: 53 },
        { article_id: 4, comment_id: 54 },
        { article_id: 4, comment_id: 55 },
        { article_id: 4, comment_id: 56 },
        { article_id: 4, comment_id: 57 },
        { article_id: 4, comment_id: 58 },
        { article_id: 4, comment_id: 59 },
        { article_id: 4, comment_id: 60 },
        { article_id: 5, comment_id: 61 },
        { article_id: 5, comment_id: 62 },
        { article_id: 5, comment_id: 63 },
        { article_id: 5, comment_id: 64 },
        { article_id: 5, comment_id: 65 },
        { article_id: 5, comment_id: 66 },
        { article_id: 5, comment_id: 67 },
        { article_id: 5, comment_id: 68 },
        { article_id: 5, comment_id: 69 },
        { article_id: 5, comment_id: 70 },
      
    ];

    const query = 'INSERT INTO article_comments (article_id, comment_id) VALUES (?, ?)';

    for (const articleComment of articleComments) {
      await pool.query(query, [articleComment.article_id, articleComment.comment_id]);
    }

    console.log('Données insérées dans la table "article_comments"');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données dans la table "article_comments":', error);
  }
};

// Fonction pour exécuter toutes les insertions de données
const insertRandomData = async () => {
  await insertRandomUsers();
  await insertRandomRoles();
  await insertRandomCategories();
  await insertRandomArticles();
  await insertRandomComments();

  await insertRandomUserRoles();
  await insertRandomArticleComments();
  await insertRandomUserComments();


  // Fermeture de la connexion à la base de données
  pool.end();
};

// Appel de la fonction pour insérer les données aléatoires
insertRandomData();*/
