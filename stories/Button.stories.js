import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction


export const sizeMapping = {
  '': 'None',
  'small': 'small',
  'medium': 'medium',
  'large': 'large'
};

export const sizeLabels = {
  '': 'None',
  'small': 'Small',
  'medium': 'Medium',
  'large': 'Large'
};

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      options: Object.keys(sizeMapping),
      mapping: sizeMapping,
      control: {
        labels: sizeLabels
      }
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
