import React from 'react'
import '../styles/styles.scss'
import { Provider } from 'react-redux';
import store from '../redux/reduser'
import Calendar from '../component/Calendar'


const MyApp = () => {
  return(
    <Provider store={store}>
    <div className='conteiner'>
      <header>
          <img src='https://ua.joblum.com/uploads/11/10565.png' />
        <div className='abrv'>
          <p>ABOUT AS</p>
          <p>HOME</p>
        </div>
      </header>
      <div className='body'>
        <div className='left' >
          <div className='text'>
            <h1>Choose the day for the meeting</h1>
            <p>We encourage you to book your appointment online. This will save you time.</p>
          </div>
        </div>
        <div className='right' >
          <Calendar />
        </div>
      </div>
    </div>
    </Provider>
  )
}
export default MyApp
