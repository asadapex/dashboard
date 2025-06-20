import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const TicketCreate = () => {
  let kun = new Date();
  const navigate = useNavigate();
  let dateTime = `${kun.getDate().toString().padStart(2, 0)}.${(
    kun.getMonth() + 1
  )
    .toString()
    .padStart(2, 0)}.${kun.getFullYear()}`;
  const { ticketsList, setTicketsList } = useContext(Context);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [createdAt, setCreatedAt] = useState(dateTime);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      comment,
      name,
      date,
      priority,
      imgURL,
      createdAt,
      updatedAt: dateTime,
    };
    setTicketsList([...ticketsList, data]);
  };

  return (
    <form className="flex flex-wrap items-center space-x-10" autoComplete="off">
      <div className="flex flex-col gap-[10px] mt-[10px]">
        <h2 className="font-semibold text-[26px]">Comment</h2>
        <input
          className="w-[350px] h-[45px] pl-[5px] border-[#9FA2B4] border-[1px] rounded-[5px]"
          type="text"
          name="comment"
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment..."
        />
      </div>
      <div className="flex flex-col gap-[10px] mt-[10px]">
        <h2 className="font-semibold text-[26px]">Name</h2>
        <input
          className="w-[350px] h-[45px] pl-[5px] border-[#9FA2B4] border-[1px] rounded-[5px]"
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name..."
        />
      </div>
      <div className="flex flex-col gap-[10px] mt-[10px]">
        <h2 className="font-semibold text-[26px]">Flight Date</h2>
        <input
          className="w-[350px] h-[45px] pl-[5px] border-[#9FA2B4] border-[1px] rounded-[5px]"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          name="flightDate"
        />
      </div>
      <div className="flex flex-col gap-[10px] mt-[10px]">
        <h2 className="font-semibold text-[26px]">Flight Time</h2>
        <input
          className="w-[350px] h-[45px] pl-[5px] border-[#9FA2B4] border-[1px] rounded-[5px]"
          type="time"
          onChange={(e) => setDate(e.target.value)}
          name="flightTime"
        />
      </div>

      <div className="flex flex-col gap-[10px] mt-[10px]">
        <h2 className="font-semibold text-[26px]">Priority</h2>
        <select
          className="w-[350px] h-[45px] pl-[5px] border-[#9FA2B4] border-[1px] rounded-[5px]"
          name="priority"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">LOW</option>
          <option value="normal">NORMAL</option>
          <option value="high">HIGH</option>
        </select>
      </div>

      <label htmlFor="file" className="mt-[25px]">
        <span>Upload image</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImgURL(URL.createObjectURL(e.target.files[0]))}
          name="file"
          id="file"
          className="hidden"
        />
      </label>

      <button
        onClick={handleSubmit}
        className="bg-[#363740] py-[10px] px-[40px] rounded-2xl text-white font-bold mt-[50px] ml-[80px]"
      >
        Create
      </button>
    </form>
  );
};

export default TicketCreate;
