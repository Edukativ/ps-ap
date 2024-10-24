import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import PageHeader from "../../shared/page-header/page-header";
import ProductsBlock from "../../shared/sales-block/products-block";
import Filter from "../../shared/filter/filter";
import axios from "axios";
import { API_BASE_URL } from "../../../config/config";
import { json, useLoaderData } from "react-router-dom";
import { getProducts } from "../main-page/main-page";

export async function productsLoader() {
  const response = getProducts()

  return json({
    data: response
  });
}

const ProductsPage = () => {
  const {data} = useLoaderData()

  const [filteredData, setFilteredData] = useState(data);

  return (
    <>
      <PageHeader header={"All products"}></PageHeader>
      <Filter
        data={data}
        onFilter={setFilteredData}
        discountedItems={false}
      ></Filter>
      <ProductsBlock data={filteredData} salesOnly={false}></ProductsBlock>
    </>
  );
};

export default ProductsPage;
