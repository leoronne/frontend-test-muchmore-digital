import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  selectOptions: {
    '& ul': {
      backgroundColor: 'var(--menu-background)',
      color: 'var(--text-color)',
    },
    '& li': {
      fontSize: 14,
      fontFamily: 'var(--font-family) !important',
      '&:hover': {
        backgroundColor: 'var(--menu-hover)',
      },
    },
  },
});

export { default as Select } from './Select';
export { default as MenuContainer } from './MenuContainer';
