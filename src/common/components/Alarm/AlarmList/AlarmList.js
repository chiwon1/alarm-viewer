import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { compareTime } from "../../../utils/utils";
import AlarmListDetails from "../AlarmListDetails/AlarmListDetails";

function AlarmList() {
  const { events } = useSelector(state => state.alarm);
  const sortedEvents = useMemo(() => [...events].sort(compareTime), [events]);

  return (
    <>
      <h1>Alarm list</h1>
      <ol>
        {sortedEvents.map(({ id }) => <AlarmListDetails key={id} AlarmId={id} />)}
      </ol>
    </>
  );
}

export default AlarmList;
