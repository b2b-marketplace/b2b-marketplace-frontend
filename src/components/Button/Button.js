import './Button.scss';

export default function Button({ className, text, children }) {
  return (
    <button className={className}>
      {children}
      {text}
    </button>
  );
}
