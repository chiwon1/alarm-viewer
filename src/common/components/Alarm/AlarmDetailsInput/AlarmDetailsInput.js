import React from "react";

function AlarmDetailsInput() {
  return (
    <>
      <br/>
      <div>알람등록</div>
      <label>
        시계모드:
        <select>
          <option>일반</option>
          <option>진동</option>
          <option>야간</option>
        </select>
      </label>
      <br/>
      <label>
        시간설정:
        <input type="date"/>
      </label>
      <br/>
      <label>
        알람모드:
        <select>
          <option>일반</option>
          <option>긴급</option>
        </select>
      </label>
    </>
  );
}

export default AlarmDetailsInput;
