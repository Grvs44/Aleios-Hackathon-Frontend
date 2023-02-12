import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaArrowLeft, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  // const sound = JSON.parse(localStorage.getItem('sound'));

  let navigate = useNavigate();

  return (
    <IconButton
      size="sm"
      fontSize="lg"
      aria-label={`Go back`}
      marginLeft="2"
      onClick={() => {
        navigate(-1);
      }}
      icon={<FaArrowLeft />}
    />
  );
};
