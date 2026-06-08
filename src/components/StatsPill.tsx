export default function StatsPill() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-8 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white">

        <span className="text-white/60">
          Life expectancy gap
        </span>

        <div className="flex gap-4 items-center">

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#EF9F9F]">
              68
            </h3>
            <p className="text-xs text-white/30">
              Ethiopia
            </p>
          </div>

          →

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#80CBC4]">
              84
            </h3>
            <p className="text-xs text-white/30">
              Nordic
            </p>
          </div>

        </div>

        <span className="text-white/60">
          We are closing this gap.
        </span>

      </div>
    </div>
  );
}