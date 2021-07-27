import React from "react";
import { getLocalTime } from "../../../utils/utils";

function AlarmListDetails({ AlarmTime, AlarmMessage, AlarmMode }) {
  return (
    <li>{getLocalTime(AlarmTime)} {AlarmMessage} ({AlarmMode})</li>
  );
}

export default AlarmListDetails;
