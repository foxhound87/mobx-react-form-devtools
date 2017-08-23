import Form from 'mobx-react-form';
import _ from 'lodash';

const observer = form => ({ field }) =>
  form.state.options.set({ [field.key]: field.value });

const setProp = (fields, prop) =>
  _.reduce(fields, (obj, val, key) =>
    _.merge(obj, { [key]: prop }), {});

const setObserversProp = (form, fields) =>
  setProp(fields, [{ call: observer(form) }]);

const setCheckboxProp = fields =>
  setProp(fields, 'checkbox');

const getBooleanOptions = form =>
  _.pickBy(form.state.options.options, _.isBoolean);

export default (form) => {
  const fields = getBooleanOptions(form);
  const types = setCheckboxProp(fields);
  const observers = setObserversProp(form, fields);

  return new Form({
    fields,
    types,
    observers,
  });
};
