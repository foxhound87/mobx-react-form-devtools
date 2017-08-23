import React from 'react';
import { observer } from 'mobx-react';
import SimpleCheckbox from './SimpleCheckbox';
import style from '../styles/FormOptions';

export default observer(({ form }) => (
  <form onSubmit={form.onSubmit}>
    <h4 className={style.h4}>FORM OPTIONS</h4>
    {form.map(field => <SimpleCheckbox field={field} key={field.key} />)}
  </form>
));
