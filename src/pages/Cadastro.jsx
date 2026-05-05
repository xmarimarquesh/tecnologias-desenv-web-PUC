import { useState } from "react";
import { auth, db } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
    nome: "",
    sobrenome: "",
    nascimento: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCadastro = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.senha
      );

      const uid = userCredential.user.uid;

      await setDoc(doc(db, "usuarios", uid), {
        uid,
        nome: form.nome,
        sobrenome: form.sobrenome,
        nascimento: form.nascimento
      });

      alert("Usuário cadastrado!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="senha" type="password" placeholder="Senha" onChange={handleChange} />
      <input name="nome" placeholder="Nome" onChange={handleChange} />
      <input name="sobrenome" placeholder="Sobrenome" onChange={handleChange} />
      <input name="nascimento" type="date" onChange={handleChange} />

      <button onClick={handleCadastro}>Cadastrar</button>
      <Link to="/">
        Já possui conta? Logar</Link>
    </div>
  );
}