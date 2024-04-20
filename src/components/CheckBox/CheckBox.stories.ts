import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "./CheckBox";

const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "checkbox-id",
    label: "CheckBox",
  },
};
export const Checked: Story = {
  args: {
    id: "checkbox-id",
    label: "CheckBox",
    checked: true,
  },
};
export const Disabled: Story = {
  args: {
    id: "checkbox-id",
    label: "CheckBox",
    disabled: true,
  },
};
