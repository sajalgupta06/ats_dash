import React, { useState } from "react";
import ManualLogin from "../../../../components/ManualLogin/ManualLogin";
import "./AttendanceTab.scss";
import { Chart } from "react-google-charts";


export default function AttendanceTab() {
  const [time, setTime] = useState("Today");
  const [manualLogin, setManualLogin] = useState(false);


  return (
    <div>
      <div className="att-head">
        <h1>My Work Hour</h1>
        <button className="btn btn-w btn-active"
        onClick={()=>setManualLogin(true)}
        >Manual Login</button>
        <div className="btn-group">
          <button
            className={`btn btn-w btn-${
              time === "Today" ? "active" : "inactive"
            }`}
            onClick={() => setTime("Today")}
          >
            Today
          </button>
          <button
            className={`btn btn-w btn-${
              time === "Week" ? "active" : "inactive"
            }`}
            onClick={() => setTime("Week")}
          >
            Week
          </button>
          <button
            className={`btn btn-w btn-${
              time === "Month" ? "active" : "inactive"
            }`}
            onClick={() => setTime("Month")}
          >
            Month
          </button>
        </div>
      </div>
    
    
    {manualLogin&&(
        <ManualLogin setManualLogin={setManualLogin}></ManualLogin>
    )}

{/* 
<Chart
  width={'500px'}
  height={'300px'}
  chartType="AreaChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ]}
  options={{
    // title: 'Company Performance',
    // hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    // For the legend to fit, we make the chart area smaller
    chartArea: { width: '50%', height: '70%' },
    // lineWidth: 25
  }}
  // For tests
  rootProps={{ 'data-testid': '1' }}
/> */}
    </div>
  );
}
