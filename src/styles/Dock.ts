import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  window: css({
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    background: theme.base00,
    marginTop: '-63px',
    paddingBottom: '20px',
  }),
  dock: css({
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  }),
  draggable: css({
    position: 'fixed',
    right: '0px',
    top: '100px',
  }),
};
