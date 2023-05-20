import { useState } from 'react';

export const useForm = ( initialState ) => {
  const [ form, setForm ] = useState( initialState );
  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [ target.name ]: target.value,
    });
  }
  const clearInput = () => setForm( initialState );
  return [
    form,
    handleInputChange,
    clearInput,
  ];
}
