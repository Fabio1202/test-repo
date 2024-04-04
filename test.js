let res = fetch('https://www3.primuss.de/cgi-bin/shibboleth/index.pl', {credentials: "include"});
res.then((data) => {
    console.log(data.url);
    console.log(data.headers);
});