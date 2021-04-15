import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: 953467346 }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const eventoName = (event) => {
    setNewName(event.target.value)
  }
  const eventoNumero = (event) => {
    setNewNumber(event.target.value)
  }

  const eventoClick = (event) => {
    

    event.preventDefault()
    const personarepe = {name: newName, number:newNumber}
    setPersons(
      [...persons, personarepe]
      )

    var cont=1 

    for (var k = 0; k < persons.length; k++) {
      if(persons[k].name === personarepe.name){
        cont++
      } 
    }
    var NewName = personarepe.name
    if(cont === 1){
      setPersons([...persons, personarepe])
      window.alert('El nombre '+NewName+' a sido agregado :)');
      setNewName("")
    } else {
      window.alert('El nombre ' +NewName+' esta repetido');
      setNewName("")
    }

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={eventoClick}>
        <div>
          name: <input type="text" value={newName} onChange={eventoName} />
          <p></p>
        </div>
        <div>
          name: <input type="text" value={newNumber} onChange={eventoNumero} />
          <p></p>
        </div>
        <div>
          <button type="submit"  onClick={eventoClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <h2>Los names de todas las personas:</h2>
          <p></p>
          {persons.map((personanueva,index) => {return(<li key={index}>{personanueva.name} ----- {personanueva.number}</li>)})}
    </div>
  );
}

export default App;

