const Overview = ({ university }: any) => {
  const rowStyles = "flex gap-4";
  const titleStyles =
    "w-1/2 sm:w-1/4 border p-3 font-semibold text-sm sm:text-lg";
  const descStyles = "flex-1 border p-3 text-sm sm:text-lg";

  return (
    <>
      <div className={rowStyles}>
        <div className={titleStyles}>Location:</div>
        <div className={descStyles}>
          {university.city}, {university.country}
        </div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>In Take:</div>
        <div className={descStyles}>{university.inTake.join(", ")}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Languages:</div>
        <div className={descStyles}>{university.languages.join(", ")}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Actual Price:</div>
        <div className={descStyles}>{university.actualFee}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Discounted Price:</div>
        <div className={descStyles}>{university.discountedFee}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Actual Price:</div>
        <div className={descStyles}>{university.discount}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Scholarship:</div>
        <div className={descStyles}>
          {university.scholarship ? "Available" : "Not Available"}
        </div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Accommodation:</div>
        <div className={descStyles}>{university.accommodation}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Address:</div>
        <div className={descStyles}>{university.address}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Summary:</div>
        <div className={descStyles}>{university.summary}</div>
      </div>
    </>
  );
};

export default Overview;
