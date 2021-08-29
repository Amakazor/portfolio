import getLinearGriadient from '../helpers/getLinearGradient';

const Theme = {
    colors: {
        background: '#111111',
        primary: '#FFFFFF',
        accentMagenta: '#FF3695',
        accentViolet: '#553DB0',
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

Theme.gradients.primaryGradient = getLinearGriadient('110deg', [
    {color: Theme.colors.accentViolet, position: '10%'},
    {color: Theme.colors.accentMagenta, position: '70%'},
]);

Theme.gradients.primaryGradientReversedHorizontal = getLinearGriadient('90deg', [
    {color: Theme.colors.accentMagenta, position: '10%'},
    {color: Theme.colors.accentViolet, position: '80%'},
]);

export default Theme;
