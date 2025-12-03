# 📘 MERN CRUD – UNIUBE

Este projeto é um sistema simples de **CRUD de usuários** desenvolvido para atender aos requisitos da disciplina de Linguagens de Programação para a Internet.  
A aplicação utiliza o stack **MERN** (MongoDB, Express, React e Node.js) para realizar operações de criação, leitura, atualização e exclusão de usuários.

---

## 🚀 Tecnologias utilizadas

### **Frontend**
- React  
- React Router  
- Axios  
- React Hot Toast  
- CSS

### **Backend**
- Node.js  
- Express  
- Mongoose  
- Cors  
- Dotenv  

### **Banco de dados**
- MongoDB (local)

---

## 📂 Estrutura geral

```
mern-crud-uniube/
│
├── backend/
│ ├── controller/
│ ├── model/
│ ├── routes/
│ ├── index.js
│ └── .env
│
└── frontend/
├── src/
│ ├── pages/
│ ├── components/
│ ├── css/
│ └── App.jsx
└── public/
```

---

## ⚙️ Como rodar o projeto

### 🔧 Backend

### 1. Entre na pasta do backend:
```
cd server
npm install
```

### 2. Configure o .env:
```
PORT=8000
MONGO_URL=mongodb://localhost:27017/mern
```

### 3. Inicie o servidor:
```
npm run dev
```

### Servidor iniciará em:
### 👉 http://localhost:8000

---

### 💻 Frontend

### 1. Entre na pasta do frontend:
```
cd client
```

### 2. Instale as dependências:
```
npm install
```

### 3. Rode o projeto:
```
npm start
```

### Frontend iniciará em:
### 👉 http://localhost:3000

---

## 🧪 Funcionalidades
- Adicionar usuário
- Editar usuário
- Excluir usuário
- Listar todos os usuários
- Feedback com toast
- Layout responsivo
- Integração total com MongoDB

---

## 🎓 Objetivo acadêmico
### Projeto desenvolvido para cumprir os requisitos da disciplina de Linguagens de Programação para a Internet, incluindo:
- Implementação de um CRUD completo
- Separação de front e back-end
- Consumo de API
- Uso de banco MongoDB
- Componentização e estados no React

---

## 📌 Licença
### Projeto desenvolvido para fins educacionais — livre para estudo e modificação.
