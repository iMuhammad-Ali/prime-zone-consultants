import departmentsData from "~/data/departments.json";

const Overview = ({ university }: any) => {
  const rowStyles = "flex gap-[3vw] sm:gap-[2vw] lg:gap-[1vw]";
  const titleStyles =
    "w-1/2 sm:w-1/4 border p-[2vw] sm:p-[1.5vw] lg:p-[0.75vw] font-semibold text-[3vw] sm:text-[2vw] lg:text-[1.25vw]";
  const descStyles =
    "flex-1 border p-[2vw] sm:p-[1.5vw] lg:p-[0.75vw] text-[3vw] sm:text-[2vw] lg:text-[1vw]";

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
        <div className={descStyles}>{university.intake}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Languages:</div>
        <div className={descStyles}>{university.languages}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Departments:</div>
        <div className={descStyles}>
          {university.departments
            .map((deptId: string) => {
              const dept = departmentsData.find((d: any) => d.id === deptId);
              return dept ? dept.name : deptId;
            })
            .join(", ")}
        </div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Actual Price:</div>
        <div className={descStyles}>{university.actualPrice}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Discounted Price:</div>
        <div className={descStyles}>{university.discountedPrice}</div>
      </div>
      <div className={rowStyles}>
        <div className={titleStyles}>Discount:</div>
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
