import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyle.css';
import styles from './components/appStyle.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import DataFetching from './components/DataFetching';
import ComponentC from './components/componentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';



export const UserContext = React.createContext() ;
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">

<DataFetchingTwo/>
{/* <DataFetchingOne/> */}
{/* <CounterOne/> */}
{/* <Coun
    <UserContext.Provider value={'Abhishek'}>
      <ChannelContext.Provider value={'Ronaldo best in the world'}>
          <ComponentC />
      </ChannelContext.Provider>
    </UserContext.Provider> */}

{/* <DataFetching /> */}
{/* <ErrorBoundry>
<Hero heroName='Superman'/>
</ErrorBoundry>

<ErrorBoundry>
<Hero heroName='Doctor'/>
</ErrorBoundry>

<ErrorBoundry>
<Hero heroName='Joker'/>
</ErrorBoundry> */}

{/* <PortalDemo /> */}
{/* <FRParentInput/> */}
{/* <FocusInput/> */}
{/* <RefsDemo/> */}
{/* <ParentComp /> */}
    {/* <FragmentDemo/> */}
    {/* <LifecycleA/> */}
    {/* <Form/> */}
    {/* <h1 className='error'> error</h1>
    <h1 className={styles.success}>Success</h1> */}
      {/* <Inline />
      <StyleSheet primary = {true}/> */}
    {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <Greet name="abhishek" profession="engineer">

        <p>this is children props</p>
      </Greet>

      <Welcome name="abhishek" profession="engineer"></Welcome>

      <FunctionClick/>
      <ClassClick></ClassClick>
      <EventBind></EventBind> */}
      {/* <Greet name="bhujbal" profession="developer">
        <button>click</button>
        </Greet>
      <Greet name="hemant" profession="Data Scientist"/>
     
    
      
      <Welcome name="bhujbal" profession="developer"></Welcome>
      <Welcome name="hemant" profession="Data Scientist"></Welcome>
      <Hello/> 
      <Message/>

      <Counter/> */}
    </div>
   
 
  );
}

export default App;



{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}