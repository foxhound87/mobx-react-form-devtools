import { values as mobxValues, toJS } from 'mobx';
import _ from 'lodash';

const fieldPropsToPick = [
  'path',
  'type',
  'bindings',
  'default',
  'initial',
  'value',
  'label',
  'placeholder',
  'submitting',
  'validating',
  'clearing',
  'resetting',
  'autoFocus',
  'focused',
  'disabled',
  'touched',
  'changed',
  'hasError',
  'isValid',
  'isEmpty',
  'isDefault',
  'isPristine',
  'isDirty',
  'error',
  'rules',
  'validators',
  'related',
  'options',
  'extra',
  'size',
];

const parseFormData = form =>
  toJS(_.pick(form, [
    'submitting',
    'validating',
    'clearing',
    'resetting',
    'hasError',
    'isValid',
    'isDirty',
    'isPristine',
    'isDefault',
    'isEmpty',
    'focus',
    'touched',
    'changed',
    'size',
  ]));

const getObservableMapValues = observableMap =>
  mobxValues
    ? mobxValues(observableMap)
    : observableMap.values();

const parseFieldsData = fields =>
  _.reduce(getObservableMapValues(fields), (obj, field) => {
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
