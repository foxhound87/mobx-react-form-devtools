import { css } from '@emotion/css'
import theme from './_.theme';

export default {
  container: css({
    marginLeft: '10px',
  }),
  contentHidden: css({
    display: 'none',
  }),
  root: css({
    paddingTop: '63px',
  }),
  windowed: css({
    paddingTop: '63px',
  }),
  heading: css({
    "color": theme.base00,
    "padding": '10px 12px',
    "margin": 0,
    "background": theme.base03,
    "fontSize": '12px',
    "fontWeight": 600,
    "textTransform": 'uppercase',
    "letterSpacing": '0.8px',
    "display": 'flex',
    "alignItems": 'center',
    "justifyContent": 'space-between',
    "gap": '6px',
    "cursor": 'pointer',
    "userSelect": 'none',
    ':hover': {
      background: theme.base02,
    },
  }),
  headingLabel: css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  }),
  select: css({
    flexShrink: 0,
    cursor: 'default',
  }),
  icon: css({
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
  }),
  fieldsHeading: css({
    "color": theme.base00,
    "padding": '10px 12px',
    "margin": '1px 0 0 0',
    "background": theme.base03,
    "fontSize": '12px',
    "fontWeight": 600,
    "textTransform": 'uppercase',
    "letterSpacing": '0.8px',
    "display": 'flex',
    "alignItems": 'center',
    "gap": '6px',
    "cursor": 'pointer',
    "userSelect": 'none',
    ':hover': {
      background: theme.base02,
    },
  }),
  chevron: css({
    marginLeft: 'auto',
    transition: 'transform 150ms ease',
    display: 'flex',
    alignItems: 'center',
  }),
  chevronCollapsed: css({
    transform: 'rotate(-90deg)',
  }),
  helperSelect: css({
    "fontSize": '11px',
    "padding": '1px 4px',
    "background": theme.base02,
    "color": theme.base00,
    "border": `1px solid ${theme.base01}`,
    "cursor": 'pointer',
    ':focus': {
      outline: 'none',
    },
  }),
  helpersGrid: css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4px',
  }),
  controls: {
    button: css({
      "borderRadius": 0,
      "width": '25%',
      "display": 'flex',
      "alignItems": 'center',
      "justifyContent": 'center',
      "float": 'left',
      "fontSize": '16px',
      "padding": '6px 0',
      "background": theme.base01,
      "color": theme.base00,
      ':hover': {
        background: theme.base03,
        color: theme.base00,
      },
    }),
    icon: css({
      color: theme.base00,
      display: 'flex',
      alignItems: 'center',
    }),
    iconOptionsActive: css({
      "color": theme.base0B,
      ':hover': {
        color: theme.base00,
      },
    }),
  },
};
