import PropTypes from "prop-types";

//Este componente se encarga de renderizar el input del formulario

// Funcion para renderizar el input
function FormElementInput({
  title,
  type,
  name,
  value,
  onChange,
  placeholder,
  titleInput,
  checked,
  validation,
  textError,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700">
        {title}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full p-2 rounded-md shadow-sm bg-transparent sm:text-sm text-black outline outline-2 focus:outline-indigo-500  animated hover:outline-indigo-700/80 outline-gray-400"
        placeholder={placeholder}
        title={titleInput}
        checked={checked}
      />
      {validation ? (
        <p className="text-sm text-red-500 font-medium animate__animated animate__fadeInDown animate__faster mt-2">
          {textError}
        </p>
      ) : null}
    </div>
  );
}

FormElementInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.any,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  titleInput: PropTypes.string,
  checked: PropTypes.any,
  validation: PropTypes.any,
  textError: PropTypes.string,
};

export default FormElementInput;
