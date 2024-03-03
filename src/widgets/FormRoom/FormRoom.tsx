import { Form, Section } from "@/features";
import { useGetStaticForms } from "@/shared/api/hooks";

export const FormRoom = () => {
  const { data } = useGetStaticForms();
  return (
    <Section container>
      <Form
        title={data?.forms.submit_application}
        subTitle={data?.forms.fill_form}
      />
    </Section>
  );
};
