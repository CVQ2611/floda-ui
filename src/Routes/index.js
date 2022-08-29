import HomePage from '~/Page/Home';
import IntroducePage from '~/Page/Introduce';
import ShopPage from '~/Page/Shop';
import NewsPage from '~/Page/News';
import ContactPage from '~/Page/Contact';

export const publicPage = [
    { path: '/', name: 'Trang Chủ', component: HomePage },
    { path: '/introduce', name: 'Giới Thiệu', component: IntroducePage },
    { path: '/shop', name: 'Cửa Hàng', component: ShopPage },
    { path: '/news', name: 'Tin Tức', component: NewsPage },
    { path: '/contact', name: 'Lên Hệ', component: ContactPage },
];

export const privatePage = [];
