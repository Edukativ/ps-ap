import React from "react";
import { Col, Row } from "react-bootstrap";
import PageHeader from "../../shared/page-header/page-header";
import CategoryBlock from "../../shared/category-item/category-block";
import { API_BASE_URL } from "../../../config/config";
import axios from "axios";
import { json, useLoaderData } from "react-router-dom";
import { getCategories } from "../main-page/main-page";

export async function categoriesLoader() {
  const response = getCategories()

  return json({
    data: response
  });
}

const CategoriesPage = () => {
  const {data} = useLoaderData()

  return (
    <>
      <PageHeader header={"Categories"}></PageHeader>
      <CategoryBlock count={5} data={data} clickable={true}></CategoryBlock>
    </>
  );
};

export default CategoriesPage;
