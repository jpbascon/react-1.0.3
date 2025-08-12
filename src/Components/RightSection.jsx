const RightSection = ({ tipAmount, totalBill, setTipAmount, setTotalBill, setTipCount, setCurrentBill }) => {
  return (
    <>
      <div className="right-section">
        <div className="right-container">
          <div className="top">
            <div>
              <p>Tip Amount</p>
              <p className="text-grey-400">/ table</p>
            </div>
            <h1>{tipAmount.toFixed(2)}</h1>
          </div>
          <div className="top">
            <div>
              <p>Total</p>
              <p className="text-grey-400">/ person</p>
            </div>
            <h1>{totalBill.toFixed(2)}</h1>
          </div>
        </div>
        <button onClick={() => {
          setTipAmount(0);
          setTotalBill(0);
          setCurrentBill('');
          setTipCount('');
        }
        }
          className="hover:bg-green-400 hover:text-grey-900 duration-75">
          RESET
        </button>
      </div>
    </>
  )
}

export default RightSection;