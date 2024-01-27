import AppleIcon from "@/assets/appleIcon";
import DiscordLogo from "@/assets/discordLogo";
import GitHubLogo from "@/assets/githubLogo";
import GoogleIcon from "@/assets/googleIcon";
import LinkedinLogo from "@/assets/linkedinLogo";
import Logo from "@/assets/logo";
import TwitterLogo from "@/assets/twitterLogo";
import SignInForm from "@/components/SignInForm";
import React from "react";

type IconContainerProps = {
  icon: React.ReactNode;
  text: string;
};

const IconContainer = ({ icon, text }: IconContainerProps) => {
  return (
    <div className="h-8 bg-white rounded-lg flex items-center justify-between px-8 py-4 gap-2 cursor-pointer">
      {icon}
      <p className="text-[#858585] text-xs font-normal">{text}</p>
    </div>
  );
};

const MyComponent = () => {
  const svgData = encodeURIComponent(
    '<svg width="720" height="1024" viewBox="0 0 720 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L719.988 0L569.314 1024H0V0Z" fill="#605BFF"/></svg>'
  );

  const backgroundImage = `url('data:image/svg+xml;utf8,${svgData}')`;

  return (
    <div className="grid grid-cols-2 h-screen bg-[#F8FAFF]">
      <div
        style={{
          backgroundImage,
          backgroundSize: "cover",
        }}
        className="col-span-1 flex flex-col justify-between py-10 h-full"
      >
        <div className="ml-10">
          <Logo width="4rem" height="4rem" fill="#fff" />
        </div>
        <h1 className="text-white text-4xl font-bold text-center">BASE</h1>
        <div className="flex items-center justify-center gap-6">
          <GitHubLogo />
          <TwitterLogo />
          <LinkedinLogo />
          <DiscordLogo />
        </div>
      </div>
      <div className="col-span-1 flex">
        <div className="grid grid-cols-7">
          <div className="col-start-2 col-span-4 flex flex-col justify-center gap-8">
            <div>
              <h1 className="text-black text-2xl font-bold">Sign In</h1>
              <p className="text-black text-base font-normal">
                Sign in to your account
              </p>
            </div>
            <div className="flex items-center gap-4">
              <IconContainer icon={<GoogleIcon />} text="Sign in with Google" />
              <IconContainer icon={<AppleIcon />} text="Sign in with Apple" />
            </div>
            <SignInForm />
            <h2 className="text-base font-normal text-[#858585] text-center">
              Don’t have an account?{" "}
              <span className="text-blue-600 text-base font-normal cursor-pointer">
                Register here
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
