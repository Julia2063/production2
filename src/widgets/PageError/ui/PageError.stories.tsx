import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaLighty: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};


Dark.decorators = [ThemeDecorator(Theme.DARK)]