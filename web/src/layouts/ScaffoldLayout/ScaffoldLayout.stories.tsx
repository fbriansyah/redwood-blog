import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ScaffoldLayout from './ScaffoldLayout'

export const generated: ComponentStory<typeof ScaffoldLayout> = () => {
  return (
    <ScaffoldLayout
      title="Posts"
      titleTo="posts"
      buttonLabel="New Post"
      buttonTo="newPost"
    >
      {' '}
    </ScaffoldLayout>
  )
}

export default {
  title: 'Layouts/ScaffoldLayout',
  component: ScaffoldLayout,
} as ComponentMeta<typeof ScaffoldLayout>
