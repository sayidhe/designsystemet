import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from './';

const meta: Meta<typeof Paragraph> = {
  title: 'Felles/Typography/Paragraph',
  component: Paragraph,
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Preview: Story = {
  args: {
    children:
      'Personvernerklæringen gir informasjon om hvilke personopplysninger vi behandler, hvordan disse blir behandlet og hvilke rettigheter du har.',
    spacing: false,
    short: false,
    long: false,
    size: 'medium',
  },
};
