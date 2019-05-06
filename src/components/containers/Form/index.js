import React, { useReducer } from 'react';
import produce  from 'immer';
import set from 'lodash.set';
import { Grid } from '../Grid';
import gridify from '../../../hoc/gridify';

import './index.styl';


const UngridifiedForm = ({ onSubmit = () => undefined, children, columnsTemplate, rowsTemplate, gap, rowGap, colGap, gridClassName, ...otherProps }) => {

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e, new FormData(e.currentTarget));
      }}
      {...otherProps}
    >
      <Grid columnsTemplate={columnsTemplate} rowsTemplate={rowsTemplate} gap={gap} rowGap={rowGap} colGap={colGap} className={gridClassName}>
        { children }
      </Grid>
    </form>
  );
}


export const Form = gridify(UngridifiedForm, { componentName: 'form' });