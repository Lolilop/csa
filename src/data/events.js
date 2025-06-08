// Sample events data for the CSA website
export const events = [
  {
    id: 1,
    title: "Concours de Tir à l'Arc",
    section: "Tir à l'arc",
    description:
      "Participez à notre concours annuel ouvert à tous les membres de la section tir à l'arc.",
    fullDescription:
      "Le CSA est fier d'organiser son concours annuel de tir à l'arc qui réunira à la fois des archers débutants et confirmés. Une belle occasion de montrer vos talents et de progresser en rencontrant d'autres passionnés.",
    additionalDescription:
      "Plusieurs catégories sont disponibles selon l'âge et le niveau. Des prix seront décernés aux meilleurs archers de chaque catégorie. Une restauration sera disponible sur place toute la journée.",
    date: "15 mars",
    month: "mars",
    time: "09:00 - 17:00",
    duration: "Journée entière",
    location: "Terrain municipal de tir à l'arc",
    address: "123 Rue des Sports, 75000 Ville",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5661.1392684894055!2d2.2922926!3d48.8583735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjEiTiAywrAxNyczMi4zIkU!5e0!3m2!1sfr!2sfr!4v1623151852000!5m2!1sfr!2sfr",
    participants:
      "Ouvert à tous les membres de la section tir à l'arc, limité à 50 participants",
    equipment: [
      "Arc personnel (prêt possible sur demande)",
      "Flèches",
      "Équipement de protection",
      "Tenue sportive adaptée",
    ],
    price: "10€ pour les membres / 15€ pour les non-membres",
    organizer: "Section Tir à l'Arc du CSA",
    tags: ["Compétition", "Plein air", "Sport"],
    image: "/assets/images/archery-event.jpg",
  },
  {
    id: 2,
    title: "Exposition des Travaux de Couture",
    section: "Couture",
    description:
      "Venez découvrir les créations de nos talentueux couturiers et couturières lors de cette exposition annuelle.",
    fullDescription:
      "Notre exposition annuelle de couture présente les créations réalisées tout au long de l'année par nos membres. Des vêtements aux accessoires, découvrez le savoir-faire et la créativité de notre section couture.",
    additionalDescription:
      "L'exposition sera ouverte au public pendant deux jours. Une partie des créations sera mise en vente au profit de l'association. Des démonstrations et mini-ateliers seront proposés pour les visiteurs intéressés.",
    date: "22 avril",
    month: "avril",
    time: "10:00 - 18:00",
    location: "Salle des fêtes municipale",
    address: "Place de la République, 75000 Ville",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5661.1392684894055!2d2.2922926!3d48.8583735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjEiTiAywrAxNyczMi4zIkU!5e0!3m2!1sfr!2sfr!4v1623151852000!5m2!1sfr!2sfr",
    price: "Entrée libre",
    organizer: "Section Couture du CSA",
    tags: ["Exposition", "Art", "Artisanat"],
    image: "/assets/images/sewing-expo.jpg",
  },
  {
    id: 3,
    title: "Course Solidaire 5km",
    section: "Course à pied",
    description:
      "Course caritative dont les bénéfices seront reversés à une association locale. Ouverte à tous.",
    date: "5 juin",
    month: "juin",
    location: "Parc municipal",
    image: "/assets/images/charity-run.jpg",
  },
  {
    id: 4,
    title: "Stage Intensif de Photographie",
    section: "Photographie",
    description:
      "Un weekend complet dédié à l'apprentissage de techniques avancées avec un photographe professionnel.",
    date: "10-11 juillet",
    month: "juillet",
    location: "CSA & extérieur",
    image: "/assets/images/photo-workshop.jpg",
  },
  {
    id: 5,
    title: "Compétition de Natation Inter-clubs",
    section: "Natation",
    description:
      "Rencontre amicale avec les clubs voisins. Plusieurs catégories selon les niveaux et âges.",
    date: "18 septembre",
    month: "septembre",
    location: "Piscine municipale",
    image: "/assets/images/swim-competition.jpg",
  },
  {
    id: 6,
    title: "Représentation Théâtrale",
    section: "Théâtre",
    description:
      "Notre troupe présente sa nouvelle pièce après des mois de répétition. Venez nombreux les encourager!",
    date: "15-16 octobre",
    month: "octobre",
    location: "Théâtre municipal",
    image: "/assets/images/theater-show.jpg",
  },
  {
    id: 7,
    title: "Tournoi de Tennis de Noël",
    section: "Tennis",
    description:
      "Tournoi festif et convivial pour clôturer l'année. Lots et buffet pour tous les participants.",
    date: "18 décembre",
    month: "décembre",
    location: "Courts couverts du CSA",
    image: "/assets/images/tennis-tournament.jpg",
  },
  {
    id: 8,
    title: "Journée Portes Ouvertes",
    section: "Toutes sections",
    description:
      "Découvrez l'ensemble de nos activités et rencontrez nos animateurs lors de cette journée d'initiation.",
    fullDescription:
      "Notre Journée Portes Ouvertes annuelle est l'occasion parfaite pour découvrir la diversité des activités proposées par le CSA. Que vous soyez intéressé par le sport, l'art, ou d'autres activités de loisirs, vous trouverez certainement votre bonheur parmi nos nombreuses sections.",
    additionalDescription:
      "Durant cette journée, vous pourrez rencontrer les animateurs, poser vos questions, et même participer à des sessions d'initiation gratuites. Une occasion idéale pour vous inscrire à l'une de nos nombreuses activités pour la nouvelle saison.",
    date: "5 septembre",
    month: "septembre",
    time: "10:00 - 19:00",
    duration: "Journée complète",
    location: "Complexe du CSA",
    address: "45 Avenue des Associations, 75000 Ville",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5661.1392684894055!2d2.2922926!3d48.8583735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjEiTiAywrAxNyczMi4zIkU!5e0!3m2!1sfr!2sfr!4v1623151852000!5m2!1sfr!2sfr",
    participants: "Ouvert à tous - Familles bienvenues",
    price: "Entrée libre",
    organizer: "Direction du CSA",
    tags: ["Portes Ouvertes", "Initiation", "Rencontre", "Inscriptions"],
    registrationLink: "https://www.csa-inscription.fr/portes-ouvertes",
    image: "/assets/images/open-day.jpg",
  },
];
