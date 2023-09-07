import { Form } from "react-router-dom";
import FormInput from "../FormInput";

const Authentication = () => {
  return (
    <div>
      <Form>
        <FormInput
          label={"New Password"}
          name={"password"}
          type={"password"}
          defaultValue={""}
          size={"input-md"}
        />
        <FormInput
          label={"Confirm Password"}
          name={"password"}
          type={"password"}
          defaultValue={""}
          size={"input-md"}
        />
      </Form>
    </div>
  );
};

export default Authentication;
