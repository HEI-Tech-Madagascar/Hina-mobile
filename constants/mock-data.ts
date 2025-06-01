export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  important: boolean;
  image?: string;
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
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
    author: "Fiantso Ravoajanahary",
    avatar:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/499946780_1258701665590990_8095563758685064786_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEBtHgmt4BzLgJ8YsrBidTRqqSxGa_uzw-qpLEZr-7PDzmtwV8-C06ebdbPAgRYQ7oaq6tWZ_V9y-h2x57eRgVk&_nc_ohc=n-nGafySkl8Q7kNvwEhn_e7&_nc_oc=AdmX_-TJtcr9Yaz15Qkj5Crnvip5v45SVgcXTN-T3IydgnH1KreXGmnJHFdJdZz1x44Ql3G3jkPERbSKq91IQLGy&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=cBY9xJFumEDTwRf5d83xYw&oh=00_AfIiJKAOO3KKWs1pWkA6FLyYFm5GvTU9Q6NaQ7gpQRQnGQ&oe=6842565E",
    content:
      "Super événement hier! Merci à tous les participants du hackathon, c'était vraiment une réussite. Hâte de voir les projets se développer davantage.",
    images: [
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/498994910_122131063820781282_5738561342159986846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGdvCEWO-0HYiJ_s6V_Z4prLOqoOtwkh-gs6qg63CSH6FfnhUe1PmYOfkdOQ1xywdxqq0xPb5dHTdIC_0_JLxq2&_nc_ohc=S8-SCZ-zPfAQ7kNvwEKe5j-&_nc_oc=Adm9Gam4PvJ6kRcpO9IFY1SoEhD01s0pmXWX9DN6rlPAYgbqKKzqguFYtMJpdb1dDFEm8mUO3bRuYxKieJMhLdJp&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=2I-QXz0CBTm2BC1Cc4tBQA&oh=00_AfInd2GHQTFjVN72S-D15kex7yN4jGN83nDdIZWayzHddA&oe=684257A7",
    ],
    timestamp: "2h",
    likes: 24,
    comments: 5,
  },
  {
    id: "2",
    author: "Harena Fiantso",
    avatar:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/499946780_1258701665590990_8095563758685064786_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEBtHgmt4BzLgJ8YsrBidTRqqSxGa_uzw-qpLEZr-7PDzmtwV8-C06ebdbPAgRYQ7oaq6tWZ_V9y-h2x57eRgVk&_nc_ohc=n-nGafySkl8Q7kNvwEhn_e7&_nc_oc=AdmX_-TJtcr9Yaz15Qkj5Crnvip5v45SVgcXTN-T3IydgnH1KreXGmnJHFdJdZz1x44Ql3G3jkPERbSKq91IQLGy&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=cBY9xJFumEDTwRf5d83xYw&oh=00_AfIiJKAOO3KKWs1pWkA6FLyYFm5GvTU9Q6NaQ7gpQRQnGQ&oe=6842565E",
    content:
      "WOW, déjà le premier juin. Le temps passe tellement vite que je n'ai même pas pu profiter à fond de ces 6 derniers mois",
    timestamp: "5h",
    likes: 17,
    comments: 3,
  },
  {
    id: "3",
    author: "Fiantso Harena",
    avatar:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/499946780_1258701665590990_8095563758685064786_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEBtHgmt4BzLgJ8YsrBidTRqqSxGa_uzw-qpLEZr-7PDzmtwV8-C06ebdbPAgRYQ7oaq6tWZ_V9y-h2x57eRgVk&_nc_ohc=n-nGafySkl8Q7kNvwEhn_e7&_nc_oc=AdmX_-TJtcr9Yaz15Qkj5Crnvip5v45SVgcXTN-T3IydgnH1KreXGmnJHFdJdZz1x44Ql3G3jkPERbSKq91IQLGy&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=cBY9xJFumEDTwRf5d83xYw&oh=00_AfIiJKAOO3KKWs1pWkA6FLyYFm5GvTU9Q6NaQ7gpQRQnGQ&oe=6842565E",
    content:
      "Bonjour! Aujourd'hui est le dernier jours du mois de Mai 2025 et je suis content de faire post",
    timestamp: "1j",
    likes: 32,
    comments: 14,
  },
];

export const TASKS = [
  { id: "1", text: "Faire devoir de PROG2", completed: false },
  { id: "2", text: "Réviser pour l'examen de WEB2", completed: false },
  { id: "3", text: "Préparer la présentation", completed: true },
];
