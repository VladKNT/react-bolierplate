import { spacing } from '../../../../theme/spacing';

export const mainFooterStyle = (theme: any) => ({
    root: {
        height: 80,
        padding: spacing(0, 3),
        backgroundColor: theme.palette.primary.main,
    },

    license: {
        color: theme.palette.primary.contrastText
    },
});
