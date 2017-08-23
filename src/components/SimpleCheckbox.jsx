import React from 'react';
import { observer } from 'mobx-react';
import style from '../styles/SimpleCheckbox';

export default observer(({ field }) => (
  <label htmlFor={field.id} className={style.label}>
    <input {...field.bind()} className={style.input} /> {field.label}
  </label>
));
