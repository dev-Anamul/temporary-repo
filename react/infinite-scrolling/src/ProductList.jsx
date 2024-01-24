import React from "react";
import ProductCard from "./Card";
import { Container, Row } from "react-bootstrap";

function ProductList() {
  const [products, setProducts] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [page, setPage] = React.useState(0);

  const elementRef = React.useRef(null);

  const onIntersection = async (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      await fetchMore();
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);

    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const fetchMore = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=12&skip=${page * 12}`
    );
    const newProducts = await response.json();
    if (newProducts?.products?.length == 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...newProducts.products]);
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <Container>
        <Row>
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Row>
      </Container>

      {hasMore && <div ref={elementRef}>Loading...</div>}
    </>
  );
}

export default ProductList;
