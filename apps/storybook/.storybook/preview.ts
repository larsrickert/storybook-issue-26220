import { Preview } from "@storybook/vue3-vite";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      // needed to also show props/events descriptions etc. when opening a single story
      expanded: true,
    },
  },
};

export default preview;
