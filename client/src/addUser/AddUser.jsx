import React from "react";
import "./adduser.css";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="addUser">
      <Link to="/" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i>Voltar
      </Link>

      <h3>Adicionar novo usuário</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
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
            name="address"
            autoComplete="off"
            placeholder="Rua Fictícia, 123, Bairro Fictício"
          />
        </div>
        <div className="inputGroup">
          <button type="button" class="btn btn-primary">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
