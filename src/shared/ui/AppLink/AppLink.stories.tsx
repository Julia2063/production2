import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { 
        to: '/',
        children: 'Link',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
};

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark: Story = {
    args: {
        theme: AppLinkTheme.RED
    },
};

RedDark.decorators = [ThemeDecorator(Theme.DARK)]