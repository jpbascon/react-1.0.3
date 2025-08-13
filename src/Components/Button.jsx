import { useState, useEffect } from 'react';

const Button = ({ setTipAmount, currentBill, tipCount, setCurrentTip, currentTip }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const shouldShowInput = isHovered || isFocused;
  const tips = [5, 10, 15, 25, 50];

  useEffect(() => {
    const numTip = Number(currentTip);
    const numBill = Number(currentBill);
    const numCount = Number(tipCount);

    if (!numBill) setTipAmount(0)

    setTipAmount((numTip / 100) * numBill / tipCount);
  }, [currentBill, tipCount, currentTip])

  return (
    <>
      {tips.map((tip) => (
        <button
          key={tip}
          onClick={() => setCurrentTip(tip)}
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
            onChange={(e) => {
              setCurrentTip(e.target.value);
              if (e.target.value === '') setIsFocused(false)
            }}
          />
          :
          <p>Custom</p>
        }
      </div>
    </>
  );
}

export default Button;
