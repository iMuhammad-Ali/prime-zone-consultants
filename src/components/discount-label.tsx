const DiscountLabel = ({ discount }: any) => {
  const isNumericFee = (discount: any) => {
    const cleaned = discount.replace(/[^1-9.]/g, "");
    return cleaned !== "" && !isNaN(Number(cleaned));
  };

  const showbadge = isNumericFee(discount);

  return (
    showbadge && (
      <div className="z-10 text-sm px-[3vw] pt-[1vw] pb-[1.2vw] sm:px-[1.3vw] sm:pt-[0.5vw] sm:pb-[0.7vw] md:px-[0.8vw] md:pt-[0.3vw] md:pb-[0.45vw] lg:px-[0.8vw] lg:pt-[0.2vw] lg:pb-[0.35vw] font-semibold rounded-bl-xl absolute top-0 right-0 animate-pulse-colors">
        {`${Math.floor(parseFloat(discount))}% OFF`}
      </div>
    )
  );
};

export default DiscountLabel;
