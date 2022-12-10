// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
import Button from 'src/stories/button.component';
import { Meta, Story } from '@storybook/angular/types-6-0';
import ExchangeRateCardComponent from 'src/app/exchange-rates/exchange-rate-card.component';

export default {
  title: 'Example/ExchangeRateCard',
  component: ExchangeRateCardComponent,
} as Meta;

const Template: Story<ExchangeRateCardComponent> = (args: ExchangeRateCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  rate: {rate: "123345", currency: "USD"}
};
