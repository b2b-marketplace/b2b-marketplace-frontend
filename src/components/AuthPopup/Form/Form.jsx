const Form = ({ children, onSubmit, className, submitText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit && onSubmit();
    
  };
  
  return (
    <form className={className} onSubmit={handleSubmit} >
      {children}
      
    </form>
  );
};

export default Form;
