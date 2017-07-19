import React from 'react';
import '../styles/sub-header.css';
import Typing from 'react-typing-animation';
import PropTypes from 'prop-types';

const AnimatedTypingComponent = (sources) => {
  return(
    sources.map((source, index) => {
       return(
          <span  key={index} >
            <span>{source}</span>
            <Typing.Backspace count={50} delay={2000} speed={30} />
            <Typing.Delay ms={0} />
            <Typing.Speed ms={130} />
          </span>
         )
     })
    ) 
}

const SubHeader = (props) => {
  return (
          <div className='jumbotron sub-header col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <p> Get live headlines from </p>
              <h1>
                <Typing loop={true} speed={130} startDelay={-10} >
                  {AnimatedTypingComponent(props.news_source)}
                </Typing >
                </h1>
          </div>
      )
}

SubHeader.propTypes = {
  news_source: PropTypes.array.isRequired
}

export default SubHeader