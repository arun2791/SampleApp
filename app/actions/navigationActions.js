/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('Tabs', params);
}
export function navigateToLogin(params) {
    NavigationService.navigate('Authentication', params);
}
