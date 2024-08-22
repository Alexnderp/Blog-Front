import React, { useContext, useEffect, useState } from "react";
import CardTheme from "../CardTheme/CardTheme";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { apiSearchGet } from "../../Services/Service";
import Theme from "../../models/Theme";
import { MutatingDots } from "react-loader-spinner";

function ThemesList() {
  const [themes, setThemes] = useState<Theme[]>([]);

  const navigate = useNavigate();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  console.log(themes);

  async function searchThemes() {
    try {
      await apiSearchGet("/themes", setThemes, {
        headers: { Authorization: token },
      });
    } catch (e: any) {
      if (e.toString().includes("403")) {
        alert("Sessão expirada, efutue login novamente");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Favor efetue o login");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    searchThemes();
  }, [themes.length]);

  return (
    <>
    <div className="flex items-center justify-center">
      {themes.length === 0 && <MutatingDots />}
    </div>
      <div className="flex justify-center w-full py-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <>
                <CardTheme key={theme.id} theme={theme} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemesList;
