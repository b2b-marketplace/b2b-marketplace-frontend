const Form = ({ children, onSubmit, className, submitText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  return (
    <form className={className} onSubmit={handleSubmit} >
      {children}
      
    </form>
  );
};

export default Form;
