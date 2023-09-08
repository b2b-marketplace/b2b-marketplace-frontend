import React from 'react';
import Icon from './Icon';

const IconAnimals = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <path
          d="M17.2937 2.73989C17.0941 2.65671 16.8743 2.63459 16.6621 2.6763C16.4499 2.71802 16.2548 2.82171 16.1016 2.97426L16.0789 2.9977L14.6422 4.65473C13.26 3.75785 11.6477 3.28056 10 3.28056C8.35235 3.28056 6.73997 3.75785 5.35781 4.65473L3.92109 3.00082L3.89844 2.97739C3.74552 2.82445 3.5507 2.72029 3.33859 2.67805C3.12649 2.63582 2.90662 2.65741 2.70679 2.74011C2.50696 2.8228 2.33612 2.96288 2.21588 3.14264C2.09564 3.3224 2.03139 3.53377 2.03125 3.75004V10.625C2.03125 14.6743 5.60625 17.9688 10 17.9688C14.3938 17.9688 17.9688 14.6743 17.9688 10.625V3.75004C17.9687 3.5338 17.9045 3.32242 17.7844 3.14262C17.6643 2.96283 17.4935 2.82268 17.2937 2.73989ZM17.0312 10.625C17.0312 14.0141 14.1281 16.7969 10.4688 17.0164V15.1938L11.5813 14.0813C11.668 13.9932 11.7165 13.8744 11.7161 13.7507C11.7156 13.6271 11.6663 13.5086 11.579 13.4211C11.4916 13.3336 11.3731 13.2842 11.2495 13.2836C11.1258 13.283 11.0069 13.3313 10.9187 13.418L10 14.3368L9.08125 13.418C8.99305 13.3313 8.87417 13.283 8.75051 13.2836C8.62685 13.2842 8.50843 13.3336 8.42104 13.4211C8.33365 13.5086 8.28438 13.6271 8.28395 13.7507C8.28352 13.8744 8.33197 13.9932 8.41875 14.0813L9.53125 15.1938V17.0164C5.87188 16.7969 2.96875 14.0141 2.96875 10.625V3.75004C2.9677 3.71894 2.97639 3.68828 2.99362 3.66237C3.01085 3.63645 3.03575 3.61657 3.06484 3.60551C3.08519 3.59717 3.10692 3.59266 3.12891 3.59223C3.16545 3.59248 3.20057 3.60642 3.22734 3.63129L4.92734 5.58442C5.00484 5.67363 5.11317 5.73029 5.23066 5.74303C5.34814 5.75578 5.46611 5.72368 5.56094 5.65317C6.01632 5.31788 6.50987 5.03779 7.03125 4.81879V6.87504C7.03125 6.99936 7.08064 7.11859 7.16854 7.2065C7.25645 7.29441 7.37568 7.34379 7.5 7.34379C7.62432 7.34379 7.74355 7.29441 7.83146 7.2065C7.91936 7.11859 7.96875 6.99936 7.96875 6.87504V4.49301C8.4792 4.35268 9.00284 4.26576 9.53125 4.23364V6.87504C9.53125 6.99936 9.58064 7.11859 9.66854 7.2065C9.75645 7.29441 9.87568 7.34379 10 7.34379C10.1243 7.34379 10.2435 7.29441 10.3315 7.2065C10.4194 7.11859 10.4688 6.99936 10.4688 6.87504V4.23364C10.9972 4.26576 11.5208 4.35268 12.0312 4.49301V6.87504C12.0312 6.99936 12.0806 7.11859 12.1685 7.2065C12.2565 7.29441 12.3757 7.34379 12.5 7.34379C12.6243 7.34379 12.7435 7.29441 12.8315 7.2065C12.9194 7.11859 12.9688 6.99936 12.9688 6.87504V4.81879C13.4903 5.03902 13.9839 5.32042 14.4391 5.65707C14.5339 5.72759 14.6519 5.75969 14.7693 5.74694C14.8868 5.73419 14.9952 5.67754 15.0727 5.58832L16.7727 3.6352C16.7951 3.61575 16.8226 3.60309 16.852 3.5987C16.8813 3.59432 16.9113 3.59839 16.9385 3.61044C16.9656 3.62249 16.9887 3.64202 17.0052 3.66674C17.0216 3.69147 17.0306 3.72036 17.0312 3.75004V10.625ZM7.34375 10.9375C7.34375 11.0921 7.29793 11.2431 7.21209 11.3716C7.12624 11.5001 7.00423 11.6002 6.86147 11.6593C6.71872 11.7185 6.56163 11.7339 6.41009 11.7038C6.25854 11.6736 6.11933 11.5992 6.01007 11.49C5.90081 11.3807 5.82641 11.2415 5.79626 11.09C5.76612 10.9384 5.78159 10.7813 5.84072 10.6386C5.89985 10.4958 5.99998 10.3738 6.12846 10.288C6.25694 10.2021 6.40798 10.1563 6.5625 10.1563C6.7697 10.1563 6.96841 10.2386 7.11493 10.3851C7.26144 10.5316 7.34375 10.7303 7.34375 10.9375ZM14.2188 10.9375C14.2188 11.0921 14.1729 11.2431 14.0871 11.3716C14.0012 11.5001 13.8792 11.6002 13.7365 11.6593C13.5937 11.7185 13.4366 11.7339 13.2851 11.7038C13.1335 11.6736 12.9943 11.5992 12.8851 11.49C12.7758 11.3807 12.7014 11.2415 12.6713 11.09C12.6411 10.9384 12.6566 10.7813 12.7157 10.6386C12.7748 10.4958 12.875 10.3738 13.0035 10.288C13.1319 10.2021 13.283 10.1563 13.4375 10.1563C13.6447 10.1563 13.8434 10.2386 13.9899 10.3851C14.1364 10.5316 14.2188 10.7303 14.2188 10.9375Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconAnimals;
