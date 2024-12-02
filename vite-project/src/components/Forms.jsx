import { useState } from 'react';

function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(""); // Limpiar el error al escribir
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {// Validación de campos vacíos
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (!formData.email.includes("@")) {// Validación de correo electrónico (contiene '@')
      setError("El correo debe contener un '@'.");
      return;
    }

    console.log(`El nombre es: ${formData.name}`);
    console.log(`El correo es: ${formData.email}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Forms;