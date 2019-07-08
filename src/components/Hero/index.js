import React from 'react';
import PropTypes from 'prop-types'
import { Parallax } from 'react-scroll-parallax';
import VylaButton from '../VylaButton';
import Image from '../Image';

// const ParallaxImage = props => (
//   <Parallax y={[100, -150]} x={[50, 50]}>
//     <div className='image-block rounded-bottomright'>
//       <img src={props.image} alt='hero-image-cows' />
//     </div>
//   </Parallax>
// )

const Content = props => (
  <div className='text-content'>
    {console.log('>>>>>',props.text)}
    {props.text.map((text, i) =>
      <p>{text.text}</p>
      )}
  </div>
)


const Hero = ({
  image,
  background_color,
  heading,
  description,
  content
}) => (
  <section className="hero">
      <div className="highlight" style={{backgroundColor: background_color}}/>
    <div className="container">
      {/* <Parallax
        className='image-block rounded-bottomright'
        y={[80, -80]} tagInner='figure' tagOuter='figure'
      > */}
      <div className="image-block rounded-bottomright">
        <img src={image} />
      </div>
      {/* </Parallax> */}
      <div className="text-block rounded-topleft white-bg">
        <h1>{heading}</h1>
          <p className="intro">{description}</p>
          {content ? <Content text={content} /> : ''}
        <p className="intro">{description}</p>
        <div className="button-c2a">
          <VylaButton
            url="https://mdst.typeform.com/to/VTG8Y7"
            classes="button button-blue"
            text="Join Us"
          />
        </div>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  image: PropTypes.string,
  background_color: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.array
    })
  )
}

export default Hero;
