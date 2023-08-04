import { Helmet } from "react-helmet-async";

const TITLE = "Playsmode";
const CONTENT = "A wide selection of high-quality gloves for both him and her.";

function HelmetHead() {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={CONTENT} />
    </Helmet>
  );
}

export default HelmetHead;
