import Image from "next/image";

const FrameBottom = ({ title }: { title: string }) => {
  return (
    <div>
      <Image
        alt="FrameBottom"
        src="/FrameBottom.png"
        className=" min-w-screen h-40"
        width={1}
        height={1}
      ></Image>
    </div>
  );
};
export default FrameBottom;
