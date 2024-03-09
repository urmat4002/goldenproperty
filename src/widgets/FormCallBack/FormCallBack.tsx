import { Form } from "@/features";
import { Section } from "@/features";
import { useGetStaticData } from "@/shared/api/hooks";
import { useInnerWidthExceedsDefault } from "@/shared/helper/ScreenWidthTracker";

export const FormCallBack = () => {
  const state = useInnerWidthExceedsDefault({ defaultThreshold: 768 });
  const { data } = useGetStaticData();

  return (
    <Section title={data?.static_data.forms.contact_us} container={state}>
      <Form variant="consultation" />
    </Section>
  );
};
