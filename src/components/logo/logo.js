import React from 'react';
import s from './logo.module.scss';
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <div className={s.container}>
      <Link to="/">
        <svg className={s.logo} viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_i   _51_223)">
            <path d="M0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5V28.5C13 32.0899 10.0899 35 6.5 35C2.91015 35 0 32.0899 0 28.5V6.5Z" fill="#436E85"/>
            <path d="M17 2.975C17 1.33195 18.3676 0 20.0547 0H26.7031C28.3902 0 29.7578 1.33195 29.7578 2.975V32.025C29.7578 33.668 28.3902 35 26.7031 35H20.0547C18.3676 35 17 33.668 17 32.025V2.975Z" fill="#436E85"/>
            <path d="M36.9453 22.575C38.6324 22.575 40 23.907 40 25.55V32.025C40 33.668 38.6324 35 36.9453 35H20.5938C18.9067 35 17.5391 33.668 17.5391 32.025V25.55C17.5391 23.907 18.9067 22.575 20.5938 22.575H36.9453Z" fill="#436E85"/>
          </g>
          <defs>
            <filter id="filter0_i_51_223" x="-1" y="0" width="41" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-1" dy="1"/>
              <feGaussianBlur stdDeviation="1"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_51_223"/>
            </filter>
          </defs>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;