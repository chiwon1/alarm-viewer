import React from "react";
import AlarmDetailsInput from "../common/components/Alarm/AlarmAddForm/AlarmAddForm";
import AlarmList from "../common/components/Alarm/AlarmList/AlarmList";
import Clock from "../common/components/Clock/Clock";

function App() {

  return (
    <>
      <Clock/>
      <br/>
      <AlarmDetailsInput/>
      <br/><br/>
      <AlarmList/>
    </>
  );
}

export default App;
