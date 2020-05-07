import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

export const SearchBox = (props) => {
  return (
    <FormControl>
      <InputLabel htmlFor="symbol-search-input">Symbol Search</InputLabel>
      <Input id="symbol-search-input" onChange={(e) => { props.onSearchChange(e.target.value) }} aria-describedby="symbol-search-helper-text" />
      <FormHelperText id="symbol-search-helper-text">Start typing to search</FormHelperText>
    </FormControl>
  )
}