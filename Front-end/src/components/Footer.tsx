export default function Footer() {
  return (
    <footer className="border-t border-[#E7DED1] bg-[#F7F4EF] py-10 px-8 md:px-16 xl:px-24">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-2xl font-semibold text-[#1E1E1E]">
            Nordic Abren<span className="text-[#C89B4D]">care</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Healthcare • Ethiopia
          </p>
        </div>

        <div className="flex gap-8 text-sm text-gray-500">
          <span>Confidential</span>
          <span>Nordic Standards</span>
          <span>Available 24/7</span>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 Addis Ababa
        </p>

      </div>
    </footer>
  );
}