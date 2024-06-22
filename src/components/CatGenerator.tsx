import { useState } from "react";
import classes from "../styles/CatGenerator.module.scss";
import MyButton from "./MyButton";
import MyImage from "./MyImage";

interface CatGeneratorProps extends React.HTMLAttributes<HTMLDivElement> {}

const CatGenerator: React.FC<CatGeneratorProps> = ({
  children,
}: CatGeneratorProps) => {
  const [catURLs, setCatURLs] = useState<string[]>([]);

  const generateCat = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search",
        {
          headers: {
            "x-api-key":
              "live_SLZV3LmviD9QmkoGOKBbwXuKouGQ1pK1WKS2QbY5NvjWtgCwpxtrtTJZPhYVqF3J",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const url = data[0].url;
      setCatURLs((prevUrls) => [...prevUrls, url]);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  const resetCats = () => {
    setCatURLs([]);
  };

  return (
    <div className={classes.main_wrapper}>
      <h1 className={classes.h1_main}>{children}</h1>
      <div className={classes.btn_wrapper}>
        <MyButton className="btn btn-dark btn-lg" onClick={generateCat}>
          Give Me a Cat!
        </MyButton>
        <MyButton className="btn btn-primary btn-lg" onClick={resetCats}>
          Reset
        </MyButton>
      </div>
      <div className={classes.catCards_wrapper}>
        {catURLs.map((url, index) => (
          <MyImage key={index} src={url} />
        ))}
      </div>
    </div>
  );
};

export default CatGenerator;
