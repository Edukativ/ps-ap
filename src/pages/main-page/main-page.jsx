import React from "react";

import styles from "./main-page.module.css";
import Banner from "./ui/banner/banner";
import FormBanner from "./ui/form-banner/form-banner";
import BlockWithItemsHeader from "../../shared/block-with-items-header/block-with-items-header";
import CategoryBlock from "../../shared/category-item/category-block";
import ProductsBlock from "../../shared/sales-block/products-block";
import { json, useLoaderData } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../../config/config";

export const getProducts = () => {
  return [
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
    {
      id: 9,
      title: 'Amaryllis "Spartacus," one bulb in nursery pot',
      price: 43,
      discont_price: null,
      description:
        'Brilliant red petals, each boldly brushed with a white central stripe and edged in white, deliver a big show in any setting. The flowers’ cool yellow and apple-green throats add a bright contrast. One bulb in a 7" nursery pot. The shapely blooms and rich, iridescent colors of Amaryllis light up a cold day like nothing else we know. We carefully prepare these tropical bulbs so they require only warm temperatures, attention to watering, and bright light to deliver a truly spectacular performance, a process that is great fun to watch.',
      image: "/product_img/9.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 2,
    },
    {
      id: 10,
      title: 'Amaryllis "Picotee," one bulb in cachepot',
      price: 72,
      discont_price: null,
      description:
        'There is nothing in the Amaryllis world to compare with "Picotee." Crisp white petals, with edges finely penciled in rich red, present a clean, tailored look that`s utterly distinctive. This choice variety is slow to reproduce (though heavy blooming) and therefore always in short supply. We offer one bulb in a 7" red foil cachepot.',
      image: "/product_img/10.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 2,
    },
    {
      id: 11,
      title: 'Amaryllis "Samba," one bulb in ceramic cachepot',
      price: 69,
      discont_price: 65,
      description:
        'Bright red "Samba" makes a powerful statement with its wide, pure white edging and flares on 6" lightly ruffled flowers. One bulb in an 8" wide x 7" tall white ceramic cachepot. The shapely blooms and rich, iridescent colors of Amaryllis light up a cold day like nothing else we know. We carefully prepare these tropical bulbs so they require only warm temperatures, attention to watering, and bright light to deliver a truly spectacular performance, a process that is great fun to watch.',
      image: "/product_img/11.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 2,
    },
    {
      id: 12,
      title: 'Amaryllis "Yellow Star," one bulb in woven basket',
      price: 49,
      discont_price: null,
      description:
        'While the blossoms on this ethereal beauty measure only about 6”, this plant more than makes up for it by producing 3 bud stems with 4-6 flowers on each. That`s a lot of flower power. The blooms are lightly ruffled in a distinctive shade of creamy chartreuse with deeper green throats. "Yellow Star" is an exceptionally late variety, but well worth the wait. We offer one bulb in a 7" woven basket.',
      image: "/product_img/12.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 2,
    },
    {
      id: 13,
      title: 'Amaryllis "King Star," one bulb in linen bag',
      price: 29,
      discont_price: 24,
      description:
        'When the peach color breakthrough hit Amaryllis, winter got a whole new palette. Amaryllis "King Star" (formerly A. "Serenity"), a delightful spin on the spectrum, combines elegant salmon streaks with white central stripes merging into a green throat on sturdy stems. One bulb in linen bag. The shapely blooms and rich, iridescent colors of Amaryllis light up a cold day like nothing else we know. We carefully prepare these tropical bulbs so they require only warm temperatures, attention to watering, and bright light to deliver a truly spectacular performance, a process that is great fun to watch.',
      image: "/product_img/13.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 2,
    },
    {
      id: 14,
      title: 'Amaryllis "Lion King," one bulb in resin cachepot',
      price: 64,
      discont_price: null,
      description:
        'The 7" regal red flowers of Amaryllis "Lion King" have an iridescent sparkle, a satiny throat, white eye zone, and deep dark, almost purple, veining. They crown 22-24" stems that numbered three per bulb in our trials. Shipped in an 8" wide x 7" tall beige resin cachepot. The shapely blooms and rich, iridescent colors of Amaryllis light up a cold day like nothing else we know. We carefully prepare these tropical bulbs so they require only warm temperatures, attention to watering, and bright light to deliver a truly spectacular performance, a process that is great fun to watch.',
      image: "/product_img/14.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 2,
    },
    {
      id: 15,
      title: 'Amaryllis "Rilona," two nursery pots in woven basket',
      price: 88,
      discont_price: null,
      description:
        'The vibrant, salmon-peach blooms of Amaryllis "Rilona" reach up to 7" in diameter and are sure to light up your home on a winter\\’s day. Flowers are borne on 24-30" stems and gradually fade to a softer orange hue equally lovely for its subtlety. Superior cut flower. Two green nursery pots in a 15½" long x 8¾" wide x 7" tall double basket. The shapely blooms and rich, iridescent colors of Amaryllis light up a cold day like nothing else we know. We carefully prepare these tropical bulbs so they require only warm temperatures, attention to watering, and bright light to deliver a truly spectacular performance, a process that is great fun to watch.',
      image: "/product_img/15.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 2,
    },
    {
      id: 16,
      title: "Enchanted Garden Mushroom Trio",
      price: 55,
      discont_price: null,
      description:
        "This delightful mixed trio of decorative stone Mushrooms surprises and captivates, appearing to have sprouted from a garden bed or hardscape. The set of three is cast in sturdy Glass Fiber Reinforced Concrete (GFRC), a high-density material engineered to withstand freeze/thaw cycles in cold climates.",
      image: "/product_img/16.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 3,
    },
    {
      id: 17,
      title: "Cast Stone Acorn Trio",
      price: 90,
      discont_price: 87,
      description:
        "Add interest to your autumn garden landscape with a cheerful trio of stone Acorns. This set of three decorative nuts is cast in a dense, durable product made to withstand the elements. The original design was hand sculpted in clay by artist Clifford Fredericks, giving the Acorns a distinctive artisan quality. ",
      image: "/product_img/17.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 3,
    },
    {
      id: 18,
      title: "Entwined Vine Stone Pumpkin",
      price: 72,
      discont_price: null,
      description:
        "Our stone Pumpkin makes a plucky little addition to your autumn garden décor. Initially hand sculpted in clay, the Pumpkin is then cast in stone to show off its lifelike features, from the realistic ‘warts’ to the curlicue vine wrapping around the ribs. The ocher yellow Pumpkin is made in sturdy Glass Fiber Reinforced Concrete (GFRC) to endure temperature extremes outdoors, but looks as fetching indoors, adding seasonal character wherever you choose to arrange it.",
      image: "/product_img/18.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 3,
    },
    {
      id: 19,
      title: "Alpine Birdhouse",
      price: 135,
      discont_price: 128,
      description:
        "Doesn’t every bird deserve a high-end residence? Our stylish Alpine Birdhouse is crafted in premium mango wood with a copper roof and entranceway that will develop a lovely verdigris patina over time. At the end of the season, the back of the birdhouse slides open for easy cleaning. Simply wipe out the house with a damp cloth to give the next nesters a fresh start.",
      image: "/product_img/19.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 3,
    },
    {
      id: 20,
      title: "Artful Apples Quartet",
      price: 34,
      discont_price: null,
      description:
        "Natural leaves and pieces of wood are artfully curled and crafted by hand to create these alluring and decorative Apples. Each showcases a unique pattern of autumnal colors that`s made using leaves that are carefully rolled and cut then arranged to form a mosaic-like design. Display the Apples indoors in a wooden bowl, atop a mantel, or as part of a centerpiece on a dining table. They make a beautiful celebration of the fall season. Set of 4. Teak bowl sold separately.",
      image: "/product_img/20.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 3,
    },
    {
      id: 21,
      title: "Autumn Acorn Quartet",
      price: 24,
      discont_price: null,
      description:
        "The seed of the mighty Oak tree is reimagined in these intriguing seasonal accent pieces. The core of this decorative acorn is overlaid by hand with natural leaves in the rich tones of an autumn day. The topper is fashioned from real acorns. Display this quartet in a favorite bowl or basket, or use as a centerpiece for a favorite fall look. Teak bowl sold separately.",
      image: "/product_img/21.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 3,
    },
    {
      id: 22,
      title: "Blissful Harvest Potpourri",
      price: 29,
      discont_price: null,
      description:
        "Our Blissful Harvest potpourri promises to engage your senses with the evocative fragrance of the season. Empty its contents into an attractive vessel and enjoy the aroma it releases inside your home; when the potpourri needs a refresh, use the included vial of fragrance to extend its life. Makes a perfect hostess or bread-and-butter gift. Handcrafted in California.",
      image: "/product_img/22.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 3,
    },
    {
      id: 23,
      title: "Espoma Organic Potting Mix23",
      price: 6.95,
      discont_price: 6.7,
      description:
        "Did you know your plant`s soil medium can make or break its overall growth and health? Woodie believes potting your plants in an all organic soil mixture that feeds your plant with nutrients, while still giving roots the space they need to breathe and grow. Try out Espoma`s Organic Potting Mix in your plantings this season and see your plants take off!",
      image: "/product_img/23.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 4,
    },
    {
      id: 24,
      title: "Espoma Organic Orchid Mix",
      price: 6.95,
      discont_price: null,
      description:
        "Orchids radiate a delicate beauty so powerful that it, at times, can be intimidating. With use of Espoma`s Organic Orchid Mix, you can give your beautiful plant the ideal environment for optimal growth.",
      image: "/product_img/24.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 4,
    },
    {
      id: 25,
      title: "Espoma Organic Perlite",
      price: 13.95,
      discont_price: 13.65,
      description:
        "Espoma Organic Perlite makes the task of propagating plants quite easy and fun. This porous material is used to aid in aerating soil to allow air, water and nutrients to reach the roots of your plant.",
      image: "/product_img/25.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 4,
    },
    {
      id: 26,
      title: "Fox Farm Happy Frog Potting Soil",
      price: 14.95,
      discont_price: null,
      description:
        "Your potted plants deserve the best. Their roots can’t seek nutrition in the ground, so you have to bring it to them. That’s why Happy Frog® Potting Soil is amended with soil microbes that can help improve root efficiency and encourage nutrient uptake.26",
      image: "/product_img/26.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 4,
    },
    {
      id: 27,
      title: "Ocean Forest Potting Soil",
      price: 13.95,
      discont_price: null,
      description:
        "The ocean harbors so many nutrients that not only are good for the soul, but good for our plants! Woodie loves this powerhouse blend of premium earthworm castings, bat guano, and sea-going fish and crab meal, and you will too!",
      image: "/product_img/27.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 4,
    },
    {
      id: 28,
      title: "Hoffman`s Horticultural Charcoal",
      price: 12.95,
      discont_price: null,
      description:
        "In working to create the perfect soil medium for your potted plants, you may come across the use of charcoal in many planting experts` soil analyses. Hoffman`s Horticultural Charcoal is a extremely beneficial element to add to your soil mediums ensuring a plant is happy and healthy in its pot!",
      image: "/product_img/28.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 4,
    },
    {
      id: 29,
      title: "Bonide Diatomaceous Earth",
      price: 27.95,
      discont_price: 27.05,
      description:
        "A product that kills the bad insects but keeps the good one`s alive? Count me in! This all natural product is the ideal insect killer if your out to get those annoying pests that feed on your crops, without impacting your livestock or killing beneficial critters like earth worms!",
      image: "/product_img/29.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 4,
    },
    {
      id: 30,
      title: "Father Christmas with Sack Plant Pot",
      price: 12.99,
      discont_price: null,
      description:
        "Cement planter comes with a removable rubber plug for drainage",
      image: "/product_img/30.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 5,
    },
    {
      id: 31,
      title: "Christmas Pick Up Truck Plant Pot 22cm - Red",
      price: 12.99,
      discont_price: 12,
      description:
        "Driving home for Christmas? This jolly cement planter is a great novelty planter for your favourite winter plants! Cement planter comes with a removable rubber plug for drainage",
      image: "/product_img/31.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 5,
    },
    {
      id: 32,
      title: "Ceramic Gold Linen Finish Plant Pot",
      price: 8.75,
      discont_price: null,
      description:
        "This Gold Linen Finish Plant Pot could be the star attraction to your Christmas table decor with its textured gold finish and star bow. Perfect for displaying your favourite Christmas blooms! Does not contain drainage holes",
      image: "/product_img/32.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 5,
    },
    {
      id: 33,
      title: "Red & White Ceramic Christmas Pots (Set of 6) 15cm",
      price: 22.99,
      discont_price: null,
      description:
        "Whether you are looking for the perfect Christmas gift for your green-fingered loved one or the perfect pots to house your houseplants for your Christmas display, these Red & White Ceramic Christmas Pots are bound to bring cheer! Does not contain drainage holes. Comes as a set of 6",
      image: "/product_img/33.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 5,
    },
    {
      id: 34,
      title:
        "Christmas Double Pine Cone Wreath White-TippedGrey Wreath with Half Pinus Nigra",
      price: 19.99,
      discont_price: null,
      description:
        "The perfect complement to your Christmas décor during the festive season. Made of natural, recyclable materials. 40cm x 40cm.",
      image: "/product_img/34.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 5,
    },
    {
      id: 35,
      title: "Christmas Wreath Flower Pot Picks - 3 Mixed Designs",
      price: 4.99,
      discont_price: 4.2,
      description:
        "Festive and fancy, this Christmas wreath pick decoration is great for adding a touch of festive cheer to your Christmas plants and decor!\n",
      image: "/product_img/35.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 5,
    },
  ];
};

