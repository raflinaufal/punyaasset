import BottomNavbar from "@/component/BottomNavbar";

import { useState } from "react";

const formatPhoneNumber = (value) => {
  // Remove non-numeric characters
  const phoneNumber = value.replace(/\D/g, "");

  // Limit to 14 characters
  const formattedPhoneNumber = phoneNumber.slice(0, 14);

  // Add a hyphen after every 4 digits
  const result = formattedPhoneNumber.replace(
    /(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
    (_, p1, p2, p3, p4) => {
      let parts = [p1];
      if (p2) parts.push(`-${p2}`);
      if (p3) parts.push(`-${p3}`);
      if (p4) parts.push(`-${p4}`);
      return parts.join("");
    }
  );

  return result;
};

const PropertyForm = () => {
  const [judulIklan, setJudulIklan] = useState("");
  const [noTandaPengenal, setNoTandaPengenal] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isNumberidValid, setIsNumberIdValid] = useState(true);
  const [isNamaValid, setIsNamaValid] = useState(true);
  const [isValidAlamat, setIsValidAlamat] = useState(true);
  const [isValidHarga, setIsValidHarga] = useState(true);
  const [isValidSert, setIsValidSert] = useState(true);
  const [isValidKM, setIsValidKM] = useState(true);
  const [isValidKT, setIsValidKT] = useState(true);
  const [isValidLb, setIsValidLb] = useState(true);
  const [isValidListrik, setIsValidListrik] = useState(true);
  const [isValidHadap, setIsValidHadap] = useState(true);
  const [isValidDes, setIsValidDes] = useState(true);
  const [isValidLt, setIsValidLt] = useState(true);
  const [isValidPerProp, setIsValidPerProp] = useState(true);
  const [isValidKategori, setIsValidKategori] = useState(true);
  const [isValidProduct, setIsValidProduct] = useState(true);
  const [isValidTransaksi, setIsValidTransaksi] = useState(true);

  const [harga, setHarga] = useState("");
  const [jenisTransaksi, setJenisTransaksi] = useState("");
  const [sertifikat, setSertifikat] = useState("");
  const [kamarMandi, setKamarMandi] = useState("");
  const [kamarTidur, setKamarTidur] = useState("");
  const [luasTanah, setLuasTanah] = useState("");
  const [luasBangunan, setLuasBangunan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [kategori, setKategori] = useState("");
  const [product, setProduct] = useState("");
  const [perlengkapanProperti, setPerlengkapanProperti] = useState("");
  const [noHandphone, setNoHandphone] = useState("");
  const [alamat, setAlamat] = useState("");
  const [listrik, setListrik] = useState("");
  const [hadap, setHadap] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageText =
      `Judul Iklan: ${judulIklan}\n` +
      `Jenis Transaksi: ${jenisTransaksi}\n` +
      `Harga: ${harga}\n` +
      `Sertifikat: ${sertifikat}\n` +
      `Kamar Mandi: ${kamarMandi}\n` +
      `Kamar Tidur: ${kamarTidur}\n` +
      `Luas Tanah: ${luasTanah}\n` +
      `Luas Bangunan: ${luasBangunan}\n` +
      `Kategori: ${kategori}\n` +
      `Product: ${product}\n` +
      `Deskripsi: ${deskripsi}\n` +
      `Perlengkapan Properti: ${perlengkapanProperti}\n` +
      `No Tanda Pengenal/KTP: ${noTandaPengenal}\n` +
      `No Handphone: ${noHandphone}\n` +
      `Alamat: ${alamat}\n` +
      `Listrik: ${listrik}\n` +
      `Hadap: ${hadap}\n`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      "+6287789070757"
    )}&text=${encodeURIComponent(messageText)}`;

    window.open(whatsappLink, "_blank");
  };

  // Regex patterns for validation
  const noTandaPengenalRegex = /^[0-9]{16}$/;
  const noHandphoneRegex = /^[0-9]{11,14}$/;
  const nonWhitespaceRegex = /\S/;

  const handleNoTandaPengenalChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const limitedValue = newValue.slice(0, 16); // Limit to 16 characters
    setNoTandaPengenal(limitedValue);

    setIsNumberIdValid(noTandaPengenalRegex.test(limitedValue));
  };

  const handleNoHandphoneChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, ""); // Allow only numeric input
    const limitedValue = newValue.slice(0, 14); // Limit to 14 characters
    setNoHandphone(limitedValue);

    setIsPhoneNumberValid(noHandphoneRegex.test(limitedValue));
  };

  const handleJudulIklanChange = (e) => {
    const newValue = e.target.value;
    setJudulIklan(newValue);
    setIsNamaValid(nonWhitespaceRegex.test(newValue));
  };

  const handleAlamatChange = (e) => {
    const newValue = e.target.value;
    setAlamat(newValue);
    setIsValidAlamat(nonWhitespaceRegex.test(newValue));
  };

  const handleHargaChange = (e) => {
    const newValue = e.target.value;
    setHarga(newValue);
    setIsValidHarga(nonWhitespaceRegex.test(newValue));
  };

  const handleSertChange = (e) => {
    const newValue = e.target.value;
    setSertifikat(newValue);
    setIsValidSert(nonWhitespaceRegex.test(newValue));
  };

  const handleKmChange = (e) => {
    const newValue = e.target.value;
    setKamarMandi(newValue);
    setIsValidKM(nonWhitespaceRegex.test(newValue));
  };

  const handleListrikChange = (e) => {
    const newValue = e.target.value;
    setListrik(newValue);
    setIsValidListrik(nonWhitespaceRegex.test(newValue));
  };

  const handleHadapChange = (e) => {
    const newValue = e.target.value;
    setHadap(newValue);
    setIsValidHadap(nonWhitespaceRegex.test(newValue));
  };

  const handleDescChange = (e) => {
    const newValue = e.target.value;
    setDeskripsi(newValue);
    setIsValidDes(nonWhitespaceRegex.test(newValue));
  };

  const handleKtChange = (e) => {
    const newValue = e.target.value;
    setKamarTidur(newValue);
    setIsValidKT(nonWhitespaceRegex.test(newValue));
  };

  const handleLtChange = (e) => {
    const newValue = e.target.value;
    setLuasTanah(newValue);
    setIsValidLt(nonWhitespaceRegex.test(newValue));
  };

  const handleLbChange = (e) => {
    const newValue = e.target.value;
    setLuasBangunan(newValue);
    setIsValidLb(nonWhitespaceRegex.test(newValue));
  };

  const handleKategoriChange = (e) => {
    const newValue = e.target.value;
    setKategori(newValue);
    setIsValidKategori(nonWhitespaceRegex.test(newValue));
  };

  const handleproductChange = (e) => {
    const newValue = e.target.value;
    setProduct(newValue);
    setIsValidProduct(nonWhitespaceRegex.test(newValue));
  };

  const handleTransaksiChange = (e) => {
    const newValue = e.target.value;
    setJenisTransaksi(newValue);
    setIsValidTransaksi(nonWhitespaceRegex.test(newValue));
  };

  const handlePPChange = (e) => {
    const newValue = e.target.value;
    setPerlengkapanProperti(newValue);
    setIsValidPerProp(nonWhitespaceRegex.test(newValue));
  };

  return (
    <>
      <BottomNavbar primary={"text-primary"} white={"text-primary"} />
      <div className="bg-[#ECECEC] py-16 ">
        <div className="px-4 pt-10 mx-auto containers ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-3 text-3xl font-semibold text-center title ">
              Form Titip Jual/Sewa Properti
            </h1>
            <p className="mb-5 text-base text-center subtitle">
              Kami sangat antusias untuk memberikan bantuan dalam menjual atau
              menyewakan properti Anda. Mohon lengkapi informasi properti pada
              formulir di bawah ini.
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow-md ">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Nama : </label>
                <input
                  className={`bg-gray-50 border ${
                    isNamaValid ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={judulIklan}
                  onChange={handleJudulIklanChange}
                  required
                  placeholder="masukan nama lengkap"
                />
                {!isNamaValid && (
                  <p className="mt-1 text-sm text-red-500">
                    Tolong diisi terlebih dahulu
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">
                  No Tanda Pengenal/KTP :
                </label>
                <input
                  className={`bg-gray-50 border ${
                    isNumberidValid ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={noTandaPengenal}
                  onChange={handleNoTandaPengenalChange}
                  required
                  placeholder="masukan nomor tanda pengenal/ktp"
                />
                {!isNumberidValid && (
                  <p className="mt-1 text-sm text-red-500">
                    Nomor KTP harus memiliki 16 digit angka.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">
                  No Handphone :{" "}
                </label>
                <input
                  className={`bg-gray-50 border ${
                    isPhoneNumberValid ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={formatPhoneNumber(noHandphone)}
                  onChange={handleNoHandphoneChange}
                  placeholder="masukan nomor telepon anda"
                  minLength="11"
                  maxLength="14"
                  required
                />
                {!isPhoneNumberValid && (
                  <p className="mt-1 text-sm text-red-500">
                    Nomor Handphone harus memiliki 11-14 digit angka.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Alamat : </label>
                <input
                  className={`bg-gray-50 border ${
                    isValidAlamat ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={alamat}
                  onChange={handleAlamatChange}
                  required
                  placeholder="masukan nama lengkap"
                />
                {!isValidAlamat && (
                  <p className="mt-1 text-sm text-red-500">
                    Tolong diisi terlebih dahulu
                  </p>
                )}
              </div>
              <div className="desktop:grid desktop:grid-cols-3 desktop:gap-6">
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">Kategori : </label>
                  <select
                    className={`bg-gray-50 border ${
                      isValidKategori ? "border-gray-300" : "border-red-500"
                    } text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    value={kategori}
                    onChange={handleKategoriChange}
                    onBlur={() => setIsValidKategori(kategori !== "")}
                    required
                  >
                    <option value="">Type Property</option>
                    <option value="Rumah">Rumah</option>
                    <option value="Apartemen">Apartemen</option>
                    <option value="Kos">Kos</option>
                    <option value="Tanah">Tanah</option>
                    <option value="Office Space">Office Space</option>
                  </select>
                  {!isValidKategori && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">Product : </label>
                  <select
                    className={`bg-gray-50 border ${
                      isValidProduct ? "border-gray-300" : "border-red-500"
                    } text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    value={product}
                    onChange={handleproductChange}
                    onBlur={() => setIsValidProduct(product !== "")}
                    required
                  >
                    <option value="">Pilih Product</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                  </select>
                  {!isValidProduct && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">
                    Jenis Transaksi :{" "}
                  </label>
                  <select
                    className={`bg-gray-50 border ${
                      isValidTransaksi ? "border-gray-300" : "border-red-500"
                    } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    value={jenisTransaksi}
                    onChange={handleTransaksiChange}
                    onBlur={() => setIsValidTransaksi(jenisTransaksi !== "")}
                    required
                  >
                    <option value="">Pilih Jenis Transaksi</option>
                    <option value="jual">Jual</option>
                    <option value="sewa">Sewa</option>
                    <option value="jual/sewa">Jual/Sewa</option>
                  </select>
                  {!isValidTransaksi && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">
                    Perlengkapan Properti :{" "}
                  </label>
                  <select
                    className={`bg-gray-50 border ${
                      isValidPerProp ? "border-gray-300" : "border-red-500"
                    } text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    value={perlengkapanProperti}
                    onChange={handlePPChange}
                    onBlur={() =>
                      setIsValidPerProp(perlengkapanProperti !== "")
                    }
                    required
                  >
                    <option value="">Perlengkapan Properti</option>
                    <option value="Furnished">Furnished</option>
                    <option value="Unfurnish">Unfurnish</option>
                    <option value="SemiFurnished">SemiFurnished</option>
                  </select>
                  {!isValidPerProp && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">Harga : </label>
                  <input
                    className={`bg-gray-50 border ${
                      isValidHarga ? "border-gray-300" : "border-red-500"
                    } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    type="text"
                    value={harga}
                    onChange={handleHargaChange}
                    required
                    placeholder="masukan harga"
                  />
                  {!isValidHarga && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">
                    Sertifikat :{" "}
                  </label>
                  <input
                    className={`bg-gray-50 border ${
                      isValidSert ? "border-gray-300" : "border-red-500"
                    } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    type="text"
                    value={sertifikat}
                    onChange={handleSertChange}
                    required
                    placeholder="masukan sertifikat"
                  />
                  {!isValidSert && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">
                    Kamar Mandi :{" "}
                  </label>
                  <input
                    className={`bg-gray-50 border ${
                      isValidKM ? "border-gray-300" : "border-red-500"
                    } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    type="text"
                    value={kamarMandi}
                    onChange={handleKmChange}
                    required
                    placeholder="masukan jumlah kamar mandi"
                  />
                  {!isValidKM && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">
                    Kamar Tidur :{" "}
                  </label>
                  <input
                    className={`bg-gray-50 border ${
                      isValidKT ? "border-gray-300" : "border-red-500"
                    } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    type="text"
                    value={kamarTidur}
                    onChange={handleKtChange}
                    required
                    placeholder="masukan jumlah kamar tidur"
                  />
                  {!isValidKT && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">
                    Luas Tanah :{" "}
                  </label>
                  <input
                    className={`bg-gray-50 border ${
                      isValidLt ? "border-gray-300" : "border-red-500"
                    } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    type="text"
                    value={luasTanah}
                    onChange={handleLtChange}
                    required
                    placeholder="masukan jumlah luas tanah"
                  />
                  {!isValidLt && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">
                    Luas Bangunan :{" "}
                  </label>
                  <input
                    className={`bg-gray-50 border ${
                      isValidLb ? "border-gray-300" : "border-red-500"
                    } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    type="text"
                    value={luasBangunan}
                    onChange={handleLbChange}
                    required
                    placeholder="masukan jumlah luas bangunan"
                  />
                  {!isValidLb && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">Listrik : </label>
                  <input
                    className={`bg-gray-50 border ${
                      isValidListrik ? "border-gray-300" : "border-red-500"
                    } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    type="text"
                    value={listrik}
                    onChange={handleListrikChange}
                    required
                    placeholder="masukan kwh listrik"
                  />
                  {!isValidListrik && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium ">Hadap : </label>
                  <input
                    className={`bg-gray-50 border ${
                      isValidHadap ? "border-gray-300" : "border-red-500"
                    } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                    type="text"
                    value={hadap}
                    onChange={handleHadapChange}
                    required
                    placeholder="masukan hadap"
                  />
                  {!isValidHadap && (
                    <p className="mt-1 text-sm text-red-500">
                      Tolong diisi terlebih dahulu
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Deskripsi : </label>
                <textarea
                  className={`bg-gray-50 border ${
                    isValidDes ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  value={deskripsi}
                  onChange={handleDescChange}
                  rows="4"
                  required
                  placeholder="masukan deskripsi untuk keterangan tentang properti yang ingin dijual/disewa"
                />
                {!isValidDes && (
                  <p className="mt-1 text-sm text-red-500">
                    Tolong diisi terlebih dahulu
                  </p>
                )}
              </div>
              <button
                className="px-4 py-2 mb-5 text-white rounded bg-bg hover:bg-accent/70"
                type="submit"
              >
                Kirim ke WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyForm;
