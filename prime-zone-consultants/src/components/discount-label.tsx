const DiscountLabel = ({ discount }: any) => {
  //Check if the discount is a numeric value
  // If it is, display the badge with the discount value
  const isNumericFee = (discount: any) => {
    // strip out anything that isn’t a digit or dot, then see if it parses
    const cleaned = discount.replace(/[^1-9.]/g, "");
    return cleaned !== "" && !isNaN(Number(cleaned));
  };
  const showbadge = isNumericFee(discount);
  return (
    <>
      {showbadge && (
        <div className="z-10 text-sm px-4 pt-[3px] pb-[5px] font-semibold rounded-bl-xl bg-green-500 absolute top-0 right-0">
          {discount} OFF
        </div>
      )}
    </>
  );
};

export default DiscountLabel;
