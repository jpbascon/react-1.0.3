import RightSection from './RightSection.jsx';
import Button from './Button.jsx';
import { useState, useEffect } from 'react';

const LeftSection = () => {
  const [currentBill, setCurrentBill] = useState('');
  const [tipCount, setTipCount] = useState('');
  const [totalBill, setTotalBill] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  // Calculate total when any relevant state changes
  useEffect(() => {
    const numBill = Number(currentBill);
    const numCount = Number(tipCount);
    const numTip = Number(tipAmount);

    if (!numBill || !numCount) {
      setTotalBill(0);
      return;
    }

    setTotalBill(numBill / numCount + numTip);
  }, [currentBill, tipCount, tipAmount]); // ← depend on all inputs

  return (
    <>
      <div className="left-section">
        <div className="top">
          <p>Bill</p>
          <div>
            <img className="h-[50%]" src="./icon-dollar.svg" />
            <input
              className="no-arrows"
              type="number"
              inputMode="numeric"
              placeholder="0"
              value={currentBill}
              onChange={(e) => setCurrentBill(e.target.value)}
            />
          </div>
        </div>

        <div className="middle">
          <p>Select Tip %</p>
          <div>
            <Button
              setTipAmount={setTipAmount}
              currentBill={currentBill}
              tipCount={tipCount}
              tipAmount={tipAmount}
            />
          </div>
        </div>

        <div className="bottom">
          <p>Number of People</p>
          <div>
            <img className="h-[50%]" src="./icon-person.svg" />
            <input
              className="no-arrows"
              type="number"
              inputMode="numeric"
              placeholder="0"
              value={tipCount}
              onChange={(e) => setTipCount(e.target.value)}
            />
          </div>
        </div>
      </div>

      <RightSection
        tipAmount={tipAmount}
        totalBill={totalBill}
        tipCount={tipCount}
        currentBill={currentBill}
        setTipAmount={setTipAmount}
        setTotalBill={setTotalBill}
        setTipCount={setTipCount}
        setCurrentBill={setCurrentBill}
      />
    </>
  );
};

export default LeftSection;
