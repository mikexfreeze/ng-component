// Button.stories.ts

import { Story } from '@storybook/angular/types-6-0';
import { Meta } from '@storybook/angular/types-6-0';
import { TnTableV1Module } from './../app/modules/tn-table-v1/tn-table-v1.module';
import { TnTableV1Component } from './../app/modules/tn-table-v1/tn-table-v1.component';

export default {
  title: 'TnTableV1Component',
  component: TnTableV1Component,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<TnTableV1Component> = (args) => {
  return {
    moduleMetadata: {
      imports: [
        TnTableV1Module // the ngzorro modules that you want to use
      ]
    },
    props: args,
  }
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  titles: ["Name", "Age", "Address", "Action"],
  nzData: [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ]
};
