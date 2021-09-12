import React, {useState, useRef} from 'react'
import classnames from 'classnames'
import PopUp from './Pop-up';
import { connect } from 'react-redux';
import { SetCalendarMonth, SetCalendarDay } from '../redux/reduser'

const Calendar = (props) => {
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let daysNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S '];
    let fullDaysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  
    let date = new Date
    let year = date.getFullYear();
    let month = date.getMonth();
  
    const [isYear, setYear] = useState(year)
    const [isMonth, setMonth] = useState(month)
    const [isActive, setActive] = useState(false)
  
    let current = new Date(isYear, isMonth );
    let next = new Date(isYear, isMonth + 1);
    let diff = (next - current)/(1000 * 3600 * 24);
    let index = current.getDay();

    const ROW = 6
    const COL = 7

    let table = [],
    tr,
    n = 1 - index
    for(let i = 0; i < ROW ; i++) {
        tr = []
            for(let i = 0; i < COL ; i++) {
                tr.push(
                    <td 
                        onClick={() => {
                            setActive(!isActive);
                            props.SetCalendarMonth(isMonth);
                            props.SetCalendarDay(i)

                        }} 
                        className='day'
                    >
                        { n > 0 && n <= diff ? n : ""}
                    </td>
                );
            n++;

        }
      table.push(<tr>{tr}</tr>)
    } 
  
    const LastMonth = () => {
      if (isMonth === 0) {
        setYear(isYear - 1)
        setMonth(isMonth + 11)
      }
      else {setMonth(isMonth - 1)}
    }
  
    const NextMonth = () => {
        if (isMonth === 11) {
            setYear(isYear + 1)
            setMonth(isMonth - 11)
        }
        else {setMonth(isMonth + 1)}
    }

    return(
      <div className="calendar">
        <div className='header'>
          <button onClick={LastMonth} ><h2>{'<'}</h2></button>
            <h4>
            {monthNames[isMonth] + " "}
            {isYear}
            </h4>
          <button onClick={NextMonth}><h2>{'>'}</h2></button>
          
        </div>
        <table>
          {table}
        </table>
        <table>
          {daysNames.map(d => (
            <th>
              {d}
            </th>
          ))}

        </table>
          <PopUp isActive={isActive} setActive={setActive} isDay={fullDaysNames[props.calendarDay]} isMonth={monthNames[props.calendarMonth]}  />
      </div>
    )
}

let mapStateToProps = (state) => ({
    calendarMonth: state.month,
    calendarDay: state.day,
})

export default connect(mapStateToProps, {SetCalendarMonth, SetCalendarDay})(Calendar);