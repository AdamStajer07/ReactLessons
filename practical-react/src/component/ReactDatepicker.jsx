import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function ReactDatepicker() {
    const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div style={{margin: 'auto', width: '100px'}}>
        <DatePicker 
            selected={selectedDate} 
            onChange={date=>setSelectedDate(date)} 
            dateFormat='yyyy/MM/dd'
            minDate={new Date()}
            maxDate={new Date(2025, 11, 2)}
            filterDate={date => date.getDay() != 6 && date.getDay() != 0}
            isClearable
            scrollableMonthYearDropdown
        />
    </div>
  )
}

export default ReactDatepicker