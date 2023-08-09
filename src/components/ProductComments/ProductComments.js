import './ProductComments.scss';

export default function CommentsCount({ commentsCount }) {
  return (
    <div className="comments-count">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.99985 1.6665C14.6023 1.6665 18.3332 5.39734 18.3332 9.99984C18.3332 14.6023 14.6023 18.3332 9.99985 18.3332C8.6517 18.335 7.32341 18.0083 6.12985 17.3815L2.55485 18.3123C2.43539 18.3434 2.30988 18.3428 2.19075 18.3105C2.07163 18.2781 1.96302 18.2152 1.87569 18.128C1.78836 18.0407 1.72535 17.9322 1.6929 17.8131C1.66045 17.694 1.65968 17.5685 1.69068 17.449L2.62068 13.8748C1.99218 12.68 1.66465 11.3499 1.66651 9.99984C1.66651 5.39734 5.39735 1.6665 9.99985 1.6665ZM11.0432 10.8332H7.29151L7.20651 10.839C7.05692 10.8596 6.91984 10.9336 6.8206 11.0475C6.72137 11.1613 6.6667 11.3072 6.6667 11.4582C6.6667 11.6092 6.72137 11.7551 6.8206 11.8689C6.91984 11.9827 7.05692 12.0568 7.20651 12.0773L7.29151 12.0832H11.0432L11.1273 12.0773C11.2769 12.0568 11.414 11.9827 11.5133 11.8689C11.6125 11.7551 11.6672 11.6092 11.6672 11.4582C11.6672 11.3072 11.6125 11.1613 11.5133 11.0475C11.414 10.9336 11.2769 10.8596 11.1273 10.839L11.0432 10.8332ZM12.7082 7.9165H7.29151L7.20651 7.92234C7.05692 7.94292 6.91984 8.01697 6.8206 8.13078C6.72137 8.2446 6.6667 8.3905 6.6667 8.5415C6.6667 8.69251 6.72137 8.8384 6.8206 8.95222C6.91984 9.06604 7.05692 9.14009 7.20651 9.16067L7.29151 9.1665H12.7082L12.7932 9.16067C12.9428 9.14009 13.0799 9.06604 13.1791 8.95222C13.2783 8.8384 13.333 8.69251 13.333 8.5415C13.333 8.3905 13.2783 8.2446 13.1791 8.13078C13.0799 8.01697 12.9428 7.94292 12.7932 7.92234L12.7082 7.9165Z"
          fill="currentColor"
        />
      </svg>

      <span className="comments-count__text">{commentsCount}</span>
    </div>
  );
}
