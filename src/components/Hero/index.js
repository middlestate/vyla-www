import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import VylaButton from '../VylaButton'
import Image from '../Image'

// const ParallaxImage = props => (
//   <Parallax y={[100, -150]} x={[50, 50]}>
//     <div className='image-block rounded-bottomright'>
//       <img src={props.image} alt='hero-image-cows' />
//     </div>
//   </Parallax>
// )

const Hero = props => (
  <section className='hero'>
    <div className='highlight highlight-green' />
    <div className='container'>
      <Parallax
        className='image-block rounded-bottomright'
        y={[80, -80]} tagInner='figure'
      >
        <Image src={props.image} />
      </Parallax>
      <div className='text-block rounded-topleft white-bg'>
        <h1>{props.heading}</h1>
        <p className='intro'>{props.description}</p>
        <div className='button-c2a'>
          <VylaButton
            url='https://mdst.typeform.com/to/VTG8Y7'
            classes='button button-blue'
            text='Join Us'
          />
        </div>
      </div>
    </div>
  </section>
)

export default Hero
