import React from 'react';
import { Link } from 'react-router';
import { depths } from '../staticData/gnbData';

const Header = () => {
    return (
        <header>
            <nav className='header__nav'>
                <Link 
                    to={'/'}
                    className='logo'
                >
                    LITTLE BRIDGE
                </Link>

                <ul className='gnb'>
                    {
                        depths.map(depth => {
                            return (
                                <li 
                                    key={depth.id}
                                    className='gnb__li'
                                >
                                    <Link 
                                        to={depth.path}
                                        className='one-depth'
                                    >
                                        <span className='one-depth__text'>
                                            {depth.menu}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <Link className='header__link'>
                    입학 상담
                </Link>
            </nav> {/* .header__nav : end */}
        </header>
    );
};

export default Header;