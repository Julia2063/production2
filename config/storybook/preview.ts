import type { Preview } from '@storybook/react'
import { StyleDecorator } from '../../src/app/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/app/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/app/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;