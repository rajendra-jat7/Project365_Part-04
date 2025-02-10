import { useState } from "react";
import "./Calendar.css";

const years = Array.from({ length: 51 }, (_, i) => 2000 + i);
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Function to get days & weekday position in a month
const getDaysInMonth = (year, month) => {
  const days = new Date(year, month + 1, 0).getDate(); // Total days in month
  const firstDay = new Date(year, month, 1).getDay(); // First day index (0 = Sunday)
  
  let daysArray = Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    weekday: new Date(year, month, i + 1).getDay(),
  }));

  return { daysArray, firstDay };
};

const Calendar = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(null);

  return (
    <div className="calendar-container">
      <h2>📅 Select a Year & Month</h2>

      {/* Year Selection */}
      <div className="year-list">
        {years.map((year) => (
          <button
            key={year}
            className={`year-btn ${selectedYear === year ? "active" : ""}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Month Selection */}
      <div className="month-grid">
        {months.map((month, index) => (
          <button
            key={index}
            className={`month-btn ${selectedMonth === index ? "active" : ""}`}
            onClick={() => setSelectedMonth(index)}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Show Days if Month is Selected */}
      {selectedMonth !== null && (
        <div className="calendar-view">
          <h3>{months[selectedMonth]} {selectedYear}</h3>

          {/* Weekdays Row */}
          <div className="weekdays">
            {weekdays.map((day, index) => (
              <div key={index} className="weekday">{day}</div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="days-grid">
            {Array(getDaysInMonth(selectedYear, selectedMonth).firstDay).fill(null).map((_, index) => (
              <div key={`empty-${index}`} className="empty-day"></div>
            ))}
            {getDaysInMonth(selectedYear, selectedMonth).daysArray.map(({ day }) => (
              <div key={day} className="day-box">
                <span className="day-number">{day}</span>
                {/* <span className="day-name">{weekdays[weekday]}</span> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
