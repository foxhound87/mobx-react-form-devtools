import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

import { mapo } from '../utils';
import { FaCircleO } from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/SelectInitialForm';

export default observer(({ store, handlers }) => (
  <div>
    <h4>SELECT A FORM</h4>
    {mapo(store.menu, (key, val) =>
      // eslint-disable-next-line
      <button
        key={key}
        value={key}
        className={cx($U.button, style.btn)}
        onClick={handlers.handleInitialFormSelect}
      ><FaCircleO className={style.icon} /> {val}
      </button>)}
  </div>
));
