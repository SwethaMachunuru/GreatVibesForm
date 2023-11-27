import CardComponent from "./Card/CardComponent";
import CreateFormComponentStep1 from "./CreateForm/CreateFormComponentStep1";
import CreateFormComponentStep2 from "./CreateForm/CreateFormComponentStep2";

function App() {
  return (
    <div className="m-8">
      <div className="flex flex-row space-x-4">
        <CreateFormComponentStep1
          Height="auto"
          Width="577px"
          FontSize20="20px"
          FontWeight400="400"
          FontWeight500="500"
          FontSize14="14px"
          JobTitleHeading="Job title"
          JobTitlePlaceHolder="ex.UX UI Designer"
          CompanyNameHeading="Company name"
          CompanyNamePlaceHolder="ex.Google"
          IndustryHeading="Industry"
          IndustryPlaceHolder="ex.Information Technology"
          LocationHeading="Location"
          LocationPlaceHolder="ex.Chennai"
          RemoteTypeHeading="Remote type"
          RemoteTypePlaceHolder="ex.In-office"
          ButtonText="Next"
        />
        <CreateFormComponentStep2
          Height="auto"
          Width="577px"
          FontSize20="20px"
          FontWeight400="400"
          FontWeight500="500"
          FontSize14="14px"
          ExperienceTextHeading="Experience"
          SalaryNameHeading="Salary"
          TotalEmployeeTextHeading="Total employee"
          ApplyTypeTextHeading="Apply type"
          ApplyTypeOption1="Quick apply"
          ApplyTypeOption2="External Apply"
          MinimumTextPlaceHolder="Minimum"
          MaximumTextPlaceHolder="Maximum"
          TotalEmployeePlaceHolder="ex.100"
          ButtonText="Save"
        />
      </div>
      <div className="mt-4">
        <CardComponent
          ButtonText="Apply Now"
          Height="320px"
          Width="830px"
          JobTitle="UI UX Designer"
          FontSize="20px"
          FontStyle="normal"
          CompanyName="Great Vibes"
          Font16="14px"
          Industry="Information Technology"
          Location="Chennai, Tamilnadu,"
          RemoteType="In-office"
          JobType="Part-Time(9.00 am - 5.00 pm IST)"
          MinimumExperience="1"
          MaximumExperience="2"
          MinimumSalary="30,000"
          MaximumSalary="60,000"
          MinNumberOfEmployee="51"
          MaxNumberOfEmployee="200"
          ButtonVariant="primary"
          GreyColor="#646464"
          BlackColor="#000"
        />
      </div>
      <div className="mt-4">
        <CardComponent
          ButtonText="Apply Now"
          Height="320px"
          Width="830px"
          JobTitle="Developer"
          FontSize="20px"
          FontStyle="normal"
          CompanyName="Great Vibes"
          Font16="14px"
          Industry="Information Technology"
          Location="Chennai, Tamilnadu,"
          RemoteType="In-office"
          JobType="Part-Time(9.00 am - 5.00 pm IST)"
          MinimumExperience="1"
          MaximumExperience="2"
          MinimumSalary="50,000"
          MaximumSalary="70,000"
          MinNumberOfEmployee="51"
          MaxNumberOfEmployee="200"
          ButtonVariant="primary"
          GreyColor="#646464"
          BlackColor="#000"
        />
      </div>
      <div className="mt-4">
        <CardComponent
          ButtonText="External Apply"
          Height="320px"
          Width="830px"
          JobTitle="SEO Analyst"
          FontSize="20px"
          FontStyle="normal"
          CompanyName="Great Vibes"
          Font16="14px"
          Industry="Information Technology"
          Location="Chennai, Tamilnadu,"
          RemoteType="In-office"
          JobType="Part-Time(9.00 am - 5.00 pm IST)"
          MinimumExperience="1"
          MaximumExperience="2"
          MinimumSalary="30,000"
          MaximumSalary="50,000"
          MinNumberOfEmployee="51"
          MaxNumberOfEmployee="200"
          ButtonVariant="secondary"
          GreyColor="#646464"
          BlackColor="#000"
        />
      </div>
      <div className="mt-4">
        <CardComponent
          ButtonText="External Apply"
          Height="320px"
          Width="830px"
          JobTitle="Interaction Designer"
          FontSize="20px"
          FontStyle="normal"
          CompanyName="Great Vibes"
          Font16="14px"
          Industry="Information Technology"
          Location="Chennai, Tamilnadu,"
          RemoteType="In-office"
          JobType="Part-Time(9.00 am - 5.00 pm IST)"
          MinimumExperience="1"
          MaximumExperience="2"
          MinimumSalary="30,000"
          MaximumSalary="50,000"
          MinNumberOfEmployee="51"
          MaxNumberOfEmployee="200"
          ButtonVariant="secondary"
          GreyColor="#646464"
          BlackColor="#000"
        />
      </div>
    </div>
  );
}

export default App;
