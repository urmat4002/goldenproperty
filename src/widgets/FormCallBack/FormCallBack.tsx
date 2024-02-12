import { Form } from "@/features";
import { Section } from "@/features";
import { useInnerWidthExceedsDefault } from "@/shared/helper/ScreenWidthTracker";

export const FormCallBack = () => {
  const state = useInnerWidthExceedsDefault({ defaultThreshold: 768 });

  return (
    <Section title="Contact Us" container={state}>
      <Form
        title="Do you have any questions?"
        subTitle="Leave your contacts and we will get in touch"
      />
    </Section>
  );
};
