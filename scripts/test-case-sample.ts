import { RepairCase } from '../../types';

export const denNhaBepTatCase: RepairCase = {
    id: "den-nha-bep-tat",
    area: "electric",
    category: "lighting",
    label: "Đèn nhà bếp tắt",
    icon: "💡",
    description: "Đèn nhà bếp không sáng hoặc nhấp nháy",

    checklist: [
        { id: "qc-1", text: "Bóng đèn có bị cháy không?" },
        { id: "qc-2", text: "Công tắc có kêu lạch cạch không?" }
    ],

    evaluate: (answers) => {
        if (answers["qc-1"]) {
            return {
                level: "green",
                title: "Bóng đèn cháy",
                message: "Thay bóng đèn mới",
                recommendedTrialIds: ["trial-1", "trial-stop"]
            };
        }
        if (answers["qc-2"]) {
            return {
                level: "yellow",
                title: "Công tắc hỏng",
                message: "Cần thay công tắc",
                recommendedTrialIds: ["trial-2", "trial-stop"]
            };
        }
        return {
            level: "red",
            title: "Vấn đề phức tạp",
            message: "Nên gọi thợ điện",
            recommendedTrialIds: ["trial-stop"]
        };
    },

    trials: [
        {
            id: "trial-1",
            title: "Thay bóng đèn",
            when: "Khi bóng đèn cháy",
            steps: [
                "Tắt cầu dao điện",
                "Tháo bóng đèn cũ",
                "Lắp bóng đèn mới cùng công suất",
                "Bật điện và kiểm tra"
            ]
        },
        {
            id: "trial-2",
            title: "Kiểm tra công tắc",
            when: "Khi công tắc kêu lạch cạch",
            steps: [
                "Tắt cầu dao điện",
                "Tháo nắp công tắc",
                "Kiểm tra dây nối",
                "Thay công tắc mới nếu cần"
            ]
        },
        {
            id: "trial-stop",
            title: "Dừng và nhờ thợ",
            when: "Khi thất bại",
            steps: ["Gọi thợ điện chuyên nghiệp"]
        }
    ],

    meta: { allowSkipChecklist: true, createdBy: "ai", version: 1 }
};
