
import './App.css';
import NewCom from './NewComponent'

const x = <div>abc</div>
const X = ({ name }) => <div>{name}</div>
const func = ()=> {console.log('call from parents')}

const App = () => {

  const X2 = ({ cl, school }) => <div>
    class: {cl}, school:{school}
  </div>

  return (
    <div className='App'>
      <NewCom name="Ha" age={20} gender="Nu" func = {func}/>
      {NewCom({ name: "Ha", age: 20, gender: "nu", func: func})}
      
    </div>
  );
}

export default App;
