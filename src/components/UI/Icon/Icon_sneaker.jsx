import React from 'react';

import Icon from './Icon';

const IconSneaker = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M17.8633 10.0868L13.1187 8.5055C12.872 8.42308 12.6451 8.29022 12.4525 8.11537C12.2599 7.94052 12.1058 7.72751 12 7.48988L10.1867 3.25003V3.24222C10.0576 2.9526 9.82323 2.72288 9.53109 2.59959C9.23895 2.47629 8.91086 2.46863 8.61328 2.57816L2.69766 4.72581C2.45682 4.81402 2.24883 4.97396 2.10173 5.18407C1.95463 5.39417 1.87549 5.64433 1.875 5.90081V15C1.875 15.3316 2.0067 15.6495 2.24112 15.8839C2.47554 16.1183 2.79348 16.25 3.125 16.25H18.75C19.0815 16.25 19.3995 16.1183 19.6339 15.8839C19.8683 15.6495 20 15.3316 20 15V13.0516C20 12.3957 19.7937 11.7564 19.4102 11.2243C19.0267 10.6921 18.4855 10.2942 17.8633 10.0868ZM9.04063 3.75003L9.59609 5.04925L7.91172 5.66253C7.77355 5.71268 7.65747 5.80993 7.58389 5.93718C7.51031 6.06443 7.48394 6.21354 7.5094 6.35831C7.53487 6.50308 7.61054 6.63424 7.72313 6.72874C7.83572 6.82325 7.97801 6.87504 8.125 6.87503C8.19779 6.87493 8.27 6.86197 8.33828 6.83675L10.0883 6.20081L10.4586 7.06566L9.16172 7.53441C9.02129 7.58296 8.90275 7.67996 8.82736 7.808C8.75198 7.93604 8.72467 8.08675 8.75035 8.2331C8.77603 8.37946 8.85301 8.51187 8.96748 8.6066C9.08195 8.70133 9.22643 8.75218 9.375 8.75003C9.44779 8.74993 9.52 8.73697 9.58828 8.71175L10.9633 8.21175C11.121 8.50208 11.3235 8.76573 11.5633 8.993L10.4117 9.41175C10.273 9.46152 10.1563 9.55871 10.0823 9.68615C10.0083 9.81359 9.9817 9.96309 10.0072 10.1082C10.0327 10.2534 10.1087 10.3849 10.2218 10.4794C10.3348 10.574 10.4776 10.6256 10.625 10.625C10.6977 10.6248 10.7699 10.6121 10.8383 10.5875L13.0258 9.79222L17.4688 11.2727C17.7516 11.3673 18.0078 11.528 18.2161 11.7414C18.4244 11.9549 18.5788 12.2149 18.6664 12.5H3.125V5.90081L9.04063 3.75003ZM3.125 15V13.75H18.75V15H3.125Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconSneaker;
