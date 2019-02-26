const base = [
  'size',
  'submitted',
  'validated',
  'submitting',
  'validating',
];

const shared = [
  'clearing',
  'resetting',
  'isValid',
  'isDirty',
  'isPristine',
  'isDefault',
  'isEmpty',
  'disabled',
  'deleted',
  'touched',
  'focused',
  'blurred',
  'changed',
  'hasError',
  'error',
];

const fieldPropsToPick = [
  'path',
  'type',
  'bindings',
  'options',
  'default',
  'initial',
  'value',
  'label',
  'placeholder',
  'autoFocus',
  'related',
  'rules',
  ...shared,
  ...base,
];

const formPropsToPick = [
  ...base,
  ...shared,
];

export default {
  fieldPropsToPick,
  formPropsToPick,
};
