import AboutUs from "../components/AboutPage/AboutUs";
import Problems from "../components/AboutPage/Problems";
import YouTubeVideo from "../components/AboutPage/YoutubeVideo";
import Client from "../components/ProductList/Client";
import TeamCard from "../components/Team/TeamCard";

const About = () => {
  return (
    <div>
      <AboutUs />
      <Problems />
      <YouTubeVideo />
      <div>
        <div className="text-center pb-2">
          <h3 className="font-bold text-2xl pb-2">Meet Our Team</h3>
          <p className="text-[#737373] font-bold">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <TeamCard />
      </div>
      <div className="bg-[#FAFAFA] p-12">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-2xl">Big Companies Are Here</h1>
          <p className="text-[#737373] font-bold lg:w-1/3 text-center ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <Client />
      </div>
    </div>
  );
};

export default About;
