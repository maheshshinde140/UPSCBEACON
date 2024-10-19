import React from 'react';

const Syllabus = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-8 fade-in">
            <div className="max-w-4xl mx-auto p-6 bg-white fade-in border-[2px] border-gray-800 shadow-lg rounded-lg">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-700">UPSC CSE  Syllabus</h1>
                    <p className="text-lg text-gray-600">Comprehensive Guide to the UPSC Civil Services Examination Syllabus</p>
                </div>

                <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
                    <h2 className="text-3xl font-bold">Preliminary Examination</h2>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-2xl font-bold mb-4">General Studies Paper I</h3>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>Current events of national and international importance</li>
                        <li>History of India and Indian National Movement</li>
                        <li>Indian and World Geography: Physical, Social, Economic Geography</li>
                        <li>Indian Polity and Governance: Constitution, Political System, Public Policy</li>
                        <li>Economic and Social Development: Sustainable Development, Poverty, Inclusion</li>
                        <li>Environmental Ecology, Biodiversity, and Climate Change</li>
                        <li>General Science</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-2xl font-bold mb-4">General Studies Paper II (CSAT)</h3>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>Comprehension and Communication Skills</li>
                        <li>Logical Reasoning and Analytical Ability</li>
                        <li>Decision-making and Problem-solving</li>
                        <li>General Mental Ability</li>
                        <li>Basic Numeracy and Data Interpretation</li>
                    </ul>
                </div>

                <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
                    <h2 className="text-3xl font-bold">Main Examination</h2>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-2xl font-bold mb-4">Paper A - Indian Language</h3>
                    <p className="text-gray-800 mb-4">Candidates may choose one of the Indian languages included in the Eighth Schedule of the Constitution. This paper is of qualifying nature.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-2xl font-bold mb-4">Paper B - English</h3>
                    <p className="text-gray-800 mb-4">This paper assesses the candidate's ability to read and understand serious discursive prose and express ideas clearly in English.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-2xl font-bold mb-4">Paper I - Essay</h3>
                    <p className="text-gray-800 mb-4">Candidates may be required to write essays on multiple topics, maintaining relevance and clarity in expression.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-2xl font-bold mb-4">Paper II - General Studies I</h3>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>Indian Heritage and Culture, History, and Geography of the World</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-2xl font-bold mb-4">Paper III - General Studies II</h3>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>Governance, Constitution, Polity, Social Justice, and International Relations</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-2xl font-bold mb-4">Paper IV - General Studies III</h3>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>Technology, Economic Development, Environment, and Disaster Management</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-2xl font-bold mb-4">Paper V - General Studies IV</h3>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        <li>Ethics, Integrity, and Aptitude</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-2xl font-bold mb-4">Papers VI & VII - Optional Subject Papers I & II</h3>
                    <p className="text-gray-800 mb-4">Candidates can choose any subject from the list of optional subjects provided by UPSC, with each subject comprising two papers.</p>
                </div>

                <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
                    <h2 className="text-3xl font-bold">Interview</h2>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <p className="text-gray-800 mb-4">The interview assesses the personal suitability of candidates for public service, evaluating intellectual qualities, social traits, and interest in current affairs.</p>
                </div>
            </div>
        </div>
    );
};

export default Syllabus;
