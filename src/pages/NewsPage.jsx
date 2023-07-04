import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import SingleAdd from "../components/shared/SingleAdd";
import News from "../features/mainNews/components/News";

const trending = {
  status: 200,
  message: "Trending posts fetched successfully.",
  data: {
    news: [
      {
        post_id: 1331002,
        title:
          "\u0917\u094c\u0924\u092e\u092c\u0941\u0926\u094d\u0927 \u0935\u093f\u092e\u093e\u0928\u0938\u094d\u0925\u0932\u092e\u093e \u0938\u092e\u093e\u0928\u093e\u0928\u094d\u0924\u0930 \u091f\u094d\u092f\u093e\u0915\u094d\u0938\u0940-\u0935\u0947 \u092c\u0928\u093e\u0909\u0928 \u096a \u0905\u0930\u094d\u092c\u0915\u094b \u0920\u0947\u0915\u094d\u0915\u093e",
        link: "https://www.onlinekhabar.com/2023/07/1331002",
        post_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2022/09/gautam-buddha-international-airport-bhairahawa-6-1-270x170.jpg",
        post_full_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2022/09/gautam-buddha-international-airport-bhairahawa-6-1.jpg",
        published_date: "2023-07-03 12:10:04",
        comments_count: 3,
        primary_category: {
          term_id: 163,
          name: "\u092a\u0930\u094d\u092f\u091f\u0928 \u092a\u094d\u0930\u092e\u0941\u0916",
          slug: "tourism-main",
          term_group: 0,
          term_taxonomy_id: 163,
          taxonomy: "category",
          description: "",
          parent: 162,
          count: 1304,
          filter: "raw",
          cat_ID: 163,
          category_count: 1304,
          category_description: "",
          cat_name:
            "\u092a\u0930\u094d\u092f\u091f\u0928 \u092a\u094d\u0930\u092e\u0941\u0916",
          category_nicename: "tourism-main",
          category_parent: 162,
        },
        counter: "\u0967",
      },
      {
        post_id: 1331014,
        title:
          "\u0938\u093f\u0902\u0917\u093e\u092a\u0941\u0930\u0932\u093e\u0908 \u0939\u0930\u093e\u0909\u0901\u0926\u0948 \u0928\u0947\u092a\u093e\u0932 \u090f\u0938\u0940\u0938\u0940 \u092f\u0942-\u0967\u096c \u0907\u0938\u094d\u091f \u091c\u094b\u0928 \u0915\u092a \u0915\u094d\u0930\u093f\u0915\u0947\u091f\u0915\u094b \u092b\u093e\u0907\u0928\u0932\u092e\u093e",
        link: "https://www.onlinekhabar.com/2023/07/1331014",
        post_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/Nepal-vs-Singapore-270x170.jpg",
        post_full_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/Nepal-vs-Singapore.jpg",
        published_date: "2023-07-03 12:31:35",
        comments_count: 3,
        primary_category: {
          term_id: 28552,
          name: "\u0916\u0947\u0932\u0915\u0941\u0926 - Home",
          slug: "sports-home",
          term_group: 0,
          term_taxonomy_id: 28552,
          taxonomy: "category",
          description: "",
          parent: 118,
          count: 4911,
          filter: "raw",
          cat_ID: 28552,
          category_count: 4911,
          category_description: "",
          cat_name: "\u0916\u0947\u0932\u0915\u0941\u0926 - Home",
          category_nicename: "sports-home",
          category_parent: 118,
        },
        counter: "\u0968",
      },
      {
        post_id: 1330985,
        title:
          "\u092c\u0939\u0938 \u091b\u093e\u0921\u0947\u0930 \u0915\u093e\u0928\u0941\u0928 \u0935\u094d\u092f\u0935\u0938\u093e\u092f\u0940 \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u0928\u092e\u093e, \u0932\u0932\u093f\u0924\u092a\u0941\u0930\u092e\u093e \u0935\u093f\u0930\u094b\u0927 \u0938\u092d\u093e",
        link: "https://www.onlinekhabar.com/2023/07/1330985",
        post_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/Lawyers-Birodh-Sava-270x170.jpg",
        post_full_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/Lawyers-Birodh-Sava.jpg",
        published_date: "2023-07-03 11:41:29",
        comments_count: 1,
        primary_category: {
          term_id: 78,
          name: "\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u093f\u092f \u0938\u092e\u093e\u091a\u093e\u0930",
          slug: "rastiya",
          term_group: 0,
          term_taxonomy_id: 78,
          taxonomy: "category",
          description: "",
          parent: 115,
          count: 116210,
          filter: "raw",
          cat_ID: 78,
          category_count: 116210,
          category_description: "",
          cat_name:
            "\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u093f\u092f \u0938\u092e\u093e\u091a\u093e\u0930",
          category_nicename: "rastiya",
          category_parent: 115,
        },
        counter: "\u0969",
      },
      {
        post_id: 1331068,
        title:
          "\u091a\u0940\u0928\u092c\u093e\u091f \u092c\u093f\u091c\u0941\u0932\u0940 \u0932\u094d\u092f\u093e\u090f\u0930 \u0938\u0940\u092e\u093e\u0935\u0930\u094d\u0924\u0940 \u0928\u0947\u092a\u093e\u0932\u0940 \u0917\u093e\u0909\u0901\u092e\u093e \u092c\u093e\u0932\u094d\u0928\u0947 \u092f\u094b\u091c\u0928\u093e",
        link: "https://www.onlinekhabar.com/2023/07/1331068",
        post_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/utari-naka_china-naka_china-bijuli-1-270x170.png",
        post_full_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/utari-naka_china-naka_china-bijuli-1.png",
        published_date: "2023-07-03 20:05:32",
        comments_count: 1,
        primary_category: {
          term_id: 195,
          name: "\u092c\u093f\u091c\u0928\u0947\u0938 \u0935\u093f\u0936\u0947\u0937",
          slug: "business-special",
          term_group: 0,
          term_taxonomy_id: 195,
          taxonomy: "category",
          description: "",
          parent: 116,
          count: 6,
          filter: "raw",
          cat_ID: 195,
          category_count: 6,
          category_description: "",
          cat_name:
            "\u092c\u093f\u091c\u0928\u0947\u0938 \u0935\u093f\u0936\u0947\u0937",
          category_nicename: "business-special",
          category_parent: 116,
        },
        counter: "\u096a",
      },
      {
        post_id: 1330993,
        title:
          "\u0926\u0940\u092a\u0915 \u092c\u091c\u094d\u0930\u093e\u091a\u093e\u0930\u094d\u092f\u0932\u0947 \u0938\u0941\u0930\u0941 \u0917\u0930\u0947 \u2018\u092a\u094d\u0930\u094b\u091c\u0947\u0915\u094d\u091f \u0928\u091c\u093f\u0915\u2019, \u0926\u0930\u094d\u0936\u0915 \u0930 \u0938\u0902\u0917\u0940\u0924\u0915\u0930\u094d\u092e\u0940\u0932\u093e\u0908 \u0928\u093f\u0915\u091f \u0917\u0930\u093e\u0909\u0928\u0947 \u0905\u092d\u093f\u092f\u093e\u0928",
        link: "https://www.onlinekhabar.com/2023/07/1330993",
        post_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/02/Deepal-Bajracharya-8-270x170.jpg",
        post_full_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/02/Deepal-Bajracharya-8.jpg",
        published_date: "2023-07-03 11:49:54",
        comments_count: 0,
        primary_category: {
          term_id: 126,
          name: "\u092e\u0928\u094b\u0930\u091e\u094d\u091c\u0928 \u0924\u093e\u091c\u093e \u0938\u092e\u093e\u091a\u093e\u0930",
          slug: "ent-news",
          term_group: 0,
          term_taxonomy_id: 126,
          taxonomy: "category",
          description: "",
          parent: 122,
          count: 17638,
          filter: "raw",
          cat_ID: 126,
          category_count: 17638,
          category_description: "",
          cat_name:
            "\u092e\u0928\u094b\u0930\u091e\u094d\u091c\u0928 \u0924\u093e\u091c\u093e \u0938\u092e\u093e\u091a\u093e\u0930",
          category_nicename: "ent-news",
          category_parent: 122,
        },
        counter: "\u096b",
      },
      {
        post_id: 1331115,
        title:
          "\u0932\u0917\u093e\u0924\u093e\u0930 \u0924\u0947\u0938\u094d\u0930\u094b \u0926\u093f\u0928 \u0918\u091f\u094d\u092f\u094b \u0928\u0947\u092a\u094d\u0938\u0947, \u0915\u093e\u0930\u094b\u092c\u093e\u0930 \u0930\u0915\u092e\u092e\u093e \u092a\u0928\u093f \u0917\u093f\u0930\u093e\u0935\u091f",
        link: "https://www.onlinekhabar.com/2023/07/1331115",
        post_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/Nepse-data-270x170.png",
        post_full_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/Nepse-data.png",
        published_date: "2023-07-03 15:26:37",
        comments_count: 0,
        primary_category: {
          term_id: 75,
          name: "\u092c\u093f\u091c\u0928\u0947\u0938 \u092a\u094d\u0930\u092e\u0941\u0916",
          slug: "business-main",
          term_group: 0,
          term_taxonomy_id: 75,
          taxonomy: "category",
          description: "",
          parent: 116,
          count: 8909,
          filter: "raw",
          cat_ID: 75,
          category_count: 8909,
          category_description: "",
          cat_name:
            "\u092c\u093f\u091c\u0928\u0947\u0938 \u092a\u094d\u0930\u092e\u0941\u0916",
          category_nicename: "business-main",
          category_parent: 116,
        },
        counter: "\u096c",
      },
      {
        post_id: 1330972,
        title:
          "\u091c\u0930\u0942\u0930\u0940 \u091b \u0935\u093e\u0938\u094d\u0924\u0941 \u0935\u094d\u092f\u0935\u0938\u094d\u0925\u093e\u092a\u0928",
        link: "https://www.onlinekhabar.com/2023/07/1330972",
        post_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2020/08/vastu-dosh-150x150.jpg",
        post_full_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2020/08/vastu-dosh.jpg",
        published_date: "2023-07-03 11:28:31",
        comments_count: 0,
        primary_category: {
          term_id: 6537,
          name: "\u0927\u0930\u094d\u092e-\u0938\u0902\u0938\u094d\u0915\u093e\u0930",
          slug: "religionfallow",
          term_group: 0,
          term_taxonomy_id: 6537,
          taxonomy: "category",
          description: "",
          parent: 151,
          count: 587,
          filter: "raw",
          cat_ID: 6537,
          category_count: 587,
          category_description: "",
          cat_name:
            "\u0927\u0930\u094d\u092e-\u0938\u0902\u0938\u094d\u0915\u093e\u0930",
          category_nicename: "religionfallow",
          category_parent: 151,
        },
        counter: "\u096d",
      },
      {
        post_id: 1331072,
        title:
          "\u096a \u0938\u0902\u0915\u0947\u0924, \u091c\u0938\u0932\u0947 \u092a\u093e\u091a\u0928 \u0915\u094d\u0937\u092e\u0924\u093e \u0915\u092e\u091c\u094b\u0930 \u092d\u090f\u0915\u094b \u0926\u0947\u0916\u093e\u0909\u0901\u091b",
        link: "https://www.onlinekhabar.com/2023/07/1331072",
        post_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/Stomach-270x170.jpg",
        post_full_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/Stomach.jpg",
        published_date: "2023-07-03 14:16:05",
        comments_count: 0,
        primary_category: {
          term_id: 6530,
          name: "\u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u092e\u093e\u091a\u093e\u0930",
          slug: "lifestylenews",
          term_group: 0,
          term_taxonomy_id: 6530,
          taxonomy: "category",
          description: "",
          parent: 151,
          count: 2324,
          filter: "raw",
          cat_ID: 6530,
          category_count: 2324,
          category_description: "",
          cat_name:
            "\u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0938\u092e\u093e\u091a\u093e\u0930",
          category_nicename: "lifestylenews",
          category_parent: 151,
        },
        counter: "\u096e",
      },
      {
        post_id: 1331000,
        title:
          "\u0930\u093e\u0938\u094d\u0935\u092a\u093e\u0932\u0947 \u0917\u0920\u0928 \u0917\u0930\u094d\u200d\u092f\u094b \u0938\u093e\u092e\u093e\u091c\u093f\u0915 \u0915\u093e\u0930\u094d\u092f\u092e\u093e \u0916\u091f\u093f\u0928\u0947 \u0926\u094d\u0930\u0941\u0924 \u0915\u093e\u0930\u094d\u092f \u091f\u094b\u0932\u0940",
        link: "https://www.onlinekhabar.com/2023/07/1331000",
        post_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/RSP-RAT-team-270x170.jpg",
        post_full_image:
          "https://www.onlinekhabar.com/wp-content/uploads/2023/07/RSP-RAT-team.jpg",
        published_date: "2023-07-03 12:08:33",
        comments_count: 0,
        primary_category: {
          term_id: 78,
          name: "\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u093f\u092f \u0938\u092e\u093e\u091a\u093e\u0930",
          slug: "rastiya",
          term_group: 0,
          term_taxonomy_id: 78,
          taxonomy: "category",
          description: "",
          parent: 115,
          count: 116210,
          filter: "raw",
          cat_ID: 78,
          category_count: 116210,
          category_description: "",
          cat_name:
            "\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u093f\u092f \u0938\u092e\u093e\u091a\u093e\u0930",
          category_nicename: "rastiya",
          category_parent: 115,
        },
        counter: "\u096f",
      },
    ],
  },
};

const NewsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex  w-full justify-center pt-[1rem] text-sm">
        <div className="flex  w-full lg:w-lg-p xl:w-xl-p  ">
          {/* left     */}
          <div className="flex lg:w-[690px] xl:w-[950px] felx-col ">
            <News />
          </div>
          {/* right     */}
          <div className="flex flex-col px-px  flex-col w-full lg:w-[300px] xl:w-[320px]">
            <div className="flex w-full  flex-col">
              <h3 className="text-md pt-[12px] text-red-primary">ट्रेन्डिङ</h3>
              <ul>
                {trending.data.news.map((value, index) => (
                  <li
                    className="bg-bg-gray p-px my-[1rem] rounded font-[600] "
                    key={index}
                  >
                    <Link className="line-clamp-3">{value.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex my-[2rem] justify-center items-center w-full h-[170px] bg-bg-gray">
              advertisement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
