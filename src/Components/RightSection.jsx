const RightSection = ({
  tipAmount,
  totalBill,
  setTipAmount,
  setTotalBill,
  setTipCount,
  setCurrentBill,
  setValueCheck,
  setCurrentTip
}) => {
  // Format values safely, defaulting to 0
  const formattedTip = Number(tipAmount || 0).toFixed(2);
  const formattedTotal = Number(totalBill || 0).toFixed(2);

  const handleReset = () => {
    setTipAmount(0);
    setTotalBill(0);
    setCurrentBill('');
    setTipCount('');
    setValueCheck(false);
    setCurrentTip('');
  };

  return (
    <div className="right-section">
      <div className="right-container">
        <div className="top">
          <div>
            <p>Tip Amount</p>
            <p className="text-grey-400">/ table</p>
          </div>
          <h1>{formattedTip}</h1>
        </div>

        <div className="top">
          <div>
            <p>Total</p>
            <p className="text-grey-400">/ person</p>
          </div>
          <h1>{formattedTotal}</h1>
        </div>
      </div>

      <button
        onClick={handleReset}
        className="hover:bg-green-400 hover:text-grey-900 duration-75"
      >
        RESET
      </button>
    </div>
  );
};

export default RightSection;
