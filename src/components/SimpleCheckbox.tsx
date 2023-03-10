import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';
import style from '../styles/SimpleCheckbox';

export default observer(({ field }) => (
  <label htmlFor={field.id} className={cx(style.label)}>
    <input {...field.bind()} className={style.input} /> {field.label || field.name}
  </label>
));
