import FormInput from "../FormInput";

const MainProfile = () => {
  return (
    <div>
      <div>
        <FormInput
          label={"FirstName"}
          name={"FirstName"}
          type={"text"}
          defaultValue={"First Name"}
          size={"input-md"}
        />
        <FormInput
          label={"LastName"}
          name={"LastName"}
          type={"text"}
          defaultValue={"Last Name"}
          size={"input-md"}
        />
        <FormInput
          label={"Email"}
          name={"Email"}
          type={"email"}
          defaultValue={"Email"}
          size={"input-md"}
        />
      </div>
    </div>
  );
};

export default MainProfile;
