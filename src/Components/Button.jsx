import { useState } from 'react';

const Button = ({ setTipAmount, currentBill, tipCount }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const shouldShowInput = isHovered || isFocused;
  const tips = [5, 10, 15, 25, 50];

  return (
    <>
      {tips.map((tip) => (
        <button
          key={tip}
          onClick={() => setTipAmount((tip / 100) * currentBill / tipCount)}
          className="hover:bg-green-400 hover:text-grey-900 duration-75"
        >
          {tip}%
        </button>
      ))}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {shouldShowInput ?
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          :
          <p>Custom</p>
        }
      </div>
    </>
  );
}

export default Button;
