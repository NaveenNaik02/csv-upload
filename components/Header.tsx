import NotificationIcon from "@/assets/notificationIcon";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-black text-2xl font-semibold">Upload CSV</h1>
      <div className="flex items-center gap-4">
        <div className="cursor-pointer">
          <NotificationIcon />
        </div>
        <div className="cursor-pointer rounded-full bg-[#C4C4C4] w-8 h-8 flex items-center justify-center">
          NN
        </div>
      </div>
    </header>
  );
};

export default Header;
