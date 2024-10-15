import React from "react";

const Exam = () => {
    return (
        <div className="bg-gray-100 p-6 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center fade-in">
                Upcoming UPSC Exams 2025
            </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 p-3 text-left">Exam Name</th>
                            <th className="border border-gray-300 p-3 text-left">Notification Date</th>
                            <th className="border border-gray-300 p-3 text-left">Last Date to Apply</th>
                            <th className="border border-gray-300 p-3 text-left">UPSC Exam Date</th>
                            <th className="border border-gray-300 p-3 text-left">Exam Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {examData.map((exam, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-100 transition duration-300 ease-in-out slide-in"
                            >
                                <td className="border border-gray-300 p-3">{exam.name}</td>
                                <td className="border border-gray-300 p-3">{exam.notificationDate}</td>
                                <td className="border border-gray-300 p-3">{exam.lastDateToApply}</td>
                                <td className="border border-gray-300 p-3">{exam.upscExamDate}</td>
                                <td className="border border-gray-300 p-3">{exam.examDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Sample Data
const examData = [
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "TBA",
        lastDateToApply: "TBA",
        upscExamDate: "TBA",
        examDate: "January 19, 2025 (Sunday)"
    },
    {
        name: "Combined Geo-Scientist (Preliminary) Examination, 2025",
        notificationDate: "September 25, 2024",
        lastDateToApply: "October 15, 2024",
        upscExamDate: "February 23, 2025",
        examDate: "February 23, 2025"
    },
    {
        name: "Engineering Services (Preliminary) Examination, 2025",
        notificationDate: "September 25, 2024",
        lastDateToApply: "October 15, 2024",
        upscExamDate: "February 23, 2025",
        examDate: "February 23, 2025"
    },
    {
        name: "CISF AC(EXE) LDCE",
        notificationDate: "December 5, 2024",
        lastDateToApply: "December 25, 2024",
        upscExamDate: "March 16, 2025",
        examDate: "March 16, 2025"
    },
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "TBA",
        lastDateToApply: "TBA",
        upscExamDate: "TBA",
        examDate: "March 23, 2025 (Sunday)"
    },
    {
        name: "NDA & NA Examination (I), 2025",
        notificationDate: "December 25, 2024",
        lastDateToApply: "January 15, 2025",
        upscExamDate: "April 20, 2025",
        examDate: "April 20, 2025"
    },
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "TBA",
        lastDateToApply: "TBA",
        upscExamDate: "TBA",
        examDate: "April 27, 2025 (Sunday)"
    },
    {
        name: "Combined Medical Services Examination, 2025",
        notificationDate: "February 5, 2025",
        lastDateToApply: "February 25, 2025",
        upscExamDate: "July 20, 2025",
        examDate: "July 20, 2025"
    },
    {
        name: "Central Armed Police Forces (ACs) Examination, 2025",
        notificationDate: "April 30, 2025",
        lastDateToApply: "May 20, 2025",
        upscExamDate: "August 10, 2025",
        examDate: "August 10, 2025"
    },
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "TBA",
        lastDateToApply: "TBA",
        upscExamDate: "TBA",
        examDate: "August 24, 2025 (Sunday)"
    },
    {
        name: "Civil Services (Preliminary) Examination, 2025",
        notificationDate: "February 5, 2025",
        lastDateToApply: "February 25, 2025",
        upscExamDate: "May 25, 2025",
        examDate: "May 25, 2025"
    },
    {
        name: "I.E.S./I.S.S. Examination, 2025",
        notificationDate: "April 23, 2025",
        lastDateToApply: "May 13, 2025",
        upscExamDate: "June 27, 2025",
        examDate: "June 27, 2025"
    },
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "TBA",
        lastDateToApply: "TBA",
        upscExamDate: "TBA",
        examDate: "September 14, 2025 (Sunday)"
    },
    {
        name: "C.D.S. Examination (II), 2025",
        notificationDate: "May 21, 2025",
        lastDateToApply: "June 10, 2025",
        upscExamDate: "September 7, 2025",
        examDate: "September 7, 2025"
    },
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "TBA",
        lastDateToApply: "TBA",
        upscExamDate: "TBA",
        examDate: "September 28, 2025 (Sunday)"
    }
];

export default Exam;
