import React from 'react'
import "./user.css"

const User = () => {
  return (
    <div className='userTable'>
        <button type='button' class="btn btn-primary">Adicionar usuário</button>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Endereço</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>João</td>
                <td>joao@gmail.com</td>
                <td>Brasil</td>
                <td>Editar | Deletar</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default User
