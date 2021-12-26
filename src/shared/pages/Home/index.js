import React, { useState } from 'react'

import MetaTags from 'shared/components/common/MetaTags'

import tracking from './tracking'
import {
  pageStyle,
  logoStyle,
  headingStyle,
  textStyle,
  ctaStyle,
  flipStyle
} from './style'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [showSignup, setShowSignup] = useState(true)

  const onClickCta = () => {
    // setShowSignup(true)
    setShowModal(true)
    tracking('WELCOME_OPEN_MODAL')
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  const onFlipClick = () => {
    setShowModal(false)
    setShowSignup(!showSignup)

    setTimeout(() => {
      setShowModal(true)
    }, 0)
  }
  
  return (
    <div className='page' css={pageStyle}>
      <MetaTags />

      <div>
        I got in
      </div>
    </div>
  )
}

export default Home
