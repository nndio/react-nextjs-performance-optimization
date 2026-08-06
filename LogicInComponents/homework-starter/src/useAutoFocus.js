import { useEffect, useRef } from 'react';

export function useAutoFocus(shouldFocus, clearFocus) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus) {
      inputRef.current?.focus();
      clearFocus();
    }
  }, [shouldFocus]);

  return inputRef;
}