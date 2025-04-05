import Experts from "./experts/Experts";
import Banner from "./banner/Banner";
import Overview from "./overview/Overview";
import Testimonial from "./testimonial/Testimonial";
import Faq from "./faq/Faq";
import Contact from "./contact/Contact";

export default function Home() {
  return (
    <div className="dark:bg-white">
      <Banner />
      <Experts />
      <Overview />
      <Testimonial />
      <Faq />
      {/* <Contact /> */}
    </div>
  );
}
