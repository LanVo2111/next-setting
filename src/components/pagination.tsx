import React, { useEffect, useState } from "react";
import styles from '../styles/card.module.scss'

function getPager(totalItems: number, currentPage: number, pageSize: number, maxPages: number) {
  const totalPages = Math.ceil(totalItems / pageSize);
 
  let startPage: number, endPage;
  const halfMax = Math.floor(maxPages / 2);
  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= halfMax + 1) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + (halfMax - 1) >= totalPages) {
      startPage = totalPages - (maxPages - 1);
      endPage = totalPages;
    } else {
      startPage = currentPage - halfMax;
      endPage = startPage + maxPages - 1;
    }
  }
 
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
  // create an array of pages to ng-repeat in the pager control
  const pages = [...Array(endPage + 1 - startPage).keys()].map(
    i => startPage + i
  );
  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages
  };
}

export const Pagination = (props: any) => {
  
  const [state, setState] = useState({ pager: {}});
  
  useEffect(() => {
   if (props.items && props.items.length) {
     setPage(props.initialPage);
   }
 }, []);

 const setPage = (page: number) => {
   const { items, pageSize, maxPages } = props;

  //  if (page < 1 || page > pager.totalPages) {
  //    return;
  //  }

   const newPager = getPager(items.length, page, pageSize, maxPages);

   const pageOfItems = items.slice(newPager.startIndex, newPager.endIndex + 1);

   setState({ pager: newPager });

   props.onChangePage(pageOfItems);
 };

//  const handleClick = (event:any) => {
//    event.preventDefault();
//    const { name } = event.target as HTMLButtonElement;
//    switch (name) {
//      case "toFirstPage":
//        setPage(1);
//        break;
//      case "toPrevPage":
//        setPage(pager.currentPage - 1);
//        break;
//      case "toNextPage":
//        setPage(pager.currentPage + 1);
//        break;
//      case "toLastPage":
//        setPage(pager.totalPages);
//        break;
//      default:
//        if (name.includes("toPage_")) {
//          const page = parseInt(name.split("_")[1]);
//          setPage(page);
//        } else {
//          throw new Error(`Invalid page name: ${name}`);
//        }
//    }
//    if (props.scrollTo) props.scrollTo.scrollIntoView();
//    else window.scrollTo(0, 0);
//  };


 const { pager } = state;

//  if (!pager.pages || pager.pages.length <= 1) {
//    return <></>;
//  }


 
 return (
    <>
      {/* <ul className={styles.pagination}>
        <li>
          <button
            name="toFirstPage"
            onClick={handleClick}
            disabled={pager.currentPage === 1}
          >
            {"<<"}
          </button>
        </li>
        <li>
          <button
            name="toPrevPage"
            onClick={handleClick}
            disabled={pager.currentPage === 1}
          >
            {"<"}
          </button>
        </li>
        {pager.pages.map((page, index: number) => {
          const pageStart = page === 1 ? page : (page - 1) * pager.pageSize + 1;
          const pageEnd =
            page === pager.totalPages ? pager.totalItems : page * props.pageSize;
          return (
            <li key={index}>
              <button
                className={pager.currentPage === page ? "active" : ""}
                name={`toPage_${page}`}
                onClick={handleClick}
                disabled={pager.currentPage === page}
              >
                {pageStart !== pageEnd ? `${pageStart}-${pageEnd}` : pageEnd}
              </button>
            </li>
          );
        })}
        <li>
          <button
            name="toNextPage"
            onClick={handleClick}
            disabled={pager.currentPage === pager.totalPages}
          >
            {">"}
          </button>
        </li>
        <li>
          <button
            name="toLastPage"
            onClick={handleClick}
            disabled={pager.currentPage === pager.totalPages}
          >
            {">>"}
          </button>
        </li>
      </ul> */}
      {/* <div className="sortStatus">
        <b>Total Results:</b>
        {`${props.items.length} found.`}
      </div> */}
   </>
 );
}

Pagination.defaultProps = {
 initialPage: 1,
 pageSize: 2,
 maxPages: 2
};

// function App({ data }) {   
//   const [pageItems, setPageItems] = React.useState([]);
//   const ref = React.useRef(null);
  
//   const onChangePage = items => {
//      setPageItems(items);
//   };

//   // alter this variable to match to what element you want to scroll
//   // to on pagination click.
//   // if the scrollTo prop for the Pagination component is nothing then
//   // clicking a paging button will scroll to (0, 0)...
//   const scrollTo = ref.current
//   return (
//      <>
//         <h1 ref={ref}>React - Pagination Example</h1>
//         {pageItems.map(item => (
//         <div key={item.id}>{item.name}</div>
//         ))}
//         <Pagination items={data} onChangePage={onChangePage} scrollTo={scrollTo} />
//      </>
//   );
// }
// App.propTypes = {
//  data: PropTypes.array.isRequired
// };

// const exData = [...Array(155).keys()].map(i => ({
//   id: i + 1,
//   name: "Item " + (i + 1)
// }));
