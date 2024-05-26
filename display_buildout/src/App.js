import "./App.css";
import { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [fullname, setFullname] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname) {
      setFullname("");
    }
    let result = firstname + " " + lastname;
    setFullname(result);
  };

  return (
    <>
      <div className="App">
        <h1>Full name Display</h1>
        <form onSubmit={handlesubmit}>
          <label htmlFor="first name">Firstname:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          <br></br>
          <label htmlFor="last name">Lastname:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            required
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
        {fullname && <div>Full name:{fullname}</div>}
      </div>
    </>
  );
}

export default App;
