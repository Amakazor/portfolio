import getLinearGriadient from '../helpers/getLinearGradient';

const Theme = {
    colors: {
        background: '#222222',
        primary: '#FFFFFF',
        accentMagenta: '#ff5EC5',
        accentViolet: '#9954ff',
        accentCyan: '#00FFFF',
    },
    gradients: {
        primaryGradient: '',
        primaryGradientReversedHorizontal: '',
    },
    sizes: {
        borderWidth: '0.125rem' as size,
        sidebarBorderWidth: '0.5rem' as size,
    },
    transitionTime: {
        fast: '300ms' as time,
        standard: '600ms' as time,
        long: '1000ms' as time,
    },
    weights: {
        normal: '400',
        bold: '600',
    },
};

Theme.gradients.primaryGradient = getLinearGriadient('120deg', [
    {color: Theme.colors.accentViolet, position: '10%'},
    {color: Theme.colors.accentMagenta, position: '80%'},
]);

Theme.gradients.primaryGradientReversedHorizontal = getLinearGriadient('90deg', [
    {color: Theme.colors.accentMagenta, position: '10%'},
    {color: Theme.colors.accentViolet, position: '80%'},
]);

export default Theme;
