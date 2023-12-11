const isExtensionEnvironment = typeof browser !== 'undefined';
const browserMock = {
    storage: {
        local: {
            get: async (key) => {
                // Mock implementation or return from local storage
                return Promise.resolve({ [key]: localStorage.getItem(key) });
            },
            set: async (data) => {
                // Mock implementation or save to local storage
                Object.keys(data).forEach(key => {
                    localStorage.setItem(key, data[key]);
                });
                return Promise.resolve();
            }
        }
    }
};

const browser = isExtensionEnvironment ? window.browser : browserMock;

export const saveGenerator = async (generator) => {
    const generators = await getGenerators();
    generators.push(generator);
    browser.storage.local.set({ generators });
};

export const getGenerators = async () => {
    const data = await browser.storage.local.get('generators');
    return data.generators || [];
};

export const deleteGenerator = async (id) => {
    let generators = await getGenerators();
    generators = generators.filter(generator => generator.id !== id);
    browser.storage.local.set({ generators });
};

// More storage related functions can be added as needed
