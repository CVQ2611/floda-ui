import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '~/Component/Poper';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchResult from '~/Component/SearchResult';
import Button from '~/Component/Button';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(style);

function Search({ children, products }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchItem, setSearchItem] = useState([]);
    const inputRef = useRef();
    // const [findProducts, setFindProducts] = useState([]);
    // console.log(findProducts);
    // console.log(products[1]);

    // useEffect(() => {
    //     for (let i = 0; i < products.lenght - 1; i++) {
    //         if (products[i].name === searchValue) {
    //             // setFindProducts((prev) => [...prev, products[i]]);
    //             setSearchItem((prev) => [...prev, 1]);
    //         }
    //     }
    //     console.log(searchItem);
    // }, [searchValue]);
    // console.log(searchItem);
    useEffect(() => {
        setSearchItem((prev) => [...prev, 1]);
    }, [searchValue]);
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('search')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        <Tippy
                            placement="bottom"
                            visible={searchItem.length > 0}
                            interactive
                            render={(attrs) => (
                                <PoperWrapper>
                                    <div className={cx('search', 'search-result')} tabIndex="-1" {...attrs}>
                                        {products.map((product) => (
                                            <Button inList searchResult key={product.id}>
                                                <SearchResult data={product} />
                                            </Button>
                                        ))}
                                    </div>
                                </PoperWrapper>
                            )}
                        >
                            <div className={cx('search-lable')}>
                                <input
                                    ref={inputRef}
                                    value={searchValue}
                                    className={cx('search-input')}
                                    placeholder={'Tìm kiếm...'}
                                    spellCheck={false}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />

                                <button
                                    className={cx('search-icon')}
                                    onClick={() => {
                                        if (!!searchValue) {
                                            setSearchValue('');
                                            inputRef.current.focus();
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    {/* <FontAwesomeIcon icon={faSpinner} /> */}
                                </button>
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

Search.propTypes = {
    children: PropTypes.node.isRequired,
    products: PropTypes.array.isRequired,
};

export default Search;
