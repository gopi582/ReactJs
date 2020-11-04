import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormComponent from "./Comonents/FormComponent";
import LifeCycleComponent from "./Comonents/LifeCycleComponent";
import UpdateLifecycle from "./Comonents/UpdateLifecycle";
import Fragments from "./Comonents/Fragments";
import ParentComponent from "./Comonents/ParentComponent";
import ReactRefs from "./ReactRefs";
import HeroError from "./Comonents/HeroError";
import ErrorBoundary from "./Comonents/ErrorBoundary";
import HoverCounter from "./Comonents/HoverCounter";
import ClickCounter from "./Comonents/ClickCounter";
import { UserProvider } from "./Comonents/Context/ReactContext";
import ComponentA from "./Comonents/Context/ComponentA";
import ContextPass from "./Comonents/Context/ContextPass";
import GetData from "./Comonents/Fetch/GetData";
import PostData from "./Comonents/Fetch/PostData";
import CounterHook from "./Comonents/Hooks/CounterHook";
import ObjectHook from "./Comonents/Hooks/ObjectHook";
import ArrayHook from "./Comonents/Hooks/ArrayHook";
import ObjectArrayHook from "./Comonents/Hooks/ObjectArrayHook";
import UseEffectCounter from "./Comonents/Hooks/UseEffectCounter";
import ConditionalHook from "./Comonents/Hooks/ConditionalHook";
import IntervalHook from "./Comonents/Hooks/IntervalHook";
import GetDataHook from "./Comonents/Hooks/GetDataHook";
import GetOneRecordHook from "./Comonents/Hooks/GetOneRecordHook";
import GetDataOnClickHook from "./Comonents/Hooks/GetDataOnClickHook";
import ContextA from "./Comonents/ContextHook/ContextA";
import ReduceCounterHook from "./Comonents/ReducerHook/ReduceCounterHook";
import ReducerObjectHook from "./Comonents/ReducerHook/ReducerObjectHook";
import ReducerCounterObject from "./Comonents/ReducerHook/ReducerCounterObject";
import ReducerContext from "./Comonents/ReducerHook/ReducerContext";
import GetDataReducer from "./Comonents/ReducerHook/GetDataReducer";
import UseMemoHook from "./Comonents/UseMemo/UseMemoHook";
import UseRefHook from "./Comonents/Hooks/UseRefHook";
import DocumentTitle1 from "./Comonents/CustomHooks/DocumentTitle1";
import DocumentTitle2 from "./Comonents/CustomHooks/DocumentTitle2";

export const FirstName = React.createContext();
export const LastName = React.createContext();

function App() {
  return (
    <div className="App">
      {/*<FormComponent/>
     <LifeCycleComponent/>
     <UpdateLifecycle/>
     <Fragments/>
      <ParentComponent/>
      <ReactRefs/>
        <ErrorBoundary>
        <HeroError heroName="Gopi" />        
      </ErrorBoundary>
      <ErrorBoundary>
      <HeroError heroName="Joker" />      
      </ErrorBoundary>
      <HoverCounter />
    <ClickCounter name = "Gopi"/>
    <UserProvider value="Gopi">
      <ComponentA/>
    </UserProvider>
    <ContextPass/>
    <GetData/>
    <PostData/>
    <CounterHook />
    <ObjectHook/>
      <ArrayHook/>
        <ObjectArrayHook/>
         <UseEffectCounter/>
         <ConditionalHook/>
          <IntervalHook/>
          <GetDataHook/>
          <GetOneRecordHook/>
          <GetDataOnClickHook/>
           <FirstName.Provider value="Seelam">
    <LastName.Provider value="Gopi Raju">
      <ContextA/>
    </LastName.Provider>
    </FirstName.Provider>
    <ReduceCounterHook/>
      <ReducerObjectHook/>
      <ReducerCounterObject/>
       <ReducerContext/>
         <GetDataReducer/>
          <UseMemoHook/>
           <UseRefHook/>
    */}
  <DocumentTitle1/>
  <DocumentTitle2/>
    </div>
  );
}

export default App;
