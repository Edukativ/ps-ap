import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { json, useLoaderData, useParams } from "react-router-dom";
import PageHeader from "../../shared/page-header/page-header";
import Filter from "../../shared/filter/filter";
import ProductsBlock from "../../shared/sales-block/products-block";
import { API_BASE_URL } from "../../../config/config";
import axios from "axios";

export const getCategory = () => {
  return {
    category: {
      id: 1,
      title: "Annuals",
      image: "/category_img/1.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
    },
    data: [
      {
        id: 1,
        title: "Savannah Summer Annual Collection",
        price: 53,
        discont_price: 50,
        description:
          "We love this fusion of colorful blossoms, created by combining some of the most floriferous and high performance annuals we know in our Savannah Summer Collection. Cherry-red Zinnia and sunrise-hued Lantana provide a perpetual fountain of flowers amidst the dark purple spiky foliage of Tradescantia.",
        image: "/product_img/1.jpeg",
        createdAt: "2022-10-02T14:43:29.000Z",
        updatedAt: "2022-10-02T14:43:29.000Z",
        categoryId: 1,
      },
      {
        id: 2,
        title: "Angelonia angustifolia Archangel™ White",
        price: 10.75,
        discont_price: null,
        description:
          "Angelonia angustifolia Archangel™ White displays pristine white blossoms arranged on tall stems that sparkle above clean, glossy, dark green foliage. These sturdy, well-branched plants add texture and commanding presence to borders, containers, and flower arrangements.",
        image: "/product_img/2.jpeg",
        createdAt: "2022-10-02T14:43:29.000Z",
        updatedAt: "2022-10-02T14:43:29.000Z",
        categoryId: 1,
      },
      {
        id: 3,
        title: "Angelonia angustifolia Archangel™ Blue Bicolor",
        price: 10.75,
        discont_price: null,
        description:
          "This Summer Snapdragon is part of the Archangel™ series that produces large flowers. Angelonia angustifolia Archangel™ Blue Bicolor is an outstanding performer, offering a long season of color in containers and garden beds. Plants are well-branched with bicolored blossoms of deep purple and soft lilac backed by glossy, dark green leaves.",
        image: "/product_img/3.jpeg",
        createdAt: "2022-10-02T14:43:29.000Z",
        updatedAt: "2022-10-02T14:43:29.000Z",
        categoryId: 1,
      },
      {
        id: 4,
        title: "Afternoon Tea Annual Collection",
        price: 65,
        discont_price: null,
        description:
          "Our lovely Afternoon Tea Annual Collection is sure to please with its blend of pinks and purples. Includes a pretty pink-and-white flowered Dahlia, dark-leaved Ipomoea, bright-eyed Angelonia, lavender Lobularia, deep blue Calibrachoa, and a wave of pink Petunia. 6 plants total, 1 each of the varieties listed below. Container not included.",
        image: "/product_img/4.jpeg",
        createdAt: "2022-10-02T14:43:29.000Z",
        updatedAt: "2022-10-02T14:43:29.000Z",
        categoryId: 1,
      },
      {
        id: 5,
        title: "Angelonia Angelissa™ Rose",
        price: 12.95,
        discont_price: 12.1,
        description:
          "A distinctive shade of rosy purple characterizes the blossoms of carefree, long-blooming Angelonia Angelissa™ Rose and ensures that this Summer Snapdragon’s upright flower spikes are an attraction in gardens and containers over a full season. The fragrant flowers, which are large by Angelonia standards, attract pollinators.",
        image: "/product_img/5.jpeg",
        createdAt: "2022-10-02T14:43:29.000Z",
        updatedAt: "2022-10-02T14:43:29.000Z",
        categoryId: 1,
      },
      {
        id: 6,
        title: "Lantana camara Landmark™ Rose Sunrise",
        price: 11.5,
        discont_price: null,
        description:
          "Lantana camara Landmark™ Rose Sunrise is a mounding annual that is deer resistant and heat tolerant, has scented foliage, and attracts butterflies and hummingbirds. Use this vigorous Lantana just about anywhere: it`s ideal for large group plantings, but Rose Sunrise also looks lovely in a hanging basket, where its brightly colored dark rose-pink and yellow blossoms over deep green foliage can be appreciated up close.",
        image: "/product_img/6.jpeg",
        createdAt: "2022-10-02T14:43:29.000Z",
        updatedAt: "2022-10-02T14:43:29.000Z",
        categoryId: 1,
      },
      {
        id: 7,
        title: "Salvia `Wendy`s Wish`",
        price: 11.5,
        discont_price: 11.1,
        description:
          "In spring, our Director of Horticulture loves to plant the vigorous Australian Salvia `Wendy`s Wish` next to his back porch. Each morning as he sits outside enjoying his coffee, he watches the hummingbirds savor the sweet nectar from the tubular blossoms. Right up until frost, ‘Wendy’s Wish’ throws spike after spike of vivid magenta-pink blooms with fluted tips on maroon stems.",
        image: "/product_img/7.jpeg",
        createdAt: "2022-10-02T14:43:29.000Z",
        updatedAt: "2022-10-02T14:43:29.000Z",
        categoryId: 1,
      },
      {
        id: 8,
        title: 'Datura metel "Belle Blanche"',
        price: 11.5,
        discont_price: null,
        description:
          'Datura metel "Belle Blanche" is a particularly fine variety of Angel`s Trumpet with blue-green leaves and 8" long glistening white, upward-facing trumpet flowers that carry a sweet perfume, redolent of Honeysuckle and especially strong at night. "Belle Blanche" ultimately reaches 3" tall, adding a tropical mystique in containers or a highlight in any garden.',
        image: "/product_img/8.jpeg",
        createdAt: "2022-10-02T14:43:29.000Z",
        updatedAt: "2022-10-02T14:43:29.000Z",
        categoryId: 1,
      },
    ],
  };
};

export async function categoryLoader({ params }) {
  const response = getCategory()

  return json({
    loadedData: response,
  });
}

const SelectedCategoryPage = () => {
  const { loadedData } = useLoaderData();

  const [filteredData, setFilteredData] = useState(loadedData.data);

  return (
    <>
      <PageHeader header={loadedData.category.title}></PageHeader>
      <Filter
        data={loadedData.data}
        onFilter={setFilteredData}
        discountedItems={false}
      ></Filter>
      <ProductsBlock data={filteredData} salesOnly={false}></ProductsBlock>
    </>
  );
};

export default SelectedCategoryPage;
