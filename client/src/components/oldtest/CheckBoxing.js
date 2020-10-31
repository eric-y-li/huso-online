import React from 'react';
import CheckBox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default function CheckBoxEx() {
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <FormControlLabel
        control={
      <CheckBox
        checked={checked}
        onChange = {(e) => setChecked(e.target.checked)}
        inputProps = {{'aria-label' : 'secondary checkbox'}}
      />
        }/>
    </div>
  )
}