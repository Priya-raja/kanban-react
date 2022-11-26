import React from 'react'
import CustomInput from './CustimInput'
const Cards = () => {
  return (
    <div>Cards
     <CustomInput
            defaultValue={cardValues.title}
            text={cardValues.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
    </div>

  )
}

export default Cards