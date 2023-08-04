import './Button.scss';

export default function Button({ className, text }) {
  return <button className={className}>{text}</button>;
}
