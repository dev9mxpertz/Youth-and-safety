type DropDownItem = {
  icon: React.FC;
  link: string;
  item: string;
};

type DropDownProps = {
  Iconprop: React.FC;
  heading: string;
  DataArray: DropDownItem[];
  showDropDown: boolean;
  setShowDropDown: () => void;
};

export default function DropDown(props: DropDownProps) {
  const { heading, Iconprop, DataArray, setShowDropDown, showDropDown } = props;

  return (
    <div>
      <div className="relative inline-block text-left  ">
        <div>
          <button
            className="inline-flex w-full justify-center gap-x-1.5 rounded-[50px] bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50 border-[#E0E0E0] border-[1px]"
            onClick={setShowDropDown}
          >
            <Iconprop />
            <p className="text-[#757575] font-normal text-[12px] ">{heading}</p>
          </button>
        </div>
        {showDropDown ? (
          <ul className="w-[13rem] absolute right-0 z-10 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <li className="flex px-4 py-3 text-sm text-gray-700 gap-3">
              <p className="text-[#9E9E9E] font-normal text-[12px] ">
                {heading}
              </p>
            </li>
            {DataArray.map((item, index) => (
              <li
                className="flex px-4 py-3 text-sm text-gray-700 gap-3"
                key={index}
              >
                <item.icon />
                <p className="text-[#404040] font-normal text-sm ">
                  {item.item}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
