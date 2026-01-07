
import { RepairCase } from '../types';
import { intermittentSmellCase } from './cases/intermittent-smell';

/* 
  =============================================================================
  CASE REGISTRY
  =============================================================================
*/

const sinkUnderLeakCase: RepairCase = {
  id: "sink-under-leak",
  area: "water",
  category: "sink",
  label: "Nước rỉ dưới bồn rửa",
  icon: "🚰",
  description: "Bên dưới bồn rửa bị ướt hoặc nhỏ nước khi sử dụng",
  checklist: [
    { id: "qc-only-when-use", text: "Chỉ thấy nước rỉ khi đang mở vòi hoặc xả nước?" },
    { id: "qc-puddle-bottom", text: "Nước đọng ở đáy tủ dưới bồn rửa?" },
    { id: "qc-drain-use", text: "Nước rỉ rõ hơn khi xả nước trong bồn?" }
  ],
  trials: [
    {
      id: "trial-dry-observe",
      title: "Lau khô và quan sát",
      when: "Nếu chưa rõ nước rỉ từ đâu",
      steps: ["Lau khô toàn bộ khu vực dưới bồn rửa", "Mở vòi nước và quan sát kỹ", "Xem nước bắt đầu rỉ từ vị trí nào"]
    },
    {
      id: "trial-place-bowl",
      title: "Đặt chậu hứng tạm",
      when: "Nếu nước rỉ nhẹ nhưng chưa xử lý ngay",
      steps: ["Đặt chậu hoặc khăn dưới chỗ rỉ", "Hạn chế sử dụng bồn rửa trong lúc chờ"]
    },
    {
      id: "trial-stop",
      title: "Dừng và nhờ thợ",
      when: "Không tìm ra nguyên nhân hoặc rỉ mạnh",
      steps: ["Dùng chức năng 'Nhờ thợ' để tìm chuyên gia"]
    }
  ],
  evaluate: (answers) => {
    if (answers['qc-drain-use']) return { level: 'yellow', title: 'Rỉ đường thoát', message: 'Có thể lỏng khớp nối xiphong.', recommendedTrialIds: ['trial-dry-observe', 'trial-stop'] };
    return { level: 'green', title: 'Nước rỉ không rõ nguồn', message: 'Nên quan sát kỹ để xác định vị trí rỉ.', recommendedTrialIds: ['trial-dry-observe', 'trial-place-bowl'] };
  }
};

const waterSmellsBadCase: RepairCase = {
  id: "water-smells-bad",
  area: "water",
  category: "faucet",
  label: "Nước có mùi lạ",
  icon: "💧",
  description: "Mở vòi nước thấy mùi hôi, mùi tanh hoặc mùi khó chịu",
  checklist: [
    { id: "qc-only-first-open", text: "Mùi lạ chỉ xuất hiện khi mới mở nước lần đầu?" },
    { id: "qc-hot-water", text: "Mùi lạ rõ hơn khi dùng nước nóng?" },
    { id: "qc-all-faucets", text: "Các vòi khác trong nhà cũng có mùi tương tự?" },
    { id: "qc-recent-absence", text: "Nhà có thời gian dài không sử dụng nước gần đây?" }
  ],
  evaluate: (answers) => {
    if (answers["qc-all-faucets"]) {
      return {
        level: "yellow",
        title: "Có thể do nguồn nước chung",
        message: "Khi nhiều vòi cùng có mùi, vấn đề thường không nằm ở riêng một chỗ.",
        recommendedTrialIds: ["trial-flush-water", "trial-stop"]
      };
    }
    if (answers["qc-only-first-open"] || answers["qc-recent-absence"]) {
      return {
        level: "green",
        title: "Mùi do nước đọng",
        message: "Nước để lâu không dùng có thể tạo mùi nhẹ khi mở lại.",
        recommendedTrialIds: ["trial-flush-water", "trial-clean-aerator"]
      };
    }
    return {
      level: "green",
      title: "Mùi nhẹ, không ổn định",
      message: "Có thể thử các cách đơn giản để kiểm tra.",
      recommendedTrialIds: ["trial-flush-water", "trial-clean-aerator"]
    };
  },
  trials: [
    {
      id: "trial-flush-water",
      title: "Xả nước một lúc",
      when: "Nếu mùi xuất hiện khi mới mở nước",
      steps: [
        "Mở vòi nước và để chảy liên tục vài phút",
        "Quan sát xem mùi có giảm dần không",
        "Thử lại sau khi tắt rồi mở lại"
      ]
    },
    {
      id: "trial-clean-aerator",
      title: "Vệ sinh đầu vòi",
      when: "Nếu mùi chỉ xuất hiện ở một vòi",
      steps: [
        "Tháo lưới lọc ở đầu vòi (nếu tháo được bằng tay)",
        "Rửa sạch cặn bẩn bám bên trong",
        "Lắp lại và mở nước kiểm tra"
      ]
    },
    {
      id: "trial-stop",
      title: "Dừng và nhờ hỗ trợ",
      when: "Nếu mùi không giảm hoặc ngày càng khó chịu",
      steps: [
        "Ngưng thử thêm các cách khác",
        "Dùng chức năng Nhờ hỗ trợ trong app",
        "Mô tả rõ mùi và các vị trí bị ảnh hưởng"
      ]
    }
  ],
  meta: { allowSkipChecklist: true, createdBy: "ai", version: 1 }
};

const toiletCloggedCase: RepairCase = {
    id: "toilet-clogged",
    area: "water",
    category: "toilet",
    label: "Nghẹt bồn cầu",
    icon: "🚽",
    description: "Bồn cầu thoát chậm hoặc không trôi",
    checklist: [{id: "q1", text: "Nước có dâng lên không?"}],
    trials: [{id: "t1", title: "Dùng cây thụt", when: "Luôn thử đầu tiên", steps: ["Thụt mạnh 5 lần"]}, {id: "trial-stop", title: "Dừng và nhờ thợ", when: "Khi thất bại", steps: ["Gọi thợ"]}],
    evaluate: () => ({level: "yellow", title: "Tắc nghẽn", message: "Thử thông tắc", recommendedTrialIds: ["t1", "trial-stop"]})
};

// --- TỔNG HỢP ---

export const ALL_CASES: RepairCase[] = [
    sinkUnderLeakCase,
    waterSmellsBadCase,
    toiletCloggedCase,
    intermittentSmellCase, // Added new case
];
