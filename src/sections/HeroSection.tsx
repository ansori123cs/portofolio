import FrameBottom from "@/components/FrameBottom";
import FrameTop from "@/components/FrameTop";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen ">
      <div className="items-start ">
        <FrameTop title="Hero Section"></FrameTop>
      </div>
      <h1 className="font-bona text-6xl">Hero Section</h1>
      <div className="items-start ">
        <FrameBottom title="Hero Section"></FrameBottom>
      </div>
    </div>
  );
};
export default HeroSection;