export const getCategories = () => {
  return [
    {
      id: 1,
      title: "Annuals",
      image: "/category_img/1.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
    },
    {
      id: 2,
      title: "Nursery",
      image: "/category_img/2.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
    },
    {
      id: 3,
      title: "Garden Art",
      image: "/category_img/3.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
    },
    {
      id: 4,
      title: "Plant Care",
      image: "/category_img/4.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
    },
    {
      id: 5,
      title: "Seasonal",
      image: "/category_img/5.jpeg",
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
    },
  ];
};

export async function mainPageLoader() {
  const salesResponce = getProducts();
  const categoriesResponce = getCategories();

  return json({
    salesProducts: salesResponce,
    categories: categoriesResponce,
  });
}

const MainPage = () => {
  const { categories, salesProducts } = useLoaderData();

  return (
    <div className={styles.mainPage}>
      <Banner></Banner>
      <BlockWithItemsHeader
        header={"Categories"}
        description={"All categories"}
        redirectLink={"/categories-page"}
      ></BlockWithItemsHeader>
      <CategoryBlock
        count={4}
        data={categories}
        clickable={true}
      ></CategoryBlock>
      <FormBanner></FormBanner>
      <BlockWithItemsHeader
        header={"Sales"}
        description={"All sales"}
        redirectLink={"/sales-page"}
      ></BlockWithItemsHeader>
      <ProductsBlock
        data={salesProducts}
        count={4}
        salesOnly={true}
      ></ProductsBlock>
    </div>
  );
};

export default MainPage;
