import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <>{children}</>
            <Footer />
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
