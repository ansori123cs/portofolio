import Image from "next/image";

const FrameTop = ({ title }: { title: string }) => {
  return (
    <div>
      <Image
        alt="FrameTop"
        src="/FrameTop.png"
        className=" min-w-screen h-40"
        width={1}
        height={1}
      ></Image>
    </div>
  );
};
export default FrameTop;
