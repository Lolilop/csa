// Sample sections data for the CSA website
export const sections = [
  {
    id: 1,
    name: "Mécanique",
    category: "autre",
    description:
      "Initiez-vous à la mécanique ou perfectionnez vos compétences dans notre atelier dédié, encadré par des passionnés expérimentés.",
    fullDescription:
      "Notre section mécanique vous accueille quel que soit votre niveau, du débutant curieux au bricoleur confirmé. Vous apprendrez à entretenir, démonter et remonter divers types de moteurs, à utiliser les outils spécialisés et à comprendre les principes fondamentaux de la mécanique. L’atelier est équipé de postes de travail complets et de matériel pédagogique. Des projets concrets sont réalisés tout au long de l’année, comme la remise en état de cyclomoteurs ou la fabrication d’outils.",
    image: "/assets/images/section/mecanique.jpg",
    features: ["Tous niveaux", "Matériel fourni", "Projets pratiques"],
    schedule: "Mardi et Jeudi 18h-20h",
    additionalSchedule: [
      "Entraînement libre: Samedi 14h-17h",
      "Séances jeunes: Mercredi 14h-16h",
    ],
    pricing: [
      "Adhésion annuelle: 180€",
      "Tarif réduit (étudiants, chômeurs): 140€",
      "Licence atelier avancé: +30€",
    ],
    instructors: [
      { name: "Michel Dupont", title: "Technicien motoriste" },
      { name: "Sarah Martin", title: "Ingénieure en mécanique" },
    ],
    equipment: [
      "Établis équipés",
      "Outils manuels et électriques",
      "Moteurs d'entraînement",
      "Équipements de sécurité",
    ],
  },
  {
    id: 2,
    name: "Badminton",
    category: "sport",
    description:
      "Améliorez votre agilité et votre coordination dans un cadre dynamique avec nos séances de badminton accessibles à tous les niveaux.",
    fullDescription:
      "Notre section badminton s’adresse aux joueurs de tous horizons, débutants ou confirmés. Dans une ambiance conviviale, vous progresserez techniquement et physiquement grâce aux conseils de nos entraîneurs. Les séances incluent des exercices de coordination, des matchs en simple et en double, ainsi que des tournois internes. Le club participe également à des rencontres amicales et compétitions locales pour ceux qui le souhaitent.",
    image: "/assets/images/section/badminton.jpg",
    features: [
      "Débutants bienvenus",
      "Cours dynamiques",
      "Compétitions locales",
    ],
    schedule: "Lundi 14h-17h, Samedi 10h-12h",
    additionalSchedule: ["Jeux libres: Mercredi 19h-21h"],
    pricing: [
      "Adhésion annuelle: 160€",
      "Volants fournis",
      "Tarif famille (à partir de 2 personnes): -10%",
    ],
    instructors: [
      { name: "Marie Lefèvre", title: "Entraîneuse diplômée" },
      { name: "Jeanne Dubois", title: "Capitaine équipe régionale" },
    ],
    equipment: [
      "Raquettes (prêt possible)",
      "Volants en nylon et plumes",
      "Filets homologués",
      "Chaussures de salle recommandées",
    ],
  },
  {
    id: 3,
    name: "Boxe",
    category: "sport",
    description:
      "Venez développer votre condition physique et votre technique de combat dans notre section boxe, encadrée par des entraîneurs qualifiés.",
    fullDescription:
      "Que vous soyez débutant ou boxeur confirmé, notre section vous propose un entraînement complet mêlant technique, cardio et renforcement musculaire. Les cours incluent des séances de sparring, d’ombres, de travail au sac et de conditionnement physique. Nous mettons l’accent sur le respect, l’engagement et la progression personnelle. Des compétitions sont proposées pour ceux qui souhaitent se confronter en toute sécurité à d’autres boxeurs.",
    image: "/assets/images/section/boxe.jpg",
    features: ["Tous niveaux", "Entraînement physique", "Sparring encadré"],
    schedule: "Mercredi 18h30, Dimanche 9h30",
    additionalSchedule: [
      "Séance technique: Vendredi 18h30",
      "Conditionnement: Lundi 19h",
    ],
    pricing: ["Adhésion annuelle: 120€", "Tenue de boxe (optionnelle): 40€"],
    instructors: [
      { name: "Thomas Bernard", title: "Coach sportif certifié" },
      { name: "Lucie Moreau", title: "Championne départementale" },
    ],
    equipment: [
      "Gants de boxe",
      "Protège-dents",
      "Cordes à sauter",
      "Sacs de frappe",
    ],
  },
  {
    id: 4,
    name: "Cross",
    category: "sport",
    description:
      "Repoussez vos limites avec nos entraînements de cross, alternant parcours en pleine nature et exercices de renforcement.",
    fullDescription:
      "Notre section cross est idéale pour celles et ceux qui souhaitent développer leur endurance et leur puissance dans un cadre varié. Les séances incluent des parcours en terrain vallonné, des exercices de fractionné, ainsi que des renforcements musculaires spécifiques. Nous participons également à des compétitions régionales de cross-country pour les plus motivés.",
    image: "/assets/images/section/cross.jpg",
    features: ["Sorties nature", "Renforcement", "Préparation compétition"],
    schedule: "Jeudi 19h, un weekend par mois",
  },
  {
    id: 5,
    name: "Cyclisme",
    category: "sport",
    description:
      "Rejoignez notre section cyclisme pour rouler en groupe, progresser techniquement et participer à des sorties sportives encadrées.",
    fullDescription:
      "Que vous soyez amateur de vélo de route ou de VTT, notre section cyclisme propose des sorties régulières adaptées à tous les niveaux. Encadrés par des cyclistes expérimentés, vous bénéficierez de conseils sur la posture, la technique de pédalage et l’entretien du vélo. Des randonnées sportives, défis de montée et sorties longues sont organisés tout au long de l’année.",
    image: "/assets/images/section/cyclisme.jpg",
    features: ["Tous âges", "Sorties encadrées", "Vélo route & VTT"],
    schedule: "Lundi, Mercredi, Vendredi 19h-21h",
  },
  {
    id: 6,
    name: "Hand-ball",
    category: "sport",
    description:
      "Rejoignez notre équipe de hand-ball pour travailler l'esprit collectif, la rapidité et la stratégie dans un sport dynamique.",
    fullDescription:
      "La section hand-ball accueille tous les passionnés de sport collectif, du débutant au joueur confirmé. Nos entraînements sont axés sur la technique, la tactique, la coordination et l'esprit d'équipe. Vous participerez à des matchs amicaux, des tournois internes et, pour les plus motivés, à des compétitions locales. L’ambiance conviviale et dynamique favorise l’apprentissage dans le respect et la bonne humeur.",
    image: "/assets/images/section/hand-ball.jpg",
    features: ["Travail en équipe", "Compétitions", "Tous niveaux"],
    schedule: "Mardi 19h-21h30",
  },
  {
    id: 7,
    name: "Kick boxing",
    category: "sport",
    description:
      "Améliorez votre forme et apprenez l’art du combat pied-poing dans notre section de kick boxing adaptée à tous les âges.",
    fullDescription:
      "Le kick boxing combine puissance, agilité et technique. Nos séances sont ouvertes à tous, débutants ou avancés, et encadrées par des entraîneurs certifiés. Elles incluent du travail technique (coups de pied, poings, esquives), du cardio, du renforcement musculaire et des mises en situation. Les plus assidus pourront participer à des compétitions locales ou nationales dans un cadre sécurisé.",
    image: "/assets/images/section/kick-boxing.jpg",
    features: ["Cours collectifs", "Préparation physique", "Tous âges"],
    schedule: "Du lundi au samedi, horaires variés",
  },
  {
    id: 8,
    name: "Musculation",
    category: "sport",
    description:
      "Développez votre force, votre endurance et votre silhouette grâce à nos séances de musculation encadrées et personnalisées.",
    fullDescription:
      "Notre salle de musculation est ouverte à tous, avec des équipements professionnels pour le travail de l’ensemble du corps. Que votre objectif soit de gagner en force, de sculpter votre silhouette ou d'améliorer votre santé, nos coachs vous accompagnent avec des programmes adaptés. Les séances encadrées permettent un suivi individualisé dans une ambiance motivante et sécurisée.",
    image: "/assets/images/section/musculation.jpg",
    features: ["Encadrement pro", "Matériel complet", "Tous niveaux"],
    schedule: "Mercredi 16h-18h, Samedi 14h-17h",
  },
  {
    id: 9,
    name: "Pêche",
    category: "sport",
    description:
      "Découvrez les plaisirs de la pêche en eau douce et partagez des moments de détente au sein de notre section conviviale.",
    fullDescription:
      "La section pêche vous propose de découvrir ou redécouvrir la pratique de la pêche en rivière ou en plan d’eau, dans une ambiance détendue. Techniques de lancer, appâts, nœuds, respect de la nature et réglementation font partie de l’apprentissage. Des sorties en groupe et concours amicaux sont régulièrement organisés, pour les petits et les grands passionnés.",
    image: "/assets/images/section/peche.jpg",
    features: ["Sorties nature", "Tous niveaux", "Concours amicaux"],
    schedule: "Lundi et Jeudi 12h-13h, Mardi 19h-20h30",
    additionalSchedule: [
      "Pêche à la ligne: Lundi et Jeudi 12h-13h",
      "Sortie rivière: Samedi matin",
      "Atelier montage de ligne: Vendredi 18h-19h",
    ],
    pricing: [
      "Adhésion annuelle: 90€",
      "Carte de pêche non incluse",
      "Sortie découverte gratuite",
    ],
    instructors: [
      { name: "Jean-Paul Lemoine", title: "Moniteur fédéral de pêche" },
      { name: "Amandine Bertin", title: "Animatrice nature & pêche" },
    ],
    equipment: [
      "Cannes à pêche (prêt possible)",
      "Appâts fournis",
      "Boîte à leurres",
      "Tapis de réception et épuisette",
    ],
  },
  {
    id: 10,
    name: "Tir longue distance",
    category: "sport",
    description:
      "Maîtrisez précision et concentration dans notre section de tir longue distance, ouverte aux tireurs amateurs et confirmés.",
    fullDescription:
      "La section tir longue distance s’adresse aux passionnés de tir de précision. Dans un cadre sécurisé et encadré par des instructeurs diplômés, vous apprendrez à utiliser des carabines à lunette et à gérer les éléments extérieurs (vent, distance, posture). Des sessions d’initiation sont disponibles ainsi que des stages de perfectionnement et des compétitions régionales.",
    image: "/assets/images/section/tir-longue-distance.jpg",
    features: ["Tir de précision", "Encadrement expert", "Tous niveaux"],
    schedule: "Samedi 9h-12h, Dimanche 10h-13h",
    additionalSchedule: [
      "Initiation: Samedi 9h-10h",
      "Perfectionnement: Dimanche 11h-13h",
    ],
    pricing: [
      "Adhésion annuelle: 250€",
      "Licence de tir obligatoire: 60€",
      "Séance découverte: 15€",
    ],
    instructors: [
      { name: "Alain Girard", title: "Instructeur de tir longue distance FFT" },
      { name: "Nadia Rolland", title: "Championne départementale" },
    ],
    equipment: [
      "Carabines à lunette",
      "Lunettes de visée",
      "Chevalets de tir",
      "Protections auditives",
    ],
  },
  {
    id: 11,
    name: "Tir sportif - air comprimé",
    category: "sport",
    description:
      "Initiez-vous au tir de précision avec des carabines et pistolets à air comprimé dans une ambiance conviviale et sécurisée.",
    fullDescription:
      "Notre section de tir sportif à air comprimé propose des séances d’initiation et de perfectionnement encadrées par des moniteurs diplômés. Vous apprendrez les bases du tir à 10 mètres en position debout, avec pistolet ou carabine. L’activité développe la concentration, la maîtrise de soi et la rigueur. Des compétitions amicales sont proposées en fin de trimestre pour évaluer ses progrès.",
    image: "/assets/images/section/tir-a-plomb.jpg",
    features: [
      "Carabine & pistolet",
      "Entraînement 10m",
      "Encadrement diplômé",
    ],
    schedule: "Mercredi 17h-19h, Vendredi 18h-20h",
    additionalSchedule: [
      "Séances jeunes: Mercredi 17h-18h",
      "Adultes confirmés: Vendredi 19h-20h",
    ],
    pricing: [
      "Adhésion annuelle: 180€",
      "Licence FFTir obligatoire: 50€",
      "Essai gratuit possible",
    ],
    instructors: [
      { name: "Marc Duret", title: "Moniteur de tir FFT" },
      { name: "Claire Robert", title: "Arbitre fédérale et coach" },
    ],
    equipment: [
      "Carabines et pistolets à air",
      "Cibles papier",
      "Lunettes de protection",
      "Systèmes de visée électronique",
    ],
  },
  {
    id: 13,
    name: "Triathlon",
    category: "sport",
    description:
      "Alliez natation, cyclisme et course à pied pour relever le défi du triathlon, accessible à tous les niveaux.",
    fullDescription:
      "Notre section triathlon vous propose un accompagnement structuré autour des trois disciplines phares : natation, vélo et course à pied. Encadrés par des coachs expérimentés, vous bénéficiez de programmes adaptés à votre niveau, que vous soyez débutant ou compétiteur. Entraînements variés, préparation physique, conseils nutrition et gestion de l’effort sont au cœur de notre approche. Esprit d’équipe, dépassement de soi et plaisir garantis !",
    image: "/assets/images/section/triathlon.jpg",
    features: [
      "Entraînements combinés",
      "Coaching individualisé",
      "Préparation physique",
    ],
    schedule:
      "Mardi 18h30-20h (natation), Jeudi 19h-20h30 (course à pied), Dimanche 9h-12h (sortie vélo)",
    additionalSchedule: [
      "Natation: Mardi 18h30-20h",
      "Course à pied: Jeudi 19h-20h30",
      "Sortie vélo: Dimanche 9h-12h",
    ],
    pricing: [
      "Adhésion annuelle: 250€",
      "Licence fédérale en sus selon niveau",
      "Séance découverte gratuite",
    ],
    instructors: [
      { name: "Sophie Lemoine", title: "Coach certifiée FFTRI" },
      { name: "Marc Durand", title: "Entraîneur spécialiste endurance" },
    ],
    equipment: [
      "Maillot et lunettes de natation",
      "Vélo de route",
      "Chaussures de course",
      "Casque obligatoire",
    ],
  },
  {
    id: 14,
    name: "VTT",
    category: "sport",
    description:
      "Explorez les sentiers en pleine nature grâce à notre section VTT ouverte à tous les passionnés de vélo tout terrain.",
    fullDescription:
      "Notre section VTT vous invite à découvrir ou redécouvrir le plaisir du vélo tout terrain, en groupe et en toute sécurité. Sorties hebdomadaires, initiations aux techniques de franchissement, entretien du vélo et randonnées organisées rythment la saison. Nous accueillons tous les niveaux, du débutant au vététiste confirmé. Esprit convivial, cohésion de groupe et aventure au cœur de la nature sont au programme.",
    image: "/assets/images/section/vtt.jpg",
    features: ["Tous niveaux", "Sorties nature", "Ambiance conviviale"],
    schedule: "Mercredi 18h-20h (technique), Dimanche 9h-12h (randonnée)",
    additionalSchedule: [
      "Initiation débutant: Mercredi 18h-20h",
      "Sortie tous niveaux: Dimanche 9h-12h",
    ],
    pricing: [
      "Adhésion annuelle: 180€",
      "Sorties à la carte: 5€/séance",
      "1ère sortie gratuite",
    ],
    instructors: [{ name: "Julien Tardy", title: "Moniteur diplômé MCF" }],
    equipment: [
      "VTT en bon état",
      "Casque obligatoire",
      "Gants et lunettes recommandés",
      "Tenue adaptée à la météo",
    ],
  },
  {
    id: 16,
    name: "Apiculture",
    category: "autre",
    description:
      "Initiez-vous à l’univers fascinant des abeilles et apprenez à entretenir une ruche tout au long de l’année.",
    fullDescription:
      "Notre section apiculture s’adresse à tous ceux qui souhaitent découvrir ou approfondir leurs connaissances sur le monde des abeilles. Encadrés par des apiculteurs passionnés, vous apprendrez les bases du cycle de vie des abeilles, l’entretien des ruches, la récolte du miel, et les pratiques respectueuses de l’environnement. Ateliers théoriques et pratiques se déroulent au rucher pédagogique dans un esprit de partage et de respect du vivant.",
    image: "/assets/images/section/apiculture.jpg",
    features: [
      "Découverte de la ruche",
      "Ateliers pratiques",
      "Respect de la biodiversité",
    ],
    schedule: "Samedi 10h-12h (1 à 2 fois/mois selon saison)",
    additionalSchedule: [
      "Initiation: 1er samedi du mois",
      "Suivi des ruches: 3e samedi du mois",
    ],
    pricing: [
      "Adhésion annuelle: 160€",
      "Participation ruche partagée: 20€/an",
      "Atelier découverte: 10€",
    ],
    instructors: [
      { name: "Jean-Marc Bailly", title: "Apiculteur amateur depuis 20 ans" },
    ],
    equipment: [
      "Combinaison fournie",
      "Gants et bottes recommandés",
      "Respect des consignes de sécurité",
    ],
  },
  {
    id: 17,
    name: "Artisanat",
    category: "artistique",
    description:
      "Exprimez votre créativité à travers des activités manuelles variées et des projets artisanaux inspirants.",
    fullDescription:
      "Notre atelier d’artisanat vous permet de découvrir des techniques variées telles que le travail du bois, la couture, la création d’objets décoratifs, ou encore la fabrication de bijoux. Que vous soyez curieux ou passionné, chaque séance vous apporte savoir-faire, autonomie et satisfaction de créer de vos mains. Les projets évoluent selon les saisons et les envies des participants dans une ambiance chaleureuse et créative.",
    image: "/assets/images/section/artisanat.jpg",
    features: ["Créations manuelles", "Ambiance conviviale", "Matériel fourni"],
    schedule: "Mercredi 14h-16h30",
    additionalSchedule: [
      "Bois et matériaux naturels: 1er mercredi du mois",
      "Textile et couture: 2e mercredi du mois",
      "Décoration: 3e mercredi du mois",
    ],
    pricing: ["Adhésion annuelle: 100€", "Participation aux matériaux: 30€/an"],
    instructors: [{ name: "Claire Dubois", title: "Animatrice arts manuels" }],
    equipment: [
      "Matériel de base fourni",
      "Apport personnel selon projets",
      "Tenue adaptée recommandée",
    ],
  },
  {
    id: 18,
    name: "Bricolage",
    category: "artistique",
    description:
      "Apprenez à utiliser les outils et à réaliser des réparations et créations simples pour la maison.",
    fullDescription:
      "Notre atelier bricolage est ouvert à tous ceux qui veulent apprendre à manier les outils, comprendre les bases de l’électricité, du bois, du carrelage ou encore de la plomberie. Grâce à des ateliers pratiques et progressifs, vous gagnez en autonomie pour vos projets personnels. C’est aussi un moment d’échange et de bonne humeur autour du faire soi-même et du réemploi.",
    image: "/assets/images/section/bricolage.jpg",
    features: ["Initiation outils", "Réparations maison", "Esprit récup'"],
    schedule: "Samedi 14h-17h (2 fois/mois)",
    additionalSchedule: [
      "Bases du bricolage: 1er samedi",
      "Projets pratiques: 3e samedi",
    ],
    pricing: ["Adhésion annuelle: 120€", "Participation matériaux: 20€/an"],
    instructors: [
      { name: "Rachid El Barki", title: "Animateur technique multi-domaines" },
    ],
    equipment: [
      "Outillage fourni",
      "Matériaux à disposition",
      "Chaussures fermées obligatoires",
    ],
  },
  {
    id: 19,
    name: "Cartonnage",
    category: "artistique",
    description:
      "Donnez forme à vos idées en réalisant des objets utiles ou décoratifs à base de carton recyclé.",
    fullDescription:
      "La section cartonnage propose des ateliers créatifs autour du travail du carton : fabrication de boîtes, carnets, cadres, objets déco ou pratiques. Accessible à tous, cette activité développe votre minutie, votre sens de l’esthétique et favorise le recyclage. Chaque projet est accompagné étape par étape dans une ambiance détendue et bienveillante.",
    image: "/assets/images/section/cartonnage.jpg",
    features: ["Travail manuel", "Écologie créative", "Ateliers guidés"],
    schedule: "Vendredi 14h-17h",
    additionalSchedule: [
      "Initiation: 1er vendredi",
      "Création libre: chaque semaine",
    ],
    pricing: ["Adhésion annuelle: 90€", "Participation matériel: 20€/an"],
    instructors: [
      {
        name: "Isabelle Renard",
        title: "Spécialiste en cartonnage et reliure",
      },
    ],
    equipment: [
      "Cartons fournis",
      "Colle et outils partagés",
      "Apport personnel possible",
    ],
  },
  {
    id: 20,
    name: "Figurine",
    category: "artistique",
    description:
      "Modélisez et peignez vos propres figurines, miniatures ou modèles avec précision et créativité.",
    fullDescription:
      "Que vous soyez passionné de wargame, de modélisme ou d’arts miniatures, notre atelier figurine vous accompagne dans la peinture, l’assemblage et la customisation de vos modèles. Techniques de base et astuces avancées sont partagées dans un esprit d’entraide. De Warhammer aux maquettes de véhicules ou figurines fantastiques, chacun trouve de quoi exprimer sa passion.",
    image: "/assets/images/section/figurine.jpg",
    features: ["Peinture fine", "Modélisme", "Ambiance passionnée"],
    schedule: "Mardi 18h30-21h",
    additionalSchedule: [
      "Initiation peinture: 1er mardi",
      "Peinture libre: chaque semaine",
    ],
    pricing: [
      "Adhésion annuelle: 110€",
      "Peintures de base fournies",
      "Participation libre aux concours",
    ],
    instructors: [
      { name: "Théo Giraud", title: "Figuriniste et peintre professionnel" },
    ],
    equipment: [
      "Figurines personnelles",
      "Peintures disponibles sur place",
      "Loupes et pinceaux fournis",
    ],
  },
  {
    id: 21,
    name: "Vannerie",
    category: "artistique",
    description:
      "Découvrez l’art ancestral de tresser l’osier pour créer paniers, corbeilles et objets décoratifs.",
    fullDescription:
      "La vannerie est une activité manuelle relaxante et gratifiante, accessible à tous. Vous apprendrez les gestes traditionnels pour travailler l’osier et fabriquer des objets utiles ou décoratifs. Chaque séance vous permet de progresser à votre rythme, dans une ambiance calme et chaleureuse, tout en développant votre sens pratique et votre patience.",
    image: "/assets/images/section/vannerie.jpg",
    features: [
      "Travail de l’osier",
      "Gestes traditionnels",
      "Créativité naturelle",
    ],
    schedule: "Jeudi 14h-17h",
    additionalSchedule: [
      "Atelier débutant: 1er jeudi",
      "Créations avancées: chaque semaine",
    ],
    pricing: ["Adhésion annuelle: 95€", "Osier fourni sur place"],
    instructors: [
      {
        name: "Marie-Claude Lefèvre",
        title: "Artisane vannière depuis 15 ans",
      },
    ],
    equipment: [
      "Outils fournis",
      "Osier inclus",
      "Vêtements confortables recommandés",
    ],
  },
];
