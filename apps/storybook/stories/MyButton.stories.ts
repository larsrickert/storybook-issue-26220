import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { MyButton } from "ui";

const meta: Meta<typeof MyButton> = {
  component: MyButton,
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Default = {
  args: {
    label: "Example button",
  },
} satisfies Story;
