import { RepairCase } from '../../types';

export const maiNhaBiDotCase: RepairCase = {
  id: "mai-nha-bi-dot",
  area: "structure",
  category: "Mái nhà",
  label: "Mái nhà bị dột",
  icon: "🏠",
  description: "Xử lý tình trạng thấm dột nước mưa từ mái tôn, mái ngói hoặc các khe tiếp giáp.",
  
  checklist: [
    { id: "qc-1", text: "Nước dột từ các đầu đinh vít hoặc mối nối tôn" },
    { id: "qc-2", text: "Nước thấm qua vết nứt sàn bê tông hoặc ngói vỡ" },
    { id: "qc-3", text: "Nước chảy từ khe tiếp giáp giữa hai tường nhà" },
    { id: "qc-4", text: "Máng xối bị tràn nước vào trong nhà" }
  ],

  evaluate: (answers) => {
    if (answers["qc-3"]) {
      return {
        level: "red",
        title: "Vấn đề khe lún phức tạp",
        message: "Xử lý khe tiếp giáp giữa hai nhà cần kỹ thuật chống thấm chuyên sâu và vật liệu co giãn chuyên dụng. Bạn không nên tự xử lý nếu không có kinh nghiệm.",
        recommendedTrialIds: ["trial-stop"]
      };
    }
    if (answers["qc-1"] || answers["qc-2"] || answers["qc-4"]) {
      return {
        level: "yellow",
        title: "Có thể tự xử lý tạm thời",
        message: "Bạn có thể sử dụng các vật liệu chống dột nhanh để xử lý nếu vị trí dột rõ ràng và an toàn để tiếp cận.",
        recommendedTrialIds: ["trial-seal-screw", "trial-clean-gutter", "trial-patch-roof", "trial-stop"]
      };
    }
    return {
      level: "green",
      title: "Cần kiểm tra tìm vị trí dột",
      message: "Vết dột có thể xuất hiện cách xa vị trí nước nhỏ xuống thực tế. Hãy kiểm tra tổng thể mái khi trời tạnh.",
      recommendedTrialIds: ["trial-clean-gutter", "trial-stop"]
    };
  },

  trials: [
    {
      id: "trial-clean-gutter",
      title: "Thông tắc máng xối",
      when: "Khi nước mưa không thoát kịp và tràn ngược vào nhà",
      steps: [
        "Sử dụng thang chắc chắn để tiếp cận máng xối",
        "Dọn sạch lá cây, rác thải và bùn đất tích tụ",
        "Dùng vòi xịt nước để kiểm tra độ thông thoáng của ống thoát"
      ]
    },
    {
      id: "trial-seal-screw",
      title: "Bắn keo đinh vít và mối nối",
      when: "Khi xác định dột do hở đầu đinh hoặc hở mí tôn",
      steps: [
        "Vệ sinh sạch bụi bẩn và lau khô quanh đầu đinh hoặc mối nối",
        "Bơm keo Silicon chịu nhiệt chuyên dụng bao quanh đầu vít",
        "Đối với mối nối tôn, dùng keo miết dọc theo đường giáp mí"
      ]
    },
    {
      id: "trial-patch-roof",
      title: "Dùng miếng dán chống dột",
      when: "Khi mái tôn bị thủng lỗ nhỏ hoặc ngói bị nứt nhẹ",
      steps: [
        "Làm sạch bề mặt vùng xung quanh vị trí thủng (loại bỏ rỉ sét)",
        "Cắt miếng dán chống dột (loại có màng nhôm) lớn hơn lỗ thủng 5-10cm",
        "Bóc lớp bảo vệ, dán đè lên lỗ và miết thật chặt để không còn bọt khí"
      ]
    },
    {
      id: "trial-stop",
      title: "Dừng và nhờ thợ",
      when: "Khi phải làm việc trên mái cao nguy hiểm hoặc dột diện rộng",
      steps: [
        "Tuyệt đối không leo trèo khi trời đang mưa hoặc gió lớn",
        "Sử dụng chức năng Nhờ hỗ trợ để tìm thợ chống thấm chuyên nghiệp"
      ]
    }
  ],

  meta: { allowSkipChecklist: true, createdBy: "ai", version: 1 }
};