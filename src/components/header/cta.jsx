import React from 'react'
import CV from '../../assets/Samuel_joseph_React_flutter.pdf'

const cta = () => {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn'> Downalod CV</a>
        <a href="#contact" className='btn btn_primary'>Lets Talk</a>
        
    </div>
  )
}

export default cta