import { useState } from "react";

// const totalNoOfPage = 3;
// const pageToShow = 4;
const MyPagination = ({ totalNoOfPage, pageToShow, pageClickHandler }) => {
  let pages = Array.from({ length: pageToShow }, (x, i) => i + 1);
  const [activePage, setActivePage] = useState(1);
  // const [activeIndex, setActiveIndex] = useState(0);
  const [pagesToShow, setPagesToShow] = useState(pages);
  console.log("pages:", pagesToShow);

  const prevButtonHandler = () => {
    console.log(activePage, totalNoOfPage);
    if (activePage == 1) {
      return;
    }
    console.log("passed");
    if (activePage > 1) {
      setActivePage(activePage - 1);
      console.log(activePage - 1);
      if (activePage == pagesToShow[0]) {
        console.log("updating pages to show");
        setPagesToShow((prev) => [...prev].map((value) => value - pageToShow));
      }
      if (activePage == 5) {
        setPagesToShow(pages);
      }

      pageClickHandler(activePage - 1);
    }
  };

  const nextButtonHandler = () => {
    console.log(activePage, totalNoOfPage);
    if (activePage == totalNoOfPage) {
      return;
    }
    console.log("passed");
    if (activePage < totalNoOfPage) {
      setActivePage(activePage + 1);
      console.log(activePage + 1);
      if (activePage == pagesToShow[pageToShow - 1]) {
        console.log("updating pages to show");
        setPagesToShow((prev) => [...prev].map((value) => value + pageToShow));
      }
      if (activePage == totalNoOfPage - pageToShow) {
        let pages = Array.from(
          { length: pageToShow },
          (x, i) => totalNoOfPage - i
        ).reverse();
        console.log("pages:", pages);
        setPagesToShow(pages);
      }
      pageClickHandler(activePage + 1);
    }
  };

  const clickHandler = (page) => {
    console.log("page:", page);
    setActivePage(page);
    if (page == totalNoOfPage) {
      let pages = Array.from(
        { length: pageToShow },
        (x, i) => totalNoOfPage - i
      ).reverse();
      console.log("pages:", pages);
      setPagesToShow(pages);
    }
    if (page == 1) {
      console.log("pages:", pages);
      setPagesToShow(pages);
    }
    pageClickHandler(page);
  };
  return (
    <div className="flex w-full items-center">
      <span className="pr-[.5rem] cursor-pointer" onClick={prevButtonHandler}>
        Previous
      </span>
      <ul className="flex h-[30px] items-center">
        {!pagesToShow.includes(1) && (
          <div className="flex h-full">
            <li
              className={` 
              ${activePage == 1 && "bg-heading-main text-white"}   
              w-[30px]  h-[full] border pt-[2px] rounded-full text-center mx-[.5rem] cursor-pointer`}
              onClick={(e) => {
                clickHandler(1);
                // pageClickHandler(1);
              }}
            >
              {1}
            </li>
            <li className={`px-[.5rem]`}>...</li>
          </div>
        )}
        {Array.from({ length: totalNoOfPage }).map((_, index) => (
          <li
            key={index}
            className={`${pagesToShow.includes(index + 1) ? "block" : "hidden"} 
            ${index + 1 == activePage && "bg-heading-main text-white"}   
            w-[30px]  h-full border pt-[2px] rounded-full text-center mx-[.5rem] cursor-pointer`}
            onClick={(e) => {
              clickHandler(index + 1);
              //   pageClickHandler(index + 1);
            }}
          >
            <span>{index + 1}</span>
          </li>
        ))}

        {!pagesToShow.includes(totalNoOfPage) && (
          <li className={`px-[.5rem]`}>...</li>
        )}

        {!pagesToShow.includes(totalNoOfPage) && (
          <li
            className={` 
              ${totalNoOfPage == activePage && "bg-heading-main text-white"}   
              w-[30px]  h-full border pt-[2px] rounded-full text-center mx-[.5rem] cursor-pointer`}
            onClick={(e) => {
              clickHandler(totalNoOfPage);
              // pageClickHandler(totalNoOfPage);
            }}
          >
            {totalNoOfPage}
          </li>
        )}
      </ul>
      <span className="pl-[.5rem] cursor-pointer" onClick={nextButtonHandler}>
        Next
      </span>
    </div>
  );
};

export default MyPagination;
