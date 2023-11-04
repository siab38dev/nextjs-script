import Link from "next/link";

import NextJsScript from "./components/NextJsScript/NextJsScript";

const AboutUs = () => {
  return (
    <div>
      About Us <br />
      <div className="button" />
      <Link href="/">Home</Link>
      <br />
      <NextJsScript onError={(err) => console.log("errorrrrrrr", err)}>
        {`console.log('hi')`}
      </NextJsScript>
    </div>
  );
};

export default AboutUs;
