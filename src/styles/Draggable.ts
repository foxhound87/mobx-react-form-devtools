import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  icon: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    willChange: 'top',
    touchAction: 'none',
  }),
  dragging: css({
    cursor: 'grabbing',
    userSelect: 'none',
  }),
  dragButton: css({
    "cursor": 'grab',
    "display": 'flex',
    "alignItems": 'center',
    "justifyContent": 'center',
    "padding": '2px',
    ':active': {
      cursor: 'grabbing',
    },
  }),
  btn: css({
    "display": 'flex',
    "alignItems": 'center',
    "justifyContent": 'center',
    "width": '24px',
    "height": '24px',
    "padding": 0,
    "margin": '2px 0 0 1px',
    "background": theme.base0B,
    "borderRadius": '3px',
    ':hover': {
      background: theme.base0A,
    },
  }),
};
