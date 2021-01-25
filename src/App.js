import './App.css';
import MyFirstComponent from "./components/MyFirstComponent";

function App() {

  const multipleObjects = [
    {
      bool: true,
      name: "Beng"
    },
    {
      bool: false,
      name: "John"
    },
    {
      bool: true,
      name: "Sarah"
    }
  ]

  return (
    <div className="myClass">
      {multipleObjects.map((singleObject) => {
        return (
          <MyFirstComponent myFirstProperty={singleObject.bool} name={singleObject.name} />
        )
      })
      }
    </div>
  );
}

export default App;
