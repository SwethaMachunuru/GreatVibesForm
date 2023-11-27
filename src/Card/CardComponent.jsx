import React from "react";
import CustomButton from "./CustomButton";
import Icon from "../Icon.png";

const CardComponent = ({
  Height,
  Width,
  FontSize,
  FontWeight,
  ButtonText,
  JobTitle,
  FontStyle,
  CompanyName,
  Font16,
  Industry,
  RemoteType,
  Location,
  JobType,
  MinimumExperience,
  MaximumExperience,
  MinimumSalary,
  MaximumSalary,
  MinNumberOfEmployee,
  MaxNumberOfEmployee,
  ButtonVariant,
  GreyColor,
  BlackColor
}) => {
  return (
    <div
      style={{
        height: Height,
        width: Width,
        fontSize: Font16,
        fontWeight: FontWeight,
        fontStyle: FontStyle,
      }}
      className="border border-solid rounded-xl font-poppins font-normal"
    >
      <div className="my-4 mx-6">
        <div className="flex flex-row">
          <div className="h-12 w-12">
            <img src={Icon} alt="" />
          </div>

          <div className="ml-2">
            <div
              style={{
                fontSize: FontSize,
                fontWeight: FontWeight,
                fontStyle: FontStyle,
                color: BlackColor,
              }}
            >
              {JobTitle}
            </div>
            <div style={{ fontSize: Font16, color: BlackColor }}>
              {CompanyName} - <span>{Industry}</span>
            </div>
            <div style={{ fontSize: Font16, color: GreyColor }}>
              {Location}
              <span>({RemoteType})</span>
            </div>
            <div
              style={{ fontSize: Font16, color: BlackColor }}
              className="mt-6 mb-1"
            >
              {JobType}
            </div>
            <div style={{ fontSize: Font16, color: BlackColor }} className="mb-2">
              Experience
              <span>
                ({MinimumExperience} - {MaximumExperience} years)
              </span>
            </div>
            <div style={{ fontSize: Font16, color: BlackColor }} className="mb-2">
              INR
              <span>
                (<span>&#8377;</span>)({MinimumSalary} - {MaximumSalary} / Month)
              </span>
            </div>
            <div style={{ fontSize: Font16, color: BlackColor }}>
              <span>
                {MinNumberOfEmployee} - {MaxNumberOfEmployee} employees
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 ml-14 focus:outline-none rounded-xl">
          <CustomButton variant={ButtonVariant}>{ButtonText}</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
