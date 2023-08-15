import './ProductRating.scss';

export default function ProductRating({ rating }) {
  return (
    <div className="product-rating">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_976_8229)">
          <path
            d="M12.0248 8.33317L9.99984 1.6665L7.97484 8.33317H1.6665L6.8165 12.0082L4.85817 18.3332L9.99984 14.4248L15.1498 18.3332L13.1915 12.0082L18.3332 8.33317H12.0248Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_976_8229">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <span className="product-rating__text">{rating}</span>
    </div>
  );
}
