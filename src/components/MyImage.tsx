import { useEffect, useState } from "react";
import classes from "../styles/MyImage.module.scss";

interface MyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const MyImage: React.FC<MyImageProps> = ({ ...props }: MyImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Once component gets mounted, the scaling animation gets triggered
    const timeout = setTimeout(() => {
      setImageLoaded(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={classes.img_wrapper}>
      <img
        {...props}
        className={`${classes.myImg} ${imageLoaded ? classes.imgLoaded : ""}`}
      ></img>
    </div>
  );
};

export default MyImage;
