import { ThemeBreakpoint } from '../constants/theme';

export const breakpoint = (value: ThemeBreakpoint): string => {
    switch (value) {
        case "xl":
            return '@media (min-width: 1200px)';
        case "lg":
            return '@media (max-width: 1199.98px)';
        case "md":
            return '@media (max-width: 991.98px)';
        case "sm":
            return '@media (max-width: 767.98px)';
        case "xs":
            return '@media (max-width: 575.98px';
        default:
            return '@media (min-width: 1200px)';
    }
};
