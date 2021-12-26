import React, { useState } from 'react'
import Form from 'react-forms-dx'

import MetaTags from 'shared/components/common/MetaTags'

import tracking from './tracking'
import {
  pageStyle
} from './style'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [showSignup, setShowSignup] = useState(true)

  const onClickCta = () => {
    // setShowSignup(true)
    setShowModal(true)
    tracking('WELCOME_OPEN_MODAL')
  }
  
  return (
    <div className='page' css={pageStyle}>
      <MetaTags />

      <div>
        I got in
      </div>

      <Form />
    </div>
  )
}

export default Home
