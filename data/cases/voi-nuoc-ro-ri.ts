import { RepairCase } from '../../types';

export const voiNuocRoRiCase: RepairCase = {
  id: "voi-nuoc-ro-ri",
  area: "water",
  category: "faucet",
  label: "Vòi nước rò rỉ",
  icon: "🚰",
  description: "Xử lý tình trạng vòi nước bị nhỏ giọt hoặc rò rỉ nước tại các khớp nối và tay vặn.",

  checklist: [
    { id: "leak-at-tip", text: "Nước nhỏ giọt liên tục ở đầu vòi dù đã khóa chặt" },
    { id: "leak-at-base", text: "Nước rò rỉ ở chân vòi hoặc các khớp nối" },
    { id: "stiff-handle", text: "Tay vặn vòi bị cứng, lỏng lẻo hoặc khó điều khiển" }
  ],

  evaluate: (answers) => {
    if (answers["leak-at-tip"] || answers["stiff-handle"]) {
      return {
        level: "yellow",
        title: "Hỏng lõi vòi (Cartridge)",
        message: "Lõi van bên trong có thể đã bị mòn hoặc nứt vỡ. Bạn cần tháo vòi để kiểm tra hoặc thay lõi mới.",
        recommendedTrialIds: ["tighten-everything", "replace-cartridge", "trial-stop"]
      };
    }
    if (answers["leak-at-base"]) {
      return {
        level: "yellow",
        title: "Hở gioăng hoặc băng tan",
        message: "Nước rò rỉ từ chân vòi thường do gioăng cao su bị lão hóa hoặc băng tan (cao su non) bị hở.",
        recommendedTrialIds: ["tighten-everything", "reseal-thread", "trial-stop"]
      };
    }
    return {
      level: "green",
      title: "Vấn đề nhẹ",
      message: "Có thể chỉ do các đầu nối bị lỏng sau thời gian dài sử dụng.",
      recommendedTrialIds: ["tighten-everything"]
    };
  },

  trials: [
    {
      id: "tighten-everything",
      title: "Siết chặt các đầu nối",
      when: "Nước rò rỉ nhẹ tại các vị trí tiếp giáp",
      steps: [
        "Dùng mỏ lết hoặc kìm chuyên dụng",
        "Siết nhẹ nhàng các đai ốc ở chân vòi hoặc dây cấp nước",
        "Lưu ý: Không siết quá mạnh tay vì có thể làm hỏng ren hoặc vỡ đai ốc nhựa"
      ]
    },
    {
      id: "reseal-thread",
      title: "Quấn lại băng tan (cao su non)",
      when: "Rò rỉ tại các khớp nối ren",
      steps: [
        "Khóa van nước tổng",
        "Tháo khớp nối bị rò rỉ ra",
        "Làm sạch ren cũ, quấn 10-15 vòng băng tan mới theo chiều kim đồng hồ",
        "Lắp lại và kiểm tra"
      ]
    },
    {
      id: "replace-cartridge",
      title: "Thay lõi van (Cartridge)",
      when: "Nước nhỏ giọt từ đầu vòi mặc dù đã khóa",
      steps: [
        "Cạy nắp nhỏ trên tay gạt vòi, dùng lục giác tháo ốc giữ tay gạt",
        "Nhấc tay gạt ra và dùng mỏ lết tháo nắp chụp lõi vòi",
        "Lấy lõi cũ ra, mang ra cửa hàng điện nước mua đúng loại tương tự",
        "Lắp lõi mới vào đúng khớp và lắp lại vòi"
      ]
    },
    {
      id: "trial-stop",
      title: "Dừng và nhờ thợ",
      when: "Khi vòi bị nứt thân, gãy ren bên trong tường hoặc không tìm được linh kiện thay thế",
      steps: ["Dùng chức năng Nhờ hỗ trợ để kết nối với kỹ thuật viên"]
    }
  ],

  meta: { allowSkipChecklist: true, createdBy: "ai", version: 1 }
};