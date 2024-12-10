import type { Actions } from './$types.js';

export const actions = {
    default: async (e) => {
        const data = await e.request.formData();
        const request = data.get('request');
        console.log(e, data, request)

        return { success: true };
    }
} satisfies Actions;