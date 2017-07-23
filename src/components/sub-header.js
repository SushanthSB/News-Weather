import React from 'react';
import '../styles/sub-header.css';
import Typing from 'react-typing-animation';
import PropTypes from 'prop-types';

//sub-header content - Displays animated typing
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
              {/*Fetch values from news-sourcce reducer and pass it to react-typing-animation library*/}
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