/*
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
    useEffect(() => {
        navigate('/');
    }, []);
    return null;
};
*/

//import React from 'react';

export default function NotFound() {
  if (typeof window !== 'undefined') {
    window.location = '/';
  }

  return null;
}