import React from "react";

const CreateFormComponentStep1 = ({
  Height,
  Width,
  FontWeight400,
  FontSize20,
  FontWeight500,
  FontSize16,
  FontSize14,
  JobTitleHeading,
  CompanyNameHeading,
  IndustryHeading,
  LocationHeading,
  RemoteTypeHeading,
  JobTitlePlaceHolder,
  CompanyNamePlaceHolder,
  IndustryPlaceHolder,
  LocationPlaceHolder,
  RemoteTypePlaceHolder,
  ButtonText
}) => {
  return (
    <div className="flex font-poppins font-normal">
        <form
          class="bg-white border border-solid border-gray-300 rounded-xl p-8"
          style={{ height: Height, width: Width }}
        >
          <div className="flex justify-between">
            <span
              className="flex-initial"
              style={{ fontSize: FontSize20, fontWeight: FontWeight400 }}
            >
              Create a Job
            </span>
            <span
              className="flex-initial"
              style={{ fontSize: FontSize16, fontWeight: FontWeight500 }}
            >
              Step 1
            </span>
          </div>
          <div class="mt-6">
            <label
              class="block text-gray-700"
              style={{ fontSize: FontSize14, fontWeight: FontWeight500 }}
              for="jobTitle"
            >
              {JobTitleHeading}
              <span className="text-red-500">*</span>
            </label>
            <input
            style={{fontSize: FontSize14, fontWeight: FontWeight400}}
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder={JobTitlePlaceHolder}
            />
          </div>
          <div class="mt-6">
            <label class="block text-gray-700 text-sm" for="companyName">
              {CompanyNameHeading}
              <span className="text-red-500">*</span>
            </label>
            <input
            style={{fontSize: FontSize14, fontWeight: FontWeight400}}
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder={CompanyNamePlaceHolder}
            />
          </div>
          <div class="mt-4">
            <label class="block text-gray-700 text-sm" for="industry">
              {IndustryHeading}
              <span className="text-red-500">*</span>
            </label>
            <input
            style={{fontSize: FontSize14, fontWeight: FontWeight400}}
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="industry"
              type="text"
              placeholder={IndustryPlaceHolder}
            />
          </div>
          <div class="mt-6 flex flex-column space-x-6">
            <div>
              <label class="block text-gray-700 text-sm" for="location">
                {LocationHeading}
              </label>
              <input
              style={{fontSize: FontSize14, fontWeight: FontWeight400}}
                class="w-60 appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                placeholder={LocationPlaceHolder}
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm" for="remoteType">
                {RemoteTypeHeading}
              </label>
              <input
              style={{fontSize: FontSize14, fontWeight: FontWeight400}}
                class="w-60 appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="remoteType"
                type="text"
                placeholder={RemoteTypePlaceHolder}
              />
            </div>
          </div>
          <div class="flex justify-end mt-20">
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
  );
};

export default CreateFormComponentStep1;
