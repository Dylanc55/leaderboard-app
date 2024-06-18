import LocationModel from "./models/Location";

import africanSavannaImg from "./assets/african-savanna.jpg";
import amazonRiverImg from "./assets/amazon-river.jpg";
import desertDunes from "./assets/desert-dunes.jpg";
import grandCanyonImg from "./assets/grand-canyon.jpg";
import greatBarrierReefImg from "./assets/great-barrier-reef.jpg";
import japaneseTempleImg from "./assets/japanese-temple.jpg";
import parisianStreetsImg from "./assets/parisian-streets.jpg";
import tajMahalImg from "./assets/taj-mahal.jpg";
import venetianCanalsImg from "./assets/venetian-canals.jpg";
import victoriaFallsImg from "./assets/victoria-falls.jpg";

const locations: LocationModel[] = [
  {
    id: 1,
    title: "African Savana",
    image: {
      src: africanSavannaImg,
      alt: "Wild animals roaming freely in the vast landscapes of the African savanna.",
    },
    points: 0,
  },
  {
    id: 2,
    title: "Amazon River",
    image: {
      src: amazonRiverImg,
      alt: "Navigating the waters of the Amazon River, surrounded by dense rainforest.",
    },
    points: 0,
  },
  {
    id: 3,
    title: "Sahara Desert Dunes",
    image: {
      src: desertDunes,
      alt: "Golden dunes stretching to the horizon in the Sahara Desert.",
    },
    points: 0,
  },
  {
    id: 4,
    title: "Grand Canyon",
    image: {
      src: grandCanyonImg,
      alt: "Expansive view of the deep gorges and ridges of the Grand Canyon.",
    },
    points: 0,
  },
  {
    id: 5,
    title: "Great Barrier Reef",
    image: {
      src: greatBarrierReefImg,
      alt: "Vibrant coral formations of the Great Barrier Reef underwater.",
    },
    points: 0,
  },
  {
    id: 6,
    title: "Japanese Temple",
    image: {
      src: japaneseTempleImg,
      alt: "Ancient Japanese temple surrounded by autumn foliage.",
    },
    points: 0,
  },
  {
    id: 7,
    title: "Parisian Streets",
    image: {
      src: parisianStreetsImg,
      alt: "Charming streets of Paris with historic buildings and cafes.",
    },
    points: 0,
  },
  {
    id: 8,
    title: "Taj Mahal",
    image: {
      src: tajMahalImg,
      alt: "The iconic Taj Mahal reflecting in its surrounding waters during sunrise.",
    },
    points: 0,
  },
  {
    id: 9,
    title: "Venetian Canals",
    image: {
      src: venetianCanalsImg,
      alt: "Glistening waters of the Venetian canals as gondolas glide by at sunset.",
    },
    points: 0,
  },
  {
    id: 10,
    title: "Victoria Falls ",
    image: {
      src: victoriaFallsImg,
      alt: "The powerful cascade of Victoria Falls, a natural wonder between Zambia and Zimbabwe.",
    },
    points: 0,
  },
];

export default locations;
