// Button.stories.ts

import { Story } from '@storybook/angular/types-6-0';
import { Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
  title: 'Example/button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    // Now all Button stories will be primary.
    primary: true,
  },
} as Meta;

//π We create a βtemplateβ of how args map to rendering
const Template: Story<Button> = (args) => ({
  props: args,
});

//π Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { label: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: 'ππππ―' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: 'ππππ€' };