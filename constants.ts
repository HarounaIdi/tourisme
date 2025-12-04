import { Minister, NewsArticle, Destination, ArtisanTrade } from './types';

export const MINISTERS_HISTORY: Minister[] = [
    {
        name: "Mme Soufiane Aghaichata Guichene",
        period: "2024 – Présent (CNSP)",
        achievements: "Lancement Festival Aïr 2025, Réforme classification hôtelière 2025, Tourisme de souveraineté.",
        image: "https://picsum.photos/id/64/300/300"
    },
    {
        name: "Mohamed Hamid",
        period: "2016 – 2021",
        achievements: "Modernisation du secteur touristique, promotion internationale.",
        image: "https://picsum.photos/id/65/300/300"
    },
    {
        name: "Ahmed Boto",
        period: "2012 – 2016",
        achievements: "Développement de l’artisanat régional.",
        image: "https://picsum.photos/id/66/300/300"
    },
    {
        name: "Oumarou Hadiza",
        period: "2010 – 2012",
        achievements: "Réformes institutionnelles, partenariats internationaux.",
        image: "https://picsum.photos/id/67/300/300"
    },
    {
        name: "Amadou Boubacar Cissé",
        period: "2000s",
        achievements: "Infrastructures routières liées au tourisme.",
        image: "https://picsum.photos/id/68/300/300"
    }
];

export const NEWS_ARTICLES: NewsArticle[] = [
    {
        id: 1,
        title: "Succès de la 17ᵉ Édition du Festival de l'Aïr",
        date: "20 Déc 2025",
        category: "Culture",
        content: "Fréquentation record et sécurisation exemplaire par les FDS à Iferouane. La culture s'affirme comme un rempart de notre identité.",
        image: "https://picsum.photos/id/164/800/400" // Dunes/Desert vibe
    },
    {
        id: 2,
        title: "Réglementation hôtelière : Nouveaux décrets 2025",
        date: "15 Oct 2025",
        category: "Réglementation",
        content: "Le Ministère lance une vaste campagne d'inspection nationale pour professionnaliser le secteur et fermer les structures non conformes.",
        image: "https://picsum.photos/id/435/800/400" // Building/Official
    },
    {
        id: 3,
        title: "Diplomatie culturelle au Salon International",
        date: "05 Nov 2025",
        category: "Artisanat",
        content: "Le Niger brille à l'international. Vente record pour nos artisans touaregs, haoussas et peuls.",
        image: "https://picsum.photos/id/326/800/400" // Craft/Art
    },
    {
        id: 4,
        title: "Programme National de Formation 2025-2027",
        date: "01 Sep 2025",
        category: "Formation",
        content: "Lancement officiel du programme visant à certifier 5000 jeunes artisans dans 8 régions.",
        image: "https://picsum.photos/id/201/800/400" // Education/Tech
    }
];

export const DESTINATIONS: Destination[] = [
    {
        name: "Agadez",
        description: "Porte du Sahara, ville classée au patrimoine mondial, célèbre pour sa mosquée en banco et son sultanat.",
        image: "https://picsum.photos/id/1040/600/400"
    },
    {
        name: "Désert du Ténéré",
        description: "L'un des plus beaux déserts du monde. Dunes à perte de vue et circuits sahariens sécurisés.",
        image: "https://picsum.photos/id/1015/600/400"
    },
    {
        name: "Réserve de Kouré",
        description: "Observez les dernières girafes d'Afrique de l'Ouest en liberté totale à moins d'une heure de Niamey.",
        image: "https://picsum.photos/id/216/600/400"
    },
    {
        name: "Parc du W",
        description: "Biosphère transfrontalière, sanctuaire de la biodiversité sahélienne (éléphants, lions, buffles).",
        image: "https://picsum.photos/id/1003/600/400"
    }
];

export const ARTISAN_TRADES: ArtisanTrade[] = [
    {
        category: "Métaux & Bijouterie",
        count: 45,
        examples: ["Bijoutiers Touaregs", "Forgerons", "Orfèvres"]
    },
    {
        category: "Cuir & Peaux",
        count: 32,
        examples: ["Tanneurs", "Maroquiniers", "Bottiers"]
    },
    {
        category: "Textile & Mode",
        count: 58,
        examples: ["Tisserands Haoussas", "Broders", "Couturiers traditionnels"]
    },
    {
        category: "Bois & Végétaux",
        count: 24,
        examples: ["Sculpteurs sur bois", "Vanniers", "Calebassiers"]
    }
];