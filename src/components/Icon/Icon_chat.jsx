import React from 'react';
import Icon from './Icon';

const IconChat = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 17.8126C13.9171 17.8135 12.8508 17.5461 11.8965 17.0342C10.9423 16.5223 10.1297 15.7819 9.53156 14.8792L11.0934 13.8413C11.521 14.4861 12.1015 15.015 12.7831 15.3809C13.4648 15.7467 14.2264 15.9382 15 15.9382C15.7736 15.9382 16.5352 15.7467 17.2169 15.3809C17.8985 15.015 18.479 14.4861 18.9066 13.8413L20.4684 14.8792C19.8703 15.7819 19.0577 16.5223 18.1035 17.0342C17.1492 17.5461 16.0829 17.8135 15 17.8126ZM18.75 7.5001C18.3792 7.5001 18.0166 7.61006 17.7083 7.81609C17.4 8.02212 17.1596 8.31495 17.0177 8.65756C16.8758 9.00018 16.8387 9.37718 16.911 9.74089C16.9834 10.1046 17.162 10.4387 17.4242 10.7009C17.6864 10.9631 18.0205 11.1417 18.3842 11.2141C18.7479 11.2864 19.1249 11.2493 19.4675 11.1074C19.8101 10.9655 20.103 10.7251 20.309 10.4168C20.515 10.1084 20.625 9.74594 20.625 9.3751C20.6275 9.12817 20.5807 8.88323 20.4874 8.65461C20.394 8.42599 20.256 8.21829 20.0814 8.04368C19.9068 7.86907 19.6991 7.73105 19.4705 7.63771C19.2419 7.54437 18.9969 7.49759 18.75 7.5001ZM11.25 7.5001C10.8792 7.5001 10.5166 7.61006 10.2083 7.81609C9.89996 8.02212 9.65964 8.31495 9.51773 8.65756C9.37581 9.00018 9.33868 9.37718 9.41103 9.74089C9.48338 10.1046 9.66195 10.4387 9.92418 10.7009C10.1864 10.9631 10.5205 11.1417 10.8842 11.2141C11.2479 11.2864 11.6249 11.2493 11.9675 11.1074C12.3101 10.9655 12.603 10.7251 12.809 10.4168C13.015 10.1084 13.125 9.74594 13.125 9.3751C13.1275 9.12817 13.0807 8.88323 12.9874 8.65461C12.894 8.42599 12.756 8.21829 12.5814 8.04368C12.4068 7.86907 12.1991 7.73105 11.9705 7.63771C11.7419 7.54437 11.4969 7.49759 11.25 7.5001Z"
          fill="currentColor"
        />
        <path
          d="M16.86 30L15 28.9286L19.2857 21.4286H25.7143C25.9958 21.429 26.2746 21.3739 26.5348 21.2663C26.795 21.1588 27.0314 21.001 27.2305 20.8019C27.4295 20.6028 27.5874 20.3664 27.6949 20.1063C27.8024 19.8461 27.8576 19.5672 27.8571 19.2857V4.28571C27.8576 4.00419 27.8024 3.72535 27.6949 3.46518C27.5874 3.205 27.4295 2.96861 27.2305 2.76954C27.0314 2.57047 26.795 2.41265 26.5348 2.30511C26.2746 2.19757 25.9958 2.14243 25.7143 2.14286H4.28571C4.00419 2.14243 3.72535 2.19757 3.46518 2.30511C3.205 2.41265 2.96861 2.57047 2.76954 2.76954C2.57047 2.96861 2.41265 3.205 2.30511 3.46518C2.19757 3.72535 2.14243 4.00419 2.14286 4.28571V19.2857C2.14243 19.5672 2.19757 19.8461 2.30511 20.1063C2.41265 20.3664 2.57047 20.6028 2.76954 20.8019C2.96861 21.001 3.205 21.1588 3.46518 21.2663C3.72535 21.3739 4.00419 21.429 4.28571 21.4286H13.9286V23.5714H4.28571C3.14907 23.5714 2.05898 23.1199 1.25526 22.3162C0.45153 21.5124 1.34008e-07 20.4224 1.34008e-07 19.2857V4.28571C-0.000140631 3.72287 0.110617 3.16551 0.325944 2.64548C0.541271 2.12545 0.856949 1.65294 1.25494 1.25494C1.65294 0.856949 2.12545 0.541271 2.64548 0.325944C3.16551 0.110617 3.72287 -0.000140631 4.28571 1.34008e-07H25.7143C26.2771 -0.000140631 26.8345 0.110617 27.3545 0.325944C27.8746 0.541271 28.3471 0.856949 28.7451 1.25494C29.143 1.65294 29.4587 2.12545 29.6741 2.64548C29.8894 3.16551 30.0001 3.72287 30 4.28571V19.2857C30 20.4224 29.5485 21.5124 28.7447 22.3162C27.941 23.1199 26.8509 23.5714 25.7143 23.5714H20.5339L16.86 30Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconChat;