"use client";

export default function AccountCreated({
  changeRegState,
}: {
  changeRegState: Function;
}) {
  return (
    <div className="flex h-[713px] w-[1214px] flex-col items-center rounded-[10px] bg-white">
      <div className="pb-[90px] pt-[19px] text-[40px] font-bold">
        Account Created
      </div>

      <div className="flex flex-col gap-[60px]">
        <div
          className="font-regular text-[24px]"
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          icon here
        </div>
        <div
          className="font-regular text-[24px]"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ alignSelf: "center", marginBottom: "1px" }}>
            Congratulations!
          </div>
          <div style={{ alignSelf: "center", marginBottom: "1px" }}>
            Your account has been created successfully.
          </div>
          <div style={{ alignSelf: "center", marginBottom: "1px" }}>
            You will need to log in to your account to enjoy our website.
          </div>
        </div>
        <div
          className="font-regular text-[24px]"
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <button className="h-[60px] w-[510px] rounded-[10px] bg-[#3AAEEF] font-bold text-white">
            Let's Log in with your account
          </button>
        </div>
      </div>
    </div>
  );
}
