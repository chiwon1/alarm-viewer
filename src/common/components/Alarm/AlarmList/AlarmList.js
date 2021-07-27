import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import AlarmListDetails from "../AlarmListDetails/AlarmListDetails";
import { compareTime } from "../../../utils/utils";
import { ALARM_LIST } from "../../../../constants";

function AlarmList() {
  const { events } = useSelector(state => state.alarm);
  const sortedEvents = useMemo(() => [...events].sort(compareTime), [events]);

  return (
    <>
      <h1>{ALARM_LIST}</h1>
      <ol>
        {sortedEvents.map(({ id }) => <AlarmListDetails key={id} AlarmId={id} />)}
      </ol>
    </>
  );
}

export default AlarmList;
