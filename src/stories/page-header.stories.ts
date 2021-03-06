
import { Meta, Story } from '@storybook/angular';

import {HeaderComponent} from '../app/modules/header/header.component';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
} as Meta;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<HeaderComponent> = (args) => ({
  props: args,
});

export const YourStory = Template.bind({});
YourStory.args = {
  /* ๐ The args you need here will depend on your component */

};