import Image from "next/image";

export default function GoogleButton() {
  return (
    <div className="flex flex-col gap-[28px] pt-[26px] text-[20px]">
      <div className="flex flex-row items-center justify-center">
        <div className="">Doesn’t have an account yet?</div>
        <div className="pl-[16px] text-[#3AAEEF]"> Register here</div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <span className="w-full border-t border-[#B3B3B3]"></span>
        <div className="min-w-max px-2">Or continue with</div>
        <span className="w-full border-t border-[#B3B3B3]"></span>
      </div>

      <button className="rounded-lg border border-[#B3B3B3] px-6 py-2">
        <div className="flex w-full flex-row items-center justify-center">
          <div className="flex w-full items-center justify-center ">
            <Image
              src={"/img/google-icon.png"}
              width={48}
              height={48}
              alt="Google Icon"
            />
            <span className="text-xl font-semibold">Google</span>
          </div>
        </div>
      </button>
    </div>
  );
}
