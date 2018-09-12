import React from 'react';

export const NavLogo = ({ children, imgSrc, className }) => {
    if (!children && !imgSrc) return null;
    return (imgSrc) ?
        <img className={`navbar-element logo ${className || ''}`} src={imgSrc} alt={children}/> :
        <a className={`navbar-element brand`} href='/'>{ children }</a>
};

export const NavLabel = ({ label, route, className }) => {
    return <a className={`navbar-element label ${className || ''}`} href={ route }>{ label }</a>;
};

export const NavIcon = ({ icon, route, className, small, big, large, onClick }) => {
    return (
        <a className={`navbar-element icon ${className || ''}`} href={ route } onClick={onClick}>
            <i className='material-icons'
               style={{fontSize: large ? '2.35rem' : big ? '2.05rem' : small ? '1.55rem' : '1.75rem' }}
            >
                { icon }
            </i>
        </a>
    );
};