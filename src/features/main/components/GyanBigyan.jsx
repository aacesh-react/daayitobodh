import { Link } from "react-router-dom";
import img from "../../../assets/img.jpg";
import CardRow from "../../../components/shared/CardRow";
import NewsCard from "./NewsCard";
const GyanBigyan = () => {
  return (
    <div className="flex  justify-center">
      <div className="w-[1250px] flex flex-col">
        <h1 className="heading-main px-[15px]">ज्ञान विज्ञान</h1>
        <div className="flex ">
          {/*left  */}
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-[248px] px-[15px]">
                <NewsCard
                  img={img}
                  imgStyle={"h-[146px] object-cover"}
                  heading={
                    "ह्वावेको सहयोगमा काठमाडौंमा लाइभ भयो नेपाल टेलिकमको फाइभजी, अन्त कहिले?"
                  }
                  headingStyle={"text-sm  py-[10px]"}
                />
              </div>
              <div className="flex flex-col w-[248px] px-[15px]">
                <Link>
                  <h3 className="text-sm py-[10px]">
                    किन फुल्५ कपाल ? कपाल फुल्न नदिन याे उपाय गर्नाेस्
                  </h3>
                </Link>
                <Link>
                  <h3 className="text-sm py-[10px]">
                    सामसङको ग्यालेक्सी एस–२३ बजारमा
                  </h3>
                </Link>
                <Link>
                  <h3 className="text-sm py-[10px]">
                    टिकटककै बाटाे पछ्याउँदै फेसबुक र इन्स्टाग्राम पनि ! ब्लुक
                    टिककाे अब पैसा लाग्ने
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          {/*middle  */}
          <div className="flex w-[536px] px-[15px]">
            <div className="flex">
              <NewsCard
                img={img}
                imgStyle={"h-[364px] object-cover"}
                heading={
                  "कृत्रिम बाैद्धकताकाे बहस: के च्याट जीपीटीले मानिसलाई पंगु बनाउँछ?"
                }
                headingStyle={"heading-big"}
              />
            </div>
          </div>
          {/*right  */}
          <div className="flex w-[466px]  ">
            <div className="flex flex-col">
              <div className="flex px-[15px] h-[64px]  w-full mb-[1rem]">
                <CardRow
                  img={img}
                  imgStyle={"w-[64px] h-[64px] object-cover"}
                  heading={
                    "जर्मनीले युक्रेनलाई दिने भनिएकाे लियाेपर्ड –२ ट्याङ्क के हाे? किन खतरनाक मानिन्छ याे ट्याङ्क ?"
                  }
                  headingStyle={"text-sm "}
                />
              </div>
              <div className="flex px-[15px] h-[64px]  w-full my-[1rem]">
                <CardRow
                  img={img}
                  imgStyle={"w-[64px] h-[64px] object-cover"}
                  heading={
                    "माेबाइल फाेन चलाउँदा अपनाउनाेस् यी सावधानीहरु ! अन्यथा ह्याकरले लुट्ला नि !"
                  }
                  headingStyle={"text-sm "}
                />
              </div>
              <div className="flex px-[15px] h-[64px]  w-full my-[1rem]">
                <CardRow
                  img={img}
                  imgStyle={"w-[64px] h-[64px] object-cover"}
                  heading={
                    "तपाईकाे कम्प्युटर ल्यापटप सुस्त चल्छ ? मिलाउनाेस् यी सेटिङ्गहरु ! स्पीडमा चल्न थाल्छ !"
                  }
                  headingStyle={"text-sm "}
                />
              </div>
              <div className="flex px-[15px] h-[64px]  w-full my-[1rem]">
                <CardRow
                  img={img}
                  imgStyle={"w-[64px] h-[64px] object-cover"}
                  heading={
                    "माेबाइल किन्दै हुनुहुन्छ ? कस्ताे माेबाइल किन्ने ? ख्याल गर्नाेस् यी कुराहरु !"
                  }
                  headingStyle={"text-sm "}
                />
              </div>
              <div className="flex px-[15px] h-[64px]  w-full my-[1rem]">
                <CardRow
                  img={img}
                  imgStyle={"w-[64px] h-[64px] object-cover"}
                  heading={
                    "माेबाइल किन्दै हुनुहुन्छ ? कस्ताे माेबाइल किन्ने ? ख्याल गर्नाेस् यी कुराहरु !"
                  }
                  headingStyle={"text-sm "}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GyanBigyan;
