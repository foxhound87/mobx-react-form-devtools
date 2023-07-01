import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  icon: css({
    fontSize: '15px',
  }),
  dragIcon: css({
    fontSize: '22px',
    color: theme.base04,
  }),
  draggable: css({
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '5px 5px 7px 5px',
    background: theme.base00,
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  }),
  dragButton: css({
    cursor: 'ns-resize',
  }),
  btn: css({
    'display': 'block',
    'width': '20px',
    'height': '20px',
    'padding': 0,
    'margin': '4px 0 0 1px',
    'background': theme.base0B,
    'borderRadius': '2px',
    ':hover': {
      background: theme.base0A,
    },
  }),
};
