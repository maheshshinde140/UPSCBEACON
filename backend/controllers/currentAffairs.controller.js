// controllers/CurrentAffairsController.js
import axios from 'axios';
import CurrentAffair from '../models/currentAffair.model.js';
import dotenv from 'dotenv';
import { parse, isDate } from 'date-fns';

dotenv.config();

const apiKey = process.env.RAPIDAPI_KEY;
const apiHost = 'current-affairs-of-india.p.rapidapi.com';

const fetchIndiaCurrentAffairs = async () => {
    const options = {
        method: 'GET',
        url: 'https://current-affairs-of-india.p.rapidapi.com/recent',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiHost
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch India current affairs: ' + error.message);
    }
};

const fetchInternationalCurrentAffairs = async () => {
    const options = {
        method: 'GET',
        url: 'https://current-affairs-of-india.p.rapidapi.com/international-today',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiHost
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch international current affairs: ' + error.message);
    }
};

const saveCurrentAffairsToDatabase = async (currentAffairs) => {
    for (const affair of currentAffairs) {
        const [title, dateString, ...descriptionParts] = affair.split(' ');
        const description = descriptionParts.join(' ');

        const parsedDate = parse(dateString, 'dd-MM-yyyy', new Date()); // Adjust format as per your needs

        if (!isDate(parsedDate)) {
            console.error(`Invalid date encountered: ${dateString}`); // Log invalid date
            continue; // Skip saving this record if the date is invalid
        }

        const currentAffair = new CurrentAffair({
            title,
            description,
            date: parsedDate // Format to date
        });

        await currentAffair.save();
    }
};

export const fetchAndStoreCurrentAffairs = async (req, res) => {
    try {
        const indiaCurrentAffairs = await fetchIndiaCurrentAffairs();
        const internationalCurrentAffairs = await fetchInternationalCurrentAffairs();

        // Save both affairs to database
        await saveCurrentAffairsToDatabase(indiaCurrentAffairs);
        await saveCurrentAffairsToDatabase(internationalCurrentAffairs);

        res.status(200).json({ message: 'Current affairs saved successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMonthlyCurrentAffairs = async (req, res) => {
    const { month, year } = req.params;

    try {
        const currentAffairs = await CurrentAffair.find({
            date: {
                $gte: new Date(year, month - 1, 1),
                $lt: new Date(year, month, 1)
            }
        });

        res.status(200).json(currentAffairs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
