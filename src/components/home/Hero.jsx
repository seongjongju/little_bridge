import React, { useEffect, useRef } from 'react';
import arrow from '../../assets/icons/arrow.png';
import heroImage from '../../assets/images/hero-img.png';
import { Link } from 'react-router';

const Hero = () => {
    const heroInnerRef = useRef(null);

    useEffect(() => {
        const heroInner = heroInnerRef.current;
        if (!heroInner) return undefined;

        const animationFrame = requestAnimationFrame(() => {
            heroInner.classList.add('hero--animated');
        });

        return () => {
            cancelAnimationFrame(animationFrame);
            heroInner.classList.remove('hero--animated');
        };
    }, []);

    return (
        <section id='hero'>
            <div className='hero__inner' ref={heroInnerRef}>
                <div className='hero__info'>
                    <h1 className='hero__title'>
                        영어와 친해지는 <br />
                        첫 번째 다리
                    </h1>
                    <p className='hero__text'>30년의 교육 경험, 놀이로 시작하는 우리 아이 첫 영어</p>
                    <Link 
                        to={'/'}
                        className='hero__link'
                    >
                        입학 상담
                        <img 
                            src={arrow} 
                            alt="입학 상담 바로가기" 
                            className='hero__link-arrow'
                            width={20}
                            height={20}
                        />
                    </Link>
                    <span className='hero__line-text'>
                        LITTLE BRIDGE
                    </span>
                </div> {/* .hero__info : end */}
                <div className='hero__visual'>
                    <span className='hero__decoration hero__decoration--small' aria-hidden='true'></span>
                    <span className='hero__decoration hero__decoration--large' aria-hidden='true'></span>
                    <figure className='hero__figure'>
                        <img
                            src={heroImage}
                            alt='선생님과 아이들이 함께 놀이하는 모습'
                            className='hero__image'
                        />
                    </figure>
                    <div className='hero__badge' aria-label='30년 전통'>
                        <div className='hero__badge-inner'>
                            <span className='hero__badge-number'>30</span>
                            <span className='hero__badge-label'>YEARS</span>
                        </div>
                    </div>
                </div>
            </div> {/* .hero__inner : end */}
        </section>
    );
};

export default Hero;