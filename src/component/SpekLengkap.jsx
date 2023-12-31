const SpekLengkap = ({ props }) => {
  return (
    <div className="desktop:w-[65%] w-full mt-4 Sdesktop:mt-0">
      <div className="mb-2 font-semibold text-black/70">
        Informasi Properti :
      </div>

      <div className="flex justify-between px-1 py-2 border-black/20 ">
        <h1 className="text-sm font-medium text-black/70">Kamar Tidur</h1>
        <h2 className="text-sm font-medium text-black/60">
          {props.kamar_tidur}
        </h2>
      </div>
      <div className="flex justify-between px-1 py-2 border-t-2 border-black/20 ">
        <h1 className="text-sm font-medium text-black/70">Kamar Mandi</h1>
        <h2 className="text-sm font-medium text-black/60">
          {props.kamar_mandi}
        </h2>
      </div>
      <div className="flex justify-between px-1 py-2 border-t-2 border-black/20 ">
        <h1 className="text-sm font-medium text-black/70">Luas Bangunan</h1>
        <h2 className="text-sm font-medium text-black/60">
          {props.luas_bangunan}
        </h2>
      </div>
      <div className="flex justify-between px-1 py-2 border-t-2 border-black/20 ">
        <h1 className="text-sm font-medium text-black/70">Luas Tanah</h1>
        <h2 className="text-sm font-medium text-black/60">
          {props.luas_keseluruhan ? props.luas_keseluruhan : "-"}
        </h2>
      </div>
      <div className="flex justify-between px-1 py-2 border-t-2 border-black/20 ">
        <h1 className="text-sm font-medium text-black/70">Sertifikat</h1>
        <h2 className="text-sm font-medium text-black/60">
          {props.sertifikat}
        </h2>
      </div>
      <div className="flex justify-between px-1 py-2 border-t-2 border-black/20 ">
        <h1 className="text-sm font-medium text-black/70">Listrik</h1>
        <h2 className="text-sm font-medium text-black/60">{props.listrik}</h2>
      </div>
      <div className="flex justify-between px-1 py-2 border-t-2 border-black/20 ">
        <h1 className="text-sm font-medium text-black/70">Lantai</h1>
        <h2 className="text-sm font-medium text-black/60">{props.lantai}</h2>
      </div>
      <div className="flex justify-between px-1 py-2 border-t-2 border-black/20 ">
        <h1 className="text-sm font-medium text-black/70">Furnish</h1>
        <h2 className="text-sm font-medium text-black/60">{props.furnish}</h2>
      </div>
      <div className="flex justify-between px-1 py-2 border-t-2 border-black/20 ">
        <h1 className="text-sm font-medium text-black/70">Pemandangan</h1>
        <h2 className="text-sm font-medium text-black/60">
          {props.pemandangan}
        </h2>
      </div>
    </div>
  );
};

export default SpekLengkap;
