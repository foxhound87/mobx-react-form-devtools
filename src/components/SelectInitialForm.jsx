import React from 'react';
import { observer } from 'mobx-react';
import { merge } from 'glamor';

import { mapo } from '../utils';
import Icons from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/SelectInitialForm';

export default observer(({ store, handlers }) =>
  <div>
    <h4>SELECT A FORM</h4>
    {mapo(store.menu, (key, val) =>
      <button
        key={key}
        value={key}
        className={merge($U.button, style.btn)}
        onClick={handlers.handleInitialFormSelect}
      >
        <Icons.FaCircleO className={style.icon} /> {val}
      </button>
    )}
  </div>
);
