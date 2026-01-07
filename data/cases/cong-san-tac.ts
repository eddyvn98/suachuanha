import { RepairCase } from '../../types';

export const congSanTacCase: RepairCase = {
  id: "cong-san-tac",
  area: "water",
  category: "Cống thoát nước",
  label: "Cống sàn bị tắc hoặc thoát chậm",
  icon: "🌊",
  description: "Nước đọng lại trên sàn nhà tắm hoặc ban công, không thoát được hoặc thoát cực kỳ chậm gây mất vệ sinh.",
  
  checklist: [
    { id: "qc-1", text: "Nước hoàn toàn không rút sau 5 phút?" },
    { id: "qc-2", text: "Có dị vật cứng hoặc tóc bám đầy ở miệng hố ga?" },
    { id: "qc-3", text: "Nước trào ngược từ cống lên khi sử dụng vòi nước khác?" }
  ],

  evaluate: (answers) => {
    if (answers["qc-3"] || (answers["qc-1"] && answers["qc-2"])) {
      return {
        level: "yellow",
        title: "Tắc nghẽn nghiêm trọng hoặc tắc đường ống chính",
        message: "Cống có dấu hiệu tắc sâu trong đường ống hoặc do hố ga đầy. Cần can thiệp bằng công cụ chuyên dụng.",
        recommendedTrialIds: ["trial-clean-surface", "trial-plunger", "trial-snake", "trial-stop"]
      };
    }
    return {
      level: "green",
      title: "Tắc nghẽn nhẹ bề mặt",
      message: "Vấn đề có thể chỉ do tóc và rác hữu cơ tích tụ ở nắp lọc rác.",
      recommendedTrialIds: ["trial-clean-surface", "trial-hot-water"]
    };
  },

  trials: [
    {
      id: "trial-clean-surface",
      title: "Vệ sinh nắp lọc rác",
      when: "Luôn thực hiện đầu tiên",
      steps: [
        "Đeo găng tay, nhấc nắp lược rác (phễu thoát sàn) lên.",
        "Loại bỏ tóc rối, cặn xà phòng và rác bám quanh miệng ống.",
        "Dùng bàn chải cọ sạch các khe hở của nắp lọc."
      ]
    },
    {
      id: "trial-hot-water",
      title: "Sử dụng hỗn hợp tự nhiên",
      when: "Khi nước thoát chậm do mỡ hoặc xà phòng đóng cặn",
      steps: [
        "Đổ 1 bát baking soda vào miệng cống.",
        "Đổ tiếp 1 bát giấm ăn, chờ phản ứng sủi bọt trong 15 phút.",
        "Dội một ấm nước nóng (khoảng 70-80 độ C) để làm tan cặn bẩn."
      ]
    },
    {
      id: "trial-plunger",
      title: "Sử dụng cây thụt (pittong)",
      when: "Khi nước không thoát và có dấu hiệu tắc vật lý",
      steps: [
        "Đổ nước vào sàn sao cho ngập đầu cao su của cây thụt.",
        "Đặt đầu cao su khít vào miệng cống.",
        "Dùng lực ấn mạnh và liên tục để tạo áp suất đẩy vật cản xuống hoặc bật lên."
      ]
    },
    {
      id: "trial-snake",
      title: "Dùng dây lò xo thông cống",
      when: "Khi các cách trên không hiệu quả",
      steps: [
        "Luồn đầu dây lò xo vào sâu trong ống thoát nước.",
        "Vừa đẩy vừa xoay theo chiều kim đồng hồ cho đến khi chạm vật cản.",
        "Xoay mạnh để móc rác/tóc vào đầu lò xo rồi từ từ rút ra."
      ]
    },
    {
      id: "trial-stop",
      title: "Dừng và nhờ thợ",
      when: "Khi đã dùng dây lò xo nhưng không thông hoặc nghi ngờ vỡ ống",
      steps: [
        "Ngừng đổ các hóa chất mạnh (axit) vì có thể làm hỏng ống nhựa.",
        "Sử dụng chức năng Nhờ hỗ trợ để kết nối thợ kỹ thuật nước chuyên nghiệp."
      ]
    }
  ],

  meta: { allowSkipChecklist: true, createdBy: "ai", version: 1 }
};