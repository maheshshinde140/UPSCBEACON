import React from 'react';

const resources = [
  {
    title: 'Mains Marks Booster',
    description: 'Download IAS Mains with MK Yadav sir 10 FREE PDF Notes for All Serious IAS aspirants.',
    image: 'https://placehold.co/100x100',
    alt: 'Mains Marks Booster Image',
  },
  {
    title: 'Answer Writing via Template',
    description: 'Absolutely, let’s craft an exemplary answer with a Roadmap/Template in just 5-7 minutes.',
    image: 'https://placehold.co/100x100',
    alt: 'Answer Writing via Template Image',
  },
  {
    title: 'Mains Enrichment Cards',
    description: 'Your Last Minute Exam Hall Notes & Booklets with Enrichment Cards & Micro Diagrams.',
    image: 'https://placehold.co/100x100',
    alt: 'Mains Enrichment Cards Image',
  },
  {
    title: 'Toppers Handwritten Answers (UPSC 2023)',
    description: 'Get the Toppers Handwritten Answers & All GS Papers UPSC CSE 2023.',
    image: 'https://placehold.co/100x100',
    alt: 'Toppers Handwritten Answers Image',
  },
  {
    title: 'Aaj Ka Quality Enrichment Program',
    description:
      'This program aims to Enrich the Quality of Current Affairs for UPSC aspirants by identifying the Keywords, Concepts, Key Facts.',
    image: 'https://placehold.co/100x100',
    alt: 'Aaj Ka Quality Enrichment Program Image',
  },
  {
    title: 'Daily Headlines',
    description:
      'Stay updated with the Latest News instantly from the best sources and insights from our team including The Hindu and Indian Express.',
    image: 'https://placehold.co/100x100',
    alt: 'Daily Headlines Image',
  },
  {
    title: 'News-CRUX-10',
    description:
      'Crisp Summary of Top 10 News from 10 Different Main Sources. Includes Newspaper and Infographic style versions.',
    image: 'https://placehold.co/100x100',
    alt: 'News-CRUX-10 Image',
  },
  {
    title: 'Daily Quiz',
    description:
      'MCQs Based on Current Affairs covered in the Daily News. Test Your Conceptual Clarity & Factual Grasp.',
    image: 'https://placehold.co/100x100',
    alt: 'Daily Quiz Image',
  },
  {
    title: 'Prelims 2024 - High Output Themes',
    description: 'Checklist India 2024: Most Important Themes to Clear CSE Prelims 2024.',
    image: 'https://placehold.co/100x100',
    alt: 'Prelims 2024 - High Output Themes Image',
  },
  {
    title: 'Prelims Revision Cards',
    description:
      'These cards are made to help you remember the most critical and hard facts/concepts in a visualized manner. Backed by research on image retention.',
    image: 'https://placehold.co/100x100',
    alt: 'Prelims Revision Cards Image',
  },
  {
    title: 'Prelims 2024 Samadhan Revision Series',
    description:
      'Your Last Minute Revision Notes Based on the 3R Rule. Read (Basic Understanding), Revise (Quick Revision), & Test (Empowering Concepts one topic at a Time).',
    image: 'https://placehold.co/100x100',
    alt: 'Prelims 2024 Samadhan Revision Series Image',
  },
  {
    title: "Free PDF's",
    description: 'Get the latest Free PDF Notes for UPSC IAS Exam Preparation. Download Now!',
    image: 'https://placehold.co/100x100',
    alt: "Free PDF's Image",
  },
];

const Resource = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8 py-10">
      <h1 className="text-center text-3xl font-bold text-gray-600 mb-8">Free Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg hover:border-[2px] hover:border-gray-400 shadow-md flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img src={resource.image} alt={resource.alt} className="w-20 h-20 mb-4" />
            <h2 className="text-lg font-bold mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full transition-colors hover:bg-gray-600">
              Know more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
