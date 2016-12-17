export default $actions => ({

  handleOnSizeChange: (size) => {
    $actions.changeDockSize(size);
  },

  handleOnCloseTools: (e) => {
    e.preventDefault();
    $actions.toggleTools('close');
  },

  handleOnOpenTools: (e) => {
    e.preventDefault();
    $actions.toggleTools('open');
  },

  handleOnOpenDoc: (e) => {
    e.preventDefault();
    const link = 'https://foxhound87.github.io/mobx-react-form/';
    window.open(link, '_blank'); // eslint-disable-line
  },

  handleSelect: (e) => {
    $actions.selectForm(e.target.value);
  },

  handleInitialFormSelect: (e) => {
    e.preventDefault();
    $actions.selectForm(e.target.value);
  },

  handleFormOnSubmit: (e) => {
    e.preventDefault();
    $actions.handleFormControls('submit');
  },

  handleFormOnClear: (e) => {
    e.preventDefault();
    $actions.handleFormControls('clear');
  },

  handleFormOnReset: (e) => {
    e.preventDefault();
    $actions.handleFormControls('reset');
  },

});
