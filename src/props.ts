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
  'hasError',
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
  'error',
];

const fieldPropsToPick = [
  'id',
  'name',
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

export {
  fieldPropsToPick,
  formPropsToPick,
};
