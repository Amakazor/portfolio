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
};

Theme.gradients.primaryGradient = getLinearGriadient('120deg', [
    {color: Theme.colors.accentViolet, position: '10%'},
    {color: Theme.colors.accentMagenta, position: '80%'},
]);

export default Theme;
