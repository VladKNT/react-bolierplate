export const typographyStyle = (theme: any) => ({
    root: {
        extend: (props: any) => theme.typography[props.variant],
    }
});
