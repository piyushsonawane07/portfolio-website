export const CustomButton = () => {
    return <div className="mx-auto flex w-full max-w-lg items-center justify-center">
    <div
      className="relative z-10 flex w-30 cursor-pointer items-center overflow-hidden rounded border border-slate-800 p-[1.5px]"
    >
      <div
        className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#a886f7_20deg,transparent_120deg)]"
      ></div>
      <div className="relative z-20 flex w-full rounded bg-black py-[6px] text-sm px-3">
        <span>Resume</span>
      </div>
    </div>
  </div>
}