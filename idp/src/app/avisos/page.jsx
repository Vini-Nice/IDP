"use client";
import Header from "../components/Header/Header";
import { usePathname } from "next/navigation";
import React from "react";

import { Roboto, Merriweather, Playfair_Display } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const AnnouncementCard = ({ date, title, description }) => {
  return (
    <div className="bg-stone-100 shadow-md rounded-lg p-4 mb-4 hover:scale-108 transition-transform duration-300 ease-in-out">
      <p className="text-sm text-gray-500">{date}</p>
      <h3
        className={`${merriweather.className} text-lg font-semibold text-blue-600 mb-2 `}
      >
        {title}
      </h3>
      <p className={`${roboto.className} text-gray-700 text-sm`}>
        {description}
      </p>
    </div>
  );
};

const Announcements = () => {
  const announcements = [
    {
      date: "20 de abril de 2024",
      title: "Inscrições abertas para atividades extracurriculares",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      date: "15 de abril de 2024",
      title: "Horário especial de funcionamento da biblioteca",
      description:
        "Quisque cursus, velit et dictum ultricies, quam felis tinciduntus.",
    },
    {
      date: "10 de abril de 2024",
      title: "Prazo para solicitação de trancamento de matrícula",
      description: "Nam ultrices velit eget placerat pulvinar.",
    },
    {
      date: "5 de abril de 2024",
      title: "Reunião de pais e mestres na próxima semana",
      description:
        "Donec laoreet ligula risus, id scelerisque libero facilisis a.",
    },
    {
      date: "2 de abril de 2024",
      title: "Alteração no calendário de provas do semestre",
      description: "Suspendisse potenti. Nullam vestibulum, augue sed dictum.",
    },
  ];

  return (
    <div className="bg-white">
      
      <div className="bg-blue-600 text-white py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center sm:text-left">
            Avisos
          </h1>
          <p className="text-blue-100 text-center sm:text-left text-sm sm:text-base">
            Confira o quadro de Avisos
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-8">
        {announcements.map((announcement, index) => (
          <AnnouncementCard
            key={index}
            date={announcement.date}
            title={announcement.title}
            description={announcement.description}
          />
        ))}
      </div>


      
    </div>



  );
};

export default Announcements;
