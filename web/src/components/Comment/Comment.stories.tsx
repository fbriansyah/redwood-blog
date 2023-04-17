// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Comment> = (args) => {
//   return <Comment {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Comment from './Comment'

const COMMENT = {
  name: 'Febrian',
  createdAt: '2020-01-01T12:34:56Z',
  body: 'Hello World',
}

export const generated = () => {
  return <Comment comment={COMMENT} />
}

export default {
  title: 'Components/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>
