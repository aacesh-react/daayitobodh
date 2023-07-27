import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import newsService from "../../../app/features/news/newsService";
import img from "../../../assets/img.jpg";
import { getCategoryNews } from "../../../utilities/news";
import NewsCard from "../../main/components/NewsCard";

const sambandhit = [
  {
    heading:
      "मलेसियालाई हराउँदै एसीसी यू-१६ इस्ट जोन कप क्रिकेटमा नेपालको ह्याट्रिक",
  },
  {
    heading: "नरेनको शतकमा नेपालले दियो मलेसियालाई २५३ रनको चुनौतीपूर्ण लक्ष्य",
  },
  {
    heading:
      "एसीसी यू-१६ इस्ट जोन कपको उपाधिका लागि नेपालले मलेसियाविरुद्ध ब्याटिङ गर्दै",
  },
];

const News = () => {
  const { categoryName, newsId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState({});
  const { homepageNews } = useSelector((state) => state.news);
  const sambandhitNewsArray = getCategoryNews(homepageNews, categoryName, 3);
  console.log("newsArray:", sambandhitNewsArray);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    (async function () {
      try {
        const result = await newsService.getNewsById(newsId);
        console.log("result:", result.data);
        setNews(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error:", error);
      }
    })();
  }, [newsId]);

  if (isLoading) {
    <div></div>;
  }
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full flex-col font-[400] text-sm">
        <h3 className="text-xxl px-px py-[1rem] font-[700]">{news.heading}</h3>
        <div
          className="px-px"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
      </div>
      {/* <div className="flex w-full flex-col font-[400] text-sm">
        <h3 className="text-xxl px-px font-[700]">
          नरेनको शतकमा नेपालले दियो मलेसियालाई २५३ रनको चुनौतीपूर्ण लक्ष्य
        </h3>
        <span className="font-[400] text-sm p-px">
          १९ असार, काठमाडौं । एसीसी यू-१६ इस्ट जोन कप क्रिकेटको फाइनलमा नेपालले
          घरेलु टोली मलेसियालाई २५३ रनको चूनौतीपूर्ण लक्ष्य दिएको छ । नरेन
          भट्टको शतक मद्दतमा नेपालले मलेसियालाई जितका लागि चुनौतीपूर्ण लक्ष्य
          पेस गरेको हो । टस जितेर पहिले ब्याटिङ गरेको नेपालले ८ विकेटको क्षतिमा
          पूरै ३५ ओभर खेल्दै...
        </span>
        <div className="w-full p-px">
          <img
            className="w-full aspect-[1.777] object-cover rounded"
            src={img}
            alt=""
          />
        </div>
        <div className="p-px xl:w-[660px]" id="news-content">
          <p>
            १९ असार, काठमाडौं । एसीसी यू-१६ इस्ट जोन कप क्रिकेटको फाइनलमा
            नेपालले घरेलु टोली मलेसियालाई २५३ रनको चूनौतीपूर्ण लक्ष्य दिएको छ ।
          </p>
          <p>
            नरेन भट्टको शतक मद्दतमा नेपालले मलेसियालाई जितका लागि चुनौतीपूर्ण
            लक्ष्य पेस गरेको हो ।
          </p>
          <p>
            टस जितेर पहिले ब्याटिङ गरेको नेपालले ८ विकेटको क्षतिमा पूरै ३५ ओभर
            खेल्दै २५२ रन बनायो ।
          </p>
          <p>
            नेपालका लागि नरेन भट्ट एक्लैले ८९ बलमा सर्बाधिक अविजित ११२ रनको
            योगदान गरे । उनले १० चौका र दुई छक्का मद्दतमा ११२ रन बनाए ।
          </p>
          <p>
            यस्तै, नेपालका लागि निरजकुमार यादवले ४७, सन्तोष यादवले
            २६,&nbsp;सूर्यांशु कोइरालाले १८, अशोक धामीले ११, दिपु कुमारले
            ५,&nbsp;क्याप्टेन अभिशेक तिवारीले ४, आशिष लुहारले २ र प्रतिक
            भट्टराईले एक रन बनाए । नेपालले २६ रन एक्ट्रा पायो ।
          </p>
          <p>
            उमेर समूहको क्रिकेट नेपालले उत्कृष्ट प्रदर्शन गर्दै आएको छ । नेपालले
            यो उपाधि जित्दै ह्याट्रक गर्ने लक्ष्यका साथ खेलिरहेको छ ।
          </p>
          <p>
            एसियाली क्रिकेट काउन्सिलले यसअघि एसीसी यू-१६ इस्टर्न रिजनको नाममा
            प्रतियोगिता आयोजजा गरेको थियो र नेपालले २०१७ र २०१९ मा लगातार उपाधि
            जितेको थियो ।
          </p>
          <p>
            नेपालले २०१७ मा रित गौतमको कप्तानीमा सिंगापुरलाई फाइनलमा हराएर उपाधि
            जितेको थियो भने २०१९ मा मलेसियालाई नै हराएर च्याम्पियन बनेको थियो ।
          </p>
          <p>
            यसअघि समूह चरणको खेलमा नेपालले मलेसियालाई फराकिलो अन्तरमा पराजित
            गरेको थियो ।
          </p>
        </div>
      </div> */}
      {/* sambandhit news */}
      <div className="flex flex-col w-full ">
        <h3 className="heading-main  py-[1rem] px-px">सम्बन्धित खबर</h3>
        <ul className=" w-full flex">
          {sambandhitNewsArray.map((news, index) => (
            <li
              className="inline w-1/3 px-px"
              key={index}
              onClick={scrollToTop}
            >
              <NewsCard
                img={news.coverImage}
                imgStyle={"w-full aspect-[3/2]"}
                heading={news.heading}
                headingStyle={"line-clamp-3"}
                newsId={news.id}
                categoryName={news.categoryName}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
