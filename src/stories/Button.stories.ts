// Button.stories.ts

import { Story } from '@storybook/angular/types-6-0';
import { Meta } from '@storybook/angular/types-6-0';
import { NzDemoButtonBasicComponent } from '../app/modules/button/button.component';
import { ButtonModule } from '../app/modules/button/button.module'
export default {
  title: 'NzDemoButtonBasicComponent',
  component: NzDemoButtonBasicComponent,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<NzDemoButtonBasicComponent> = (args) => {
  return {
    moduleMetadata: {
      imports: [
        ButtonModule // the ngzorro modules that you want to use
      ]
    },
    props: args,
  }
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {};
