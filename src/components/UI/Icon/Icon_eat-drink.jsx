import React from 'react';
import Icon from './Icon';

const IconEatDrink = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M9.375 0C9.54427 0 9.69076 0.061849 9.81445 0.185547C9.93815 0.309245 10 0.455729 10 0.625V7.5C10 7.84505 9.9349 8.16732 9.80469 8.4668C9.67448 8.76628 9.49544 9.02995 9.26758 9.25781C9.03971 9.48568 8.77279 9.66471 8.4668 9.79492C8.16081 9.92513 7.83854 9.99349 7.5 10V19.375C7.5 19.5443 7.43815 19.6908 7.31445 19.8145C7.19076 19.9382 7.04427 20 6.875 20C6.70573 20 6.55924 19.9382 6.43555 19.8145C6.31185 19.6908 6.25 19.5443 6.25 19.375V10C5.90495 10 5.58268 9.9349 5.2832 9.80469C4.98372 9.67448 4.72005 9.49544 4.49219 9.26758C4.26432 9.03971 4.08529 8.77604 3.95508 8.47656C3.82487 8.17708 3.75651 7.85156 3.75 7.5V0.625C3.75 0.455729 3.81185 0.309245 3.93555 0.185547C4.05924 0.061849 4.20573 0 4.375 0C4.54427 0 4.69076 0.061849 4.81445 0.185547C4.93815 0.309245 5 0.455729 5 0.625V7.5C5 7.67578 5.03255 7.83854 5.09766 7.98828C5.16276 8.13802 5.25065 8.26823 5.36133 8.37891C5.47201 8.48958 5.60547 8.58073 5.76172 8.65234C5.91797 8.72396 6.08073 8.75651 6.25 8.75V0.625C6.25 0.455729 6.31185 0.309245 6.43555 0.185547C6.55924 0.061849 6.70573 0 6.875 0C7.04427 0 7.19076 0.061849 7.31445 0.185547C7.43815 0.309245 7.5 0.455729 7.5 0.625V8.75C7.67578 8.75 7.83854 8.71745 7.98828 8.65234C8.13802 8.58724 8.26823 8.49935 8.37891 8.38867C8.48958 8.278 8.58073 8.14453 8.65234 7.98828C8.72396 7.83203 8.75651 7.66927 8.75 7.5V0.625C8.75 0.455729 8.81185 0.309245 8.93555 0.185547C9.05924 0.061849 9.20573 0 9.375 0ZM16.25 0V19.375C16.25 19.5443 16.1882 19.6908 16.0645 19.8145C15.9408 19.9382 15.7943 20 15.625 20C15.4557 20 15.3092 19.9382 15.1855 19.8145C15.0618 19.6908 15 19.5443 15 19.375V13.75C14.7591 13.75 14.4987 13.7533 14.2188 13.7598C13.9388 13.7663 13.6621 13.763 13.3887 13.75C13.1152 13.737 12.8483 13.6979 12.5879 13.6328C12.3275 13.5677 12.0996 13.4668 11.9043 13.3301C11.709 13.1934 11.5495 13.0078 11.4258 12.7734C11.3021 12.5391 11.2435 12.2396 11.25 11.875V4.375C11.25 3.76953 11.3639 3.20312 11.5918 2.67578C11.8197 2.14844 12.1322 1.6862 12.5293 1.28906C12.9264 0.891927 13.3887 0.579427 13.916 0.351562C14.4434 0.123698 15.013 0.00651042 15.625 0H16.25ZM15 1.30859C14.6354 1.38021 14.3034 1.51042 14.0039 1.69922C13.7044 1.88802 13.4408 2.1224 13.2129 2.40234C12.985 2.68229 12.8092 2.98503 12.6855 3.31055C12.5618 3.63607 12.5 3.99089 12.5 4.375V11.875C12.5 12.0443 12.5618 12.1908 12.6855 12.3145C12.8092 12.4382 12.9557 12.5 13.125 12.5H15V1.30859Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconEatDrink;
