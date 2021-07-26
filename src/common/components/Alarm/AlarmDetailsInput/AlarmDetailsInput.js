import React from "react";

function AlarmDetailsInput() {
  return (
    <>
      <div>알람등록</div>
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
      <br/>
      <button>알람추가</button>
    </>
  );
}

export default AlarmDetailsInput;
