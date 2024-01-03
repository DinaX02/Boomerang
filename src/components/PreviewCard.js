import React from 'react'
import imgDefaultPreview from '../assets/img_default_card_preview.png'
const PreviewCard = () => {
  return (
    <div>
    <img className='imgCardPreview' src={imgDefaultPreview} alt='img_preview'/>
    </div>
  )
}

export default PreviewCard