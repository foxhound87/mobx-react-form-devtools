import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  select: css({
    "fontSize": '11px',
    "padding": '1px 4px',
    "background": theme.base02,
    "color": theme.base00,
    "border": `1px solid ${theme.base01}`,
    "cursor": 'pointer',
    "width": '120px',
    ':focus': {
      outline: 'none',
    },
  }),
};
