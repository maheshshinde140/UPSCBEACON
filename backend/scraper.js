import { get } from 'axios';
import { load } from 'cheerio';

// The URL of the website you want to scrape
const url = 'https://www.thehindu.com/news/national/'; // Replace with the actual URL

// Function to scrape current affairs
async function scrapeCurrentAffairs() {
  try {
    // Fetch the HTML of the webpage
    const { data } = await get(url);

    // Load the HTML using cheerio
    const $ = load(data);

    // Array to store the current affairs news
    let currentAffairs = [];

    // Select the elements containing the news items
    // Replace the selector below with the actual CSS selector for the news items
    $('.news-item').each((index, element) => {
      const title = $(element).find('h2').text().trim();
      const link = $(element).find('a').attr('href');
      const date = $(element).find('.date').text().trim();

      // Push the news item to the array
      currentAffairs.push({
        title,
        link: link.startsWith('http') ? link : `https://example.com${link}`, // Handle relative URLs
        date
      });
    });

    // Display the scraped data
    console.log(currentAffairs);
  } catch (error) {
    console.error('Error scraping the website:', error.message);
  }
}

// Run the scraper function
scrapeCurrentAffairs();
