
import './App.css';
import NewCom from './NewComponent'
import TestStateComponent from './StateComponent';
import TestCalculatorComponent from './CalculatorComponent'
import TestCounterComponent from './CounterComponent'
import TestHtmlComponent from './HtmlTestComponent'
import TestHtmlComponent2 from './HtmlTestComponent2'
import TestRegisterComponent from './RegisterFormComponent'
import TestRegisterComponent2 from './RegisterFormComponent2'

import TestRegisterFormComponent from './TestRegisterFormComponent'
import 'bootstrap/dist/css/bootstrap.min.css';




const x = <div>abc</div>
const X = ({ name }) => <div>{name}</div>
const func = ()=> {console.log('call from parents')}


const App = () => {

  const X2 = ({ cl, school }) => <div>
    class: {cl}, school:{school}
  </div>

  return (
    <div className='App'>
     {/*
     <NewCom name="Ha" age={20} gender="Nu" func = {func}/>
      {NewCom({ name: "Ha", age: 20, gender: "nu", func: func})}
      <TestStateComponent/>
      <TestCalculatorComponent/>
      <TestCounterComponent/>
      <TestHtmlComponent/>
      <TestRegisterComponent/>
      <TestRegisterComponent2/>

      
    */}

    <TestRegisterFormComponent/>

    </div>
  );
}

export default App;
