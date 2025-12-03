import React, { useState } from "react";
import "./adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        console.log("Usuário criado com sucesso");
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addUser">
      <Link to="/" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i>Voltar
      </Link>

      <h3>Adicionar novo usuário</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Fulano da Silva"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="exemplo@email.com"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Endereço:</label>
          <input
            type="text"
            id="address"
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Rua Fictícia, 123, Bairro Fictício"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
