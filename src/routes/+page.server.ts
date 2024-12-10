import type { Actions } from './$types';

export const actions = {
    default: async (e) => {
        console.log(e);
        const data = await e.request.formData();
        console.log(data)
        const textarea = data.get('textarea');
        console.log(textarea)

        return { success: true };
    }
} satisfies Actions;