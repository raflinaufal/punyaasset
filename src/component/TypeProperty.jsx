import React, { useState, useEffect, useRef } from "react";

const TypeProperty = ({ onCityChange, onTypeChange }) => {
  const [cities, setCities] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [isCityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [isTypeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const cityDropdownRef = useRef(null);
  const typeDropdownRef = useRef(null);

  const toggleCityDropdown = () => {
    setCityDropdownOpen(!isCityDropdownOpen);
  };

  const toggleTypeDropdown = () => {
    setTypeDropdownOpen(!isTypeDropdownOpen);
  };

  const handleCityChange = (cityName) => {
    if (selectedCity === cityName) {
      // Clear the selected city
      setSelectedCity("");
      onCityChange(""); // Pass an empty string to indicate no city selected
    } else {
      setSelectedCity(cityName);
      onCityChange(cityName);
    }

    toggleCityDropdown();
  };

  const handleTypeChange = (typeName) => {
    if (selectedType === typeName) {
      // Clear the selected type
      setSelectedType("");
      onTypeChange(""); // Pass an empty string to indicate no type selected
    } else {
      setSelectedType(typeName);
      onTypeChange(typeName);
    }

    toggleTypeDropdown();
  };

  const handleReset = () => {
    // Clear selected city and type
    setSelectedCity("");
    setSelectedType("");
    // Notify parent components about the reset
    onCityChange("");
    onTypeChange("");
  };

  const handleClickOutside = (event) => {
    if (
      cityDropdownRef.current &&
      !cityDropdownRef.current.contains(event.target)
    ) {
      setCityDropdownOpen(false);
    }

    if (
      typeDropdownRef.current &&
      !typeDropdownRef.current.contains(event.target)
    ) {
      setTypeDropdownOpen(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
        const apiData = await response.json();

        // Extract cities
        const citiesFromApi = apiData.products.map((product) => ({
          id: product.kota[0].id,
          name: product.kota[0].name,
        }));

        const uniqueCities = Array.from(
          new Set(citiesFromApi.map((city) => city.id))
        ).map((id) => citiesFromApi.find((city) => city.id === id));

        setCities(uniqueCities);

        // Extract property types
        const propertyTypesFromApi = apiData.products.map((product) => ({
          id: product.typeproperty[0].id,
          name: product.typeproperty[0].name,
        }));

        const uniquePropertyTypes = Array.from(
          new Set(propertyTypesFromApi.map((type) => type.name))
        ).map((name) => ({
          id: name,
          name: name,
        }));

        setPropertyTypes(uniquePropertyTypes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-wrap pt-2 gap-x-2">
      <div className="relative inline-block" ref={cityDropdownRef}>
        <button
          onClick={toggleCityDropdown}
          className="p-2 text-sm border rounded-md shadow-md focus:outline-none focus:text-white focus:bg-bg mobile:truncate"
        >
          {selectedCity ? selectedCity : "Pilih Lokasi"}
        </button>
        {isCityDropdownOpen && (
          <div className="absolute left-0 z-20 w-48 mt-1 overflow-y-auto bg-white border rounded-md shadow-md max-h-48">
            <ul>
              <li
                onClick={() => handleCityChange("")}
                className="p-2 text-sm cursor-pointer hover:bg-bg hover:text-white "
              >
                Pilih Lokasi
              </li>
              {cities.map((city) => (
                <li
                  key={city.id}
                  onClick={() => handleCityChange(city.name)}
                  className="p-2 text-sm cursor-pointer hover:bg-bg hover:text-white"
                >
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative inline-block" ref={typeDropdownRef}>
        <button
          onClick={toggleTypeDropdown}
          className="p-2 text-sm border rounded-md shadow-md w-54 focus:outline-none focus:text-white focus:bg-bg mobile:truncate"
        >
          {selectedType ? selectedType : "Pilih Kondisi"}
        </button>
        {isTypeDropdownOpen && (
          <div className="absolute left-0 z-20 w-48 mt-1 overflow-y-auto bg-white border rounded-md shadow-md max-h-48">
            <ul>
              <li
                onClick={() => handleTypeChange("")}
                className="p-2 text-sm cursor-pointer hover:bg-bg hover:text-white"
              >
                Pilih Kondisi
              </li>
              {propertyTypes.map((type) => (
                <li
                  key={type.id}
                  onClick={() => handleTypeChange(type.name)}
                  className="p-2 text-sm cursor-pointer hover:bg-bg hover:text-white"
                >
                  {type.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* <button
        onClick={handleReset}
        className="p-2 text-sm border rounded-md shadow-md focus:outline-none focus:bg-bg focus:text-white"
      >
        Reset
      </button> */}
    </div>
  );
};

export default TypeProperty;
