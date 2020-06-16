import React from 'react'

function SetHTML({paypalButton}) {
  return (
    <div className="content" dangerouslySetInnerHTML={{__html: paypalButton}}></div>
  )
}

export default SetHTML
