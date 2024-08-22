import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Theme from "../../models/Theme";
import Post from "../../models/Post";
import { apiPost, apiSearchGet, apiUpdate } from "../../Services/Service";

function FormPost() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  const [themes, setThemes] = useState<Theme[]>([]);

  const [theme, setTheme] = useState<Theme>({
    id: "",
    description: "",
  });

  const [post, setPost] = useState<Post>({
    id: "",
    title: "",
    text: "",
    date: "",
    theme: null,
    user: null,
  });

  async function searchPostById(id: string) {
    await apiSearchGet(`/posts/${id}`, setPost, {
      headers: { Authorization: token },
    });
  }

  async function searchThemeById(id: string) {
    await apiSearchGet(`/themes/${id}`, setPost, {
      headers: { Authorization: token },
    });
  }

  async function searchThemes() {
    await apiSearchGet("/themes", setTheme, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      alert("Favor efetue o login");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    searchThemes();
    if (id !== undefined) {
      searchPostById(id);
      console.log(theme);
    }
  }, [id]);

  useEffect(() => {
    setPost({ ...post, theme: theme });
  }, [theme]);

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      theme: theme,
      user: user,
    });
  }

  function back() {
    navigate("/");
  }

  async function newPost(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await apiUpdate(`/posts`, post, setPost, {
          headers: { Authorization: token },
        });

        alert("Post atualizado com sucesso!");
      } catch (e: any) {
        if (e.toString().includes(403)) {
          alert("Sessão expirada, efutue login novamente");
          handleLogout();
        }
      }
    } else {
      try {
        await apiPost(`/posts`, post, setPost, {
          headers: { Authorization: token },
        });
        alert("Post cadastrado");
      } catch (e: any) {
        if (e.toString().includes(403)) {
          alert("Sessão expirada, efutue login novamente");
          handleLogout();
          back()
        } else {
          alert("Erro ao cadastrar o post");
        }
      }
    }
  }

  const LoadingTheme = theme.description === "";

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-600 p-8 rounded-lg shadow-md">
        <form onSubmit={newPost}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-lime-400 text-sm font-bold mb-2"
            >
              Titulo:
            </label>
            <input
              className="w-full mb-[1rem] border-[.15rem] rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
          sm:leading-5 resize-none focus:outline-none focus:border-lime-400"
              type="text"
              placeholder="Digite o título do post"
              name="title"
              value={post.title}
              required
            />
            <label
              htmlFor="text"
              className="block text-lime-400 text-sm font-bold mb-2"
            >
              Texto:
            </label>
            <textarea
              name="text"
              value={post.text}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateState(e)}
              required
              className="w-full border-[.15rem] rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
          sm:leading-5 resize-none focus:outline-none focus:border-lime-400"
              placeholder="Digite aqui o seu post"
            ></textarea>
            <select
              className="mt-[1rem] border-[.15rem] rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
          sm:leading-5 resize-none focus:outline-none focus:border-lime-400"
              name="theme"
              onChange={(e) => searchThemeById(e.currentTarget.value)}
            >
              <option value="" selected disabled>
                Selecione um tema
              </option>
              {themes.map((theme) => (
                <>
                  <option value={theme.id}>{theme.description}</option>
                </>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={LoadingTheme}
              type="submit"
              className="flex justify-center items-center bg-lime-400 hover:bg-lime-300 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                id="send"
                fill="#fff"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
              </svg>
              {LoadingTheme ? (
                <span>Carregando</span>
              ) : id !== undefined ? (
                "Editar"
              ) : (
                "Cadastrar"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormPost;
