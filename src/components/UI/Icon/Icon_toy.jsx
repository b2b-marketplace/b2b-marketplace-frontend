import React from 'react';
import Icon from './Icon';

const IconToy = ({ className, ...props }) => {
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
          d="M9.32975 10.5898C11.2688 12.2169 14.1598 11.9639 15.7869 10.0248C17.414 8.08575 17.1611 5.19478 15.222 3.56769C13.2829 1.9406 10.3919 2.19353 8.76483 4.13262C7.13774 6.07171 7.39066 8.96267 9.32975 10.5898Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0551 9.70539C16.0551 9.70539 13.7068 9.91081 11.4726 8.03622C9.23848 6.16122 9.03307 3.81331 9.03307 3.81331M11.1939 11.6096C9.75223 12.0312 9.08223 12.8296 8.41265 13.6275C7.74307 14.4254 7.71181 15.7587 6.90848 16.7166C6.10515 17.6741 4.93098 17.7766 3.97348 16.9733C3.01598 16.17 2.91307 14.9958 3.7164 14.0383C4.52015 13.0808 5.82807 12.8183 6.49765 12.0204C7.16723 11.2225 7.83682 10.4246 8.00182 8.93122M16.1797 4.37081C16.3869 4.11619 16.4857 3.79027 16.4546 3.46346C16.4235 3.13665 16.2651 2.83518 16.0136 2.62418C15.7621 2.41318 15.4377 2.30959 15.1105 2.33577C14.7833 2.36196 14.4795 2.51583 14.2647 2.76414"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconToy;
