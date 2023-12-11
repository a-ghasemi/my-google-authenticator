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
