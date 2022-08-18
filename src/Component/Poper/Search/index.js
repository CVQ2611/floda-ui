import Tippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '~/Component/Poper';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchResult from '~/Component/SearchResult';
import Button from '~/Component/Button';

const cx = classNames.bind(style);

function Search({ children }) {
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('search')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        <Tippy
                            render={(attrs) => (
                                <PoperWrapper>
                                    <div className={cx('search', 'search-result')} tabIndex="-1" {...attrs}>
                                        <Button inList searchResult>
                                            <SearchResult />
                                        </Button>
                                        <Button inList searchResult>
                                            <SearchResult />
                                        </Button>
                                    </div>
                                </PoperWrapper>
                            )}
                            placement="bottom"
                            interactive
                            trigger="focusin"
                        >
                            <div className={cx('search-lable')}>
                                <input className={cx('search-input')} placeholder={'Tìm kiếm...'} />
                                <span className={cx('search-icon')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    {/* <FontAwesomeIcon icon={faSpinner} /> */}
                                </span>
                            </div>
                        </Tippy>
                    </PoperWrapper>
                </div>
            )}
            interactive
            placement={'bottom'}
            trigger="mouseenter click"
        >
            {children}
        </Tippy>
    );
}

export default Search;
