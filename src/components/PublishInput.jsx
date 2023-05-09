const PublishInput = ({
  label,
  id,
  type,
  placeholder,
  state,
  setState,
  textArea,
}) => {
  return (
    <span>
      <label htmlFor={id}>{label}</label>
      {!textArea ? (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
        />
      ) : (
        <textarea
          id={id}
          placeholder={placeholder}
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
        />
      )}
    </span>
  );
};

export default PublishInput;
