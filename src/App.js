
import './App.css';
import NewCom from './NewComponent'

const x = <div>abc</div>
const X = ({ name }) => <div>{name}</div>



const App = () => {

  const X2 = ({ cl, school }) => <div>
    class: {cl}, school:{school}
  </div>

  return (
    <div className="App">
      <NewCom name="Ha" age={20} gender="Nu" />
      {NewCom({ name: "Ha", age: 20, gender: "nu" })}
      {x}
      <X name="ha" />
      <X2 cl="1" school="abc" />
    </div>
  );
}

export default App;
