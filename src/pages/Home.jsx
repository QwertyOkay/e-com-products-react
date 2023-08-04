import { useEffect, useState } from "react";
import { GetCookies } from "hooks/Cookies";
import Categories from "components/Categories";
import Slider from "components/Hero";
import Cookies from "components/CookiesModal";
import ProductsBlock from "components/ProductsBlock/ProductsBlock";
import FotoSection from "components/FotoSection/FotoSection";

function Home() {
  const [isOpenCookies, setIsOpenCookies] = useState(true);

  useEffect(() => {
    if (GetCookies("leprechaunoti")) setIsOpenCookies(false);
  }, []);

  return (
    <>
      <Slider />
      <Categories />
      <ProductsBlock type="what’s new" />
      <FotoSection />
      {isOpenCookies && <Cookies showCookies={setIsOpenCookies} />}
    </>
  );
}

export default Home;
