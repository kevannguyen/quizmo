/* eslint-disable @typescript-eslint/no-explicit-any */

/** Mocks api call by making query function async and add delay. */
export const mockedApiCall = <FnReturnType, FnArgsType extends any[]>(
    {
        fn,
        delayMs = 1000,
    }: {
        fn: (...args: FnArgsType) => FnReturnType;
        delayMs?: number;
    },
    ...args: FnArgsType
): Promise<FnReturnType> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = fn(...args);
                resolve(result);
            } catch (e) {
                console.error(e);
                reject(e);
            }
        }, delayMs);
    });
