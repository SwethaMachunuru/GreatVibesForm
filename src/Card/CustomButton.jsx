import React from 'react';

const CustomButton = ({ variant, children }) => {
  // Defining an object to map the variants to Tailwind classes
  const variantClasses = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-white-300 text-blue-600 border border-blue-500',
  };

  // Using the variant to select the appropriate Tailwind classes
  const classes = `py-2 px-4 rounded-md hover:bg-opacity-75 focus:outline-none ${variantClasses[variant]}`;

  return (
    <button className={classes}>
      {children}
    </button>
  );
};

export default CustomButton;
