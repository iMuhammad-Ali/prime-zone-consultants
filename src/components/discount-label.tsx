const DiscountLabel = ({ discount }: any) => {
  return (
    <div className="z-10 text-sm px-4 pt-[3px] pb-[5px] font-semibold rounded-bl-xl bg-green-500 absolute top-0 right-0">
      {discount} OFF
    </div>
  );
};

export default DiscountLabel;
