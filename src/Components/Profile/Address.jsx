import React from "react";
import { FormInput } from "../../components";
import { Form } from "react-router-dom";

const Address = () => {
  return (
    <div>
      <Form>
        <FormInput
          label={"Full Name"}
          name={"fullName"}
          type={"text"}
          defaultValue={"Full Name"}
          size={"input-md"}
        />
        <FormInput
          label={"Mobile number"}
          name={"mobileNumber"}
          type={"text"}
          defaultValue={"Mobile Number"}
          size={"input-md"}
        />
        <FormInput
          label={"House no. Building, company, Aprtment, Flat"}
          name={"localNumber"}
          type={"text"}
          defaultValue={"Local Number"}
          size={"input-md"}
        />
        <FormInput
          label={"Town/City"}
          name={"city"}
          type={"text"}
          defaultValue={"Town/City"}
          size={"input-md"}
        />
        <FormInput
          label={"State"}
          name={"state"}
          type={"text"}
          defaultValue={"State"}
          size={"input-md"}
        />
      </Form>
    </div>
  );
};

export default Address;
