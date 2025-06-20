import React, { useState } from "react";
import TicketItem from "../components/TicketItme";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const [ticketsList, setTicketsList] = useState(
    JSON.parse(localStorage.getItem("tickets")) || []
  );
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-[48px] border-[1.5px] border-[#9FA2B4] p-[32px] rounded-[8px]">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[19px]">All tickets</h3>
        <button
          onClick={() => navigate("create")}
          className="bg-[#363740] text-white py-[5px] px-[30px] cursor-pointer rounded-2xl"
        >
          create
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="font-bold text-[#9FA2B4] text-[14px]">
            <th className="text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB] pl-[32px]">
              Ticket details
            </th>
            <th className="text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB]">
              Customer name
            </th>
            <th className="text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB]">
              Date
            </th>
            <th className="text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB] pr-[32px]">
              Priority
            </th>
          </tr>
        </thead>

        <tbody>
          {ticketsList.map((item) => (
            <TicketItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tickets;
