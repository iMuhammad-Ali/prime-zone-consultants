const DiscountLabel = ({ discount }: any) => {
  const isNumericFee = (discount: any) => {
    const cleaned = discount.replace(/[^1-9.]/g, "");
    return cleaned !== "" && !isNaN(Number(cleaned));
  };

  const showbadge = isNumericFee(discount);

  return (
    showbadge && (
      <div className="z-10 text-sm px-4 pt-[3px] pb-[5px] font-semibold rounded-bl-xl bg-green-500 absolute top-0 right-0">
        {`${Math.floor(parseFloat(discount))}% OFF`}
      </div>
    )
  );
};

export default DiscountLabel;
