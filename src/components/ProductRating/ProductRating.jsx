import './ProductRating.scss';

export default function ProductRating({ rating }) {
  return (
    <div className="product-rating">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10.3075 7.21986C10.9496 5.61918 11.2706 4.81883 11.7922 4.70791C11.9293 4.67874 12.0711 4.67874 12.2082 4.70791C12.7298 4.81883 13.0508 5.61918 13.6929 7.21986C14.058 8.13014 14.2406 8.58528 14.5822 8.89485C14.678 8.98168 14.782 9.05901 14.8928 9.12576C15.2876 9.36374 15.7805 9.40788 16.7663 9.49617C18.4351 9.64562 19.2695 9.72034 19.5243 10.1961C19.577 10.2946 19.6129 10.4013 19.6304 10.5117C19.7149 11.0447 19.1015 11.6028 17.8747 12.7189L17.534 13.0288C16.9605 13.5506 16.6737 13.8115 16.5078 14.1372C16.4083 14.3325 16.3416 14.5428 16.3103 14.7598C16.2582 15.1215 16.3422 15.5 16.5102 16.2569L16.5702 16.5274C16.8714 17.8849 17.022 18.5637 16.834 18.8973C16.6651 19.197 16.3541 19.3889 16.0105 19.4053C15.6279 19.4236 15.089 18.9844 14.011 18.106C13.3008 17.5273 12.9457 17.2379 12.5515 17.1249C12.1912 17.0216 11.8092 17.0216 11.4489 17.1249C11.0547 17.2379 10.6996 17.5273 9.98941 18.106C8.91144 18.9844 8.37245 19.4236 7.98993 19.4053C7.64633 19.3889 7.33528 19.197 7.16642 18.8973C6.97842 18.5637 7.12902 17.8849 7.43022 16.5274L7.49023 16.2569C7.65818 15.5 7.74216 15.1215 7.69004 14.7598C7.65878 14.5428 7.59207 14.3325 7.49257 14.1372C7.32669 13.8115 7.03992 13.5506 6.46637 13.0288L6.1257 12.7189C4.89891 11.6028 4.28552 11.0447 4.36999 10.5117C4.38749 10.4013 4.42337 10.2946 4.47614 10.1961C4.73094 9.72034 5.56532 9.64562 7.23408 9.49617C8.21986 9.40788 8.71276 9.36374 9.1076 9.12576C9.21834 9.05901 9.32236 8.98168 9.41818 8.89485C9.75979 8.58528 9.94235 8.13014 10.3075 7.21986Z" fill="currentColor" stroke="currentColor" />
      </svg>

      <span className="product-rating__text">{rating}</span>
    </div>
  );
}
