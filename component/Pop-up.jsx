import React, {useEffect, useRef} from 'react'

const PopUp = (props) => {
    let useClickOutside = (handler) => {
      let popup = useRef()
  
      useEffect(() => {
        let mhandler = (e) => {
          if(!popup.current.contains(e.target)){
            handler()
          }
        }
        document.addEventListener("mousedown", mhandler)
        return () => {document.addEventListener("mousedown", mhandler)}  
      })
      return popup
    }
  
    let popup = useClickOutside(() => {
      props.setActive(false)
    })
  
    return(
      <div ref={popup}>
        {props.isActive &&<div className='modal'>
          <div className='pop-up' >
              <div>
              <p>Month</p>
              <input type="text" value={props.isMonth}>
              </input>
              </div>
              <div>
              <p>Day</p>
              <input type="text" value={props.isDay}>
              </input>
              </div>
          </div>
        </div>}
      </div>
    )
  }

export default PopUp;