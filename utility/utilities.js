const makeApiCall = (query) => {
    return fetch('https://partnercreation1.myshopify.com/api/2022-07/graphql.json',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/graphql",
                "Access-Control-Request-Method": "POST",
                "X-Shopify-Storefront-Access-Token": "ffb10ff882ad6268ab5a27c86c0ebe1a",
                "Referer": "https://partnercreation1.myshopify.com"
            },
            "body": query
        })
        .then(response => response.json());
};

export default makeApiCall;
