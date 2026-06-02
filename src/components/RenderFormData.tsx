import React, { useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames'
import JSONTree from 'react-json-tree';

import SelectMenu from './SelectMenu';
import FormControls from './FormControls';
import FormOptions from './FormOptions';

import { parseFormData, parseFieldsData } from '../parser';

import {
  LayoutGrid,
  Menu,
  List,
  Wrench,
  ChevronDown,
} from '../icons';
import $U from '../styles/_.utils';
import style from '../styles/RenderFormData';

const get = key => {
  try { return localStorage.getItem(`mrf-${key}`) === 'collapsed'; }
  catch { return false; }
};
const set = (key, v) => {
  try { localStorage.setItem(`mrf-${key}`, v ? 'collapsed' : 'expanded'); }
  catch {}
};

const Section = observer(({ icon: Icon, title, storageKey, rightContent = null, children, className = '' }) => {
  const [collapsed, setCollapsed] = useState(() => get(storageKey));

  const toggle = useCallback(() => {
    setCollapsed(prev => {
      const next = !prev;
      set(storageKey, next);
      return next;
    });
  }, [storageKey]);

  return (
    <>
      <h4 className={cx(style.fieldsHeading, className)} onClick={toggle}>
        <span className={style.icon}>{Icon}</span>
        <span>{title}</span>
        {rightContent}
        <span className={cx(style.chevron, collapsed && style.chevronCollapsed)}>
          <ChevronDown size={12} />
        </span>
      </h4>
      {!collapsed && children}
    </>
  );
});

const helpers = [
  { label: 'errors', prop: 'error' },
  { label: 'labels', prop: 'label' },
  { label: 'placeholders', prop: 'placeholder' },
  { label: 'defaults', prop: 'default' },
  { label: 'initials', prop: 'initial' },
  { label: 'types', prop: 'type' },
  { label: 'disabled', prop: 'disabled' },
  { label: 'checked', prop: 'checked' },
  { label: 'related', prop: 'related' },
  { label: 'rules', prop: 'rules' },
  { label: 'options', prop: 'options' },
  { label: 'extra', prop: 'extra' },
  { label: 'bindings', prop: 'bindings' },
  { label: 'validators', prop: 'validators' },
  { label: 'validatedWith', prop: 'validatedWith' },
  { label: 'hooks', prop: 'hooks' },
  { label: 'handlers', prop: 'handlers' },
];


export default observer(({ store, handlers }) => {
  const [formCollapsed, setFormCollapsed] = useState(() => get('section-form'));
  const toggleForm = useCallback(() => {
    setFormCollapsed(prev => {
      const next = !prev;
      set('section-form', next);
      return next;
    });
  }, []);
  const [helper, setHelper] = useState('error');

  return (
    <div className={cx(style.root, { [style.windowed]: store.windowIsOpen })}>
      <h4 className={cx(style.heading)} onClick={toggleForm}>
        <span className={style.headingLabel}>
          <span className={style.icon}><LayoutGrid size={14} /></span>
          <span>Form</span>
          <span className={cx(style.chevron, formCollapsed && style.chevronCollapsed)}>
            <ChevronDown size={12} />
          </span>
        </span>
        <span className={cx(style.select)} onClick={e => e.stopPropagation()}>
          <SelectMenu store={store} handlers={handlers} />
        </span>
      </h4>

      {!formCollapsed && <>
        <FormControls handlers={handlers} store={store} />

        {store.showOptions
          && <FormOptions form={store.formOptions} />}

        <div className={cx(style.container)}>
          <JSONTree
            hideRoot
            data={parseFormData(store.selected.form)}
            theme={store.theme}
            invertTheme={false}
          />
        </div>
      </>}

      <Section
        icon={<List size={14} />}
        title="Values"
        storageKey="section-values"
      >
        <div className={cx(style.container)}>
          <JSONTree
            hideRoot
            data={store.selected.form.values()}
            theme={store.theme}
            invertTheme={false}
          />
        </div>
      </Section>

      <Section
        icon={<Menu size={14} />}
        title="Fields"
        storageKey="section-fields"
      >
        <div className={cx(style.container)}>
          <JSONTree
            hideRoot
            data={parseFieldsData(store.selected.form.fields)}
            theme={store.theme}
            invertTheme={false}
          />
        </div>
      </Section>

      <Section
        icon={<Wrench size={14} />}
        title="Helpers"
        storageKey="section-helpers"
        rightContent={
          <select
            value={helper}
            onChange={e => setHelper(e.target.value)}
            className={style.helperSelect}
            onClick={e => e.stopPropagation()}
          >
            {helpers.map(h => <option key={h.prop} value={h.prop}>{h.label}</option>)}
          </select>
        }
      >
        <div className={cx(style.container)}>
          <JSONTree
            hideRoot
            data={store.selected.form.get(helper)}
            theme={store.theme}
            invertTheme={false}
          />
        </div>
      </Section>
    </div>
  );
});
