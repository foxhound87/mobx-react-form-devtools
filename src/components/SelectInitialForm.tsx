import React from "react";
import { observer } from "mobx-react";
import cx from "classnames";

import { mapo } from "../utils";
import { Circle } from "../icons";
import $U from "../styles/_.utils";
import style from "../styles/SelectInitialForm";

export default observer(({ store, handlers }) => (
  <div style={{ paddingTop: "63px" }}>
    {mapo(store.menu, (key, val) => (
      // eslint-disable-next-line
      <button
        key={key}
        value={key}
        className={cx($U.button, style.btn)}
        onClick={handlers.handleInitialFormSelect}
      >
        <Circle size={14} className={style.icon} /> {val}
      </button>
    ))}
  </div>
));
