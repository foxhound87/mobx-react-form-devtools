import { values as mobxValues, toJS } from 'mobx';

import {
  fieldPropsToPick,
  formPropsToPick,
} from './props';

const pick = (obj, props) => {
  const result = {};
  for (const key of props) {
    result[key] = toJS(obj[key]);
  }
  return result;
};

const parseFormData = form =>
  pick(form, formPropsToPick);

const getObservableMapValues = observableMap =>
  mobxValues
    ? mobxValues(observableMap)
    : observableMap.values();

const parseFieldsData = (fields: any) =>
  Array.from(getObservableMapValues(fields)).reduce((obj: any, field: any) => {
    const $nested = ($fields: any) => ($fields.size !== 0)
      ? parseFieldsData($fields)
      : undefined;

    Object.assign(obj, {
      [field.key]: Object.assign(
        pick(field, fieldPropsToPick),
        { fields: $nested(field.fields) },
      ),
    });

    return obj;
  }, {});


export {
  parseFormData,
  parseFieldsData,
};
