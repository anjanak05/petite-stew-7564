import React from 'react';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import styles from '../Style/AlertLogin.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';

const AlertLogin = () => {
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    ref.current = setInterval(() => {
      navigate('/');
    }, 3000);

    const cleanup = () => {
      clearInterval(ref.current);
    };
    return cleanup;
  }, []);

  return (
    <div className={styles.alertContainer}>
      <Alert
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        backgroundColor="white"
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="370px"
      >
        <AlertIcon boxSize="100px" color="rgb(218, 91, 91)" mr={0} />
        <AlertTitle mt={8} mb={1} fontSize="2xl">
          Login Successful
        </AlertTitle>
      </Alert>
    </div>
  );
};

export default AlertLogin;
