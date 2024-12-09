# POW Test Task

A test task for a Frontend Engineer

## Overview

You need to develop a textarea component according to the design in Figma: [Figma Design](https://www.figma.com/design/uXFo7cFpM0u6Qu1uZhvYet/POW-test-task?node-id=0-1&t=WmuHeNEZUacsluZz-1).

The textarea can work in two variants:
- Waiting for a text answer from the bot
- Waiting for an image generation answer

After the user submits the request, it is expected to receive some constant mock data—either text or an image, depending on the request.
Concentrate only on textarea behavior, you don't need to focus on bot answers.

## Tech Stack

- SvelteKit
- TypeScript
- Tailwind CSS

You can use this action to resize the textarea: [Textarea Autosize Action](https://svelte-legos.surge.sh/guides/actions/textareaAutosizeAction/).

## Bonus (Optional). You can skip this subtask.

It would be great if you use a state machine (XState - [XState Documentation](https://stately.ai/docs/xstate)) in your app. The textarea field should have the following four states:
- IDLE state
- Loading data
- Chat bot is typing or generating an image


## Deliverables
Feel free to use any chatbot you know. The main purpose is to understand how you can use Svelte and your ability to deploy your code.

As a result, please provide:
- The link to the deployed app
- The link to the repository with the code

Good luck!
