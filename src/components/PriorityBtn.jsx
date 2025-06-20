const PriorityBtn = ({ id }) => {
  return (
    <button
      className={`py-[5px] ${
        id == 0 ? "bg-[#F12B2C]" : id == 1 ? "bg-[#FEC400]" : "bg-[#29CC97]"
      } uppercase px-[12px] text-[11px] rounded-[100px] font-bold text-[#FFFFFF]`}
    >
      {id == 0 ? "high" : id == 1 ? "low" : "normal"}
    </button>
  );
};

export default PriorityBtn;
