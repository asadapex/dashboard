import React from "react";
import { useNavigate } from "react-router-dom";
import PriorityBtn from "./PriorityBtn";

const TicketItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td className="pl-[32px] py-[24px] border-b-[1.5px] border-[#DFE0EB]">
        <div className="flex items-center gap-[24px]">
          <img
            className="rounded-full w-[44px] h-[44px]"
            src={item.imgURL}
            alt="Avatar Icon"
            width={44}
            height={44}
          />
          <div>
            <p className="text-[14px] text-[#252733] font-semibold">
              {item.comment}
            </p>
            <span className="text-[12px] text-[#C5C7CD]">
              {item.updatedAt ? item.updatedAt : "..."}
            </span>
          </div>
        </div>
      </td>
      <td className="py-[24px] border-b-[1.5px] border-[#DFE0EB] text-start">
        <strong className="font-semibold text-[14px] text-[#252733]">
          {item.username}
        </strong>
        <p className="text-[#C5C7CD] text-[12px]">on {item.createdAt}</p>
      </td>
      <td className="py-[24px] border-b-[1.5px] border-[#DFE0EB] text-start">
        <strong className="font-semibold text-[14px] text-[#252733]">
          {item.flightDate}
        </strong>
        <p className="text-[#C5C7CD] text-[12px]">{item.flightTime}</p>
      </td>
      <td className="py-[24px] pr-[32px] border-b-[1.5px] border-[#DFE0EB] text-start">
        <div className="flex items-center justify-between">
          <PriorityBtn id={item.priorityId} />
          <MoreIcon onClick={() => navigate(`${item.id}`)} />
        </div>
      </td>
    </tr>
  );
};

export default TicketItem;
