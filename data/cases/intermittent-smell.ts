
import { RepairCase } from '../../types';

export const intermittentSmellCase: RepairCase = {
  id: "intermittent-smell",
  area: "general",
  category: "smell",

  label: "Mùi thoảng qua rồi hết",
  icon: "💨",
  description: "Ngửi thấy mùi trong chốc lát rồi tự hết",

  checklist: [
    { id: "qc-short-time", text: "Mùi chỉ kéo dài trong thời gian ngắn?" },
    { id: "qc-not-repeat", text: "Không lặp lại thường xuyên?" },
    { id: "qc-no-physical-sign", text: "Không thấy dấu hiệu nước, khói hay rác?" },
    { id: "qc-after-open-close", text: "Xảy ra sau khi mở hoặc đóng cửa?" }
  ],

  evaluate: (answers) => {
    if (answers["qc-short-time"] && answers["qc-not-repeat"]) {
      return {
        level: "green",
        title: "Mùi thoáng qua",
        message: "Một số mùi có thể xuất hiện ngắn hạn rồi tự hết.",
        recommendedTrialIds: ["trial-ventilate", "trial-observe"]
      };
    }

    return {
      level: "yellow",
      title: "Mùi cần theo dõi",
      message: "Nếu mùi quay lại, nên quan sát thêm.",
      recommendedTrialIds: ["trial-observe", "trial-note-context"]
    };
  },

  trials: [
    {
      id: "trial-ventilate",
      title: "Thông gió nhanh",
      when: "Nếu mùi xuất hiện bất chợt",
      steps: [
        "Mở cửa sổ hoặc cửa ra vào",
        "Cho mùi thoát ra ngoài",
        "Ngửi lại sau ít phút"
      ]
    },
    {
      id: "trial-note-context",
      title: "Ghi nhận hoàn cảnh xảy ra mùi",
      when: "Nếu mùi quay lại",
      steps: [
        "Ghi nhận vừa làm gì trước đó",
        "Xem có liên quan mở cửa, nấu ăn hay thời tiết",
        "So sánh giữa các lần"
      ]
    },
    {
      id: "trial-observe",
      title: "Theo dõi thêm",
      when: "Nếu mùi đã hết",
      steps: [
        "Quan sát trong vài ngày",
        "Chỉ thử thêm nếu mùi xuất hiện lại",
        "Không suy đoán quá mức"
      ]
    },
    {
      id: "trial-stop",
      title: "Dừng và nhờ hỗ trợ",
      when: "Nếu mùi lặp lại nhiều lần hoặc nặng hơn",
      steps: [
        "Ngưng tự xử thêm",
        "Dùng chức năng Nhờ hỗ trợ",
        "Mô tả rõ mùi và tần suất"
      ]
    }
  ],

  meta: { allowSkipChecklist: true, createdBy: "ai", version: 1 }
};
