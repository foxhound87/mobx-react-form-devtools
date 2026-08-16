/* eslint-disable global-require */

declare const require: (id: string) => any;

const resolveForm = () => {
  try {
    const fk = require('mobx-formkit');
    return fk.default ?? fk;
  } catch (err) {
    // fallback to legacy peer
  }

  const rf = require('mobx-react-form');
  return rf.default ?? rf;
};

const Form = resolveForm();

export default Form;