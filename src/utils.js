export default {

  /* map object */
  mapo: (object, callback) =>
    Object.keys(object).map(key =>
      callback(key, object[key])),

};
