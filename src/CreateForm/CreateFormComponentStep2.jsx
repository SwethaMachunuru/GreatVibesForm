import React from "react";

const CreateFormComponentStep2 = ({
  Height,
  Width,
  FontWeight400,
  FontSize20,
  FontWeight500,
  FontSize16,
  FontSize14,
  ExperienceTextHeading,
  SalaryNameHeading,
  TotalEmployeeTextHeading,
  ApplyTypeTextHeading,
  ApplyTypeOption1,
  ApplyTypeOption2,
  MinimumTextPlaceHolder,
  MaximumTextPlaceHolder,
  ButtonText,
  TotalEmployeePlaceHolder
}) => {
  return (
    <div className="flex">
      <div class="font-poppins font-normal">
        <form
          class="bg-white border border-solid border-gray-300 rounded-xl p-8"
          style={{ height: Height, width: Width }}
        >
          <div className="flex justify-between ">
            <span style={{ fontSize: FontSize20, fontWeight: FontWeight400 }}>
              Create a Job
            </span>
            <span style={{ fontSize: FontSize16, fontWeight: FontWeight500 }}>
              Step 2
            </span>
          </div>
          <div class="mt-6">
            <label
              class="block text-gray-700"
              style={{ fontSize: FontSize14, fontWeight: FontWeight500 }}
              for="experience"
            >
              {ExperienceTextHeading}
            </label>
            <div class="mt-2 flex flex-column space-x-6">
              <input
              style={{fontSize: FontSize14, fontWeight: FontWeight400}}
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="minimum"
                type="text"
                placeholder={MinimumTextPlaceHolder}
              />
              <input
              style={{fontSize: FontSize14, fontWeight: FontWeight400}}
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="maximum"
                type="text"
                placeholder={MaximumTextPlaceHolder}
              />
            </div>
          </div>
          <div class="mt-4">
            <label
              class="block text-gray-700"
              style={{ fontSize: FontSize14, fontWeight: FontWeight500 }}
              for="salary"
            >
              {SalaryNameHeading}
            </label>
            <div class="mt-2 flex flex-column space-x-6">
              <input
              style={{fontSize: FontSize14, fontWeight: FontWeight400}}
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="minimumSalary"
                type="text"
                placeholder={MinimumTextPlaceHolder}
              />
              <input
              style={{fontSize: FontSize14, fontWeight: FontWeight400}}
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="maximumSalary"
                type="text"
                placeholder={MaximumTextPlaceHolder}
              />
            </div>
          </div>
          <div class="mt-4">
            <label
              class="block text-gray-700"
              style={{ fontSize: FontSize14, fontWeight: FontWeight500 }}
              for="totalEmployee"
            >
              {TotalEmployeeTextHeading}
            </label>
            <input
            style={{fontSize: FontSize14, fontWeight: FontWeight400}}
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="totalEmployee"
              type="text"
              placeholder={TotalEmployeePlaceHolder}
            />
          </div>

          <label
            className="block text-gray-700 mt-4"
            style={{ fontSize: FontSize14, fontWeight: FontWeight500 }}
          >
            {ApplyTypeTextHeading}
          </label>

          <div className="mt-4 flex flex-row">
            <div className="flex items-center flex-row">
              <input
              style={{fontSize: FontSize14, fontWeight: FontWeight400}}
                type="radio"
                className="form-radio text-blue-500 border-gray-300"
                name="applyType"
                id="quickApply"
                value="quickApply"
              />
              <label
                htmlFor="quickApply"
                className="ml-1 text-sm text-gray-700"
              >
                {ApplyTypeOption1}
              </label>
            </div>
            <div className="flex items-center ml-4">
              <input
                type="radio"
                style={{fontSize: FontSize14, fontWeight: FontWeight400}}
                className="form-radio text-blue-500 border-gray-300"
                name="applyType"
                id="externalApply"
                value="externalApply"
              />
              <label
                htmlFor="externalApply"
                className="ml-1 text-sm text-gray-700"
              >
                {ApplyTypeOption2}
              </label>
            </div>
          </div>
          <div class="flex justify-end mt-24">
            <button
            style={{fontSize: FontSize16, fontWeight: FontWeight500}}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              {ButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFormComponentStep2;
