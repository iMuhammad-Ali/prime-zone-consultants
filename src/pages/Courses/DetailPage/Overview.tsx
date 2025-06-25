const Overview = ({ course }: any) => {
  const rowStyles = "flex gap-4";
  const titleStyles =
    "w-1/2 sm:w-1/4 border p-3 font-semibold text-sm sm:text-lg";
  const descStyles = "flex-1 border p-3 text-sm sm:text-lg";

  return (
    <>
      <div className={rowStyles}>
        <div className={titleStyles}>Qualification:</div>
        <div className={descStyles}>{course.qualification}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>In Take:</div>
        <div className={descStyles}>{course.inTake.join(", ")}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Languages:</div>
        <div className={descStyles}>{course.languages.join(", ")}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Actual Price:</div>
        <div className={descStyles}>{course.actualFee}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Discounted Price:</div>
        <div className={descStyles}>{course.discountedFee}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Actual Price:</div>
        <div className={descStyles}>{course.discount}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Scholarship:</div>
        <div className={descStyles}>
          {course.scholarship ? "Available" : "Not Available"}
        </div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Summary:</div>
        <div className={descStyles}>{course.summary}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Description:</div>
        <div className={descStyles}>{course.description}</div>
      </div>
    </>
  );
};

export default Overview;
