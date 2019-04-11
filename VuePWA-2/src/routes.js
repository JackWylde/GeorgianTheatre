import HeaderNav from './components/Header-nav.vue';
import SelectScreen from './components/selection.vue';
import Launchbtn from './components/launch-button.vue';
import GigList from './components/show-gigs.vue';
import Refreshments from './components/refreshments.vue';
import Mailinglist from './components/mailing-list.vue';

export default [
    {path: '/', component: Launchbtn },
    {path: '/selection', component: SelectScreen },
    {path: '/show-gigs', component: GigList },
    {path: '/refreshments', component: Refreshments},
    {path: '/mailing-list', component: Mailinglist}
]
