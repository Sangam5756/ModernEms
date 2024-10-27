import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c1c] mt-7 rounded">
      <form className="flex w-full  flex-wrap justify-between items-start">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400"
              placeholder="Make ui Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              type="text"
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400"
              placeholder="EmployeName"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400"
              placeholder="design,dev etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start ">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            cols="50"
            className="text-sm py-1 px-2 w-4/5  rounded  outline-none bg-transparent border-[1px] border-gray-400"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-2 hover:bg-emerald-600 px-5 rounded text-sm mt-4  w-[410px]">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
