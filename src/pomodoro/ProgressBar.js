import React, { useState, useEffect } from "react";





export default function ProgressBar({session, focusDuration, breakDuration}){

    const [percent, setPercent] =useState('100%')
    useEffect(() =>{
      if(session!==null){
      let current = session?.timeRemaining
      let total = session.label === 'Focusing'? focusDuration*60:breakDuration*60
      setPercent( String((1-(current/total))*100))
      }}
    , [session])

    return(
        <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className='progress-bar'
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={percent} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${percent}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    )
}