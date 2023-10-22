import Link from "next/link";

import NextJsScript from "./components/NextJsScript/NextJsScript";

const AboutUs = () => {
  return (
    <div>
      About Us <br />
      <div className="button" />
      <Link href="/">Home</Link>
      <br />
      <NextJsScript
        src={"/script.js"}
        onError={(err) => console.log("errorrrrrrr", err)}
      />
    </div>
  );
};

export default AboutUs;
