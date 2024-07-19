import "boxicons";

export default function Icons() {
  return (
    <div className="w-full flex justify-between px-8 py-2 ">
      <div>
        <img className="w-24 inline" src="/africa.png" alt="" />
        <img className="w-16 inline pt-16 ml-5" src="/destination.png" alt="" />
        <img className="w-16 inline ml-4" src="/world.png" alt="" />
        <img className="w-16 inline ml-4 pt-12" src="/passport.png" alt="" />
        <img
          className="w-16 inline ml-4 pb-5"
          src="/travel-and-tourism.png"
          alt=""
        />
      </div>
      <div>
        <img className="w-32" src="/tree.png" alt="" />
      </div>
    </div>
  );
}
