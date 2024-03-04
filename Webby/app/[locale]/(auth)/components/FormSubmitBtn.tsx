import React from 'react';

interface FormSubmitBtnProps {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const FormSubmitBtn: React.FC<FormSubmitBtnProps> = ({
  onClick,
  disabled = false,
  label = 'Login',
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-gray-700 text-white font-bold py-2 px-4 w-full rounded ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default FormSubmitBtn;
