import RightSection from './RightSection.jsx';
import Button from './Button.jsx';
import { useState, useEffect } from 'react';

const LeftSection = () => {
  const [currentBill, setCurrentBill] = useState(''); //Current bill
  const [tipCount, setTipCount] = useState(''); //Current persons tipped
  const [currentTip, setCurrentTip] = useState('');
  const [totalBill, setTotalBill] = useState(0); //Total bill
  const [tipAmount, setTipAmount] = useState(0); //Total tip amount

  useEffect(() => {
    const numTipCount = Number(tipCount);
    const numTipAmount = Number(tipAmount);
    const numCurrentBill = Number(currentBill);

    if (!numCurrentBill || !numTipCount) setTotalBill(0)
    setTotalBill(numCurrentBill / numTipCount + numTipAmount);
  }, [currentBill, tipCount, tipAmount]);

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
              setCurrentTip={setCurrentTip}
              setTipAmount={setTipAmount}
              currentTip={currentTip}
              currentBill={currentBill}
              tipCount={tipCount}
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
