import { values as mobxValues, toJS } from 'mobx';
import _ from 'lodash';

import {
  fieldPropsToPick,
  formPropsToPick,
} from './props';

const parseFormData = form =>
  toJS(_.pick(form, formPropsToPick));

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


export {
  parseFormData,
  parseFieldsData,
};
