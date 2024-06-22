import HomePage from "@/components/home";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen px-5 ">
      <div className="backdrop-blur-sm  bg-white/30 p-4 rounded-md">
        <div className="">

          <div className="text-center">

            <h1 className="text-3xl mb-3 font-bold italic">
              Cek Khodam
            </h1>

            <h3 className="text-base mb-1">

              Cek khodam yang ada di dalam diri kamu
            </h3>
          </div>

          <HomePage />
        </div>
      </div>

    </div>



  );
}
