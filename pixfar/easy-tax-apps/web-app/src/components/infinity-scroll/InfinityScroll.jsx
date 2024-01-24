import PropTypes from "prop-types";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function InfinityScroll({
  children,
  length,
  totalPages,
  handlePageChange,
  page,
  divId,
}) {
  // local state
  // const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  const fetchMoreData = () => {
    if (page >= totalPages) {
      setHasMore(false);
      return;
    }
    setHasMore(true);
    fetchMore();
  };

  const fetchMore = () => {
    handlePageChange(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={length || 0}
      next={fetchMoreData}
      hasMore={hasMore}
      scrollableTarget={divId}
      className="w-full"
      style={{ width: "100%" }}
    >
      {children}
    </InfiniteScroll>
  );
}

// props validation
InfinityScroll.propTypes = {
  children: PropTypes.node,
  length: PropTypes.number,
  totalPages: PropTypes.number,
  handlePageChange: PropTypes.func,
  page: PropTypes.number,
  divId: PropTypes.string,
};

export default InfinityScroll;
