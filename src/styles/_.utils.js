import { style } from 'glamor';

export default {
  clearfix: style({
    overflow: 'auto',
    zoom: 1,
  }),
  hidden: style({
    display: 'none !important',
  }),
  left: style({
    float: 'left',
  }),
  rigth: style({
    float: 'right',
  }),
  button: style({
    border: 0,
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    background: 'transparent',
  }),
};
