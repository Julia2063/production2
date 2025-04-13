import type { StoryFn, StoryContext } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (
    Story: StoryFn,
    context: StoryContext
) => {
    return (
        <ThemeProvider >
            <div className={`app ${theme}`} style={{ width: '100vw' }}>
                {Story(context.args, context)}
            </div>
        </ThemeProvider>
        
    );
};
