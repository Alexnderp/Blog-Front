import React from "react";
import Theme from "../../models/Theme";
import { Link } from "react-router-dom";

interface CardThemeProps {
  theme: Theme;
}

function CardTheme({ theme }: CardThemeProps) {
  return (
    <section className="p-10">
      <div className="w-[20vw] relative group overflow-hidden p-8 rounded-xl bg-gray-800  dark:bg-gray-900">
        <div
          aria-hidden="true"
          className="inset-0 absolute aspect-video rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-lime-500 to-lime-200 dark:from-white dark:to-white blur-2xl opacity-30 dark:opacity-5 dark:group-hover:opacity-10"
        ></div>
        <div className="relative">
          <div className="mt-6 pb-6">
            <h3 className="text-lime-400 text-2xl text-center font-Gilroy-Black">
              Tema
            </h3>
            <p className="text-white text-lg text-center font-Gilroy-Black">
              {theme.description}
            </p>
          </div>

          <div className="flex gap-3 -mb-8 py-4 border-t justify-center">
            <Link to={`/editTheme/${theme.id}`}>
              <button className="m-3 text-center text-white bg-lime-400 h-[3rem] w-[5rem] rounded-lg font-Gilroy-Black">
                Editar
              </button>
            </Link>
            <Link to={`/deleteTheme/${theme.id}`}>
              <button className="m-3 text-center text-white bg-red-600 h-[3rem] w-[5rem] rounded-lg font-Gilroy-Black">
                Deletar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardTheme;
