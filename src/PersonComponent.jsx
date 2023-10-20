import { useGlobalContext } from './GlobalContext';

function PersonComponent() {
  const { people, addPerson } = useGlobalContext();

  return (
    <div>
      <h2>Aggiungi Persona</h2>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => addPerson(e.target.value)}
      />
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  )
}

export default PersonComponent;
