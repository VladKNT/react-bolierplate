export const spacing = (...args: number[]): number | string => {
    const space = 10;

    if (args.length === 1) {
        return space * args[0];
    }

    if (args.length > 1) {
        const spaces = args.map((arg: number) => `${space * arg}px`);
        return spaces.join(' ');
    }

    return space;
};
