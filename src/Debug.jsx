import React from 'react';
import { observable, action, toJS } from 'mobx';
import { observer } from 'mobx-react';
import Dock from 'react-dock';
import Draggable from 'react-draggable';
import ReactTooltip from 'react-tooltip';
import JSONTree from 'react-json-tree';
import cx from 'classnames';
import _ from 'lodash';

import IconFaTh from 'react-icons/lib/fa/th';
import IconFaBars from 'react-icons/lib/fa/bars';
import IconFaCircleO from 'react-icons/lib/fa/circle-o';
import IconFaBook from 'react-icons/lib/fa/book';
import IconFaChevronLeft from 'react-icons/lib/fa/chevron-left';
import IconFaChevronCircleRight from 'react-icons/lib/fa/chevron-circle-right';

import theme from './theme';


/* map object */
function mapo(object, callback) {
  return Object.keys(object).map(key =>
    callback(key, object[key]));
}

const tools = observable({
  open: true,
  heading: {
    name: true,
    sub: true,
  },
});

const dock = observable({
  visible: true,
  fluid: true,
  size: 0.30,
  position: 'right',
  mode: 'none',
  style: {
    background: '#2b303b',
  },
});

const fieldPropsToPick = [
  'path',
  'default',
  'initial',
  'value',
  'label',
  'disabled',
  'focus',
  'touched',
  'hasError',
  'isValid',
  'isEmpty',
  'isDefault',
  'isPristine',
  'isDirty',
  'error',
  'related',
];

const parseFormData = form =>
  toJS(_.pick(form, [
    'hasError',
    'isValid',
    'isEmpty',
    'isDefault',
    'isPristine',
    'isDirty',
  ]));

const parseFieldsData = fields =>
  _.reduce(fields.values(), (obj, field) => {
    const $nested = $fields => ($fields.size !== 0)
      ? parseFieldsData($fields)
      : undefined;

    const data = toJS(_.pick(field, fieldPropsToPick));

    Object.assign(obj, {
      [field.key]: Object.assign(data, {
        fields: $nested(field.fields),
      }),
    });

    return obj;
  }, {});

const handleOnSizeChange = action((size) => {
  _.set(dock, 'size', size);
  _.set(tools, 'heading.name', (size > 0.22));
  _.set(tools, 'heading.sub', (size > 0.11));
});

const handleOnCloseTools = action((e) => {
  e.preventDefault();
  _.set(tools, 'open', false);
});

const handleOnOpenTools = action((e) => {
  e.preventDefault();
  _.set(tools, 'open', true);
});

const handleOnOpenDoc = action((e) => {
  e.preventDefault();
  window.open('https://foxhound87.github.io/mobx-react-form/', '_blank'); // eslint-disable-line
});

const handleSelect = action((e, actions) => {
  actions.select(e.target.value);
});

const handleInitialFormSelect = action((e, key, actions) => {
  e.preventDefault();
  actions.select(e.target.value);
});

const SelectMenu = observer(({ store, actions }) =>
  <select
    name="mobx-react-form-devtools-select"
    value={store.selected.key}
    onChange={e => handleSelect(e, actions)}
  >
    {_.map(store.menu, ($val, $key) =>
      <option key={$key} value={$key}>{$val}</option>
    )}
  </select>
);

const SelectInitialForm = observer(({ store, actions }) =>
  <div>
    <h4>SELECT A FORM</h4>
    <div className="initialMenu">
      {mapo(store.menu, (key, val) =>
        <button
          key={key}
          value={key}
          onClick={e => handleInitialFormSelect(e, key, actions)}
        >
          <IconFaCircleO className="icon" /> {val}
        </button>
      )}
    </div>
  </div>
);

const RenderFormData = observer(({ store, actions }) =>
  <div className="tree">
    <h3 className="clearfix">
      <div className="left title">
        <IconFaTh className="icon" /> Form
      </div>
      <div className="right select">
        <SelectMenu store={store} actions={actions} />
      </div>
    </h3>
    <JSONTree
      hideRoot
      data={parseFormData(store.selected.form)}
      theme={theme}
      isLightTheme={false}
    />
    <h4><IconFaBars className="icon" /> Fields</h4>
    <JSONTree
      hideRoot
      data={parseFieldsData(store.selected.form.fields)}
      theme={theme}
      isLightTheme={false}
    />
  </div>
);

export default observer(({ store, actions }) => (
  <Dock
    defaultSize={tools.open ? dock.size : 0}
    size={tools.open ? dock.size : 0}
    onSizeChange={handleOnSizeChange}
    position={dock.position}
    fluid={dock.fluid}
    isVisible={dock.visible}
    dimMode={dock.mode}
    dockStyle={dock.style}
  >
    <ReactTooltip />

    <Draggable
      axis="y"
      handle=".devtools-drag"
      zIndex={99999999999}
      defaultPosition={{ x: 0, y: 0 }}
    >
      <div className={cx('draggable', { hidden: tools.open })}>
        <div className="devtools-drag" data-tip="DRAG">
          <IconFaBars className="icon" />
        </div>
        <button onClick={handleOnOpenTools} data-tip="OPEN">
          <IconFaChevronLeft className="icon" />
        </button>
        <button onClick={handleOnOpenDoc} data-tip="DOCS">
          <IconFaBook className="icon" />
        </button>
      </div>
    </Draggable>

    <div className="tools">
      <div className="heading clearfix">
        <div className="left">
          <i className={cx({ hidden: !tools.heading.name })}>mobx-react-form</i>
          <b className={cx({ hidden: !tools.heading.sub })}>DEVTOOLS</b>
        </div>
        <button className="right" onClick={handleOnCloseTools} data-tip="CLOSE">
          <IconFaChevronCircleRight className="icon" />
        </button>
        <button className="right" onClick={handleOnOpenDoc} data-tip="DOCS">
          <IconFaBook className="icon" />
        </button>
      </div>
      {(store.selected.form && store.selected.key)
        ? <RenderFormData store={store} actions={actions} />
        : <SelectInitialForm store={store} actions={actions} />}

    </div>
  </Dock>
));
