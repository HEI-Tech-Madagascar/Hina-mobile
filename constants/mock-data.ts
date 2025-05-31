export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  important: boolean;
  image?: string;
}

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "1",
    title: "Assemblée Générale",
    content: "Assemblée générale du club ce vendredi à 14h dans l'amphithéâtre principal.",
    date: "2023-11-25T14:00:00",
    author: "Bureau HEI Tech",
    important: true,
    image:
      "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    title: "Workshop Intelligence Artificielle",
    content: "Participez à notre atelier sur l'IA et le Machine Learning. Places limitées!",
    date: "2023-12-02T09:00:00",
    author: "Département Technique",
    important: false,
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    title: "Hackathon Annuel",
    content: "Le hackathon annuel de HEI Tech aura lieu le mois prochain. Préparez vos équipes!",
    date: "2024-01-15T08:00:00",
    author: "Comité des Événements",
    important: true,
    image:
      "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const POSTS = [
  {
    id: "1",
    author: "Marion Rakoto",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "Super événement hier! Merci à tous les participants du hackathon, c'était vraiment une réussite. Hâte de voir les projets se développer davantage.",
    images: [
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    timestamp: "2h",
    likes: 24,
    comments: 5,
  },
  {
    id: "2",
    author: "Département Communication",
    avatar:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "Les inscriptions pour le concours de design sont maintenant ouvertes! Envoyez vos propositions avant le 15 décembre. Plus d'infos dans le lien en bio.",
    timestamp: "5h",
    likes: 17,
    comments: 3,
  },
  {
    id: "3",
    author: "Jean Razafindrakoto",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "Cherche des volontaires pour notre prochaine action sociale le weekend prochain. On va aider à installer des ordinateurs dans une école primaire. Qui est partant?",
    timestamp: "1j",
    likes: 32,
    comments: 14,
  },
];
