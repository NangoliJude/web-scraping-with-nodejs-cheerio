import axios from 'axios';
import cheerio from 'cheerio';

(async () => {
    const url = 'https://javascriptwebscrapingguy.com/';

    const axiosResponse = await axios.get(url, {
        headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'            
        }
    });

    const $ = cheerio.load(axiosResponse.data);

    const entryTitles = $('.entry-title').text();

})();