import Chatbot from "@/components/home/chatbot";

const Chats = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex flex-col md:flex-row px-4 md:px-12"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="h-full w-full flex items-center relative overflow-hidden">
          <div className="bg-light-green h-24 top-0 right-[10%] -translate-y-3/4 aspect-square absolute rounded-lg"></div>
          <div className="border-dashed border-2 border-font-green h-28 -translate-x-1/3 top-0 right-[10%] -translate-y-1/2 aspect-square absolute rounded-lg"></div>
          <div className="absolute top-0 uppercase leading-4 font-medium mt-5 tracking-wider">
            <div>Bot</div>
            <div>
              wing<span className="text-font-green">man</span>
            </div>
          </div>
          <div className="text-2xl md:text-5xl font-semibold">
            <span className="text-font-green">Wingman AI:</span> Personalized
            Shopping <span className="text-font-green">Assitance</span> for
            <br /> High-Value Purchases
          </div>
          <div className="bg-light-green h-24 bottom-0 left-[10%] translate-y-3/4 aspect-square absolute rounded-lg"></div>
          <div className="border-dashed border-2 border-font-green h-28 translate-x-1/3 bottom-0 left-[10%] translate-y-1/2 aspect-square absolute rounded-lg"></div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Chatbot />
        </div>
      </div>
      <div className="bg-light-green h-24 top-8 right-0 translate-x-1/2 aspect-square absolute rounded-lg"></div>
        <div className="border-font-green border-2 border-dashed h-28 top-16 right-0 translate-x-1/3 aspect-square absolute rounded-lg"></div>
    </div>
  );
};

export default Chats;
