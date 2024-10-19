import React from "react";

const Exam = () => {
    return (
        <div className="bg-gray-100 p-6 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-700 fade-in">
                UPSC Exams Programme - 2025
            </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 p-4 text-left">Sl. No.</th>
                            <th className="border border-gray-300 p-4 text-left">Exam Name</th>
                            <th className="border border-gray-300 p-4 text-left">Notification Date</th>
                            <th className="border border-gray-300 p-4 text-left">Last Date to Apply</th>
                            <th className="border border-gray-300 p-4 text-left">Commencement Date</th>
                            <th className="border border-gray-300 p-4 text-left">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {examData.map((exam, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-gray-100 transition duration-300 ease-in-out ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                            >
                                <td className="border border-gray-300 p-4">{index + 1}</td>
                                <td className="border border-gray-300 p-4">{exam.name}</td>
                                <td className="border border-gray-300 p-4">{exam.notificationDate || "N/A"}</td>
                                <td className="border border-gray-300 p-4">{exam.lastDateToApply || "N/A"}</td>
                                <td className="border border-gray-300 p-4">{exam.commencementDate}</td>
                                <td className="border border-gray-300 p-4">{exam.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Revised Exam Data for 2025
const examData = [
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "N/A",
        lastDateToApply: "N/A",
        commencementDate: "11.01.2025 (Saturday)",
        duration: "2 DAYS"
    },
    {
        name: "Combined Geo-Scientist (Preliminary) Examination, 2025",
        notificationDate: "04.09.2024",
        lastDateToApply: "24.09.2024",
        commencementDate: "09.02.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "Engineering Services (Preliminary) Examination, 2025",
        notificationDate: "18.09.2024",
        lastDateToApply: "08.10.2024",
        commencementDate: "09.02.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "CBI (DSP) LDCE, 2025",
        notificationDate: "01.01.2025",
        lastDateToApply: "14.01.2025",
        commencementDate: "08.03.2025 (Saturday)",
        duration: "2 DAYS"
    },
    {
        name: "CISF AC(EXE) LDCE-2025",
        notificationDate: "04.12.2024",
        lastDateToApply: "24.12.2024",
        commencementDate: "09.03.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "N.D.A. & N.A. Examination (I), 2025",
        notificationDate: "11.12.2024",
        lastDateToApply: "31.12.2024",
        commencementDate: "13.04.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "C.D.S. Examination (I), 2025",
        notificationDate: "11.12.2024",
        lastDateToApply: "31.12.2024",
        commencementDate: "02.02.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "Civil Services (Preliminary) Examination, 2025",
        notificationDate: "22.01.2025",
        lastDateToApply: "11.02.2025",
        commencementDate: "25.05.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "Indian Forest Service (Preliminary) Examination, 2025",
        notificationDate: "22.01.2025",
        lastDateToApply: "11.02.2025",
        commencementDate: "25.05.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "N/A",
        lastDateToApply: "N/A",
        commencementDate: "14.06.2025 (Saturday)",
        duration: "2 DAYS"
    },
    {
        name: "I.E.S./I.S.S. Examination, 2025",
        notificationDate: "12.02.2025",
        lastDateToApply: "04.03.2025",
        commencementDate: "20.06.2025 (Friday)",
        duration: "3 DAYS"
    },
    {
        name: "Combined Geo-Scientist (Main) Examination, 2025",
        notificationDate: "N/A",
        lastDateToApply: "N/A",
        commencementDate: "21.06.2025 (Saturday)",
        duration: "2 DAYS"
    },
    {
        name: "Engineering Services (Main) Examination, 2025",
        notificationDate: "N/A",
        lastDateToApply: "N/A",
        commencementDate: "22.06.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "N/A",
        lastDateToApply: "N/A",
        commencementDate: "05.07.2025 (Saturday)",
        duration: "2 DAYS"
    },
    {
        name: "Combined Medical Services Examination, 2025",
        notificationDate: "19.02.2025",
        lastDateToApply: "11.03.2025",
        commencementDate: "20.07.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "Central Armed Police Forces (ACs) Examination, 2025",
        notificationDate: "05.03.2025",
        lastDateToApply: "25.03.2025",
        commencementDate: "03.08.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "N/A",
        lastDateToApply: "N/A",
        commencementDate: "09.08.2025 (Saturday)",
        duration: "2 DAYS"
    },
    {
        name: "Civil Services (Main) Examination, 2025",
        notificationDate: "N/A",
        lastDateToApply: "N/A",
        commencementDate: "22.08.2025 (Friday)",
        duration: "5 DAYS"
    },
    {
        name: "N.D.A. & N.A. Examination (II), 2025",
        notificationDate: "28.05.2025",
        lastDateToApply: "17.06.2025",
        commencementDate: "14.09.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "C.D.S. Examination (II), 2025",
        notificationDate: "28.05.2025",
        lastDateToApply: "17.06.2025",
        commencementDate: "14.09.2025 (Sunday)",
        duration: "1 DAY"
    },
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "N/A",
        lastDateToApply: "N/A",
        commencementDate: "04.10.2025 (Saturday)",
        duration: "2 DAYS"
    },
    {
        name: "Reserved for UPSC RT/ Examination",
        notificationDate: "N/A",
        lastDateToApply: "N/A",
        commencementDate: "01.11.2025 (Saturday)",
        duration: "2 DAYS"
    },
    {
        name: "Indian Forest Service (Main) Examination, 2025",
        notificationDate: "N/A",
        lastDateToApply: "N/A",
        commencementDate: "16.11.2025 (Sunday)",
        duration: "7 DAYS"
    },
    {
        name: "S.O./Steno (GD-B/GD-I) LDCE",
        notificationDate: "17.09.2025",
        lastDateToApply: "07.10.2025",
        commencementDate: "13.12.2025 (Saturday)",
        duration: "2 DAYS"
    }
];

export default Exam;
