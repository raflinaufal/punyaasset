import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="py-28">
      <div className="px-4 mx-auto containers">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-[500px]">
            <img
              src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg&ga=GA1.1.1346861283.1696842312&semt=sph"
              alt="CustomError"
            />
          </div>
          <p className="mb-4 text-xl text-center desktop:text-left">
            Maaf, halaman yang Anda cari tidak ada.
          </p>
          <Link href="/">
            <div className="text-blue-500 underline">Kembali ke Beranda</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
