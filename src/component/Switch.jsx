import React from 'react'
import './switch.css'

export default function Switch({code}) {
    const [checked, setChecked] = React.useState(false)
    const HandelChecked = (e)=>{
        setChecked((prev) =>{
            return !prev
        })
        code(checked)
    }
  return (
    <div className='switch-cont relative left-1/4 p-10'>
      <input type="checkbox"  id="checkbox"  />
      <label htmlFor="checkbox" className='switch' onClick={HandelChecked}></label>
    </div>
  )
}
