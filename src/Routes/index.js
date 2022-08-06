import HomePage from '~/Page/Home';
import IntroducePage from '~/Page/Introduce';
import ShopPage from '~/Page/Shop';
import NewsPage from '~/Page/News';
import ContactPage from '~/Page/Contact';

export const publicPage = [
    { path: '/', component: HomePage },
    { path: '/introduce', component: IntroducePage },
    { path: '/shop', component: ShopPage },
    { path: '/news', component: NewsPage },
    { path: '/contact', component: ContactPage },
];

export const privatePage = [];
