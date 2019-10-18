export const mainHeaderStyle = (theme: any) => ({
    root: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        padding: theme.spacing(1, 3),
        backgroundColor: theme.palette.primary.main,
    },

    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },

    logo: {
        width: 60,
        height: 60,
    },

    title: {
        color: theme.palette.primary.contrastText,
        marginLeft: theme.spacing(1),
    },

    navigationContainer: {
        marginLeft: theme.spacing(1),
    },

    navigationItem: {
        margin: theme.spacing(0, 1),
        textDecoration: 'none',
    },

    navigationSelectedItem: {
        borderBottom: `${theme.palette.primary.contrastText} solid 2px`,
    },

    navigationItemText: {
        color: theme.palette.primary.contrastText,
    }
});
