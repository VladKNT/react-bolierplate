export const typographyStyle = (theme: any) => ({
    root: {
        extend: (props: any) => {console.info(theme.typography[props.variant]); return theme.typography[props.variant]},
    }
});
