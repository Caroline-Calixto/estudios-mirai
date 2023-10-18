const size = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1200px'
}

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
};