import { useState, useRef } from "react";

function App() {
  const [form, setForm] = useState({
    nom: "",
    poste: "",
    email: "",
    telephone: "",
    linkedin: "",
    logo: ""
  });

  const signatureRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyHTML = () => {
    const html = signatureRef.current.innerHTML;
    navigator.clipboard.writeText(html).then(() => {
      alert("HTML copié !");
    }).catch(() => {
      alert("Erreur lors de la copie");
    });
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 700, margin: "auto" }}>
      <h1>Générateur de Signature Email</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 30 }}>
        <input name="nom" placeholder="Nom" onChange={handleChange} />
        <input name="poste" placeholder="Poste" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="telephone" placeholder="Téléphone" onChange={handleChange} />
        <input name="linkedin" placeholder="Lien LinkedIn" onChange={handleChange} />
        <input name="logo" placeholder="URL du logo (optionnel)" onChange={handleChange} />
      </div>

      <h2>Aperçu :</h2>
      <div ref={signatureRef} style={{ border: "1px solid #ccc", padding: 15, marginBottom: 10 }}>
        <table>
          <tbody>
            <tr>
              {form.logo && (
                <td style={{ paddingRight: 15 }}>
                  <img src={form.logo} alt="Logo" width="60" />
                </td>
              )}
              <td>
                <strong>{form.nom}</strong><br />
                {form.poste}<br />
                <a href={`mailto:${form.email}`}>{form.email}</a><br />
                {form.telephone}<br />
                <a href={form.linkedin} target="_blank" rel="noreferrer">{form.linkedin}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button onClick={copyHTML}>📋 Copier le HTML</button>
    </div>
  );
}

export default App;
