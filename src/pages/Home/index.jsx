import React, { useState } from "react";
import KittenIllustrator from "../../assets/KittenIllustrator";
import GetFactButton from "../../components/GetFactButton";
import withGenerateFact from "./withGenerateFact";
import GenerateFact from "./GenerateFact";
import { useGetSingleFactApi } from "../../services/facts";
import PoweredBy from "../../components/PoweredBy";

const GeneratedFact = withGenerateFact(GenerateFact, {
  apiService: useGetSingleFactApi,
});

const Home = () => {
  const [generateNewFact, setGenerateNewFact] = useState(0);

  return (
    <>
      <div className="grid place-items-center min-h-[100vh] w-[90vw] mx-auto relative">
        <div>
          <h1 className="text-xl max-w-[600px] pb-10 text-left">
            <div>
              <div className="text-[2rem] font-bold">
                Welcome fellow Cat Lovers~
              </div>
              <p>The cat might telling some facts or random things</p>
              <div className="min-h-[100px] max-h-[100px] max-w-[100%] overflow-auto mt-5">
                <span>The cat says : </span>
                <span>
                  {generateNewFact <= 0 ? (
                    "This cat can say something"
                  ) : (
                    <GeneratedFact generateNewFact={generateNewFact} />
                  )}
                </span>
              </div>
            </div>
          </h1>
          <div className="flex justify-center items-center">
            <KittenIllustrator />
          </div>
        </div>
        <div className="absolute bottom-[80px]">
          <GetFactButton
            onClick={() => {
              setGenerateNewFact(generateNewFact + 1);
            }}
          />
        </div>
      </div>
      <PoweredBy />
    </>
  );
};

export default Home;
