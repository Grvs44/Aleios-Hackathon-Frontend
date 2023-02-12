import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, useMediaQuery } from '@chakra-ui/react';
// Word wrapper
const Wrapper = props => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = props => {
  // Framer Motion variant object, for controlling animation
  const [isDesktop] = useMediaQuery('(min-width: 50em)');

  const item = {
    hidden: {
      y: '200%',
      // color: '#0055FF',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      // color: '#FF0088',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(' ');

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map(word => {
    return word.push('\u00A0');
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return isDesktop ? (
    Tag === 'h1' ? (
      <Tag>
        {words.map((word, index) => {
          return (
            // Wrap each word in the Wrapper component
            <Wrapper key={index}>
              {words[index].flat().map((element, index) => {
                return (
                  <span
                    style={{
                      overflow: 'hidden',
                      display: 'inline-block',
                    }}
                    key={index}
                  >
                    <Box
                      as={motion.span}
                      style={{
                        display: 'inline-block',
                        fontWeight: '700',
                        fontSize: '40px',
                        color: '#009B72',
                      }}
                      variants={item}
                    >
                      {element}
                    </Box>
                  </span>
                );
              })}
            </Wrapper>
          );
        })}
        {/* {} */}
      </Tag>
    ) : (
      <Tag>
        {words.map((word, index) => {
          return (
            // Wrap each word in the Wrapper component
            <Wrapper key={index}>
              {words[index].flat().map((element, index) => {
                return (
                  <span
                    style={{
                      overflow: 'hidden',
                      display: 'inline-block',
                    }}
                    key={index}
                  >
                    <motion.span
                      style={{
                        display: 'inline-block',
                        fontWeight: '400',
                        fontSize: '19px',
                        color: '#009B72',
                      }}
                      variants={item}
                    >
                      {element}
                    </motion.span>
                  </span>
                );
              })}
            </Wrapper>
          );
        })}
        {/* {} */}
      </Tag>
    )
  ) : Tag === 'h1' ? (
    <Tag>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: 'hidden',
                    display: 'inline-block',
                  }}
                  key={index}
                >
                  <Box
                    as={motion.span}
                    style={{
                      display: 'inline-block',
                      fontWeight: '700',
                    }}
                    variants={item}
                  >
                    {element}
                  </Box>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  ) : (
    <Tag>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: 'hidden',
                    display: 'inline-block',
                  }}
                  key={index}
                >
                  <motion.span
                    style={{
                      display: 'inline-block',
                      fontWeight: '400',
                      color: '#009B72',
                    }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

export default function AnimatedHeading() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [{ type: 'heading1', text: 'Sustainable Future' }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };
  useEffect(() => {
    setTimeout(() => handleReplay(), 5000);
  });

  return (
    <Box
      as={motion.div}
      initial="hidden"
      animate={replay ? 'visible' : 'hidden'}
      variants={container}
      textAlign="center"
      display={'flex'}
    >
      <div>
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
    </Box>
  );
}
