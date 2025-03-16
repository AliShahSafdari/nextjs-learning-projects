import { Suspense } from "react";
import ProductList from "./ProductList";
import LoadingCircle from "./LoadingCircle";

export default function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <Suspense fallback={<LoadingCircle />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
