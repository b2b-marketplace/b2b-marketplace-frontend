import './ProductRating.scss';

export default function ProductRating() {
  return (
    <div className="product-rating">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.43 10L12 2L9.57 10H2L8.18 14.41L5.83 22L12 17.31L18.18 22L15.83 14.41L22 10H14.43Z"
          fill="currentColor"
        />
      </svg>
      <span className="product-rating__text">4.8</span>
    </div>
  );
}
