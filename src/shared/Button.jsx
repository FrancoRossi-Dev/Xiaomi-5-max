function Button({ onClick, id, className, children }) {
  return (
    <button
      onClick={onClick}
      id={id}
      className={`bg-accent hover:bg-accent-hover py-2 px-4 rounded-md font-bold cursor-pointer ${className}`}>
      {children}
    </button>
  );
}

// .cta {
//   background-color: var(--color-accent);
//   color: var(--color-text);
//   padding: 0.5rem 1rem;
//   border-radius: 8px;

//   &:hover {
//     background-color: var(--color-accent-hover);
//     color: var(--color-text);
//   }
// }

export default Button;
