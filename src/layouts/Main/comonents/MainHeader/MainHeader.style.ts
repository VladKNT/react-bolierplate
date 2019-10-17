export const mainHeaderStyle = (theme: any) => ({
    root: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1, 3),
        backgroundColor: theme.palette.primary.main,
    },

    logo: {
        width: 60,
        height: 60,
    },

    title: {
        color: theme.palette.primary.contrastText,
        marginLeft: theme.spacing(1),
    },
});
