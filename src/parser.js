import { toJS } from 'mobx';
import _ from 'lodash';

const fieldPropsToPick = [
  'path',
  'default',
  'initial',
  'value',
  'label',
  'placeholder',
  'disabled',
  'focus',
  'touched',
  'changed',
  'hasError',
  'isValid',
  'isEmpty',
  'isDefault',
  'isPristine',
  'isDirty',
  'error',
  'related',
  'rules',
  'validate',
];

const parseFormData = form =>
  toJS(_.pick(form, [
    'hasError',
    'isValid',
    'isDirty',
    'isPristine',
    'isDefault',
    'isEmpty',
    'focus',
    'touched',
    'changed',
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


export default {
  parseFormData,
  parseFieldsData,
};
