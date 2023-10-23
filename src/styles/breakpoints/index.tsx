const size = {
    mobile: '480px',
    tablet: '992px',
    desktop: '1200px'
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
};