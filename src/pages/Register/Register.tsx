import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import { apiPostAuth } from "../../Services/Service";

function Register() {
  let navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  const [userResponse, setUserResponse] = useState<User>({
    id: "",
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  useEffect(() => {
    if (userResponse.id !== "") {
      back();
    }
  }, [userResponse]);

  function back() {
    navigate("/");
  }

  function handleConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function registerNewUser(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmPassword === user.password && user.password.length >= 8) {
      try {
        await apiPostAuth(`/auth/register`, user, setUserResponse);
        alert("Usuario cadastrado com sucesso");
      } catch (error) {
        alert("Erro ao efetuar o cadastro");
      }
    } else {
      alert("Favor verificar e corrigir os dados informados.");
      setUser({ ...user, password: "" });
      setConfirmPassword("");
    }
  }

  return (
    <main>
      <section className="flex justify-evenly items-center">
        <img
          src="https://i.postimg.cc/QCPPbVh4/f4ea3c1c-2c87-4d7e-828d-ed73fb5c40b9.png"
          alt="image"
          className="h-[80vh]"
        />
        <form
          className="flex flex-col justify-center bg-gray-600 p-3 rounded-lg w-[25rem] h-[32rem] shadow-[-11px_-10px_20px_10px_#00000024]"
          onSubmit={registerNewUser}
        >
          <h2 className="text-center text-white text-3xl font-Gilroy-Black">
            Cadastre-se!
          </h2>
          <label htmlFor="name" className="text-white ml-2 text-lg">
            Nome:
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            required
            placeholder="   Insira seu Nome"
            className="rounded-md m-2 h-[2rem]"
          />
          <label htmlFor="email" className="text-white ml-2 text-lg">
            Email:
          </label>
          <input
            type="Email"
            name="email"
            value={user.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            required
            placeholder="   Insira seu Email"
            className="rounded-md m-2 h-[2rem]"
          />
          <label htmlFor="password" className="text-white ml-2 text-lg">
            Senha:
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            required
            placeholder="   Insira sua Senha"
            className="rounded-md m-2 h-[2rem]"
          />
          <label htmlFor="confirmPassword" className="text-white ml-2 text-lg">
            Confirme sua Senha:
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleConfirmPassword(e)
            }
            placeholder="   Confirme sua Senha"
            className="rounded-md m-2 h-[2rem]"
          />
          <label htmlFor="photo" className="text-white ml-2 text-lg">
            Selecione sua Foto:
          </label>
          <input
            name="photo"
            type="file"
            accept="image/jpeg, image/png"
            value={user.photo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            className="rounded-lg m-2  text-gray-600 text-sm font-semibold bg-white"
          />
          <button
            type="submit"
            className="bg-white w-[5rem] h-[2rem] rounded-md ml-[40%] mt-2 text-gray-600 font-Gilroy-Black duration-200 hover:bg-lime-400 hover:text-white"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}

export default Register;
