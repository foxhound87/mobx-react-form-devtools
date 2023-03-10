import { css } from '@emotion/css'

export default {
  clearfix: css({
    overflow: 'auto',
    zoom: 1,
  }),
  hidden: css({
    display: 'none !important',
  }),
  left: css({
    float: 'left',
  }),
  rigth: css({
    float: 'right',
  }),
  button: css({
    border: 0,
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    background: 'transparent',
  }),
};
