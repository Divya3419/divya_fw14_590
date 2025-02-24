const { ApifyClient } = require('apify-client');

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: apify_api_deQDJoTaqBba5X4Js8D7owWcMgdHNR1v4LDv,
});

// Prepare actor input
const input = {
    "maxRequestsPerCrawl": 20,
    "extendOutputFunction": async ({ data, item, product, images, fns, name, request, variants, context, customData, input, Apify }) => {
      return item;
    },
    "extendScraperFunction": async ({ fns, customData, Apify, label }) => {
     
    },
    "customData": {},
    "maxConcurrency": 20,
    "maxRequestRetries": 3
};

(async () => {
    // Run the actor and wait for it to finish
    const run = await client.actor("mshopik/bluemercury-scraper").call(input);

    // Fetch and print actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
})();
