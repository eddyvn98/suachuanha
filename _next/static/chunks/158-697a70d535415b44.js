"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[158], {
    4158: function(t, n, i) {
        i.r(n),
        i.d(n, {
            ALL_CASES: function() {
                return c
            },
            ISSUE_TYPES: function() {
                return s
            },
            getCaseById: function() {
                return l
            },
            getCasesByArea: function() {
                return a
            },
            getCasesByAreaAndCategory: function() {
                return g
            },
            getCasesByCategory: function() {
                return r
            },
            roofLeakCase: function() {
                return h
            },
            toiletCloggedCase: function() {
                return e
            }
        });
        let e = {
            id: "toilet-clogged",
            area: "water",
            category: "toilet",
            label: "Nghẹt bồn cầu",
            icon: "\uD83D\uDEBD",
            description: "Bồn cầu tho\xe1t chậm hoặc kh\xf4ng tr\xf4i",
            checklist: [{
                id: "qc-object",
                text: "C\xf3 khả năng l\xe0m rơi vật cứng (đồ chơi, b\xe0n chải, vật nhựa) xuống bồn cầu kh\xf4ng?"
            }, {
                id: "qc-water-rise",
                text: "Khi xả, nước c\xf3 d\xe2ng l\xean gần miệng bồn cầu kh\xf4ng?"
            }, {
                id: "qc-other-drains",
                text: "C\xe1c chỗ tho\xe1t nước kh\xe1c (bồn rửa, cống s\xe0n) c\xf3 bị chậm hoặc tắc kh\xf4ng?"
            }, {
                id: "qc-sudden",
                text: "Bồn cầu bị nghẹt đột ngột, trước đ\xf3 vẫn d\xf9ng b\xecnh thường?"
            }],
            diagnosis: {
                evaluate: t => t["qc-object"] ? {
                    level: "red",
                    title: "Vật cứng mắc kẹt",
                    message: "C\xf3 vật lạ rơi v\xe0o ống. C\xe0ng thụt sẽ c\xe0ng đẩy vật v\xe0o s\xe2u hơn, g\xe2y hư hỏng nặng. N\xean gọi thợ chuy\xean nghiệp.",
                    recommendedTrialIds: ["trial-stop"]
                } : t["qc-other-drains"] ? {
                    level: "yellow",
                    title: "Lỗi hệ thống hoặc bể phốt",
                    message: "Nhiều cống c\xf9ng tắc b\xe1o hiệu vấn đề ở ống ch\xednh hoặc bể phốt đ\xe3 đầy.",
                    recommendedTrialIds: ["trial-plunger", "trial-enzyme"]
                } : t["qc-water-rise"] || t["qc-sudden"] ? {
                    level: "yellow",
                    title: "Tắc nghẽn cục bộ",
                    message: "Bồn cầu bị nghẹt, c\xf3 thể do giấy hoặc chất thải. H\xe3y thử c\xe1c biện ph\xe1p cơ bản trước.",
                    recommendedTrialIds: ["trial-plunger", "trial-hot-water-soap", "trial-drain-snake"]
                } : {
                    level: "green",
                    title: "Vấn đề nhẹ",
                    message: "Dường như bồn cầu chỉ bị tho\xe1t chậm. Thử c\xe1c c\xe1ch tự xử l\xfd đơn giản.",
                    recommendedTrialIds: ["trial-plunger", "trial-hot-water-soap", "trial-enzyme"]
                }
            },
            trials: [{
                id: "trial-plunger",
                title: "D\xf9ng thụt cao su",
                when: "N\xean thử đầu ti\xean nếu nước vẫn c\xf2n trong bồn cầu v\xe0 chưa tr\xe0n ra ngo\xe0i",
                steps: ["Đảm bảo đầu thụt ngập ho\xe0n to\xe0n trong nước để tạo lực h\xfat", "Đặt thụt kh\xedt v\xe0o lỗ tho\xe1t nước", "Ấn mạnh xuống rồi k\xe9o l\xean dứt kho\xe1t, lặp lại v\xe0i lần", "Dừng lại nếu thấy nước bắt đầu r\xfat xuống"]
            }, {
                id: "trial-hot-water-soap",
                title: "Nước n\xf3ng v\xe0 nước rửa ch\xe9n",
                when: "Ph\xf9 hợp nếu nghi nghẹt do giấy vệ sinh hoặc chất thải mềm",
                steps: ["Đổ một lượng vừa phải nước rửa ch\xe9n v\xe0o bồn cầu", "Chờ khoảng 5–10 ph\xfat", "Đổ từ từ nước n\xf3ng (kh\xf4ng phải nước s\xf4i) v\xe0o bồn cầu", "Đợi th\xeam v\xe0i ph\xfat rồi thử xả nhẹ"]
            }, {
                id: "trial-drain-snake",
                title: "D\xf9ng d\xe2y th\xf4ng cống loại mềm",
                when: "Khi thụt kh\xf4ng hiệu quả v\xe0 nghi nghẹt ở s\xe2u b\xean trong",
                steps: ["Luồn đầu d\xe2y từ từ v\xe0o lỗ tho\xe1t nước", "Xoay nhẹ để d\xe2y tiến s\xe2u hơn", "K\xe9o ra chậm r\xe3i nếu cảm thấy vướng", "Thử xả lại sau khi r\xfat d\xe2y ra"]
            }, {
                id: "trial-enzyme",
                title: "D\xf9ng chế phẩm enzyme hoặc men vi sinh",
                when: "Th\xedch hợp với nghẹt nhẹ, nghẹt do t\xedch tụ l\xe2u ng\xe0y",
                steps: ["Đổ lượng enzyme theo hướng dẫn tr\xean bao b\xec", "Kh\xf4ng xả nước trong v\xe0i giờ (tốt nhất để qua đ\xeam)", "Xả lại v\xe0o h\xf4m sau để kiểm tra hiệu quả"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu c\xe1c c\xe1ch tr\xean kh\xf4ng hiệu quả hoặc t\xecnh trạng nặng hơn",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "Gửi b\xe1o c\xe1o chi tiết cho thợ"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "human",
                version: 1
            }
        }
          , h = {
            id: "roof-leak",
            area: "outdoor",
            category: "roof",
            label: "Dột m\xe1i nh\xe0",
            icon: "\uD83C\uDF27️",
            description: "Nước nhỏ xuống khi mưa",
            checklist: [{
                id: "qc-heavy-rain",
                text: "Chỉ dột khi mưa lớn?"
            }, {
                id: "qc-safe-access",
                text: "Bạn c\xf3 thể l\xean m\xe1i an to\xe0n kh\xf4ng?"
            }],
            diagnosis: {
                evaluate: t => t["qc-safe-access"] ? t["qc-heavy-rain"] ? {
                    level: "yellow",
                    title: "Dột khi mưa lớn",
                    message: "C\xf3 thể do m\xe1ng xối nghẹt hoặc ng\xf3i lệch. Thử vệ sinh trước.",
                    recommendedTrialIds: ["trial-clean"]
                } : {
                    level: "green",
                    title: "Dột nhẹ",
                    message: "C\xf3 thể tự xử l\xfd bằng c\xe1ch vệ sinh v\xe0 kiểm tra.",
                    recommendedTrialIds: ["trial-clean"]
                } : {
                    level: "red",
                    title: "Kh\xf4ng an to\xe0n để tự xử l\xfd",
                    message: "L\xean m\xe1i nh\xe0 c\xf3 thể nguy hiểm. N\xean nhờ thợ chuy\xean nghiệp.",
                    recommendedTrialIds: ["trial-stop"]
                }
            },
            trials: [{
                id: "trial-clean",
                title: "Vệ sinh khu vực nghi dột",
                when: "Nếu nghi nước tr\xe0n do r\xe1c hoặc l\xe1 c\xe2y",
                steps: ["Qu\xe9t sạch l\xe1 v\xe0 r\xe1c tr\xean m\xe1i", "Kiểm tra m\xe1ng xối c\xf3 bị nghẹt kh\xf4ng", "Chờ mưa tiếp theo để quan s\xe1t xem c\xf2n dột kh\xf4ng"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu dột nhiều hoặc thấy kh\xf4ng an to\xe0n",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "Gửi b\xe1o c\xe1o chi tiết cho thợ"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "human",
                version: 1
            }
        }
          , c = [e, h, {
            id: "shower-water-cold",
            area: "water",
            category: "shower",
            label: "Nước tắm kh\xf4ng n\xf3ng",
            icon: "\uD83D\uDEBF",
            description: "Mở v\xf2i tắm nhưng nước chỉ lạnh hoặc hơi ấm rồi nguội",
            checklist: [{
                id: "qc-other-faucet",
                text: "C\xe1c v\xf2i nước kh\xe1c trong nh\xe0 c\xf3 nước n\xf3ng kh\xf4ng?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y xảy ra đột ngột, trước đ\xf3 vẫn d\xf9ng b\xecnh thường?"
            }, {
                id: "qc-weak-flow",
                text: "Nước chảy ra yếu hơn b\xecnh thường kh\xf4ng?"
            }, {
                id: "qc-only-shower",
                text: "Chỉ ri\xeang v\xf2i tắm bị, c\xf2n chỗ kh\xe1c th\xec kh\xf4ng?"
            }],
            diagnosis: {
                evaluate: t => t["qc-other-faucet"] ? t["qc-only-shower"] && t["qc-weak-flow"] ? {
                    level: "green",
                    title: "C\xf3 thể do đầu v\xf2i tắm",
                    message: "D\xf2ng nước yếu đ\xf4i khi l\xe0m nước n\xf3ng kh\xf4ng l\xean đ\xfang.",
                    recommendedTrialIds: ["trial-clean-head", "trial-adjust-flow"]
                } : {
                    level: "green",
                    title: "Vấn đề c\xf3 thể ở thao t\xe1c sử dụng",
                    message: "Thử kiểm tra v\xe0 điều chỉnh lại c\xe1ch mở v\xf2i.",
                    recommendedTrialIds: ["trial-check-handle", "trial-adjust-flow"]
                } : {
                    level: "yellow",
                    title: "C\xf3 thể li\xean quan đến nguồn nước n\xf3ng chung",
                    message: "Khi cả nh\xe0 đều kh\xf4ng c\xf3 nước n\xf3ng, c\xe1c c\xe1ch đơn giản tại v\xf2i tắm thường kh\xf4ng giải quyết được.",
                    recommendedTrialIds: ["trial-check-handle", "trial-stop"]
                }
            },
            trials: [{
                id: "trial-check-handle",
                title: "Kiểm tra lại tay gạt nước",
                when: "Nếu nước chỉ lạnh hoặc l\xfac ấm l\xfac lạnh",
                steps: ["Xoay tay gạt chậm r\xe3i sang ph\xeda nước n\xf3ng", "Giữ y\xean v\xe0i chục gi\xe2y để nước ổn định", "Tr\xe1nh xoay qua lại li\xean tục"]
            }, {
                id: "trial-adjust-flow",
                title: "Giảm bớt lượng nước",
                when: "Nếu nước chảy qu\xe1 mạnh nhưng kh\xf4ng n\xf3ng",
                steps: ["Vặn nhỏ bớt v\xf2i nước", "Chờ v\xe0i gi\xe2y xem nước c\xf3 ấm l\xean kh\xf4ng", "Điều chỉnh đến khi thấy ổn định"]
            }, {
                id: "trial-clean-head",
                title: "Vệ sinh đầu v\xf2i tắm",
                when: "Nếu nước chảy yếu hoặc tia nước kh\xf4ng đều",
                steps: ["Th\xe1o đầu v\xf2i tắm ra nếu l\xe0m được bằng tay", "Rửa sạch cặn bẩn b\xean trong", "Lắp lại v\xe0 thử mở nước"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu đ\xe3 thử m\xe0 nước vẫn kh\xf4ng n\xf3ng hoặc kh\xf4ng ổn định",
                steps: ["Ngưng thử th\xeam để tr\xe1nh mất thời gian", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 t\xecnh trạng v\xe0 những g\xec đ\xe3 thử"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "pipe-water-noise",
            area: "water",
            category: "pipe",
            label: "Ống nước k\xeau ồn",
            icon: "\uD83D\uDD0A",
            description: "Nghe tiếng k\xeau, rung hoặc g\xf5 trong ống nước khi mở hoặc tắt v\xf2i",
            checklist: [{
                id: "qc-only-when-open",
                text: "Tiếng k\xeau chỉ xuất hiện khi đang mở nước?"
            }, {
                id: "qc-after-close",
                text: "Vừa tắt v\xf2i th\xec nghe tiếng g\xf5 mạnh trong ống?"
            }, {
                id: "qc-specific-spot",
                text: "\xc2m thanh ph\xe1t ra r\xf5 ở một vị tr\xed cố định trong nh\xe0?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y, trước đ\xf3 kh\xf4ng c\xf3?"
            }],
            diagnosis: {
                evaluate: t => t["qc-after-close"] ? {
                    level: "yellow",
                    title: "C\xf3 thể do \xe1p lực nước",
                    message: "Tiếng g\xf5 sau khi tắt v\xf2i thường li\xean quan đến \xe1p lực nước thay đổi đột ngột.",
                    recommendedTrialIds: ["trial-open-slowly", "trial-check-loose"]
                } : t["qc-specific-spot"] && t["qc-sudden"] ? {
                    level: "yellow",
                    title: "C\xf3 thể ống bị rung",
                    message: "Ống nước c\xf3 thể bị rung khi nước chảy mạnh.",
                    recommendedTrialIds: ["trial-open-slowly", "trial-observe"]
                } : {
                    level: "green",
                    title: "Tiếng ồn nhẹ, thường gặp",
                    message: "C\xf3 thể thử điều chỉnh c\xe1ch sử dụng để giảm tiếng ồn.",
                    recommendedTrialIds: ["trial-open-slowly", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-open-slowly",
                title: "Mở v\xe0 tắt v\xf2i chậm lại",
                when: "Nếu tiếng k\xeau xuất hiện khi vừa mở hoặc vừa tắt nước",
                steps: ["Mở v\xf2i nước từ từ thay v\xec mở hết ngay", "Khi tắt, vặn chậm để nước giảm dần", "Lắng nghe xem tiếng k\xeau c\xf3 giảm kh\xf4ng"]
            }, {
                id: "trial-check-loose",
                title: "Kiểm tra vật dụng gần ống",
                when: "Nếu nghi c\xf3 rung lắc khi nước chảy",
                steps: ["Quan s\xe1t khu vực nghe tiếng k\xeau r\xf5 nhất", "Xem c\xf3 vật dụng n\xe0o chạm v\xe0o ống nước kh\xf4ng", "Điều chỉnh hoặc di chuyển vật đ\xf3 ra xa"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam một thời gian",
                when: "Nếu tiếng k\xeau nhẹ v\xe0 kh\xf4ng ảnh hưởng sinh hoạt",
                steps: ["Ghi nhận khi n\xe0o tiếng k\xeau xuất hiện", "So s\xe1nh giữa c\xe1c lần sử dụng nước", "Chỉ thử th\xeam nếu tiếng k\xeau to hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu tiếng k\xeau ng\xe0y c\xe0ng to hoặc g\xe2y rung mạnh",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 vị tr\xed v\xe0 thời điểm ph\xe1t ra tiếng k\xeau"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "water-smells-bad",
            area: "water",
            category: "faucet",
            label: "Nước c\xf3 m\xf9i lạ",
            icon: "\uD83D\uDCA7",
            description: "Mở v\xf2i nước thấy m\xf9i h\xf4i, m\xf9i tanh hoặc m\xf9i kh\xf3 chịu",
            checklist: [{
                id: "qc-only-first-open",
                text: "M\xf9i lạ chỉ xuất hiện khi mới mở nước lần đầu?"
            }, {
                id: "qc-hot-water",
                text: "M\xf9i lạ r\xf5 hơn khi d\xf9ng nước n\xf3ng?"
            }, {
                id: "qc-all-faucets",
                text: "C\xe1c v\xf2i kh\xe1c trong nh\xe0 cũng c\xf3 m\xf9i tương tự?"
            }, {
                id: "qc-recent-absence",
                text: "Nh\xe0 c\xf3 thời gian d\xe0i kh\xf4ng sử dụng nước gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-all-faucets"] ? {
                    level: "yellow",
                    title: "C\xf3 thể do nguồn nước chung",
                    message: "Khi nhiều v\xf2i c\xf9ng c\xf3 m\xf9i, vấn đề thường kh\xf4ng nằm ở ri\xeang một chỗ.",
                    recommendedTrialIds: ["trial-flush-water", "trial-stop"]
                } : t["qc-only-first-open"] || t["qc-recent-absence"] ? {
                    level: "green",
                    title: "M\xf9i do nước đọng",
                    message: "Nước để l\xe2u kh\xf4ng d\xf9ng c\xf3 thể tạo m\xf9i nhẹ khi mở lại.",
                    recommendedTrialIds: ["trial-flush-water", "trial-clean-aerator"]
                } : {
                    level: "green",
                    title: "M\xf9i nhẹ, kh\xf4ng ổn định",
                    message: "C\xf3 thể thử c\xe1c c\xe1ch đơn giản để kiểm tra.",
                    recommendedTrialIds: ["trial-flush-water", "trial-clean-aerator"]
                }
            },
            trials: [{
                id: "trial-flush-water",
                title: "Xả nước một l\xfac",
                when: "Nếu m\xf9i xuất hiện khi mới mở nước",
                steps: ["Mở v\xf2i nước v\xe0 để chảy li\xean tục v\xe0i ph\xfat", "Quan s\xe1t xem m\xf9i c\xf3 giảm dần kh\xf4ng", "Thử lại sau khi tắt rồi mở lại"]
            }, {
                id: "trial-clean-aerator",
                title: "Vệ sinh đầu v\xf2i",
                when: "Nếu m\xf9i chỉ xuất hiện ở một v\xf2i",
                steps: ["Th\xe1o lưới lọc ở đầu v\xf2i (nếu th\xe1o được bằng tay)", "Rửa sạch cặn bẩn b\xe1m b\xean trong", "Lắp lại v\xe0 mở nước kiểm tra"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i kh\xf4ng giảm hoặc ng\xe0y c\xe0ng kh\xf3 chịu",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 m\xf9i v\xe0 c\xe1c vị tr\xed bị ảnh hưởng"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "faucet-drip-after-close",
            area: "water",
            category: "faucet",
            label: "V\xf2i nước nhỏ giọt sau khi kh\xf3a",
            icon: "\uD83D\uDCA7",
            description: "Đ\xe3 kh\xf3a v\xf2i nhưng vẫn c\xf2n nhỏ giọt một l\xfac sau",
            checklist: [{
                id: "qc-stop-after-while",
                text: "V\xf2i chỉ nhỏ giọt một l\xfac rồi tự hết?"
            }, {
                id: "qc-always-drip",
                text: "V\xf2i nhỏ giọt li\xean tục d\xf9 đ\xe3 kh\xf3a chặt?"
            }, {
                id: "qc-hot-more",
                text: "Nước n\xf3ng nhỏ giọt nhiều hơn nước lạnh?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-always-drip"] ? {
                    level: "yellow",
                    title: "V\xf2i c\xf3 thể kh\xf4ng k\xedn",
                    message: "Khi nhỏ giọt li\xean tục, thường do phần b\xean trong kh\xf4ng c\xf2n k\xedn như trước.",
                    recommendedTrialIds: ["trial-close-gently", "trial-observe", "trial-stop"]
                } : t["qc-stop-after-while"] ? {
                    level: "green",
                    title: "Nước c\xf2n đọng trong v\xf2i",
                    message: "Sau khi kh\xf3a, nước c\xf2n lại c\xf3 thể nhỏ giọt một l\xfac rồi hết.",
                    recommendedTrialIds: ["trial-close-gently", "trial-observe"]
                } : {
                    level: "green",
                    title: "Nhỏ giọt nhẹ",
                    message: "C\xf3 thể thử điều chỉnh c\xe1ch kh\xf3a v\xf2i.",
                    recommendedTrialIds: ["trial-close-gently", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-close-gently",
                title: "Kh\xf3a v\xf2i nhẹ tay",
                when: "Nếu v\xf2i nhỏ giọt sau khi vừa kh\xf3a",
                steps: ["Vặn v\xf2i vừa đủ chặt, kh\xf4ng siết mạnh", "Chờ v\xe0i chục gi\xe2y xem c\xf2n nhỏ giọt kh\xf4ng", "Tr\xe1nh vặn qua lại nhiều lần"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i trong thời gian ngắn",
                when: "Nếu v\xf2i chỉ nhỏ giọt nhẹ",
                steps: ["Quan s\xe1t trong v\xe0i ph\xfat sau khi kh\xf3a", "Ghi nhận số giọt v\xe0 thời gian k\xe9o d\xe0i", "So s\xe1nh giữa nước n\xf3ng v\xe0 lạnh"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu v\xf2i vẫn nhỏ giọt li\xean tục hoặc nặng hơn",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 v\xf2i n\xe0o v\xe0 mức độ nhỏ giọt"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "faucet-vibrating",
            area: "water",
            category: "faucet",
            label: "V\xf2i nước rung khi mở",
            icon: "\uD83D\uDEB0",
            description: "Mở v\xf2i l\xe0 thấy rung tay hoặc nghe tiếng lạch cạch nhẹ",
            checklist: [{
                id: "qc-only-strong-flow",
                text: "V\xf2i rung r\xf5 hơn khi mở nước mạnh?"
            }, {
                id: "qc-only-one-faucet",
                text: "Chỉ một v\xf2i bị rung, c\xe1c v\xf2i kh\xe1c th\xec kh\xf4ng?"
            }, {
                id: "qc-after-repair",
                text: "T\xecnh trạng n\xe0y xuất hiện sau khi c\xf3 sửa chữa nước gần đ\xe2y?"
            }, {
                id: "qc-sudden",
                text: "V\xf2i bắt đầu rung đột ngột, trước đ\xf3 d\xf9ng b\xecnh thường?"
            }],
            diagnosis: {
                evaluate: t => t["qc-only-strong-flow"] ? {
                    level: "green",
                    title: "Rung do nước chảy mạnh",
                    message: "Khi mở nước qu\xe1 mạnh, v\xf2i c\xf3 thể rung nhẹ.",
                    recommendedTrialIds: ["trial-adjust-flow", "trial-check-loose"]
                } : t["qc-only-one-faucet"] && t["qc-sudden"] ? {
                    level: "yellow",
                    title: "V\xf2i c\xf3 thể bị lỏng",
                    message: "Rung ở một v\xf2i thường li\xean quan đến phần gắn v\xf2i.",
                    recommendedTrialIds: ["trial-check-loose", "trial-observe"]
                } : {
                    level: "green",
                    title: "Rung nhẹ, thường gặp",
                    message: "C\xf3 thể thử v\xe0i c\xe1ch đơn giản để kiểm tra.",
                    recommendedTrialIds: ["trial-adjust-flow", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-adjust-flow",
                title: "Mở nước vừa phải",
                when: "Nếu v\xf2i rung khi mở nước mạnh",
                steps: ["Mở v\xf2i từ từ, kh\xf4ng mở hết ngay", "Giữ mức nước vừa đủ d\xf9ng", "Cảm nhận xem v\xf2i c\xf2n rung kh\xf4ng"]
            }, {
                id: "trial-check-loose",
                title: "Kiểm tra độ chắc của v\xf2i",
                when: "Nếu v\xf2i rung d\xf9 mở nhẹ",
                steps: ["D\xf9ng tay lắc nhẹ v\xf2i khi kh\xf4ng mở nước", "Quan s\xe1t xem v\xf2i c\xf3 bị lỏng kh\xf4ng", "Siết lại nhẹ nếu thấy lỏng (nếu l\xe0m được bằng tay)"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam v\xe0i lần sử dụng",
                when: "Nếu rung nhẹ v\xe0 kh\xf4ng ảnh hưởng nhiều",
                steps: ["Ghi nhận khi n\xe0o v\xf2i rung", "So s\xe1nh giữa c\xe1c lần sử dụng", "Chỉ thử th\xeam nếu rung mạnh hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu v\xf2i rung mạnh hoặc kh\xf4ng cải thiện",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 mức độ rung v\xe0 vị tr\xed v\xf2i"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "faucet-weak-spray",
            area: "water",
            category: "faucet",
            label: "V\xf2i nước phun tản, tia kh\xf4ng đều",
            icon: "\uD83D\uDEB0",
            description: "Nước ra th\xe0nh nhiều tia nhỏ, bắn tản, kh\xf4ng th\xe0nh d\xf2ng đều",
            checklist: [{
                id: "qc-only-one-faucet",
                text: "Chỉ một v\xf2i bị phun tản, c\xe1c v\xf2i kh\xe1c vẫn b\xecnh thường?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y xuất hiện đột ngột?"
            }, {
                id: "qc-after-repair",
                text: "Gần đ\xe2y c\xf3 sửa chữa hoặc c\xfap nước rồi mở lại?"
            }, {
                id: "qc-visible-debris",
                text: "Nh\xecn thấy cặn hoặc r\xe1c nhỏ ở đầu v\xf2i?"
            }],
            diagnosis: {
                evaluate: t => t["qc-only-one-faucet"] && t["qc-visible-debris"] ? {
                    level: "green",
                    title: "C\xf3 thể do cặn ở đầu v\xf2i",
                    message: "Cặn bẩn nhỏ thường l\xe0m tia nước bị tản.",
                    recommendedTrialIds: ["trial-clean-aerator", "trial-flush"]
                } : t["qc-after-repair"] ? {
                    level: "yellow",
                    title: "C\xf3 thể c\xf3 cặn theo nước",
                    message: "Sau sửa chữa, cặn c\xf3 thể theo nước ra đầu v\xf2i.",
                    recommendedTrialIds: ["trial-clean-aerator", "trial-flush"]
                } : {
                    level: "green",
                    title: "Phun tản nhẹ",
                    message: "C\xf3 thể thử c\xe1c c\xe1ch đơn giản để cải thiện.",
                    recommendedTrialIds: ["trial-clean-aerator", "trial-flush"]
                }
            },
            trials: [{
                id: "trial-clean-aerator",
                title: "Vệ sinh lưới lọc đầu v\xf2i",
                when: "Nếu tia nước bị tản hoặc kh\xf4ng đều",
                steps: ["Th\xe1o lưới lọc ở đầu v\xf2i bằng tay", "Rửa sạch cặn bẩn b\xe1m b\xean trong", "Lắp lại v\xe0 mở nước kiểm tra"]
            }, {
                id: "trial-flush",
                title: "Xả nước mạnh trong chốc l\xe1t",
                when: "Nếu nghi c\xf3 cặn theo nước",
                steps: ["Th\xe1o lưới lọc đầu v\xf2i ra", "Mở nước cho chảy mạnh v\xe0i chục gi\xe2y", "Gắn lại lưới lọc v\xe0 kiểm tra"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu đ\xe3 thử m\xe0 tia nước vẫn kh\xf4ng đều",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 v\xf2i n\xe0o v\xe0 t\xecnh trạng tia nước"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "floor-drain-backflow",
            area: "water",
            category: "floor-drain",
            label: "Nước tr\xe0n ngược từ cống s\xe0n",
            icon: "\uD83D\uDD73️",
            description: "Xả nước chỗ n\xe0y nhưng nước lại trồi l\xean từ cống s\xe0n chỗ kh\xe1c",
            checklist: [{
                id: "qc-when-other-use",
                text: "Nước tr\xe0n l\xean khi xả bồn rửa, m\xe1y giặt hoặc bồn cầu?"
            }, {
                id: "qc-dirty-water",
                text: "Nước tr\xe0n l\xean c\xf3 m\xf9i hoặc m\xe0u đục?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y xuất hiện đột ngột, trước đ\xf3 kh\xf4ng c\xf3?"
            }, {
                id: "qc-only-floor-drain",
                text: "Chỉ cống s\xe0n bị tr\xe0n, c\xe1c chỗ kh\xe1c vẫn b\xecnh thường?"
            }],
            diagnosis: {
                evaluate: t => t["qc-dirty-water"] ? {
                    level: "yellow",
                    title: "Nước tho\xe1t kh\xf4ng đi đ\xfang hướng",
                    message: "Khi nước bẩn tr\xe0o ngược, thường kh\xf4ng n\xean cố thử nhiều c\xe1ch.",
                    recommendedTrialIds: ["trial-cover-drain", "trial-stop"]
                } : t["qc-when-other-use"] && t["qc-only-floor-drain"] ? {
                    level: "yellow",
                    title: "C\xf3 thể đường tho\xe1t bị cản",
                    message: "Nước xả chỗ kh\xe1c c\xf3 thể dồn về cống s\xe0n.",
                    recommendedTrialIds: ["trial-cover-drain", "trial-limit-use"]
                } : {
                    level: "green",
                    title: "Tr\xe0o ngược nhẹ, chưa thường xuy\xean",
                    message: "C\xf3 thể thử quan s\xe1t v\xe0 hạn chế sử dụng nước.",
                    recommendedTrialIds: ["trial-limit-use", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-cover-drain",
                title: "Che tạm cống s\xe0n",
                when: "Nếu nước tr\xe0n l\xean khi xả chỗ kh\xe1c",
                steps: ["D\xf9ng nắp, khăn hoặc vật nặng che miệng cống s\xe0n", "Tr\xe1nh xả nhiều nước c\xf9ng l\xfac", "Quan s\xe1t xem nước c\xf2n tr\xe0n l\xean kh\xf4ng"]
            }, {
                id: "trial-limit-use",
                title: "Hạn chế xả nước lớn",
                when: "Nếu nghi nước dồn về cống s\xe0n",
                steps: ["Tr\xe1nh xả nước mạnh hoặc li\xean tục", "Kh\xf4ng d\xf9ng nhiều thiết bị nước c\xf9ng l\xfac", "Theo d\xf5i t\xecnh trạng trong ng\xe0y"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu nước chỉ tr\xe0n nhẹ v\xe0 kh\xf4ng thường xuy\xean",
                steps: ["Ghi nhận thời điểm nước tr\xe0n", "Xem c\xf3 li\xean quan đến việc xả chỗ kh\xe1c kh\xf4ng", "Chỉ thử th\xeam nếu t\xecnh trạng lặp lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu nước tr\xe0n nhiều, c\xf3 m\xf9i hoặc lặp lại li\xean tục",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 thời điểm v\xe0 mức độ nước tr\xe0n"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "shower-drain-slow",
            area: "water",
            category: "shower",
            label: "Nước tho\xe1t rất chậm khi tắm",
            icon: "\uD83D\uDEBF",
            description: "Nước r\xfat chậm, dễ đọng lại ở s\xe0n khi đang tắm",
            checklist: [{
                id: "qc-gradual",
                text: "Nước tho\xe1t chậm dần theo thời gian, kh\xf4ng phải đột ngột?"
            }, {
                id: "qc-hair",
                text: "Khu vực tho\xe1t nước c\xf3 nhiều t\xf3c hoặc cặn nh\xecn thấy được?"
            }, {
                id: "qc-only-shower",
                text: "Chỉ chỗ tắm bị chậm, c\xe1c chỗ tho\xe1t nước kh\xe1c vẫn b\xecnh thường?"
            }, {
                id: "qc-after-use",
                text: "Tắm c\xe0ng l\xe2u th\xec nước c\xe0ng r\xfat chậm?"
            }],
            diagnosis: {
                evaluate: t => t["qc-hair"] && t["qc-only-shower"] ? {
                    level: "green",
                    title: "C\xf3 thể do t\xf3c v\xe0 cặn",
                    message: "T\xf3c v\xe0 cặn x\xe0 ph\xf2ng thường l\xe0m nước tho\xe1t chậm ở khu vực tắm.",
                    recommendedTrialIds: ["trial-remove-hair", "trial-hot-water"]
                } : t["qc-gradual"] && t["qc-after-use"] ? {
                    level: "yellow",
                    title: "Tho\xe1t nước k\xe9m dần",
                    message: "Khi nước r\xfat chậm dần, n\xean thử c\xe1c c\xe1ch nhẹ trước.",
                    recommendedTrialIds: ["trial-remove-hair", "trial-hot-water"]
                } : {
                    level: "green",
                    title: "Tho\xe1t nước chậm nhẹ",
                    message: "C\xf3 thể thử v\xe0i c\xe1ch đơn giản để cải thiện.",
                    recommendedTrialIds: ["trial-remove-hair", "trial-hot-water"]
                }
            },
            trials: [{
                id: "trial-remove-hair",
                title: "Lấy t\xf3c v\xe0 cặn ở miệng tho\xe1t",
                when: "Nếu thấy t\xf3c hoặc cặn b\xe1m quanh lỗ tho\xe1t nước",
                steps: ["D\xf9ng tay hoặc m\xf3c nhỏ lấy t\xf3c ở miệng tho\xe1t", "Thu gom v\xe0 bỏ đi, kh\xf4ng đẩy xuống s\xe2u", "Mở nước kiểm tra lại"]
            }, {
                id: "trial-hot-water",
                title: "Xả nước n\xf3ng",
                when: "Nếu nghi c\xf3 cặn x\xe0 ph\xf2ng b\xe1m b\xean trong",
                steps: ["Xả nước n\xf3ng li\xean tục v\xe0i ph\xfat", "Quan s\xe1t xem nước r\xfat nhanh hơn kh\xf4ng", "Tr\xe1nh d\xf9ng nước s\xf4i"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i sau khi vệ sinh",
                when: "Nếu nước đ\xe3 r\xfat nhưng chưa ho\xe0n to\xe0n",
                steps: ["Tắm thử trong thời gian ngắn", "Quan s\xe1t mức độ đọng nước", "Chỉ thử th\xeam nếu vẫn c\xf2n chậm"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu đ\xe3 thử m\xe0 nước vẫn đọng nhiều",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 mức độ nước đọng v\xe0 thời gian tắm"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "sink-under-leak",
            area: "water",
            category: "sink",
            label: "Nước rỉ dưới bồn rửa",
            icon: "\uD83E\uDEA3",
            description: "B\xean dưới bồn rửa bị ướt hoặc nhỏ nước khi sử dụng",
            checklist: [{
                id: "qc-only-when-use",
                text: "Chỉ thấy nước rỉ khi đang mở v\xf2i hoặc xả nước?"
            }, {
                id: "qc-puddle-bottom",
                text: "Nước đọng ở đ\xe1y tủ dưới bồn rửa?"
            }, {
                id: "qc-drain-use",
                text: "Nước rỉ r\xf5 hơn khi xả nước trong bồn?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y xuất hiện đột ngột, trước đ\xf3 kh\xf4ng c\xf3?"
            }],
            diagnosis: {
                evaluate: t => t["qc-drain-use"] ? {
                    level: "yellow",
                    title: "C\xf3 thể rỉ ở đường tho\xe1t nước",
                    message: "Nước rỉ khi xả thường li\xean quan đến c\xe1c khớp nối b\xean dưới bồn.",
                    recommendedTrialIds: ["trial-dry-observe", "trial-check-connection"]
                } : t["qc-only-when-use"] && t["qc-puddle-bottom"] ? {
                    level: "green",
                    title: "Rỉ nhẹ, dễ quan s\xe1t",
                    message: "C\xf3 thể thử kiểm tra v\xe0 theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-dry-observe", "trial-place-bowl"]
                } : {
                    level: "green",
                    title: "Nước rỉ kh\xf4ng r\xf5 nguồn",
                    message: "N\xean quan s\xe1t kỹ để x\xe1c định vị tr\xed rỉ.",
                    recommendedTrialIds: ["trial-dry-observe", "trial-place-bowl"]
                }
            },
            trials: [{
                id: "trial-dry-observe",
                title: "Lau kh\xf4 v\xe0 quan s\xe1t",
                when: "Nếu chưa r\xf5 nước rỉ từ đ\xe2u",
                steps: ["Lau kh\xf4 to\xe0n bộ khu vực dưới bồn rửa", "Mở v\xf2i nước v\xe0 quan s\xe1t kỹ", "Xem nước bắt đầu rỉ từ vị tr\xed n\xe0o"]
            }, {
                id: "trial-check-connection",
                title: "Kiểm tra c\xe1c khớp nối",
                when: "Nếu thấy nước rỉ khi xả nước",
                steps: ["D\xf9ng tay sờ c\xe1c khớp nối dưới bồn", "Xem c\xf3 chỗ n\xe0o lỏng hoặc ẩm kh\xf4ng", "Siết lại nhẹ bằng tay nếu thấy lỏng"]
            }, {
                id: "trial-place-bowl",
                title: "Đặt chậu hứng tạm",
                when: "Nếu nước rỉ nhẹ nhưng chưa xử l\xfd ngay",
                steps: ["Đặt chậu hoặc khăn dưới chỗ rỉ", "Hạn chế sử dụng bồn rửa trong l\xfac chờ", "Theo d\xf5i lượng nước rỉ th\xeam"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu nước rỉ nhiều hoặc kh\xf4ng x\xe1c định được chỗ rỉ",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 vị tr\xed v\xe0 thời điểm nước rỉ"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "water-flow-unstable",
            area: "water",
            category: "faucet",
            label: "Nước chảy l\xfac mạnh l\xfac yếu",
            icon: "\uD83D\uDEBF",
            description: "D\xf2ng nước kh\xf4ng đều, l\xfac mạnh l\xfac yếu d\xf9 kh\xf4ng thay đổi c\xe1ch mở v\xf2i",
            checklist: [{
                id: "qc-all-faucets",
                text: "C\xe1c v\xf2i nước kh\xe1c trong nh\xe0 cũng bị t\xecnh trạng n\xe0y?"
            }, {
                id: "qc-only-peak-time",
                text: "T\xecnh trạng n\xe0y thường xảy ra v\xe0o giờ cao điểm (s\xe1ng sớm, tối)?"
            }, {
                id: "qc-sudden",
                text: "Vấn đề xuất hiện đột ngột, trước đ\xf3 d\xf9ng b\xecnh thường?"
            }, {
                id: "qc-recent-change",
                text: "Gần đ\xe2y c\xf3 sửa chữa hoặc thay đổi g\xec li\xean quan đến nước?"
            }],
            diagnosis: {
                evaluate: t => t["qc-all-faucets"] ? {
                    level: "yellow",
                    title: "C\xf3 thể do \xe1p lực nước chung",
                    message: "Khi nhiều v\xf2i c\xf9ng bị, nguy\xean nh\xe2n thường kh\xf4ng nằm ở ri\xeang một chỗ.",
                    recommendedTrialIds: ["trial-observe-time", "trial-stop"]
                } : t["qc-only-peak-time"] ? {
                    level: "green",
                    title: "Ảnh hưởng theo thời điểm",
                    message: "Một số thời điểm trong ng\xe0y nước c\xf3 thể yếu hơn b\xecnh thường.",
                    recommendedTrialIds: ["trial-observe-time", "trial-adjust-flow"]
                } : {
                    level: "green",
                    title: "D\xf2ng nước kh\xf4ng ổn định nhẹ",
                    message: "C\xf3 thể thử điều chỉnh v\xe0 theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-adjust-flow", "trial-clean-aerator"]
                }
            },
            trials: [{
                id: "trial-observe-time",
                title: "Quan s\xe1t theo thời điểm",
                when: "Nếu nước l\xfac mạnh l\xfac yếu kh\xf4ng cố định",
                steps: ["Ghi nhận thời điểm nước yếu hoặc mạnh", "So s\xe1nh giữa s\xe1ng, trưa v\xe0 tối", "Xem t\xecnh trạng c\xf3 lặp lại theo khung giờ kh\xf4ng"]
            }, {
                id: "trial-adjust-flow",
                title: "Điều chỉnh c\xe1ch mở v\xf2i",
                when: "Nếu nước mạnh yếu thất thường khi mở lớn",
                steps: ["Mở v\xf2i ở mức vừa phải", "Tr\xe1nh mở hết cỡ ngay từ đầu", "Quan s\xe1t xem d\xf2ng nước c\xf3 ổn định hơn kh\xf4ng"]
            }, {
                id: "trial-clean-aerator",
                title: "Vệ sinh lưới lọc đầu v\xf2i",
                when: "Nếu chỉ một v\xf2i bị mạnh yếu",
                steps: ["Th\xe1o lưới lọc ở đầu v\xf2i bằng tay", "Rửa sạch cặn bẩn b\xe1m b\xean trong", "Lắp lại v\xe0 mở nước kiểm tra"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu t\xecnh trạng k\xe9o d\xe0i hoặc ảnh hưởng sinh hoạt",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 thời điểm v\xe0 mức độ nước mạnh yếu"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "low-water-pressure",
            area: "water",
            category: "system",
            label: "\xc1p lực nước yếu to\xe0n bộ nh\xe0",
            icon: "\uD83D\uDEBF",
            description: "Nước chảy yếu ở nhiều v\xf2i, kh\xf3 sử dụng như trước",
            checklist: [{
                id: "qc-all-faucets",
                text: "Hầu hết c\xe1c v\xf2i trong nh\xe0 đều chảy yếu?"
            }, {
                id: "qc-peak-time",
                text: "Nước yếu r\xf5 hơn v\xe0o giờ cao điểm (s\xe1ng sớm, tối)?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y xuất hiện đột ngột?"
            }, {
                id: "qc-recent-change",
                text: "Gần đ\xe2y c\xf3 c\xfap nước hoặc sửa chữa li\xean quan đến nước?"
            }],
            diagnosis: {
                evaluate: t => t["qc-peak-time"] ? {
                    level: "green",
                    title: "Ảnh hưởng theo thời điểm",
                    message: "Một số thời điểm trong ng\xe0y nước c\xf3 thể yếu hơn b\xecnh thường.",
                    recommendedTrialIds: ["trial-try-offpeak", "trial-adjust-use"]
                } : t["qc-all-faucets"] && t["qc-sudden"] ? {
                    level: "yellow",
                    title: "\xc1p lực nước giảm",
                    message: "Khi nhiều v\xf2i c\xf9ng yếu, n\xean thử c\xe1c c\xe1ch nhẹ trước.",
                    recommendedTrialIds: ["trial-try-offpeak", "trial-check-aerators"]
                } : {
                    level: "green",
                    title: "Nước yếu nhẹ",
                    message: "C\xf3 thể thử điều chỉnh v\xe0 quan s\xe1t th\xeam.",
                    recommendedTrialIds: ["trial-adjust-use", "trial-check-aerators"]
                }
            },
            trials: [{
                id: "trial-try-offpeak",
                title: "Thử d\xf9ng nước ngo\xe0i giờ cao điểm",
                when: "Nếu nước yếu v\xe0o s\xe1ng sớm hoặc buổi tối",
                steps: ["Thử mở v\xf2i v\xe0o thời điểm kh\xe1c trong ng\xe0y", "So s\xe1nh mức nước giữa c\xe1c khung giờ", "Ghi nhận thời điểm nước mạnh hơn"]
            }, {
                id: "trial-adjust-use",
                title: "Giảm d\xf9ng nhiều v\xf2i c\xf9ng l\xfac",
                when: "Nếu thường d\xf9ng nhiều thiết bị nước c\xf9ng l\xfac",
                steps: ["Thử d\xf9ng từng v\xf2i ri\xeang lẻ", "Tr\xe1nh mở nhiều v\xf2i c\xf9ng l\xfac", "Quan s\xe1t xem nước c\xf3 mạnh hơn kh\xf4ng"]
            }, {
                id: "trial-check-aerators",
                title: "Kiểm tra lưới lọc đầu v\xf2i",
                when: "Nếu một số v\xf2i yếu hơn r\xf5",
                steps: ["Th\xe1o lưới lọc đầu v\xf2i bằng tay", "Rửa sạch cặn bẩn", "Lắp lại v\xe0 kiểm tra"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu nước yếu k\xe9o d\xe0i v\xe0 ảnh hưởng sinh hoạt",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 t\xecnh trạng v\xe0 thời điểm nước yếu"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "unstable-hot-water",
            area: "water",
            category: "hot-water",
            label: "Nước n\xf3ng l\xfac c\xf3 l\xfac kh\xf4ng",
            icon: "\uD83D\uDD25",
            description: "Mở nước n\xf3ng nhưng l\xfac n\xf3ng, l\xfac lạnh hoặc đang n\xf3ng th\xec nguội",
            checklist: [{
                id: "qc-all-faucets",
                text: "Nhiều v\xf2i trong nh\xe0 đều gặp t\xecnh trạng n\xe0y?"
            }, {
                id: "qc-after-while",
                text: "Nước n\xf3ng l\xfac đầu rồi nguội dần khi d\xf9ng một l\xfac?"
            }, {
                id: "qc-only-peak-time",
                text: "T\xecnh trạng n\xe0y xảy ra nhiều hơn v\xe0o giờ cao điểm?"
            }, {
                id: "qc-sudden",
                text: "Vấn đề xuất hiện đột ngột, trước đ\xf3 d\xf9ng b\xecnh thường?"
            }],
            diagnosis: {
                evaluate: t => t["qc-all-faucets"] && t["qc-sudden"] ? {
                    level: "yellow",
                    title: "Nguồn nước n\xf3ng kh\xf4ng ổn định",
                    message: "Khi nhiều v\xf2i c\xf9ng bị, n\xean thử c\xe1c c\xe1ch nhẹ trước khi nghĩ đến việc sửa chữa.",
                    recommendedTrialIds: ["trial-use-short", "trial-try-offpeak"]
                } : t["qc-after-while"] ? {
                    level: "green",
                    title: "Nước n\xf3ng kh\xf4ng giữ l\xe2u",
                    message: "C\xf3 thể do d\xf9ng li\xean tục hoặc mở qu\xe1 mạnh.",
                    recommendedTrialIds: ["trial-use-short", "trial-adjust-flow"]
                } : {
                    level: "green",
                    title: "Nước n\xf3ng kh\xf4ng đều",
                    message: "C\xf3 thể thử điều chỉnh c\xe1ch sử dụng để ổn định hơn.",
                    recommendedTrialIds: ["trial-adjust-flow", "trial-try-offpeak"]
                }
            },
            trials: [{
                id: "trial-use-short",
                title: "D\xf9ng nước n\xf3ng theo từng đợt ngắn",
                when: "Nếu nước n\xf3ng nhanh nguội khi d\xf9ng l\xe2u",
                steps: ["Tắt nước một l\xfac rồi mở lại", "Tr\xe1nh d\xf9ng li\xean tục trong thời gian d\xe0i", "Quan s\xe1t xem nước c\xf3 n\xf3ng lại kh\xf4ng"]
            }, {
                id: "trial-adjust-flow",
                title: "Điều chỉnh lưu lượng nước",
                when: "Nếu muốn nước n\xf3ng ổn định hơn",
                steps: ["Giảm lưu lượng nước xuống một ch\xfat", "Chờ v\xe0i gi\xe2y để nước n\xf3ng ổn định", "Tăng dần lưu lượng nếu cần"]
            }, {
                id: "trial-try-offpeak",
                title: "Thử d\xf9ng v\xe0o giờ thấp điểm",
                when: "Nếu nghi ngờ do \xe1p lực nước v\xe0o giờ cao điểm",
                steps: ["Thử d\xf9ng nước n\xf3ng v\xe0o s\xe1ng sớm hoặc tối muộn", "So s\xe1nh với giờ cao điểm", "Ghi nhận sự kh\xe1c biệt"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu c\xe1c c\xe1ch tr\xean kh\xf4ng hiệu quả hoặc t\xecnh trạng nặng hơn",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "Gửi b\xe1o c\xe1o chi tiết cho thợ"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "multi-drain-slow",
            area: "water",
            category: "drain",
            label: "Nhiều chỗ tho\xe1t nước đều chậm",
            icon: "\uD83D\uDEC1",
            description: "Nước r\xfat chậm ở nhiều vị tr\xed như bồn rửa, nh\xe0 tắm, cống s\xe0n",
            checklist: [{
                id: "qc-multiple-areas",
                text: "C\xf3 từ hai chỗ tho\xe1t nước trở l\xean bị r\xfat chậm?"
            }, {
                id: "qc-gradual",
                text: "T\xecnh trạng n\xe0y xảy ra từ từ, kh\xf4ng phải đột ngột?"
            }, {
                id: "qc-worse-when-much-water",
                text: "Khi xả nhiều nước c\xf9ng l\xfac th\xec r\xfat chậm hơn?"
            }, {
                id: "qc-recent-heavy-use",
                text: "Gần đ\xe2y c\xf3 d\xf9ng nước nhiều hơn b\xecnh thường?"
            }],
            diagnosis: {
                evaluate: t => t["qc-multiple-areas"] && t["qc-worse-when-much-water"] ? {
                    level: "yellow",
                    title: "Tho\xe1t nước chung đang k\xe9m",
                    message: "Khi nhiều chỗ c\xf9ng chậm, n\xean thử giảm tải v\xe0 quan s\xe1t trước.",
                    recommendedTrialIds: ["trial-reduce-load", "trial-observe-pattern"]
                } : t["qc-gradual"] ? {
                    level: "green",
                    title: "Tho\xe1t nước k\xe9m dần",
                    message: "C\xf3 thể do cặn t\xedch tụ theo thời gian.",
                    recommendedTrialIds: ["trial-reduce-load", "trial-flush-hot"]
                } : {
                    level: "green",
                    title: "Tho\xe1t nước chậm nhẹ",
                    message: "C\xf3 thể thử c\xe1c c\xe1ch đơn giản để kiểm tra.",
                    recommendedTrialIds: ["trial-observe-pattern", "trial-flush-hot"]
                }
            },
            trials: [{
                id: "trial-reduce-load",
                title: "Giảm xả nước c\xf9ng l\xfac",
                when: "Nếu nhiều chỗ r\xfat chậm khi d\xf9ng đồng thời",
                steps: ["Tr\xe1nh xả nhiều chỗ c\xf9ng l\xfac", "D\xf9ng từng khu vực ri\xeang lẻ", "Quan s\xe1t xem nước r\xfat c\xf3 nhanh hơn kh\xf4ng"]
            }, {
                id: "trial-observe-pattern",
                title: "Quan s\xe1t theo khu vực v\xe0 thời điểm",
                when: "Nếu chưa r\xf5 mức độ nghi\xeam trọng",
                steps: ["Ghi nhận chỗ n\xe0o r\xfat chậm hơn", "So s\xe1nh giữa c\xe1c thời điểm trong ng\xe0y", "Xem t\xecnh trạng c\xf3 lặp lại theo giờ kh\xf4ng"]
            }, {
                id: "trial-flush-hot",
                title: "Xả nước n\xf3ng từng khu vực",
                when: "Nếu nghi c\xf3 cặn t\xedch tụ",
                steps: ["Xả nước n\xf3ng ở từng chỗ tho\xe1t", "Mỗi chỗ v\xe0i ph\xfat", "Quan s\xe1t mức cải thiện sau đ\xf3"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu nhiều chỗ vẫn r\xfat chậm v\xe0 ảnh hưởng sinh hoạt",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 c\xe1c vị tr\xed bị chậm v\xe0 thời điểm"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "water-splash-back",
            area: "water",
            category: "drain",
            label: "Xả nước chỗ n\xe0y, nước bắn ngược chỗ kh\xe1c",
            icon: "\uD83D\uDCA6",
            description: "Xả nước ở bồn rửa, bồn cầu hoặc m\xe1y giặt th\xec thấy nước bắn l\xean ở chỗ kh\xe1c",
            checklist: [{
                id: "qc-splash-when-use",
                text: "Nước bắn l\xean khi xả ở một chỗ kh\xe1c trong nh\xe0?"
            }, {
                id: "qc-bubbles",
                text: "C\xf3 thấy bong b\xf3ng hoặc tiếng ục ục ở chỗ nước bắn l\xean?"
            }, {
                id: "qc-only-sometimes",
                text: "Hiện tượng n\xe0y chỉ xảy ra đ\xf4i l\xfac, kh\xf4ng phải l\xfac n\xe0o cũng c\xf3?"
            }, {
                id: "qc-after-heavy-use",
                text: "Thường xảy ra khi xả nhiều nước hoặc xả li\xean tục?"
            }],
            diagnosis: {
                evaluate: t => t["qc-splash-when-use"] && t["qc-bubbles"] ? {
                    level: "yellow",
                    title: "D\xf2ng tho\xe1t bị dội ngược",
                    message: "Khi nước kh\xf4ng đi xuống như b\xecnh thường, n\xf3 c\xf3 thể dội ngược ra chỗ kh\xe1c.",
                    recommendedTrialIds: ["trial-limit-flush", "trial-cover-drain"]
                } : t["qc-after-heavy-use"] ? {
                    level: "green",
                    title: "Qu\xe1 tải tạm thời",
                    message: "Xả nhiều nước c\xf9ng l\xfac c\xf3 thể g\xe2y bắn ngược nhẹ.",
                    recommendedTrialIds: ["trial-limit-flush", "trial-observe"]
                } : {
                    level: "green",
                    title: "Bắn ngược nhẹ, kh\xf4ng thường xuy\xean",
                    message: "C\xf3 thể thử quan s\xe1t v\xe0 hạn chế xả mạnh.",
                    recommendedTrialIds: ["trial-observe", "trial-limit-flush"]
                }
            },
            trials: [{
                id: "trial-limit-flush",
                title: "Hạn chế xả nước mạnh hoặc li\xean tục",
                when: "Nếu nước bắn l\xean khi xả nhiều",
                steps: ["Tr\xe1nh xả nước li\xean tục trong thời gian ngắn", "D\xf9ng từng thiết bị nước ri\xeang lẻ", "Quan s\xe1t xem hiện tượng c\xf3 giảm kh\xf4ng"]
            }, {
                id: "trial-cover-drain",
                title: "Che tạm chỗ nước bắn l\xean",
                when: "Nếu nước bắn l\xean từ cống s\xe0n hoặc miệng tho\xe1t",
                steps: ["D\xf9ng nắp hoặc khăn che miệng tho\xe1t", "Tr\xe1nh xả nước mạnh trong l\xfac che", "Quan s\xe1t xem c\xf2n bắn nước kh\xf4ng"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu hiện tượng xảy ra kh\xf4ng thường xuy\xean",
                steps: ["Ghi nhận thời điểm v\xe0 chỗ xảy ra", "Xem c\xf3 li\xean quan đến việc xả nước chỗ kh\xe1c kh\xf4ng", "Chỉ thử th\xeam nếu t\xecnh trạng lặp lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu nước bắn mạnh, lặp lại nhiều lần hoặc k\xe8m m\xf9i kh\xf3 chịu",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 chỗ xả v\xe0 chỗ nước bắn l\xean"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "water-smell-after-rain",
            area: "water",
            category: "supply",
            label: "Nước c\xf3 m\xf9i sau mưa",
            icon: "\uD83C\uDF27️",
            description: "Sau mưa lớn, mở v\xf2i thấy nước c\xf3 m\xf9i lạ",
            checklist: [{
                id: "qc-after-rain",
                text: "M\xf9i xuất hiện sau mưa lớn?"
            }, {
                id: "qc-only-first",
                text: "Chỉ m\xf9i l\xfac mới mở, xả một l\xfac th\xec hết?"
            }, {
                id: "qc-many-faucets",
                text: "Nhiều v\xf2i trong nh\xe0 đều c\xf3 m\xf9i?"
            }, {
                id: "qc-no-color",
                text: "Nước kh\xf4ng đổi m\xe0u, chỉ c\xf3 m\xf9i?"
            }],
            diagnosis: {
                evaluate: t => t["qc-only-first"] ? {
                    level: "green",
                    title: "M\xf9i tạm thời",
                    message: "Nước đọng trong ống c\xf3 thể g\xe2y m\xf9i nhẹ sau mưa.",
                    recommendedTrialIds: ["trial-flush", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "M\xf9i k\xe9o d\xe0i",
                    message: "Nếu nhiều v\xf2i đều c\xf3 m\xf9i, n\xean quan s\xe1t kỹ trước.",
                    recommendedTrialIds: ["trial-flush", "trial-try-later"]
                }
            },
            trials: [{
                id: "trial-flush",
                title: "Xả nước v\xe0i ph\xfat",
                when: "Nếu m\xf9i xuất hiện khi mới mở",
                steps: ["Mở v\xf2i cho nước chảy li\xean tục", "Ngửi lại sau v\xe0i ph\xfat", "So s\xe1nh trước v\xe0 sau khi xả"]
            }, {
                id: "trial-try-later",
                title: "Thử lại sau v\xe0i giờ",
                when: "Nếu vừa mưa xong",
                steps: ["Đợi v\xe0i giờ sau mưa", "Mở lại v\xf2i kiểm tra", "Xem m\xf9i c\xf3 c\xf2n kh\xf4ng"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu m\xf9i nhẹ",
                steps: ["Ghi nhận thời điểm c\xf3 m\xf9i", "So s\xe1nh giữa c\xe1c v\xf2i", "Chỉ thử th\xeam nếu m\xf9i nặng hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i k\xe9o d\xe0i nhiều ng\xe0y",
                steps: ["Ngưng thử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 m\xf9i v\xe0 thời điểm"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "cloudy-water-first-open",
            area: "water",
            category: "supply",
            label: "Nước đục khi mới mở",
            icon: "\uD83D\uDCA8",
            description: "Mới mở v\xf2i thấy nước hơi đục, để một l\xfac th\xec trong lại",
            checklist: [{
                id: "qc-first-open",
                text: "Nước đục chỉ l\xfac mới mở?"
            }, {
                id: "qc-clear-later",
                text: "Để chảy một l\xfac th\xec nước trong lại?"
            }, {
                id: "qc-all-faucets",
                text: "Nhiều v\xf2i đều gặp t\xecnh trạng n\xe0y?"
            }, {
                id: "qc-after-off",
                text: "Xảy ra sau khi l\xe2u kh\xf4ng d\xf9ng nước?"
            }],
            diagnosis: {
                evaluate: t => t["qc-clear-later"] ? {
                    level: "green",
                    title: "Đục tạm thời",
                    message: "Kh\xf4ng kh\xed hoặc cặn nhẹ c\xf3 thể l\xe0m nước đục l\xfac đầu.",
                    recommendedTrialIds: ["trial-flush", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "Đục k\xe9o d\xe0i",
                    message: "Nếu nước kh\xf4ng trong lại, n\xean theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-flush", "trial-try-later"]
                }
            },
            trials: [{
                id: "trial-flush",
                title: "Xả nước v\xe0i ph\xfat",
                when: "Nếu nước đục l\xfac mới mở",
                steps: ["Mở v\xf2i cho nước chảy li\xean tục", "Quan s\xe1t độ trong", "So s\xe1nh trước v\xe0 sau"]
            }, {
                id: "trial-try-later",
                title: "Thử lại sau",
                when: "Nếu vừa l\xe2u kh\xf4ng d\xf9ng nước",
                steps: ["Đ\xf3ng v\xf2i, đợi một l\xfac", "Mở lại kiểm tra", "So s\xe1nh kết quả"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu nước nhanh trong lại",
                steps: ["Ghi nhận tần suất xảy ra", "So s\xe1nh giữa c\xe1c v\xf2i", "Chỉ thử th\xeam nếu k\xe9o d\xe0i"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu nước lu\xf4n đục",
                steps: ["Ngưng thử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 t\xecnh trạng"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "floor-drain-smell-dry",
            area: "water",
            category: "floor-drain",
            label: "Cống s\xe0n bốc m\xf9i khi kh\xf4 l\xe2u",
            icon: "\uD83D\uDD73️",
            description: "L\xe2u kh\xf4ng d\xf9ng nước th\xec cống s\xe0n c\xf3 m\xf9i",
            checklist: [{
                id: "qc-dry-long",
                text: "Cống l\xe2u kh\xf4ng c\xf3 nước?"
            }, {
                id: "qc-smell-only",
                text: "Chỉ c\xf3 m\xf9i, kh\xf4ng thấy nước tr\xe0o?"
            }, {
                id: "qc-after-return",
                text: "M\xf9i xuất hiện khi mới quay về nh\xe0?"
            }, {
                id: "qc-one-spot",
                text: "Chỉ một cống s\xe0n bị m\xf9i?"
            }],
            diagnosis: {
                evaluate: t => t["qc-dry-long"] ? {
                    level: "green",
                    title: "Cống bị kh\xf4 nước",
                    message: "Khi cống kh\xf4, m\xf9i c\xf3 thể bay l\xean.",
                    recommendedTrialIds: ["trial-pour-water", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "M\xf9i lặp lại",
                    message: "Nếu m\xf9i quay lại thường xuy\xean, n\xean theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-pour-water", "trial-cover"]
                }
            },
            trials: [{
                id: "trial-pour-water",
                title: "Đổ nước xuống cống",
                when: "Nếu cống kh\xf4 l\xe2u",
                steps: ["Đổ một lượng nước vừa đủ", "Chờ v\xe0i ph\xfat", "Ngửi lại xem c\xf2n m\xf9i kh\xf4ng"]
            }, {
                id: "trial-cover",
                title: "Che miệng cống tạm",
                when: "Nếu chưa d\xf9ng ngay",
                steps: ["D\xf9ng nắp hoặc khăn che cống", "Giữ trong thời gian ngắn", "Mở ra kiểm tra lại"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu m\xf9i giảm",
                steps: ["Ghi nhận bao l\xe2u m\xf9i quay lại", "So s\xe1nh giữa c\xe1c ng\xe0y", "Chỉ thử th\xeam nếu m\xf9i nặng"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i kh\xf4ng giảm",
                steps: ["Ngưng thử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 vị tr\xed cống"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "washer-drain-backflow",
            area: "water",
            category: "drain",
            label: "Nước chảy ngược khi m\xe1y giặt xả",
            icon: "\uD83E\uDDFA",
            description: "M\xe1y giặt xả th\xec nước tr\xe0o ra cống hoặc chỗ kh\xe1c",
            checklist: [{
                id: "qc-only-washer",
                text: "Chỉ xảy ra khi m\xe1y giặt xả?"
            }, {
                id: "qc-other-drains-ok",
                text: "C\xe1c chỗ kh\xe1c b\xecnh thường?"
            }, {
                id: "qc-sudden",
                text: "Hiện tượng mới xuất hiện?"
            }, {
                id: "qc-heavy-load",
                text: "Thường xảy ra khi giặt nhiều nước?"
            }],
            diagnosis: {
                evaluate: t => t["qc-only-washer"] ? {
                    level: "yellow",
                    title: "Tho\xe1t nước bị qu\xe1 tải",
                    message: "Lượng nước xả lớn c\xf3 thể g\xe2y tr\xe0o ngược.",
                    recommendedTrialIds: ["trial-reduce-load", "trial-observe"]
                } : {
                    level: "green",
                    title: "Tr\xe0o ngược nhẹ",
                    message: "C\xf3 thể thử điều chỉnh c\xe1ch giặt.",
                    recommendedTrialIds: ["trial-reduce-load"]
                }
            },
            trials: [{
                id: "trial-reduce-load",
                title: "Giảm lượng nước xả",
                when: "Nếu xảy ra khi giặt nhiều",
                steps: ["Giặt \xedt đồ hơn", "Tr\xe1nh xả li\xean tục", "Quan s\xe1t kết quả"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i khi m\xe1y xả",
                when: "Nếu chưa r\xf5 mức độ",
                steps: ["Quan s\xe1t l\xfac m\xe1y xả", "Xem nước tr\xe0o ở đ\xe2u", "Ghi nhận lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu nước tr\xe0o nhiều",
                steps: ["Ngưng thử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 khi m\xe1y xả"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "drain-slow-only-when-rain",
            area: "water",
            category: "drain",
            label: "Tho\xe1t nước chậm chỉ khi mưa lớn",
            icon: "\uD83C\uDF27️",
            description: "Ng\xe0y thường b\xecnh thường, mưa lớn th\xec nước r\xfat chậm",
            checklist: [{
                id: "qc-only-rain",
                text: "Chỉ xảy ra khi mưa lớn?"
            }, {
                id: "qc-normal-dry",
                text: "Trời kh\xf4 th\xec tho\xe1t nước b\xecnh thường?"
            }, {
                id: "qc-heavy-rain",
                text: "Chỉ khi mưa rất to mới bị?"
            }, {
                id: "qc-outdoor",
                text: "C\xf3 li\xean quan đến cống ngo\xe0i trời?"
            }],
            diagnosis: {
                evaluate: t => t["qc-only-rain"] && t["qc-normal-dry"] ? {
                    level: "yellow",
                    title: "Tho\xe1t nước bị qu\xe1 tải khi mưa",
                    message: "Lượng nước mưa lớn c\xf3 thể l\xe0m tho\xe1t chậm tạm thời.",
                    recommendedTrialIds: ["trial-observe-rain", "trial-limit-use"]
                } : {
                    level: "green",
                    title: "Ảnh hưởng theo thời tiết",
                    message: "C\xf3 thể theo d\xf5i th\xeam khi mưa.",
                    recommendedTrialIds: ["trial-observe-rain"]
                }
            },
            trials: [{
                id: "trial-observe-rain",
                title: "Quan s\xe1t khi mưa",
                when: "Nếu chỉ chậm l\xfac mưa",
                steps: ["Ghi nhận mức mưa", "Quan s\xe1t tốc độ r\xfat nước", "So s\xe1nh giữa c\xe1c lần mưa"]
            }, {
                id: "trial-limit-use",
                title: "Hạn chế xả nước l\xfac mưa to",
                when: "Nếu mưa lớn",
                steps: ["Tr\xe1nh xả nhiều nước trong nh\xe0", "Chờ mưa nhỏ lại", "Quan s\xe1t lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu mưa nhỏ m\xe0 vẫn r\xfat chậm",
                steps: ["Ngưng thử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 t\xecnh trạng"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "socket-intermittent",
            area: "electric",
            category: "socket",
            label: "Ổ cắm l\xfac c\xf3 điện l\xfac kh\xf4ng",
            icon: "\uD83D\uDD0C",
            description: "Cắm thiết bị th\xec l\xfac chạy l\xfac kh\xf4ng, phải lắc hoặc r\xfat ra cắm lại",
            checklist: [{
                id: "qc-only-one-socket",
                text: "Chỉ một ổ cắm bị, c\xe1c ổ kh\xe1c vẫn d\xf9ng b\xecnh thường?"
            }, {
                id: "qc-device-ok",
                text: "Thiết bị cắm v\xe0o ổ kh\xe1c th\xec vẫn chạy ổn?"
            }, {
                id: "qc-touch-change",
                text: "Đụng nhẹ hoặc xoay ph\xedch th\xec thiết bị chạy lại?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-device-ok"] && t["qc-only-one-socket"] ? {
                    level: "yellow",
                    title: "Ổ cắm kh\xf4ng ổn định",
                    message: "Khi chỉ một ổ bị chập chờn, thường do tiếp x\xfac kh\xf4ng tốt.",
                    recommendedTrialIds: ["trial-try-other-plug", "trial-limit-use"]
                } : {
                    level: "green",
                    title: "Kết nối điện kh\xf4ng đều",
                    message: "C\xf3 thể thử v\xe0i c\xe1ch sử dụng an to\xe0n để kiểm tra.",
                    recommendedTrialIds: ["trial-try-other-plug", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-try-other-plug",
                title: "Thử ổ cắm v\xe0 ph\xedch kh\xe1c",
                when: "Nếu thiết bị l\xfac chạy l\xfac kh\xf4ng",
                steps: ["R\xfat thiết bị ra", "Cắm sang ổ cắm kh\xe1c trong nh\xe0", "So s\xe1nh xem c\xf2n bị chập chờn kh\xf4ng"]
            }, {
                id: "trial-limit-use",
                title: "Hạn chế d\xf9ng ổ cắm đ\xf3",
                when: "Nếu nghi ổ cắm kh\xf4ng ổn định",
                steps: ["Kh\xf4ng cắm thiết bị c\xf4ng suất lớn", "Tr\xe1nh vừa cắm vừa r\xfat nhiều lần", "D\xf9ng ổ kh\xe1c tạm thời"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu vẫn c\xf2n ph\xe2n v\xe2n",
                steps: ["Quan s\xe1t khi n\xe0o mất điện", "Xem c\xf3 li\xean quan đến rung lắc kh\xf4ng", "Chỉ thử th\xeam nếu t\xecnh trạng lặp lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu ổ cắm tiếp tục chập chờn",
                steps: ["Ngưng sử dụng ổ cắm đ\xf3", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 biểu hiện đ\xe3 gặp"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "light-flicker",
            area: "electric",
            category: "light",
            label: "Đ\xe8n chớp chớp khi bật",
            icon: "\uD83D\uDCA1",
            description: "Bật đ\xe8n th\xec nhấp nh\xe1y, chớp chớp hoặc s\xe1ng kh\xf4ng đều",
            checklist: [{
                id: "qc-only-one-light",
                text: "Chỉ một đ\xe8n bị chớp, c\xe1c đ\xe8n kh\xe1c vẫn b\xecnh thường?"
            }, {
                id: "qc-when-first-on",
                text: "Đ\xe8n chớp nhiều nhất l\xfac mới bật l\xean?"
            }, {
                id: "qc-after-on-while",
                text: "Để một l\xfac th\xec đ\xe8n ổn định hơn?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-only-one-light"] && t["qc-when-first-on"] ? {
                    level: "green",
                    title: "Đ\xe8n khởi động kh\xf4ng ổn định",
                    message: "Một số đ\xe8n c\xf3 thể chớp nhẹ khi mới bật.",
                    recommendedTrialIds: ["trial-turn-off-on", "trial-observe"]
                } : t["qc-only-one-light"] && t["qc-sudden"] ? {
                    level: "yellow",
                    title: "Đ\xe8n hoặc c\xf4ng tắc kh\xf4ng ổn định",
                    message: "Khi chỉ một đ\xe8n bị v\xe0 mới xuất hiện, n\xean thử c\xe1c c\xe1ch nhẹ trước.",
                    recommendedTrialIds: ["trial-turn-off-on", "trial-avoid-touch"]
                } : {
                    level: "green",
                    title: "Đ\xe8n chớp nhẹ",
                    message: "C\xf3 thể thử theo d\xf5i th\xeam trong qu\xe1 tr\xecnh sử dụng.",
                    recommendedTrialIds: ["trial-observe", "trial-turn-off-on"]
                }
            },
            trials: [{
                id: "trial-turn-off-on",
                title: "Tắt rồi bật lại đ\xe8n",
                when: "Nếu đ\xe8n chớp khi mới bật",
                steps: ["Tắt đ\xe8n ho\xe0n to\xe0n", "Chờ v\xe0i gi\xe2y", "Bật lại v\xe0 quan s\xe1t"]
            }, {
                id: "trial-avoid-touch",
                title: "Tr\xe1nh t\xe1c động v\xe0o c\xf4ng tắc",
                when: "Nếu đ\xe8n chớp khi chạm v\xe0o c\xf4ng tắc",
                steps: ["Bật đ\xe8n v\xe0 kh\xf4ng chạm th\xeam", "Quan s\xe1t độ ổn định", "So s\xe1nh với c\xe1c lần bật kh\xe1c"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam một thời gian",
                when: "Nếu đ\xe8n chớp nhẹ v\xe0 kh\xf4ng li\xean tục",
                steps: ["Quan s\xe1t trong v\xe0i lần sử dụng", "Ghi nhận thời điểm chớp nhiều", "Chỉ thử th\xeam nếu chớp mạnh hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu đ\xe8n chớp li\xean tục hoặc kh\xf4ng ổn định",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 đ\xe8n n\xe0o v\xe0 biểu hiện"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "breaker-trips-often",
            area: "electric",
            category: "breaker",
            label: "CB hay nhảy khi d\xf9ng điện",
            icon: "⚡",
            description: "Đang d\xf9ng điện th\xec CB tự ngắt, phải bật lại mới c\xf3 điện",
            checklist: [{
                id: "qc-many-devices",
                text: "CB hay nhảy khi d\xf9ng nhiều thiết bị c\xf9ng l\xfac?"
            }, {
                id: "qc-specific-device",
                text: "CB thường nhảy khi bật một thiết bị cụ thể?"
            }, {
                id: "qc-works-after-wait",
                text: "Đợi một l\xfac rồi bật lại th\xec d\xf9ng được tiếp?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-specific-device"] ? {
                    level: "yellow",
                    title: "C\xf3 thể do một thiết bị",
                    message: "Khi CB nhảy mỗi lần bật c\xf9ng một thiết bị, n\xean thử t\xe1ch ri\xeang để kiểm tra.",
                    recommendedTrialIds: ["trial-test-device", "trial-reduce-load"]
                } : t["qc-many-devices"] ? {
                    level: "green",
                    title: "Qu\xe1 tải tạm thời",
                    message: "D\xf9ng nhiều thiết bị c\xf9ng l\xfac c\xf3 thể l\xe0m CB tự ngắt.",
                    recommendedTrialIds: ["trial-reduce-load", "trial-use-separate"]
                } : {
                    level: "green",
                    title: "CB ngắt kh\xf4ng thường xuy\xean",
                    message: "C\xf3 thể thử điều chỉnh c\xe1ch d\xf9ng điện.",
                    recommendedTrialIds: ["trial-reduce-load", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-test-device",
                title: "Thử t\xe1ch ri\xeang thiết bị",
                when: "Nếu CB hay nhảy khi bật một thiết bị",
                steps: ["Tắt c\xe1c thiết bị kh\xe1c", "Chỉ bật thiết bị nghi ngờ", "Quan s\xe1t xem CB c\xf2n nhảy kh\xf4ng"]
            }, {
                id: "trial-reduce-load",
                title: "Giảm thiết bị d\xf9ng c\xf9ng l\xfac",
                when: "Nếu CB nhảy khi d\xf9ng nhiều đồ điện",
                steps: ["Tắt bớt thiết bị kh\xf4ng cần thiết", "D\xf9ng lần lượt thay v\xec c\xf9ng l\xfac", "Quan s\xe1t t\xecnh trạng CB"]
            }, {
                id: "trial-use-separate",
                title: "D\xf9ng ổ cắm kh\xe1c",
                when: "Nếu c\xf3 nhiều ổ cắm tr\xean c\xe1c nh\xe1nh kh\xe1c nhau",
                steps: ["Chuyển thiết bị sang ổ cắm kh\xe1c", "Tr\xe1nh d\xf9ng chung ổ k\xe9o d\xe0i", "Theo d\xf5i xem CB c\xf2n nhảy kh\xf4ng"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu CB chỉ nhảy thỉnh thoảng",
                steps: ["Ghi nhận thời điểm CB nhảy", "Xem c\xf3 li\xean quan đến thiết bị n\xe0o kh\xf4ng", "Chỉ thử th\xeam nếu t\xecnh trạng lặp lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu CB nhảy li\xean tục hoặc ảnh hưởng sinh hoạt",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 thiết bị đang d\xf9ng v\xe0 thời điểm CB nhảy"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "socket-warm-when-use",
            area: "electric",
            category: "socket",
            label: "Ổ cắm n\xf3ng khi sử dụng",
            icon: "\uD83D\uDD25",
            description: "Cắm thiết bị một l\xfac th\xec thấy ổ cắm hoặc ph\xedch cắm ấm l\xean",
            checklist: [{
                id: "qc-only-when-using",
                text: "Ổ cắm chỉ n\xf3ng khi đang d\xf9ng thiết bị?"
            }, {
                id: "qc-high-power",
                text: "Thiết bị cắm v\xe0o l\xe0 loại d\xf9ng điện nhiều?"
            }, {
                id: "qc-one-socket",
                text: "Chỉ một ổ cắm bị n\xf3ng, c\xe1c ổ kh\xe1c th\xec kh\xf4ng?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-high-power"] && t["qc-only-when-using"] ? {
                    level: "yellow",
                    title: "Ổ cắm bị tải nhiều",
                    message: "Thiết bị d\xf9ng điện lớn c\xf3 thể l\xe0m ổ cắm ấm l\xean khi hoạt động.",
                    recommendedTrialIds: ["trial-use-short", "trial-change-socket"]
                } : t["qc-one-socket"] ? {
                    level: "yellow",
                    title: "Ổ cắm c\xf3 thể kh\xf4ng ph\xf9 hợp",
                    message: "Khi chỉ một ổ cắm bị n\xf3ng, n\xean hạn chế d\xf9ng để kiểm tra.",
                    recommendedTrialIds: ["trial-change-socket", "trial-observe"]
                } : {
                    level: "green",
                    title: "Ấm nhẹ khi sử dụng",
                    message: "C\xf3 thể theo d\xf5i th\xeam khi d\xf9ng trong thời gian ngắn.",
                    recommendedTrialIds: ["trial-use-short", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-use-short",
                title: "D\xf9ng trong thời gian ngắn",
                when: "Nếu ổ cắm chỉ ấm nhẹ",
                steps: ["Chỉ d\xf9ng thiết bị trong thời gian ngắn", "R\xfat ra cho ổ cắm nguội", "Quan s\xe1t mức độ ấm l\xean"]
            }, {
                id: "trial-change-socket",
                title: "Chuyển sang ổ cắm kh\xe1c",
                when: "Nếu nghi ổ cắm kh\xf4ng ph\xf9 hợp",
                steps: ["R\xfat thiết bị ra", "Cắm sang ổ cắm kh\xe1c trong nh\xe0", "So s\xe1nh mức độ n\xf3ng"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu chưa r\xf5 nguy\xean nh\xe2n",
                steps: ["Sờ kiểm tra sau mỗi lần d\xf9ng", "Ghi nhận thời gian bắt đầu n\xf3ng", "Chỉ thử th\xeam nếu n\xf3ng nhanh hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu ổ cắm n\xf3ng nhanh hoặc n\xf3ng bất thường",
                steps: ["Ngưng sử dụng ổ cắm đ\xf3", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 ổ cắm v\xe0 thiết bị đang d\xf9ng"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "power-strip-auto-off",
            area: "electric",
            category: "power-strip",
            label: "Ổ k\xe9o d\xe0i tự tắt khi d\xf9ng",
            icon: "\uD83D\uDD0C",
            description: "Đang d\xf9ng th\xec ổ k\xe9o d\xe0i tự ngắt điện, phải bật lại mới c\xf3",
            checklist: [{
                id: "qc-many-devices",
                text: "Ổ k\xe9o d\xe0i đang cắm nhiều thiết bị c\xf9ng l\xfac?"
            }, {
                id: "qc-high-power",
                text: "C\xf3 thiết bị d\xf9ng điện nhiều đang cắm v\xe0o ổ n\xe0y?"
            }, {
                id: "qc-works-after-wait",
                text: "Đợi một l\xfac rồi bật lại th\xec d\xf9ng được tiếp?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-many-devices"] || t["qc-high-power"] ? {
                    level: "yellow",
                    title: "Ổ k\xe9o d\xe0i bị qu\xe1 tải",
                    message: "D\xf9ng nhiều thiết bị hoặc thiết bị c\xf4ng suất lớn c\xf3 thể l\xe0m ổ tự ngắt.",
                    recommendedTrialIds: ["trial-reduce-devices", "trial-use-direct"]
                } : {
                    level: "green",
                    title: "Tự ngắt tạm thời",
                    message: "C\xf3 thể do ổ cần nghỉ sau khi d\xf9ng l\xe2u.",
                    recommendedTrialIds: ["trial-reduce-devices", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-reduce-devices",
                title: "Giảm số thiết bị cắm",
                when: "Nếu ổ k\xe9o d\xe0i tự tắt khi d\xf9ng nhiều đồ",
                steps: ["R\xfat bớt thiết bị kh\xf4ng cần thiết", "Chỉ d\xf9ng c\xe1c thiết bị cần thiết", "Quan s\xe1t xem c\xf2n tự tắt kh\xf4ng"]
            }, {
                id: "trial-use-direct",
                title: "Cắm trực tiếp v\xe0o ổ tường",
                when: "Nếu c\xf3 thiết bị d\xf9ng điện nhiều",
                steps: ["R\xfat thiết bị khỏi ổ k\xe9o d\xe0i", "Cắm trực tiếp v\xe0o ổ tường", "Theo d\xf5i xem c\xf2n bị ngắt kh\xf4ng"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu chưa r\xf5 nguy\xean nh\xe2n",
                steps: ["Ghi nhận thời điểm ổ tự ngắt", "Xem c\xf3 li\xean quan đến số thiết bị kh\xf4ng", "Chỉ thử th\xeam nếu lặp lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu ổ k\xe9o d\xe0i vẫn tự ngắt hoặc c\xf3 m\xf9i lạ",
                steps: ["Ngưng sử dụng ổ k\xe9o d\xe0i đ\xf3", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 thiết bị đang cắm v\xe0 thời điểm bị ngắt"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "switch-click-noise",
            area: "electric",
            category: "switch",
            label: "C\xf4ng tắc k\xeau lạch cạch khi bật",
            icon: "\uD83D\uDD18",
            description: "Bật hoặc tắt c\xf4ng tắc th\xec nghe tiếng lạch cạch bất thường",
            checklist: [{
                id: "qc-only-one-switch",
                text: "Chỉ một c\xf4ng tắc bị k\xeau, c\xe1c c\xf4ng tắc kh\xe1c th\xec kh\xf4ng?"
            }, {
                id: "qc-when-toggle",
                text: "Tiếng k\xeau xuất hiện ngay l\xfac bật hoặc tắt?"
            }, {
                id: "qc-still-working",
                text: "Đ\xe8n hoặc thiết bị vẫn hoạt động b\xecnh thường?"
            }, {
                id: "qc-sudden",
                text: "Hiện tượng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-still-working"] && t["qc-only-one-switch"] ? {
                    level: "green",
                    title: "Tiếng k\xeau cơ học nhẹ",
                    message: "Một số c\xf4ng tắc c\xf3 thể ph\xe1t ra tiếng khi sử dụng.",
                    recommendedTrialIds: ["trial-toggle-gently", "trial-observe"]
                } : t["qc-sudden"] ? {
                    level: "yellow",
                    title: "C\xf4ng tắc kh\xf4ng ổn định",
                    message: "Khi tiếng k\xeau mới xuất hiện, n\xean d\xf9ng nhẹ v\xe0 theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-toggle-gently", "trial-limit-use"]
                } : {
                    level: "green",
                    title: "Tiếng k\xeau nhẹ",
                    message: "C\xf3 thể theo d\xf5i th\xeam trong qu\xe1 tr\xecnh sử dụng.",
                    recommendedTrialIds: ["trial-observe", "trial-toggle-gently"]
                }
            },
            trials: [{
                id: "trial-toggle-gently",
                title: "Bật tắt nhẹ tay",
                when: "Nếu c\xf4ng tắc vẫn hoạt động b\xecnh thường",
                steps: ["Bật hoặc tắt c\xf4ng tắc nhẹ nh\xe0ng", "Tr\xe1nh gạt mạnh hoặc li\xean tục", "Nghe xem tiếng k\xeau c\xf3 giảm kh\xf4ng"]
            }, {
                id: "trial-limit-use",
                title: "Hạn chế bật tắt nhiều lần",
                when: "Nếu tiếng k\xeau xuất hiện r\xf5",
                steps: ["Tr\xe1nh bật tắt li\xean tục", "Giữ trạng th\xe1i ổn định khi kh\xf4ng cần thiết", "Theo d\xf5i trong v\xe0i ng\xe0y"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu tiếng k\xeau nhẹ",
                steps: ["Ghi nhận thời điểm ph\xe1t ra tiếng", "So s\xe1nh giữa c\xe1c lần sử dụng", "Chỉ thử th\xeam nếu tiếng k\xeau to hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu tiếng k\xeau lớn dần hoặc c\xf4ng tắc hoạt động kh\xf4ng ổn định",
                steps: ["Ngưng thử th\xeam c\xe1c c\xe1ch kh\xe1c", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 c\xf4ng tắc v\xe0 tiếng k\xeau"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "wall-damp-slow-spread",
            area: "structure",
            category: "wall",
            label: "Tường bị ẩm, loang chậm",
            icon: "\uD83E\uDDF1",
            description: "Tường xuất hiện vết ẩm hoặc loang dần theo thời gian",
            checklist: [{
                id: "qc-gradual",
                text: "Vết ẩm xuất hiện từ từ, kh\xf4ng phải đột ngột?"
            }, {
                id: "qc-no-drip",
                text: "Kh\xf4ng thấy nước nhỏ giọt r\xf5 r\xe0ng?"
            }, {
                id: "qc-after-rain",
                text: "Vết ẩm r\xf5 hơn sau mưa?"
            }, {
                id: "qc-single-area",
                text: "Chỉ bị ở một mảng tường cố định?"
            }],
            diagnosis: {
                evaluate: t => t["qc-after-rain"] && t["qc-gradual"] ? {
                    level: "yellow",
                    title: "Ẩm theo thời tiết",
                    message: "Độ ẩm c\xf3 thể tăng sau mưa v\xe0 l\xe0m tường loang dần.",
                    recommendedTrialIds: ["trial-keep-dry", "trial-observe"]
                } : {
                    level: "green",
                    title: "Ẩm nhẹ, tiến triển chậm",
                    message: "C\xf3 thể theo d\xf5i v\xe0 giữ khu vực kh\xf4 r\xe1o trước.",
                    recommendedTrialIds: ["trial-keep-dry", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-keep-dry",
                title: "Giữ khu vực tường kh\xf4 r\xe1o",
                when: "Nếu vết ẩm loang chậm",
                steps: ["Hạn chế nước bắn hoặc đọng gần tường", "Mở cửa cho th\xf4ng tho\xe1ng", "Theo d\xf5i k\xedch thước vết ẩm"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i theo thời gian",
                when: "Nếu chưa r\xf5 nguy\xean nh\xe2n",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "So s\xe1nh trước v\xe0 sau khi trời mưa", "Ghi nhận mức độ loang"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu vết ẩm lan nhanh hoặc k\xe9o d\xe0i",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 vị tr\xed v\xe0 mức độ loang"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "ceiling-water-stain",
            area: "structure",
            category: "ceiling",
            label: "Trần c\xf3 vết nước cũ nhưng chưa nhỏ",
            icon: "\uD83C\uDFE0",
            description: "Tr\xean trần c\xf3 vệt ố hoặc loang m\xe0u, nhưng chưa thấy nước nhỏ xuống",
            checklist: [{
                id: "qc-old-stain",
                text: "Vết nước đ\xe3 xuất hiện một thời gian, kh\xf4ng phải mới h\xf4m nay?"
            }, {
                id: "qc-no-drip",
                text: "Hiện tại kh\xf4ng thấy nước nhỏ xuống trần?"
            }, {
                id: "qc-after-rain",
                text: "Vết ố r\xf5 hơn sau mưa?"
            }, {
                id: "qc-single-spot",
                text: "Chỉ xuất hiện ở một vị tr\xed cố định?"
            }],
            diagnosis: {
                evaluate: t => t["qc-after-rain"] && t["qc-single-spot"] ? {
                    level: "yellow",
                    title: "C\xf3 dấu hiệu thấm nước",
                    message: "Vết ố c\xf3 thể li\xean quan đến nước thấm theo thời tiết.",
                    recommendedTrialIds: ["trial-mark-stain", "trial-observe"]
                } : {
                    level: "green",
                    title: "Vết nước cũ, chưa tiến triển",
                    message: "C\xf3 thể theo d\xf5i th\xeam nếu chưa thấy nước nhỏ.",
                    recommendedTrialIds: ["trial-mark-stain", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-mark-stain",
                title: "Đ\xe1nh dấu v\xe0 theo d\xf5i vết ố",
                when: "Nếu trần chỉ c\xf3 vết ố cũ",
                steps: ["Đ\xe1nh dấu viền vết ố bằng b\xfat ch\xec", "Ghi nhớ ng\xe0y đ\xe1nh dấu", "So s\xe1nh sau v\xe0i ng\xe0y hoặc sau mưa"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i sau mưa",
                when: "Nếu nghi vết ố li\xean quan thời tiết",
                steps: ["Quan s\xe1t trần sau mỗi trận mưa", "Xem vết ố c\xf3 lan rộng kh\xf4ng", "Ghi nhận thay đổi nếu c\xf3"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu vết ố lan nhanh hoặc bắt đầu nhỏ nước",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 vị tr\xed v\xe0 mức độ vết ố"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "wall-hairline-crack",
            area: "structure",
            category: "wall",
            label: "Tường nứt nhẹ, chưa lan nhanh",
            icon: "\uD83E\uDDF1",
            description: "Tường xuất hiện vết nứt nhỏ, mảnh, chưa thấy lan rộng",
            checklist: [{
                id: "qc-thin-crack",
                text: "Vết nứt mảnh, nhỏ như sợi t\xf3c?"
            }, {
                id: "qc-no-spread",
                text: "Vết nứt chưa thấy lan rộng theo thời gian?"
            }, {
                id: "qc-single-area",
                text: "Chỉ c\xf3 một v\xe0i vết nứt ở c\xf9ng khu vực?"
            }, {
                id: "qc-recent",
                text: "Vết nứt mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-thin-crack"] && t["qc-no-spread"] ? {
                    level: "green",
                    title: "Nứt nhẹ bề mặt",
                    message: "Một số vết nứt nhỏ c\xf3 thể xuất hiện theo thời gian sử dụng.",
                    recommendedTrialIds: ["trial-mark-crack", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "Nứt cần theo d\xf5i",
                    message: "Nếu vết nứt mới xuất hiện, n\xean theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-mark-crack", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-mark-crack",
                title: "Đ\xe1nh dấu vết nứt",
                when: "Nếu vết nứt c\xf2n nhỏ",
                steps: ["Đ\xe1nh dấu hai đầu vết nứt", "Ghi lại ng\xe0y đ\xe1nh dấu", "So s\xe1nh sau v\xe0i tuần"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i theo thời gian",
                when: "Nếu chưa thấy nứt lan",
                steps: ["Quan s\xe1t định kỳ", "So s\xe1nh độ d\xe0i v\xe0 độ rộng", "Ghi nhận nếu c\xf3 thay đổi"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu vết nứt lan nhanh hoặc xuất hiện th\xeam nhiều vết mới",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 vị tr\xed v\xe0 t\xecnh trạng vết nứt"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "door-lock-hard-to-turn",
            area: "door-window",
            category: "door-lock",
            label: "Kh\xf3a cửa kh\xf3 xoay",
            icon: "\uD83D\uDD11",
            description: "Vặn ch\xeca hoặc n\xfam kh\xf3a thấy nặng tay, phải xoay nhiều lần mới được",
            checklist: [{
                id: "qc-harder-over-time",
                text: "Kh\xf3a ng\xe0y c\xe0ng kh\xf3 xoay theo thời gian?"
            }, {
                id: "qc-door-still-close",
                text: "Cửa vẫn đ\xf3ng mở được, chỉ ri\xeang kh\xf3a kh\xf3?"
            }, {
                id: "qc-weather-related",
                text: "Kh\xf3a kh\xf3 xoay hơn khi trời ẩm hoặc mưa?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-door-still-close"] && t["qc-harder-over-time"] ? {
                    level: "green",
                    title: "Kh\xf3a bị kẹt nhẹ",
                    message: "Kh\xf3a d\xf9ng l\xe2u ng\xe0y c\xf3 thể xoay nặng hơn b\xecnh thường.",
                    recommendedTrialIds: ["trial-open-close-door", "trial-use-gently"]
                } : t["qc-weather-related"] ? {
                    level: "yellow",
                    title: "Kh\xf3a bị ảnh hưởng bởi thời tiết",
                    message: "Độ ẩm c\xf3 thể l\xe0m kh\xf3a kh\xf3 xoay hơn.",
                    recommendedTrialIds: ["trial-open-close-door", "trial-observe"]
                } : {
                    level: "green",
                    title: "Kh\xf3a xoay kh\xf4ng đều",
                    message: "C\xf3 thể thử thao t\xe1c nhẹ v\xe0 theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-use-gently", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-open-close-door",
                title: "Đ\xf3ng mở cửa rồi thử lại",
                when: "Nếu kh\xf3a xoay nặng",
                steps: ["Mở cửa ho\xe0n to\xe0n", "Đ\xf3ng lại nhẹ nh\xe0ng", "Thử xoay kh\xf3a lại"]
            }, {
                id: "trial-use-gently",
                title: "Xoay kh\xf3a nhẹ tay",
                when: "Nếu kh\xf3a vẫn hoạt động được",
                steps: ["Xoay từ từ, kh\xf4ng d\xf9ng lực mạnh", "Tr\xe1nh xoay ngược li\xean tục", "Cảm nhận độ trơn của kh\xf3a"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu kh\xf3a chỉ kh\xf3 xoay nhẹ",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "So s\xe1nh giữa c\xe1c lần sử dụng", "Chỉ thử th\xeam nếu kh\xf3 xoay hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu kh\xf3a ng\xe0y c\xe0ng kh\xf3 xoay hoặc bị kẹt",
                steps: ["Ngưng cố xoay mạnh", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 loại kh\xf3a v\xe0 t\xecnh trạng"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "window-draft-noise",
            area: "door-window",
            category: "window",
            label: "Cửa sổ lọt gi\xf3, k\xeau khi c\xf3 gi\xf3",
            icon: "\uD83E\uDE9F",
            description: "Khi c\xf3 gi\xf3 th\xec nghe tiếng r\xedt, \xf9 hoặc rung ở cửa sổ",
            checklist: [{
                id: "qc-only-windy",
                text: "Chỉ k\xeau khi trời c\xf3 gi\xf3?"
            }, {
                id: "qc-single-window",
                text: "Chỉ một cửa sổ bị, c\xe1c cửa kh\xe1c th\xec kh\xf4ng?"
            }, {
                id: "qc-closed-still-noise",
                text: "Đ\xf3ng k\xedn rồi vẫn nghe tiếng?"
            }, {
                id: "qc-sudden",
                text: "Hiện tượng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-only-windy"] && t["qc-closed-still-noise"] ? {
                    level: "yellow",
                    title: "Cửa sổ bị lọt gi\xf3",
                    message: "Khe hở nhỏ c\xf3 thể g\xe2y tiếng k\xeau khi gi\xf3 mạnh.",
                    recommendedTrialIds: ["trial-check-close", "trial-observe"]
                } : {
                    level: "green",
                    title: "Tiếng gi\xf3 nhẹ",
                    message: "C\xf3 thể thử đ\xf3ng mở lại v\xe0 theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-check-close", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-check-close",
                title: "Đ\xf3ng mở lại cửa sổ",
                when: "Nếu nghe tiếng khi c\xf3 gi\xf3",
                steps: ["Mở cửa sổ ra", "Đ\xf3ng lại chắc tay", "Nghe xem tiếng k\xeau c\xf2n kh\xf4ng"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i khi gi\xf3 mạnh",
                when: "Nếu tiếng k\xeau nhẹ",
                steps: ["Quan s\xe1t v\xe0o những l\xfac gi\xf3 to", "So s\xe1nh giữa c\xe1c lần", "Chỉ thử th\xeam nếu tiếng lớn hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu tiếng k\xeau lớn hoặc lọt gi\xf3 nhiều",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 cửa sổ v\xe0 thời điểm c\xf3 gi\xf3"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "sliding-door-stuck",
            area: "door-window",
            category: "sliding-door",
            label: "Cửa l\xf9a kh\xf3 trượt, hay kẹt",
            icon: "\uD83D\uDEAA",
            description: "Cửa l\xf9a k\xe9o nặng, hay kẹt hoặc trượt kh\xf4ng đều",
            checklist: [{
                id: "qc-hard-to-move",
                text: "Cửa ng\xe0y c\xe0ng kh\xf3 trượt theo thời gian?"
            }, {
                id: "qc-sometimes-stuck",
                text: "C\xf3 l\xfac trượt được, c\xf3 l\xfac bị kẹt?"
            }, {
                id: "qc-one-side",
                text: "Chỉ một c\xe1nh cửa bị kẹt?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-hard-to-move"] && t["qc-one-side"] ? {
                    level: "green",
                    title: "Cửa trượt kh\xf4ng đều",
                    message: "Cửa l\xf9a d\xf9ng l\xe2u c\xf3 thể trượt nặng hơn.",
                    recommendedTrialIds: ["trial-slide-slowly", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "Cửa hay bị kẹt",
                    message: "Nếu kẹt thường xuy\xean, n\xean thử thao t\xe1c nhẹ v\xe0 theo d\xf5i.",
                    recommendedTrialIds: ["trial-slide-slowly", "trial-limit-force"]
                }
            },
            trials: [{
                id: "trial-slide-slowly",
                title: "K\xe9o cửa chậm v\xe0 đều",
                when: "Nếu cửa hay kẹt",
                steps: ["K\xe9o cửa từ từ", "Giữ lực đều tay", "Quan s\xe1t đoạn n\xe0o hay bị kẹt"]
            }, {
                id: "trial-limit-force",
                title: "Tr\xe1nh k\xe9o mạnh",
                when: "Nếu cửa bị kẹt",
                steps: ["Kh\xf4ng giật mạnh cửa", "Dừng lại khi thấy nặng", "Thử lại sau"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu cửa vẫn trượt được",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "So s\xe1nh giữa c\xe1c lần sử dụng", "Chỉ thử th\xeam nếu kẹt nhiều hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu cửa kẹt thường xuy\xean hoặc kh\xf4ng trượt được",
                steps: ["Ngưng cố k\xe9o", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 loại cửa v\xe0 t\xecnh trạng"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "door-squeak-noise",
            area: "door-window",
            category: "door",
            label: "Cửa k\xeau cọt kẹt khi mở",
            icon: "\uD83D\uDEAA",
            description: "Mỗi lần mở hoặc đ\xf3ng cửa đều ph\xe1t ra tiếng cọt kẹt kh\xf3 chịu",
            checklist: [{
                id: "qc-only-when-move",
                text: "Tiếng k\xeau chỉ xuất hiện khi mở hoặc đ\xf3ng cửa?"
            }, {
                id: "qc-one-door",
                text: "Chỉ một c\xe1nh cửa bị k\xeau?"
            }, {
                id: "qc-gradual",
                text: "Tiếng k\xeau xuất hiện từ từ theo thời gian?"
            }, {
                id: "qc-door-still-ok",
                text: "Cửa vẫn đ\xf3ng mở b\xecnh thường, kh\xf4ng bị kẹt?"
            }],
            diagnosis: {
                evaluate: t => t["qc-door-still-ok"] && t["qc-gradual"] ? {
                    level: "green",
                    title: "Tiếng k\xeau do ma s\xe1t",
                    message: "Cửa d\xf9ng l\xe2u ng\xe0y c\xf3 thể ph\xe1t ra tiếng khi chuyển động.",
                    recommendedTrialIds: ["trial-open-close-slow", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "Cửa ph\xe1t tiếng bất thường",
                    message: "Nếu tiếng k\xeau r\xf5 hơn theo thời gian, n\xean theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-open-close-slow", "trial-limit-force"]
                }
            },
            trials: [{
                id: "trial-open-close-slow",
                title: "Mở đ\xf3ng cửa chậm v\xe0 đều",
                when: "Nếu cửa k\xeau khi mở",
                steps: ["Mở cửa từ từ", "Đ\xf3ng lại nhẹ nh\xe0ng", "Nghe xem tiếng k\xeau c\xf3 giảm kh\xf4ng"]
            }, {
                id: "trial-limit-force",
                title: "Tr\xe1nh đẩy hoặc k\xe9o mạnh",
                when: "Nếu cửa vẫn k\xeau",
                steps: ["Kh\xf4ng giật mạnh cửa", "Giữ lực tay đều khi mở", "Quan s\xe1t phản ứng của cửa"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu tiếng k\xeau nhẹ",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "So s\xe1nh giữa c\xe1c lần mở", "Chỉ thử th\xeam nếu tiếng to hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu tiếng k\xeau ng\xe0y c\xe0ng lớn hoặc cửa mở kh\xf4ng \xeam",
                steps: ["Ngưng cố mở mạnh", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 loại cửa v\xe0 tiếng k\xeau"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "window-not-sealed",
            area: "door-window",
            category: "window",
            label: "Cửa sổ đ\xf3ng kh\xf4ng k\xedn, hở khe",
            icon: "\uD83E\uDE9F",
            description: "Nh\xecn thấy khe hở ở cửa sổ, dễ lo bụi hoặc nước mưa lọt v\xe0o",
            checklist: [{
                id: "qc-visible-gap",
                text: "Nh\xecn thấy r\xf5 khe hở khi cửa sổ đ\xe3 đ\xf3ng?"
            }, {
                id: "qc-only-one-window",
                text: "Chỉ một cửa sổ bị hở?"
            }, {
                id: "qc-after-weather",
                text: "T\xecnh trạng n\xe0y r\xf5 hơn sau mưa hoặc thời tiết ẩm?"
            }, {
                id: "qc-still-close",
                text: "Cửa sổ vẫn đ\xf3ng được, kh\xf4ng bị kẹt?"
            }],
            diagnosis: {
                evaluate: t => t["qc-visible-gap"] && t["qc-still-close"] ? {
                    level: "yellow",
                    title: "Cửa sổ đ\xf3ng chưa kh\xedt",
                    message: "Khe hở nhỏ c\xf3 thể l\xe0m lọt gi\xf3, bụi hoặc nước mưa.",
                    recommendedTrialIds: ["trial-close-again", "trial-observe"]
                } : {
                    level: "green",
                    title: "Hở nhẹ",
                    message: "C\xf3 thể thử đ\xf3ng lại v\xe0 theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-close-again", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-close-again",
                title: "Đ\xf3ng lại cửa sổ",
                when: "Nếu thấy khe hở",
                steps: ["Mở cửa sổ ra ho\xe0n to\xe0n", "Đ\xf3ng lại chắc tay", "Quan s\xe1t xem khe hở c\xf2n kh\xf4ng"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i khi mưa hoặc gi\xf3",
                when: "Nếu khe hở nhỏ",
                steps: ["Quan s\xe1t khi trời mưa hoặc gi\xf3 lớn", "Kiểm tra c\xf3 nước hay bụi lọt v\xe0o kh\xf4ng", "So s\xe1nh giữa c\xe1c lần"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu khe hở r\xf5 hoặc g\xe2y lọt nước, bụi",
                steps: ["Ngưng cố chỉnh bằng tay", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 vị tr\xed v\xe0 mức độ hở"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "stove-gas-smell",
            area: "kitchen",
            category: "stove",
            label: "Bếp c\xf3 m\xf9i gas thoang thoảng",
            icon: "\uD83D\uDD25",
            description: "Ngửi thấy m\xf9i gas nhẹ quanh bếp nhưng kh\xf4ng r\xf5 nguồn",
            checklist: [{
                id: "qc-only-near-stove",
                text: "M\xf9i gas chỉ xuất hiện quanh khu vực bếp?"
            }, {
                id: "qc-after-cooking",
                text: "M\xf9i xuất hiện sau khi nấu ăn?"
            }, {
                id: "qc-comes-and-goes",
                text: "M\xf9i l\xfac c\xf3 l\xfac kh\xf4ng, kh\xf4ng li\xean tục?"
            }, {
                id: "qc-no-strong-smell",
                text: "Kh\xf4ng c\xf3 m\xf9i gas nồng, chỉ thoang thoảng?"
            }],
            diagnosis: {
                evaluate: t => t["qc-no-strong-smell"] ? t["qc-after-cooking"] && t["qc-comes-and-goes"] ? {
                    level: "yellow",
                    title: "M\xf9i gas tồn dư",
                    message: "Sau khi nấu, m\xf9i gas c\xf3 thể c\xf2n lại trong kh\xf4ng kh\xed.",
                    recommendedTrialIds: ["trial-ventilate", "trial-check-knob"]
                } : {
                    level: "green",
                    title: "M\xf9i nhẹ, kh\xf4ng ổn định",
                    message: "C\xf3 thể thử c\xe1c c\xe1ch đơn giản để kiểm tra.",
                    recommendedTrialIds: ["trial-ventilate", "trial-check-knob"]
                } : {
                    level: "red",
                    title: "M\xf9i gas r\xf5",
                    message: "Nếu m\xf9i gas nồng, kh\xf4ng n\xean tiếp tục thử.",
                    recommendedTrialIds: ["trial-stop"]
                }
            },
            trials: [{
                id: "trial-ventilate",
                title: "Mở th\xf4ng gi\xf3 khu vực bếp",
                when: "Nếu m\xf9i gas nhẹ v\xe0 kh\xf4ng li\xean tục",
                steps: ["Mở cửa sổ hoặc cửa ra v\xe0o", "Bật quạt cho tho\xe1ng kh\xed", "Chờ v\xe0i ph\xfat xem m\xf9i c\xf3 hết kh\xf4ng"]
            }, {
                id: "trial-check-knob",
                title: "Kiểm tra n\xfam bếp",
                when: "Nếu m\xf9i xuất hiện sau khi nấu",
                steps: ["Xem c\xe1c n\xfam bếp đ\xe3 vặn về vị tr\xed tắt ho\xe0n to\xe0n chưa", "Vặn lại nhẹ tay", "Ngửi lại quanh bếp"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu m\xf9i đ\xe3 giảm",
                steps: ["Quan s\xe1t trong v\xe0i lần nấu tiếp theo", "Ghi nhận thời điểm xuất hiện m\xf9i", "Chỉ thử th\xeam nếu m\xf9i r\xf5 hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i gas r\xf5, k\xe9o d\xe0i hoặc g\xe2y lo lắng",
                steps: ["Ngưng sử dụng bếp", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 m\xf9i v\xe0 thời điểm xuất hiện"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "range-hood-weak-suction",
            area: "kitchen",
            category: "range-hood",
            label: "M\xe1y h\xfat m\xf9i h\xfat yếu",
            icon: "\uD83C\uDF00",
            description: "Bật m\xe1y h\xfat m\xf9i nhưng m\xf9i nấu ăn vẫn c\xf2n nhiều",
            checklist: [{
                id: "qc-still-smell",
                text: "Bật h\xfat m\xf9i nhưng m\xf9i nấu ăn vẫn c\xf2n r\xf5?"
            }, {
                id: "qc-used-long",
                text: "M\xe1y đ\xe3 d\xf9ng l\xe2u v\xe0 \xedt khi vệ sinh?"
            }, {
                id: "qc-all-speeds",
                text: "Tăng tốc độ h\xfat nhưng kh\xf4ng kh\xe1c nhiều?"
            }, {
                id: "qc-recent",
                text: "T\xecnh trạng n\xe0y mới r\xf5 gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-used-long"] && t["qc-all-speeds"] ? {
                    level: "yellow",
                    title: "H\xfat m\xf9i giảm hiệu quả",
                    message: "M\xe1y d\xf9ng l\xe2u c\xf3 thể h\xfat yếu hơn b\xecnh thường.",
                    recommendedTrialIds: ["trial-clean-filter", "trial-use-early"]
                } : {
                    level: "green",
                    title: "H\xfat m\xf9i chưa tối ưu",
                    message: "C\xf3 thể thử điều chỉnh c\xe1ch sử dụng.",
                    recommendedTrialIds: ["trial-use-early", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-clean-filter",
                title: "Vệ sinh lưới lọc",
                when: "Nếu m\xe1y đ\xe3 d\xf9ng l\xe2u",
                steps: ["Tắt m\xe1y v\xe0 để nguội", "Th\xe1o lưới lọc theo hướng dẫn", "Rửa sạch dầu mỡ v\xe0 lắp lại"]
            }, {
                id: "trial-use-early",
                title: "Bật h\xfat m\xf9i sớm",
                when: "Nếu m\xf9i t\xedch tụ nhanh khi nấu",
                steps: ["Bật h\xfat m\xf9i trước khi bắt đầu nấu", "Giữ m\xe1y chạy trong l\xfac nấu", "Quan s\xe1t mức giảm m\xf9i"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu đ\xe3 cải thiện phần n\xe0o",
                steps: ["So s\xe1nh trước v\xe0 sau khi vệ sinh", "Quan s\xe1t trong v\xe0i lần nấu", "Chỉ thử th\xeam nếu m\xf9i c\xf2n nhiều"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu h\xfat m\xf9i vẫn yếu r\xf5",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 t\xecnh trạng m\xe1y"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "sink-smell-kitchen",
            area: "kitchen",
            category: "sink",
            label: "Bồn rửa bếp bốc m\xf9i",
            icon: "\uD83D\uDEB0",
            description: "Bồn rửa bếp c\xf3 m\xf9i h\xf4i, nhất l\xe0 sau khi sử dụng",
            checklist: [{
                id: "qc-after-wash",
                text: "M\xf9i xuất hiện r\xf5 sau khi rửa ch\xe9n?"
            }, {
                id: "qc-drain-ok",
                text: "Nước vẫn tho\xe1t b\xecnh thường?"
            }, {
                id: "qc-food-waste",
                text: "Thường đổ thức ăn thừa xuống bồn?"
            }, {
                id: "qc-comes-back",
                text: "M\xf9i hết rồi nhưng quay lại?"
            }],
            diagnosis: {
                evaluate: t => t["qc-food-waste"] && t["qc-comes-back"] ? {
                    level: "yellow",
                    title: "M\xf9i do cặn thức ăn",
                    message: "Thức ăn thừa c\xf3 thể g\xe2y m\xf9i trong đường tho\xe1t.",
                    recommendedTrialIds: ["trial-flush-hot", "trial-clean-strainer"]
                } : {
                    level: "green",
                    title: "M\xf9i nhẹ",
                    message: "C\xf3 thể thử c\xe1c c\xe1ch đơn giản để giảm m\xf9i.",
                    recommendedTrialIds: ["trial-flush-hot", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-flush-hot",
                title: "Xả nước n\xf3ng",
                when: "Nếu nghi c\xf3 cặn b\xe1m",
                steps: ["Xả nước n\xf3ng li\xean tục v\xe0i ph\xfat", "Ngửi lại sau khi xả", "Lặp lại nếu cần"]
            }, {
                id: "trial-clean-strainer",
                title: "Vệ sinh rổ lọc r\xe1c",
                when: "Nếu c\xf3 rổ lọc ở bồn",
                steps: ["Lấy rổ lọc ra", "Rửa sạch thức ăn b\xe1m", "Lắp lại v\xe0 kiểm tra"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu m\xf9i đ\xe3 giảm",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "Hạn chế đổ thức ăn xuống bồn", "Chỉ thử th\xeam nếu m\xf9i quay lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i k\xe9o d\xe0i",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 m\xf9i v\xe0 tần suất"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "stove-ignition-slow",
            area: "kitchen",
            category: "stove",
            label: "Bếp kh\xf3 đ\xe1nh lửa",
            icon: "\uD83D\uDD25",
            description: "Bật bếp phải v\xe0i lần mới ch\xe1y hoặc ch\xe1y chậm",
            checklist: [{
                id: "qc-need-many-tries",
                text: "Phải bật nhiều lần bếp mới ch\xe1y?"
            }, {
                id: "qc-only-one-burner",
                text: "Chỉ một bếp bị, bếp kh\xe1c vẫn b\xecnh thường?"
            }, {
                id: "qc-after-clean",
                text: "Xảy ra sau khi lau ch\xf9i bếp?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-after-clean"] ? {
                    level: "green",
                    title: "Bếp c\xf2n ẩm",
                    message: "Sau khi lau, bếp c\xf3 thể cần thời gian kh\xf4.",
                    recommendedTrialIds: ["trial-wait-dry", "trial-try-again"]
                } : t["qc-only-one-burner"] ? {
                    level: "yellow",
                    title: "Bếp đ\xe1nh lửa kh\xf4ng đều",
                    message: "Khi chỉ một bếp bị, n\xean thử c\xe1c c\xe1ch nhẹ.",
                    recommendedTrialIds: ["trial-wait-dry", "trial-observe"]
                } : {
                    level: "green",
                    title: "Đ\xe1nh lửa chậm",
                    message: "C\xf3 thể thử lại sau khi điều chỉnh thao t\xe1c.",
                    recommendedTrialIds: ["trial-try-again", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-wait-dry",
                title: "Chờ bếp kh\xf4 hẳn",
                when: "Nếu vừa lau ch\xf9i bếp",
                steps: ["Để bếp kh\xf4 tự nhi\xean", "Kh\xf4ng bật li\xean tục", "Thử lại sau một l\xfac"]
            }, {
                id: "trial-try-again",
                title: "Thử bật lại nhẹ tay",
                when: "Nếu bếp ch\xe1y chậm",
                steps: ["Vặn n\xfam chậm v\xe0 đều", "Giữ v\xe0i gi\xe2y", "Quan s\xe1t thời gian ch\xe1y"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu bếp vẫn ch\xe1y được",
                steps: ["Quan s\xe1t trong v\xe0i lần nấu", "So s\xe1nh giữa c\xe1c bếp", "Chỉ thử th\xeam nếu kh\xf3 hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu bếp kh\xf3 ch\xe1y k\xe9o d\xe0i",
                steps: ["Ngưng cố bật nhiều lần", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 biểu hiện bếp"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "roof-leak-only-when-rain",
            area: "outdoor",
            category: "roof",
            label: "M\xe1i chỉ dột khi mưa lớn",
            icon: "\uD83C\uDF27️",
            description: "Ng\xe0y thường kh\xf4 r\xe1o, mưa lớn mới thấy nước thấm hoặc nhỏ",
            checklist: [{
                id: "qc-only-heavy-rain",
                text: "Chỉ dột khi mưa lớn hoặc mưa k\xe9o d\xe0i?"
            }, {
                id: "qc-no-drip-normal",
                text: "Trời kh\xf4 th\xec kh\xf4ng thấy nước nhỏ?"
            }, {
                id: "qc-single-spot",
                text: "Chỉ dột ở một vị tr\xed cố định?"
            }, {
                id: "qc-after-wind",
                text: "Dễ dột hơn khi mưa k\xe8m gi\xf3?"
            }],
            diagnosis: {
                evaluate: t => t["qc-only-heavy-rain"] && t["qc-single-spot"] ? {
                    level: "yellow",
                    title: "Thấm theo thời tiết",
                    message: "Mưa lớn hoặc gi\xf3 c\xf3 thể l\xe0m nước tạt v\xe0o điểm yếu.",
                    recommendedTrialIds: ["trial-observe-rain", "trial-mark-spot"]
                } : {
                    level: "green",
                    title: "Dột nhẹ theo mưa",
                    message: "C\xf3 thể theo d\xf5i th\xeam để x\xe1c định r\xf5 vị tr\xed.",
                    recommendedTrialIds: ["trial-mark-spot", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-mark-spot",
                title: "Đ\xe1nh dấu vị tr\xed dột",
                when: "Nếu chỉ dột nhẹ",
                steps: ["Đ\xe1nh dấu vị tr\xed nước thấm hoặc nhỏ", "Ghi nhớ thời điểm mưa", "So s\xe1nh sau c\xe1c lần mưa"]
            }, {
                id: "trial-observe-rain",
                title: "Quan s\xe1t khi mưa",
                when: "Nếu nghi dột theo gi\xf3 hoặc mưa lớn",
                steps: ["Quan s\xe1t trong l\xfac mưa", "Xem nước v\xe0o theo hướng n\xe0o", "Ghi nhận mức độ dột"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu chưa r\xf5 nguy\xean nh\xe2n",
                steps: ["Theo d\xf5i v\xe0i trận mưa", "So s\xe1nh mức độ dột", "Chỉ thử th\xeam nếu nặng hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu dột r\xf5 hoặc lan rộng",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 vị tr\xed v\xe0 điều kiện mưa"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "yard-drain-slow-after-rain",
            area: "outdoor",
            category: "drain",
            label: "S\xe2n tho\xe1t nước chậm sau mưa",
            icon: "\uD83C\uDFE1",
            description: "Sau mưa, nước đọng l\xe2u ở s\xe2n hoặc lối đi",
            checklist: [{
                id: "qc-after-rain",
                text: "Chỉ đọng nước sau mưa?"
            }, {
                id: "qc-drains-present",
                text: "C\xf3 cống tho\xe1t nước ở s\xe2n?"
            }, {
                id: "qc-gradual",
                text: "T\xecnh trạng n\xe0y nặng dần theo thời gian?"
            }, {
                id: "qc-leaves",
                text: "Thường c\xf3 l\xe1 c\xe2y hoặc r\xe1c quanh cống?"
            }],
            diagnosis: {
                evaluate: t => t["qc-leaves"] && t["qc-drains-present"] ? {
                    level: "green",
                    title: "Cống s\xe2n bị cản nhẹ",
                    message: "L\xe1 c\xe2y v\xe0 r\xe1c dễ l\xe0m nước r\xfat chậm sau mưa.",
                    recommendedTrialIds: ["trial-clear-surface", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "Tho\xe1t nước k\xe9m sau mưa",
                    message: "Nếu nước đọng l\xe2u, n\xean theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-clear-surface", "trial-observe-rain"]
                }
            },
            trials: [{
                id: "trial-clear-surface",
                title: "Dọn l\xe1 v\xe0 r\xe1c quanh cống",
                when: "Nếu s\xe2n c\xf3 nhiều l\xe1 hoặc r\xe1c",
                steps: ["Qu\xe9t sạch khu vực quanh cống", "Lấy r\xe1c che miệng cống", "Quan s\xe1t sau trận mưa tiếp theo"]
            }, {
                id: "trial-observe-rain",
                title: "Quan s\xe1t sau mưa",
                when: "Nếu chưa r\xf5 mức độ",
                steps: ["Ghi nhận thời gian nước r\xfat", "So s\xe1nh giữa c\xe1c lần mưa", "Chỉ thử th\xeam nếu đọng l\xe2u hơn"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu nước đ\xe3 r\xfat chậm nhưng vẫn r\xfat",
                steps: ["Theo d\xf5i trong v\xe0i ng\xe0y mưa", "So s\xe1nh mức đọng nước", "Ghi nhận thay đổi"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu nước đọng k\xe9o d\xe0i hoặc lan rộng",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 khu vực s\xe2n"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "outdoor-drain-smell",
            area: "outdoor",
            category: "drain",
            label: "Cống ngo\xe0i trời bốc m\xf9i",
            icon: "\uD83D\uDD73️",
            description: "Cống ngo\xe0i trời c\xf3 m\xf9i h\xf4i, nhất l\xe0 sau mưa hoặc nắng n\xf3ng",
            checklist: [{
                id: "qc-after-rain",
                text: "M\xf9i r\xf5 hơn sau mưa?"
            }, {
                id: "qc-hot-weather",
                text: "M\xf9i nặng hơn khi trời nắng n\xf3ng?"
            }, {
                id: "qc-single-spot",
                text: "Chỉ một cống bị m\xf9i?"
            }, {
                id: "qc-no-backflow",
                text: "Kh\xf4ng thấy nước tr\xe0o ngược?"
            }],
            diagnosis: {
                evaluate: t => t["qc-no-backflow"] && t["qc-single-spot"] ? {
                    level: "green",
                    title: "M\xf9i từ cống ngo\xe0i trời",
                    message: "Nắng n\xf3ng hoặc mưa c\xf3 thể l\xe0m m\xf9i bốc l\xean.",
                    recommendedTrialIds: ["trial-flush-water", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "M\xf9i k\xe9o d\xe0i",
                    message: "Nếu m\xf9i kh\xf4ng giảm, n\xean theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-flush-water", "trial-cover"]
                }
            },
            trials: [{
                id: "trial-flush-water",
                title: "Xả nước xuống cống",
                when: "Nếu cống kh\xf4 hoặc c\xf3 m\xf9i",
                steps: ["Xả một lượng nước vừa đủ", "Chờ v\xe0i ph\xfat", "Ngửi lại xem m\xf9i giảm kh\xf4ng"]
            }, {
                id: "trial-cover",
                title: "Che tạm miệng cống",
                when: "Nếu chưa xử l\xfd ngay",
                steps: ["D\xf9ng nắp hoặc vật che ph\xf9 hợp", "Giữ trong thời gian ngắn", "Mở ra kiểm tra lại"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu m\xf9i giảm",
                steps: ["Theo d\xf5i trong v\xe0i ng\xe0y", "So s\xe1nh mức m\xf9i", "Chỉ thử th\xeam nếu m\xf9i quay lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i nặng hoặc k\xe9o d\xe0i",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 vị tr\xed cống"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "air-conditioner-weak-cooling",
            area: "living-bedroom",
            category: "air-conditioner",
            label: "M\xe1y lạnh m\xe1t yếu, l\xfac m\xe1t l\xfac kh\xf4ng",
            icon: "❄️",
            description: "Bật m\xe1y lạnh nhưng ph\xf2ng m\xe1t chậm hoặc m\xe1t kh\xf4ng đều",
            checklist: [{
                id: "qc-hot-time",
                text: "M\xe1t yếu hơn v\xe0o trưa hoặc chiều nắng?"
            }, {
                id: "qc-used-long",
                text: "M\xe1y đ\xe3 d\xf9ng l\xe2u, \xedt vệ sinh?"
            }, {
                id: "qc-room-closed",
                text: "Ph\xf2ng đ\xe3 đ\xf3ng k\xedn cửa khi bật m\xe1y?"
            }, {
                id: "qc-sudden",
                text: "T\xecnh trạng n\xe0y mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-hot-time"] && t["qc-room-closed"] ? {
                    level: "green",
                    title: "Hiệu suất giảm theo thời điểm",
                    message: "Nắng n\xf3ng c\xf3 thể l\xe0m m\xe1y lạnh m\xe1t chậm hơn.",
                    recommendedTrialIds: ["trial-lower-temp", "trial-use-early"]
                } : t["qc-used-long"] ? {
                    level: "yellow",
                    title: "M\xe1y lạnh hoạt động k\xe9m",
                    message: "M\xe1y d\xf9ng l\xe2u ng\xe0y c\xf3 thể m\xe1t yếu hơn b\xecnh thường.",
                    recommendedTrialIds: ["trial-clean-filter", "trial-observe"]
                } : {
                    level: "green",
                    title: "M\xe1t chưa tối ưu",
                    message: "C\xf3 thể thử điều chỉnh c\xe1ch sử dụng.",
                    recommendedTrialIds: ["trial-lower-temp", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-lower-temp",
                title: "Giảm nhiệt độ c\xe0i đặt",
                when: "Nếu ph\xf2ng m\xe1t chậm",
                steps: ["Giảm nhiệt độ xuống mức thấp hơn", "Giữ ổn định trong 10–15 ph\xfat", "Quan s\xe1t mức độ m\xe1t của ph\xf2ng"]
            }, {
                id: "trial-use-early",
                title: "Bật m\xe1y sớm hơn",
                when: "Nếu ph\xf2ng m\xe1t chậm v\xe0o giờ nắng n\xf3ng",
                steps: ["Bật m\xe1y lạnh trước khi v\xe0o ph\xf2ng 15–20 ph\xfat", "Đ\xf3ng k\xedn cửa v\xe0 cửa sổ", "Kiểm tra xem ph\xf2ng c\xf3 m\xe1t nhanh hơn kh\xf4ng"]
            }, {
                id: "trial-clean-filter",
                title: "Vệ sinh lưới lọc",
                when: "Nếu m\xe1y đ\xe3 d\xf9ng l\xe2u",
                steps: ["Tắt m\xe1y v\xe0 r\xfat ph\xedch cắm", "Th\xe1o lưới lọc ra", "Rửa sạch bằng nước v\xe0 để kh\xf4", "Lắp lại v\xe0 thử lại"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu chưa r\xf5 nguy\xean nh\xe2n",
                steps: ["Ghi nhận thời điểm m\xe1y m\xe1t yếu", "Quan s\xe1t trong v\xe0i ng\xe0y", "Chỉ thử th\xeam nếu t\xecnh trạng nặng hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xe1y m\xe1t yếu k\xe9o d\xe0i hoặc kh\xf4ng m\xe1t",
                steps: ["Ngưng tự sửa th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ trong app", "M\xf4 tả r\xf5 t\xecnh trạng v\xe0 những g\xec đ\xe3 thử"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "air-conditioner-drip-light",
            area: "living-bedroom",
            category: "air-conditioner",
            label: "M\xe1y lạnh nhỏ nước nhẹ",
            icon: "\uD83D\uDCA7",
            description: "M\xe1y lạnh c\xf3 v\xe0i giọt nước nhỏ xuống, kh\xf4ng chảy nhiều",
            checklist: [{
                id: "qc-light-drip",
                text: "Chỉ nhỏ v\xe0i giọt, kh\xf4ng chảy li\xean tục?"
            }, {
                id: "qc-hot-weather",
                text: "Thường xảy ra khi trời n\xf3ng ẩm?"
            }, {
                id: "qc-long-use",
                text: "M\xe1y chạy li\xean tục nhiều giờ?"
            }, {
                id: "qc-sudden",
                text: "Hiện tượng mới xuất hiện?"
            }],
            diagnosis: {
                evaluate: t => t["qc-light-drip"] && t["qc-hot-weather"] ? {
                    level: "green",
                    title: "Đọng nước nhẹ",
                    message: "Độ ẩm cao c\xf3 thể l\xe0m m\xe1y nhỏ nước nhẹ.",
                    recommendedTrialIds: ["trial-rest-machine", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "Nhỏ nước cần theo d\xf5i",
                    message: "Nếu lặp lại, n\xean quan s\xe1t kỹ hơn.",
                    recommendedTrialIds: ["trial-rest-machine", "trial-check-room"]
                }
            },
            trials: [{
                id: "trial-rest-machine",
                title: "Cho m\xe1y nghỉ một l\xfac",
                when: "Nếu m\xe1y chạy l\xe2u",
                steps: ["Tắt m\xe1y khoảng 15–30 ph\xfat", "Bật lại sau khi ph\xf2ng bớt ẩm", "Quan s\xe1t c\xf2n nhỏ nước kh\xf4ng"]
            }, {
                id: "trial-check-room",
                title: "Giữ ph\xf2ng th\xf4ng tho\xe1ng",
                when: "Nếu ph\xf2ng ẩm",
                steps: ["Đ\xf3ng k\xedn cửa khi bật m\xe1y", "Tr\xe1nh mở ra v\xe0o li\xean tục", "Quan s\xe1t lượng nước"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu chỉ nhỏ rất \xedt",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "So s\xe1nh giữa c\xe1c lần bật", "Chỉ thử th\xeam nếu nhỏ nhiều hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu nước nhỏ nhiều hoặc k\xe9o d\xe0i",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 lượng nước nhỏ"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "fan-noise-when-running",
            area: "living-bedroom",
            category: "fan",
            label: "Quạt k\xeau to khi chạy",
            icon: "\uD83C\uDF00",
            description: "Quạt ph\xe1t ra tiếng ồn lớn khi đang chạy",
            checklist: [{
                id: "qc-only-high-speed",
                text: "Chỉ k\xeau to khi chạy tốc độ cao?"
            }, {
                id: "qc-old-fan",
                text: "Quạt đ\xe3 d\xf9ng l\xe2u?"
            }, {
                id: "qc-one-spot",
                text: "Tiếng k\xeau ph\xe1t ra từ một vị tr\xed cố định?"
            }, {
                id: "qc-sudden",
                text: "Tiếng k\xeau mới xuất hiện?"
            }],
            diagnosis: {
                evaluate: t => t["qc-only-high-speed"] ? {
                    level: "green",
                    title: "Tiếng ồn do tốc độ cao",
                    message: "Quạt chạy nhanh c\xf3 thể ồn hơn.",
                    recommendedTrialIds: ["trial-lower-speed", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "Quạt ph\xe1t tiếng bất thường",
                    message: "Nếu tiếng k\xeau r\xf5, n\xean theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-lower-speed", "trial-limit-use"]
                }
            },
            trials: [{
                id: "trial-lower-speed",
                title: "Giảm tốc độ quạt",
                when: "Nếu quạt k\xeau to",
                steps: ["Giảm xuống mức thấp hơn", "Nghe lại tiếng ồn", "So s\xe1nh giữa c\xe1c mức"]
            }, {
                id: "trial-limit-use",
                title: "Hạn chế chạy li\xean tục",
                when: "Nếu quạt d\xf9ng l\xe2u",
                steps: ["Tắt quạt cho nghỉ", "Bật lại sau một l\xfac", "Quan s\xe1t tiếng k\xeau"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu tiếng k\xeau nhẹ",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "Ghi nhận mức độ ồn", "Chỉ thử th\xeam nếu to hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu quạt k\xeau lớn bất thường",
                steps: ["Ngưng sử dụng", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 tiếng k\xeau"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "bedroom-musty-smell",
            area: "living-bedroom",
            category: "room",
            label: "Ph\xf2ng ngủ c\xf3 m\xf9i ẩm",
            icon: "\uD83C\uDF2B️",
            description: "Ph\xf2ng ngủ c\xf3 m\xf9i ẩm, nhất l\xe0 buổi s\xe1ng hoặc khi đ\xf3ng k\xedn",
            checklist: [{
                id: "qc-closed-room",
                text: "Ph\xf2ng thường xuy\xean đ\xf3ng k\xedn?"
            }, {
                id: "qc-after-rain",
                text: "M\xf9i r\xf5 hơn sau mưa?"
            }, {
                id: "qc-morning",
                text: "M\xf9i nặng hơn v\xe0o buổi s\xe1ng?"
            }, {
                id: "qc-no-water",
                text: "Kh\xf4ng thấy nước đọng hay thấm r\xf5?"
            }],
            diagnosis: {
                evaluate: t => t["qc-closed-room"] && t["qc-after-rain"] ? {
                    level: "green",
                    title: "M\xf9i do ẩm kh\xf4ng kh\xed",
                    message: "Độ ẩm cao trong ph\xf2ng k\xedn dễ g\xe2y m\xf9i.",
                    recommendedTrialIds: ["trial-ventilate", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "M\xf9i ẩm k\xe9o d\xe0i",
                    message: "Nếu m\xf9i kh\xf4ng giảm, n\xean theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-ventilate", "trial-dry-room"]
                }
            },
            trials: [{
                id: "trial-ventilate",
                title: "Th\xf4ng gi\xf3 ph\xf2ng",
                when: "Nếu ph\xf2ng k\xedn",
                steps: ["Mở cửa sổ hoặc cửa ph\xf2ng", "Cho kh\xf4ng kh\xed lưu th\xf4ng", "Ngửi lại sau một l\xfac"]
            }, {
                id: "trial-dry-room",
                title: "Giữ ph\xf2ng kh\xf4",
                when: "Nếu trời ẩm",
                steps: ["Bật quạt hoặc m\xe1y lạnh chế độ kh\xf4", "Tr\xe1nh phơi đồ ướt trong ph\xf2ng", "Theo d\xf5i m\xf9i"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu m\xf9i đ\xe3 giảm",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "So s\xe1nh giữa c\xe1c ng\xe0y", "Chỉ thử th\xeam nếu m\xf9i quay lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i ẩm k\xe9o d\xe0i",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 m\xf9i v\xe0 thời điểm"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "floor-feels-damp",
            area: "floor",
            category: "surface",
            label: "S\xe0n ẩm, đi ch\xe2n trần thấy lạnh",
            icon: "\uD83E\uDDCA",
            description: "S\xe0n kh\xf4ng thấy nước nhưng lu\xf4n ẩm, đi ch\xe2n trần thấy lạnh",
            checklist: [{
                id: "qc-no-visible-water",
                text: "Kh\xf4ng thấy nước đọng r\xf5 tr\xean s\xe0n?"
            }, {
                id: "qc-worse-rain",
                text: "Cảm gi\xe1c ẩm r\xf5 hơn sau mưa?"
            }, {
                id: "qc-ground-floor",
                text: "Xảy ra ở tầng trệt?"
            }, {
                id: "qc-closed-room",
                text: "Khu vực thường đ\xf3ng k\xedn?"
            }],
            diagnosis: {
                evaluate: t => t["qc-worse-rain"] && t["qc-ground-floor"] ? {
                    level: "green",
                    title: "Ẩm do thời tiết",
                    message: "Độ ẩm kh\xf4ng kh\xed cao c\xf3 thể l\xe0m s\xe0n lu\xf4n ẩm.",
                    recommendedTrialIds: ["trial-ventilate", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "Ẩm k\xe9o d\xe0i",
                    message: "Nếu s\xe0n ẩm li\xean tục, n\xean theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-ventilate", "trial-keep-dry"]
                }
            },
            trials: [{
                id: "trial-ventilate",
                title: "Th\xf4ng gi\xf3 khu vực s\xe0n",
                when: "Nếu s\xe0n ẩm nhưng kh\xf4ng c\xf3 nước",
                steps: ["Mở cửa cho th\xf4ng tho\xe1ng", "Bật quạt để lưu th\xf4ng kh\xf4ng kh\xed", "Cảm nhận lại sau v\xe0i giờ"]
            }, {
                id: "trial-keep-dry",
                title: "Giữ s\xe0n kh\xf4",
                when: "Nếu khu vực hay ẩm",
                steps: ["Hạn chế lau s\xe0n nhiều nước", "Tr\xe1nh phơi đồ ướt gần đ\xf3", "Theo d\xf5i cảm gi\xe1c ẩm"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu ẩm nhẹ",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "So s\xe1nh ng\xe0y mưa v\xe0 ng\xe0y kh\xf4", "Chỉ thử th\xeam nếu ẩm nặng hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu s\xe0n lu\xf4n ẩm k\xe9o d\xe0i",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 khu vực s\xe0n"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "floor-musty-smell",
            area: "floor",
            category: "surface",
            label: "S\xe0n c\xf3 m\xf9i ẩm, m\xf9i h\xf4i nhẹ",
            icon: "\uD83C\uDF2B️",
            description: "Khu vực s\xe0n c\xf3 m\xf9i ẩm d\xf9 kh\xf4ng thấy cống hay nước bẩn",
            checklist: [{
                id: "qc-no-drain-smell",
                text: "Kh\xf4ng phải m\xf9i từ cống tho\xe1t?"
            }, {
                id: "qc-worse-morning",
                text: "M\xf9i r\xf5 hơn v\xe0o buổi s\xe1ng?"
            }, {
                id: "qc-after-rain",
                text: "M\xf9i nặng hơn sau mưa?"
            }, {
                id: "qc-single-area",
                text: "Chỉ một khu vực s\xe0n bị m\xf9i?"
            }],
            diagnosis: {
                evaluate: t => t["qc-after-rain"] && t["qc-single-area"] ? {
                    level: "green",
                    title: "M\xf9i ẩm từ s\xe0n",
                    message: "Độ ẩm cao c\xf3 thể g\xe2y m\xf9i nhẹ từ s\xe0n.",
                    recommendedTrialIds: ["trial-ventilate", "trial-keep-dry"]
                } : {
                    level: "yellow",
                    title: "M\xf9i k\xe9o d\xe0i",
                    message: "Nếu m\xf9i kh\xf4ng giảm, n\xean theo d\xf5i kỹ hơn.",
                    recommendedTrialIds: ["trial-ventilate", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-ventilate",
                title: "Th\xf4ng gi\xf3 khu vực s\xe0n",
                when: "Nếu s\xe0n c\xf3 m\xf9i ẩm",
                steps: ["Mở cửa sổ hoặc cửa ra v\xe0o", "Cho kh\xf4ng kh\xed lưu th\xf4ng", "Ngửi lại sau một thời gian"]
            }, {
                id: "trial-keep-dry",
                title: "Giữ khu vực kh\xf4",
                when: "Nếu trời ẩm",
                steps: ["Hạn chế lau s\xe0n ướt", "Tr\xe1nh để vật ẩm tr\xean s\xe0n", "Theo d\xf5i m\xf9i"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu m\xf9i đ\xe3 giảm",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "So s\xe1nh giữa ng\xe0y mưa v\xe0 ng\xe0y kh\xf4", "Chỉ thử th\xeam nếu m\xf9i quay lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i k\xe9o d\xe0i nhiều ng\xe0y",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 khu vực s\xe0n"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "floor-tile-hollow-sound",
            area: "floor",
            category: "tile",
            label: "Gạch s\xe0n k\xeau lộp bộp khi đi",
            icon: "\uD83D\uDD0A",
            description: "Đi l\xean s\xe0n nghe tiếng bộp bộp, nhưng gạch chưa bong",
            checklist: [{
                id: "qc-hollow-sound",
                text: "Nghe tiếng bộp bộp khi đi qua?"
            }, {
                id: "qc-not-loose",
                text: "Gạch chưa bong hoặc nứt?"
            }, {
                id: "qc-single-area",
                text: "Chỉ một khu vực bị?"
            }, {
                id: "qc-long-time",
                text: "Đ\xe3 xảy ra một thời gian?"
            }],
            diagnosis: {
                evaluate: t => t["qc-hollow-sound"] && t["qc-not-loose"] ? {
                    level: "green",
                    title: "Gạch rỗng nhẹ",
                    message: "Một số vi\xean gạch c\xf3 thể rỗng b\xean dưới.",
                    recommendedTrialIds: ["trial-avoid-impact", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "Gạch cần theo d\xf5i",
                    message: "Nếu tiếng r\xf5 hơn, n\xean theo d\xf5i kỹ.",
                    recommendedTrialIds: ["trial-avoid-impact", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-avoid-impact",
                title: "Tr\xe1nh t\xe1c động mạnh l\xean khu vực đ\xf3",
                when: "Nếu gạch k\xeau lộp bộp",
                steps: ["Tr\xe1nh nhảy hoặc k\xe9o vật nặng", "Đi nhẹ qua khu vực", "Quan s\xe1t thay đổi"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i theo thời gian",
                when: "Nếu gạch chưa bong",
                steps: ["Quan s\xe1t trong v\xe0i tuần", "So s\xe1nh mức độ tiếng k\xeau", "Chỉ thử th\xeam nếu nặng hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu gạch bong, nứt hoặc tiếng to hơn",
                steps: ["Ngưng sử dụng khu vực", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 vị tr\xed gạch"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "ceiling-crack-sound",
            area: "structure",
            category: "ceiling",
            label: "Trần k\xeau lạch cạch khi y\xean tĩnh",
            icon: "\uD83D\uDD0A",
            description: "Ban đ\xeam hoặc l\xfac y\xean tĩnh nghe tiếng lạch cạch từ trần, kh\xf4ng thấy nứt r\xf5",
            checklist: [{
                id: "qc-night-only",
                text: "Chủ yếu nghe tiếng v\xe0o ban đ\xeam hoặc l\xfac rất y\xean tĩnh?"
            }, {
                id: "qc-no-visible-crack",
                text: "Kh\xf4ng thấy vết nứt hay mảng trần bong r\xf5?"
            }, {
                id: "qc-after-hot-day",
                text: "Hay xảy ra sau ng\xe0y nắng n\xf3ng?"
            }, {
                id: "qc-intermittent",
                text: "Tiếng k\xeau kh\xf4ng li\xean tục, l\xfac c\xf3 l\xfac kh\xf4ng?"
            }],
            diagnosis: {
                evaluate: t => t["qc-night-only"] && t["qc-no-visible-crack"] ? {
                    level: "green",
                    title: "Tiếng do gi\xe3n nở vật liệu",
                    message: "Khi nhiệt độ thay đổi, trần c\xf3 thể ph\xe1t ra tiếng nhỏ.",
                    recommendedTrialIds: ["trial-observe-pattern", "trial-keep-ventilated"]
                } : {
                    level: "yellow",
                    title: "Tiếng trần cần theo d\xf5i",
                    message: "Nếu tiếng xuất hiện thường xuy\xean, n\xean quan s\xe1t th\xeam.",
                    recommendedTrialIds: ["trial-observe-pattern", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-observe-pattern",
                title: "Quan s\xe1t theo thời điểm",
                when: "Nếu trần k\xeau kh\xf4ng thường xuy\xean",
                steps: ["Ghi nhận thời điểm nghe tiếng", "So s\xe1nh giữa ng\xe0y n\xf3ng v\xe0 ng\xe0y m\xe1t", "Xem tiếng c\xf3 lặp lại theo giờ kh\xf4ng"]
            }, {
                id: "trial-keep-ventilated",
                title: "Giữ trần th\xf4ng tho\xe1ng",
                when: "Nếu nh\xe0 k\xedn v\xe0 n\xf3ng",
                steps: ["Mở cửa th\xf4ng gi\xf3 nếu c\xf3 thể", "Giảm t\xedch nhiệt tr\xean trần", "Theo d\xf5i xem tiếng c\xf3 giảm kh\xf4ng"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu chưa r\xf5 nguy\xean nh\xe2n",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "Ghi nhận tần suất tiếng k\xeau", "Chỉ thử th\xeam nếu tiếng to hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu tiếng k\xeau lớn, li\xean tục hoặc k\xe8m rung",
                steps: ["Ngưng tự suy đo\xe1n th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 thời điểm v\xe0 loại tiếng"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "ceiling-musty-smell",
            area: "structure",
            category: "ceiling",
            label: "Trần c\xf3 m\xf9i ẩm nhẹ",
            icon: "\uD83C\uDF2B️",
            description: "Ngửi thấy m\xf9i ẩm ph\xeda tr\xean trần, nhất l\xe0 khi ph\xf2ng k\xedn",
            checklist: [{
                id: "qc-closed-room",
                text: "Ph\xf2ng thường xuy\xean đ\xf3ng k\xedn?"
            }, {
                id: "qc-after-rain",
                text: "M\xf9i r\xf5 hơn sau mưa hoặc trời ẩm?"
            }, {
                id: "qc-no-drip",
                text: "Kh\xf4ng thấy nước nhỏ hay vết ố mới tr\xean trần?"
            }, {
                id: "qc-gradual",
                text: "M\xf9i xuất hiện từ từ, kh\xf4ng đột ngột?"
            }],
            diagnosis: {
                evaluate: t => t["qc-after-rain"] && t["qc-no-drip"] ? {
                    level: "green",
                    title: "M\xf9i ẩm do kh\xf4ng kh\xed",
                    message: "Độ ẩm cao c\xf3 thể g\xe2y m\xf9i nhẹ ở khu vực trần.",
                    recommendedTrialIds: ["trial-ventilate", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "M\xf9i trần cần theo d\xf5i",
                    message: "Nếu m\xf9i k\xe9o d\xe0i, n\xean quan s\xe1t th\xeam.",
                    recommendedTrialIds: ["trial-ventilate", "trial-keep-dry"]
                }
            },
            trials: [{
                id: "trial-ventilate",
                title: "Th\xf4ng gi\xf3 ph\xf2ng",
                when: "Nếu ph\xf2ng k\xedn v\xe0 c\xf3 m\xf9i ẩm",
                steps: ["Mở cửa sổ hoặc cửa ph\xf2ng", "Cho kh\xf4ng kh\xed lưu th\xf4ng", "Ngửi lại sau v\xe0i giờ"]
            }, {
                id: "trial-keep-dry",
                title: "Giữ khu vực trần kh\xf4",
                when: "Nếu trời ẩm k\xe9o d\xe0i",
                steps: ["Hạn chế phơi đồ ướt trong ph\xf2ng", "D\xf9ng quạt hoặc chế độ kh\xf4 của m\xe1y lạnh", "Theo d\xf5i m\xf9i"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu m\xf9i đ\xe3 giảm",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "So s\xe1nh trước v\xe0 sau mưa", "Chỉ thử th\xeam nếu m\xf9i quay lại"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i ẩm k\xe9o d\xe0i hoặc nặng hơn",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 khu vực trần"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "intermittent-smell",
            area: "general",
            category: "smell",
            label: "M\xf9i thoảng qua rồi hết",
            icon: "\uD83D\uDCA8",
            description: "Ngửi thấy m\xf9i trong chốc l\xe1t rồi tự hết",
            checklist: [{
                id: "qc-short-time",
                text: "M\xf9i chỉ k\xe9o d\xe0i trong thời gian ngắn?"
            }, {
                id: "qc-not-repeat",
                text: "Kh\xf4ng lặp lại thường xuy\xean?"
            }, {
                id: "qc-no-physical-sign",
                text: "Kh\xf4ng thấy dấu hiệu nước, kh\xf3i hay r\xe1c?"
            }, {
                id: "qc-after-open-close",
                text: "Xảy ra sau khi mở hoặc đ\xf3ng cửa?"
            }],
            diagnosis: {
                evaluate: t => t["qc-short-time"] && t["qc-not-repeat"] ? {
                    level: "green",
                    title: "M\xf9i tho\xe1ng qua",
                    message: "Một số m\xf9i c\xf3 thể xuất hiện ngắn hạn rồi tự hết.",
                    recommendedTrialIds: ["trial-ventilate", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "M\xf9i cần theo d\xf5i",
                    message: "Nếu m\xf9i quay lại, n\xean quan s\xe1t th\xeam.",
                    recommendedTrialIds: ["trial-observe", "trial-note-context"]
                }
            },
            trials: [{
                id: "trial-ventilate",
                title: "Th\xf4ng gi\xf3 nhanh",
                when: "Nếu m\xf9i xuất hiện bất chợt",
                steps: ["Mở cửa sổ hoặc cửa ra v\xe0o", "Cho m\xf9i tho\xe1t ra ngo\xe0i", "Ngửi lại sau \xedt ph\xfat"]
            }, {
                id: "trial-note-context",
                title: "Ghi nhận ho\xe0n cảnh xảy ra m\xf9i",
                when: "Nếu m\xf9i quay lại",
                steps: ["Ghi nhận vừa l\xe0m g\xec trước đ\xf3", "Xem c\xf3 li\xean quan mở cửa, nấu ăn hay thời tiết", "So s\xe1nh giữa c\xe1c lần"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu m\xf9i đ\xe3 hết",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "Chỉ thử th\xeam nếu m\xf9i xuất hiện lại", "Kh\xf4ng suy đo\xe1n qu\xe1 mức"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i lặp lại nhiều lần hoặc nặng hơn",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 m\xf9i v\xe0 tần suất"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "low-frequency-hum",
            area: "general",
            category: "sound",
            label: "Nghe tiếng \xf9 nền trong ph\xf2ng",
            icon: "〰️",
            description: "Nghe tiếng \xf9 nhẹ k\xe9o d\xe0i, kh\xf4ng r\xf5 nguồn",
            checklist: [{
                id: "qc-constant",
                text: "Tiếng \xf9 k\xe9o d\xe0i li\xean tục?"
            }, {
                id: "qc-night-clear",
                text: "Nghe r\xf5 hơn v\xe0o ban đ\xeam?"
            }, {
                id: "qc-no-device",
                text: "Kh\xf4ng c\xf3 thiết bị n\xe0o đang chạy?"
            }, {
                id: "qc-low_volume",
                text: "Tiếng nhỏ nhưng g\xe2y kh\xf3 chịu?"
            }],
            diagnosis: {
                evaluate: t => t["qc-low_volume"] && t["qc-night-clear"] ? {
                    level: "green",
                    title: "Tiếng nền m\xf4i trường",
                    message: "Một số tiếng nền chỉ r\xf5 khi kh\xf4ng gian y\xean tĩnh.",
                    recommendedTrialIds: ["trial-change-position", "trial-observe"]
                } : {
                    level: "yellow",
                    title: "Tiếng \xf9 cần theo d\xf5i",
                    message: "Nếu tiếng ảnh hưởng sinh hoạt, n\xean quan s\xe1t th\xeam.",
                    recommendedTrialIds: ["trial-change-position", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-change-position",
                title: "Thử đổi vị tr\xed",
                when: "Nếu nghe tiếng \xf9",
                steps: ["Di chuyển sang ph\xf2ng kh\xe1c", "Nghe xem tiếng c\xf3 c\xf2n kh\xf4ng", "So s\xe1nh mức độ"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu tiếng kh\xf4ng r\xf5 nguồn",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "So s\xe1nh giữa c\xe1c thời điểm", "Chỉ thử th\xeam nếu tiếng to hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu tiếng \xf9 k\xe9o d\xe0i g\xe2y kh\xf3 chịu",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 tiếng nghe được"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "night-house-noise",
            area: "general",
            category: "sound",
            label: "Nh\xe0 ph\xe1t tiếng k\xeau ban đ\xeam",
            icon: "\uD83C\uDF19",
            description: "Ban đ\xeam y\xean tĩnh nghe thấy tiếng k\xeau lạ trong nh\xe0",
            checklist: [{
                id: "qc-night-only",
                text: "Chỉ nghe tiếng v\xe0o ban đ\xeam?"
            }, {
                id: "qc-day-silent",
                text: "Ban ng\xe0y hầu như kh\xf4ng nghe?"
            }, {
                id: "qc-no-movement",
                text: "Kh\xf4ng c\xf3 ai di chuyển l\xfac nghe tiếng?"
            }, {
                id: "qc-intermittent",
                text: "Tiếng l\xfac c\xf3 l\xfac kh\xf4ng?"
            }],
            diagnosis: {
                evaluate: t => t["qc-night-only"] && t["qc-intermittent"] ? {
                    level: "green",
                    title: "Tiếng nh\xe0 gi\xe3n nở",
                    message: "Khi y\xean tĩnh, tiếng nhỏ trong nh\xe0 dễ được nghe r\xf5.",
                    recommendedTrialIds: ["trial-observe-pattern", "trial-stay-calm"]
                } : {
                    level: "yellow",
                    title: "Tiếng chưa r\xf5 nguồn",
                    message: "Nếu tiếng lặp lại nhiều, n\xean theo d\xf5i th\xeam.",
                    recommendedTrialIds: ["trial-observe-pattern", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-observe-pattern",
                title: "Quan s\xe1t quy luật tiếng",
                when: "Nếu tiếng kh\xf4ng thường xuy\xean",
                steps: ["Ghi nhận giờ nghe tiếng", "So s\xe1nh giữa c\xe1c đ\xeam", "Xem tiếng c\xf3 lặp theo giờ kh\xf4ng"]
            }, {
                id: "trial-stay-calm",
                title: "Giữ b\xecnh tĩnh",
                when: "Nếu tiếng nhỏ v\xe0 kh\xf4ng li\xean tục",
                steps: ["Kh\xf4ng suy đo\xe1n qu\xe1 mức", "Nghe lại trong c\xe1c đ\xeam sau", "Chỉ h\xe0nh động nếu tiếng lớn hơn"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu chưa y\xean t\xe2m",
                steps: ["Quan s\xe1t trong v\xe0i ng\xe0y", "Ghi nhận tần suất", "Chỉ thử th\xeam nếu c\xf3 thay đổi"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu tiếng lớn, li\xean tục hoặc k\xe8m rung",
                steps: ["Ngưng tự suy đo\xe1n", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 loại tiếng v\xe0 thời điểm"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "time-based-smell",
            area: "general",
            category: "smell",
            label: "M\xf9i xuất hiện theo thời điểm",
            icon: "⏰",
            description: "Chỉ ngửi thấy m\xf9i v\xe0o một số thời điểm nhất định trong ng\xe0y",
            checklist: [{
                id: "qc-morning-night",
                text: "M\xf9i r\xf5 hơn v\xe0o s\xe1ng sớm hoặc ban đ\xeam?"
            }, {
                id: "qc-closed-space",
                text: "Xảy ra khi nh\xe0 hoặc ph\xf2ng đ\xf3ng k\xedn?"
            }, {
                id: "qc-after-weather",
                text: "M\xf9i r\xf5 hơn sau mưa hoặc trời ẩm?"
            }, {
                id: "qc-not-constant",
                text: "Ban ng\xe0y hoặc l\xfac th\xf4ng tho\xe1ng th\xec kh\xf4ng thấy m\xf9i?"
            }],
            diagnosis: {
                evaluate: t => t["qc-not-constant"] && t["qc-closed-space"] ? {
                    level: "green",
                    title: "M\xf9i theo điều kiện m\xf4i trường",
                    message: "Kh\xf4ng kh\xed t\xf9 đọng c\xf3 thể l\xe0m m\xf9i r\xf5 hơn.",
                    recommendedTrialIds: ["trial-ventilate", "trial-adjust-habits"]
                } : {
                    level: "yellow",
                    title: "M\xf9i lặp theo thời điểm",
                    message: "N\xean theo d\xf5i để nhận ra quy luật.",
                    recommendedTrialIds: ["trial-observe-pattern", "trial-ventilate"]
                }
            },
            trials: [{
                id: "trial-ventilate",
                title: "Th\xf4ng gi\xf3 v\xe0o thời điểm c\xf3 m\xf9i",
                when: "Nếu m\xf9i xuất hiện khi ph\xf2ng k\xedn",
                steps: ["Mở cửa sổ hoặc cửa ph\xf2ng", "Cho kh\xf4ng kh\xed lưu th\xf4ng", "Ngửi lại sau v\xe0i ph\xfat"]
            }, {
                id: "trial-adjust-habits",
                title: "Điều chỉnh th\xf3i quen sử dụng ph\xf2ng",
                when: "Nếu m\xf9i theo giờ cố định",
                steps: ["Tr\xe1nh đ\xf3ng k\xedn qu\xe1 l\xe2u", "Th\xf4ng gi\xf3 trước giờ hay c\xf3 m\xf9i", "Theo d\xf5i thay đổi"]
            }, {
                id: "trial-observe-pattern",
                title: "Ghi nhận quy luật m\xf9i",
                when: "Nếu m\xf9i lặp lại",
                steps: ["Ghi lại giờ xuất hiện m\xf9i", "So s\xe1nh với thời tiết", "Nhận diện điều kiện g\xe2y m\xf9i"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i ng\xe0y c\xe0ng r\xf5 hoặc k\xe9o d\xe0i",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 thời điểm v\xe0 m\xf9i"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "unknown-house-smell",
            area: "general",
            category: "smell",
            label: "Nh\xe0 c\xf3 m\xf9i lạ, kh\xf4ng r\xf5 từ đ\xe2u",
            icon: "❓",
            description: "Ngửi thấy m\xf9i lạ trong nh\xe0 nhưng kh\xf4ng x\xe1c định được nguồn",
            checklist: [{
                id: "qc-no-clear-source",
                text: "Kh\xf4ng x\xe1c định được m\xf9i từ bếp, cống hay ph\xf2ng cụ thể?"
            }, {
                id: "qc-comes-and-goes",
                text: "M\xf9i l\xfac c\xf3 l\xfac kh\xf4ng?"
            }, {
                id: "qc-not-strong",
                text: "M\xf9i kh\xf4ng nồng, chỉ thoang thoảng?"
            }, {
                id: "qc-recent",
                text: "M\xf9i mới xuất hiện gần đ\xe2y?"
            }],
            diagnosis: {
                evaluate: t => t["qc-not-strong"] && t["qc-comes-and-goes"] ? {
                    level: "green",
                    title: "M\xf9i tho\xe1ng qua",
                    message: "Một số m\xf9i trong nh\xe0 c\xf3 thể xuất hiện tạm thời.",
                    recommendedTrialIds: ["trial-ventilate", "trial-isolate-area"]
                } : {
                    level: "yellow",
                    title: "M\xf9i chưa r\xf5 nguồn",
                    message: "N\xean thử khoanh v\xf9ng để x\xe1c định m\xf9i.",
                    recommendedTrialIds: ["trial-isolate-area", "trial-observe"]
                }
            },
            trials: [{
                id: "trial-ventilate",
                title: "Th\xf4ng gi\xf3 to\xe0n nh\xe0",
                when: "Nếu m\xf9i nhẹ v\xe0 kh\xf4ng r\xf5 nguồn",
                steps: ["Mở cửa sổ hoặc cửa ra v\xe0o", "Cho kh\xf4ng kh\xed lưu th\xf4ng", "Ngửi lại sau một thời gian"]
            }, {
                id: "trial-isolate-area",
                title: "Khoanh v\xf9ng khu vực c\xf3 m\xf9i",
                when: "Nếu m\xf9i quay lại",
                steps: ["Đ\xf3ng/mở từng khu vực", "Ngửi v\xe0 so s\xe1nh m\xf9i", "X\xe1c định khu vực m\xf9i r\xf5 hơn"]
            }, {
                id: "trial-observe",
                title: "Theo d\xf5i th\xeam",
                when: "Nếu chưa x\xe1c định được",
                steps: ["Ghi nhận thời điểm xuất hiện m\xf9i", "So s\xe1nh giữa c\xe1c ng\xe0y", "Chỉ thử th\xeam nếu m\xf9i nặng hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu m\xf9i r\xf5, k\xe9o d\xe0i hoặc g\xe2y kh\xf3 chịu",
                steps: ["Ngưng tự suy đo\xe1n th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 m\xf9i v\xe0 thời điểm"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "vibration-from-outside",
            area: "general",
            category: "sound",
            label: "Nh\xe0 rung nhẹ khi c\xf3 xe lớn chạy qua",
            icon: "\uD83D\uDE9A",
            description: "Khi xe lớn chạy qua th\xec cảm thấy rung hoặc nghe tiếng rung",
            checklist: [{
                id: "qc-only-traffic",
                text: "Chỉ rung khi c\xf3 xe lớn chạy qua?"
            }, {
                id: "qc-short-time",
                text: "Rung trong thời gian ngắn rồi hết?"
            }, {
                id: "qc-no-damage",
                text: "Kh\xf4ng thấy nứt hay hư hại r\xf5?"
            }, {
                id: "qc-near-road",
                text: "Nh\xe0 gần đường lớn?"
            }],
            diagnosis: {
                evaluate: t => t["qc-only-traffic"] && t["qc-short-time"] ? {
                    level: "green",
                    title: "Rung do t\xe1c động b\xean ngo\xe0i",
                    message: "Xe lớn c\xf3 thể g\xe2y rung nhẹ cho nh\xe0 gần đường.",
                    recommendedTrialIds: ["trial-observe", "trial-stay-calm"]
                } : {
                    level: "yellow",
                    title: "Rung cần theo d\xf5i",
                    message: "Nếu rung mạnh hơn, n\xean quan s\xe1t th\xeam.",
                    recommendedTrialIds: ["trial-observe", "trial-note-frequency"]
                }
            },
            trials: [{
                id: "trial-observe",
                title: "Theo d\xf5i mức rung",
                when: "Nếu rung nhẹ",
                steps: ["Quan s\xe1t khi xe lớn đi qua", "So s\xe1nh mức rung giữa c\xe1c lần", "Ghi nhận thời gian rung"]
            }, {
                id: "trial-note-frequency",
                title: "Ghi nhận tần suất",
                when: "Nếu rung xảy ra thường xuy\xean",
                steps: ["Ghi lại số lần rung trong ng\xe0y", "So s\xe1nh với thời điểm giao th\xf4ng", "Theo d\xf5i thay đổi"]
            }, {
                id: "trial-stay-calm",
                title: "Giữ b\xecnh tĩnh",
                when: "Nếu rung nhẹ",
                steps: ["Kh\xf4ng suy đo\xe1n hư hại ngay", "Theo d\xf5i th\xeam", "Chỉ h\xe0nh động nếu rung mạnh hơn"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu rung mạnh hoặc k\xe8m nứt",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 mức rung"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }, {
            id: "water-running-sound",
            area: "general",
            category: "sound",
            label: "Nghe tiếng nước chảy d\xf9 kh\xf4ng d\xf9ng",
            icon: "\uD83D\uDCA7",
            description: "Kh\xf4ng mở v\xf2i nhưng vẫn nghe tiếng nước chảy hoặc r\xf3c r\xe1ch",
            checklist: [{
                id: "qc-no-faucet-use",
                text: "Kh\xf4ng c\xf3 ai đang d\xf9ng nước?"
            }, {
                id: "qc-quiet-time",
                text: "Nghe r\xf5 hơn khi nh\xe0 y\xean tĩnh?"
            }, {
                id: "qc-intermittent",
                text: "Tiếng kh\xf4ng li\xean tục?"
            }, {
                id: "qc-no-visible-leak",
                text: "Kh\xf4ng thấy nước r\xf2 rỉ r\xf5?"
            }],
            diagnosis: {
                evaluate: t => t["qc-intermittent"] && t["qc-no-visible-leak"] ? {
                    level: "green",
                    title: "Tiếng nước trong ống",
                    message: "Khi y\xean tĩnh, tiếng nước trong ống dễ nghe hơn.",
                    recommendedTrialIds: ["trial-observe-pattern", "trial-stay-calm"]
                } : {
                    level: "yellow",
                    title: "Tiếng nước cần theo d\xf5i",
                    message: "Nếu tiếng lặp lại thường xuy\xean, n\xean quan s\xe1t kỹ.",
                    recommendedTrialIds: ["trial-observe-pattern", "trial-check-usage"]
                }
            },
            trials: [{
                id: "trial-observe-pattern",
                title: "Quan s\xe1t thời điểm c\xf3 tiếng",
                when: "Nếu tiếng kh\xf4ng li\xean tục",
                steps: ["Ghi nhận giờ nghe tiếng", "So s\xe1nh với giờ d\xf9ng nước trong nh\xe0", "Xem tiếng c\xf3 lặp lại theo khung giờ kh\xf4ng"]
            }, {
                id: "trial-check-usage",
                title: "Kiểm tra việc d\xf9ng nước",
                when: "Nếu tiếng xảy ra thường xuy\xean",
                steps: ["Xem c\xf3 ai d\xf9ng nước ở tầng kh\xe1c kh\xf4ng", "Kiểm tra thiết bị d\xf9ng nước tự động", "So s\xe1nh trước v\xe0 sau"]
            }, {
                id: "trial-stay-calm",
                title: "Giữ b\xecnh tĩnh",
                when: "Nếu tiếng nhỏ",
                steps: ["Kh\xf4ng suy đo\xe1n r\xf2 rỉ ngay", "Theo d\xf5i th\xeam", "Chỉ h\xe0nh động nếu c\xf3 dấu hiệu r\xf5"]
            }, {
                id: "trial-stop",
                title: "Dừng v\xe0 nhờ hỗ trợ",
                when: "Nếu tiếng lớn, li\xean tục hoặc k\xe8m nước r\xf2",
                steps: ["Ngưng tự xử th\xeam", "D\xf9ng chức năng Nhờ hỗ trợ", "M\xf4 tả r\xf5 vị tr\xed nghe tiếng"]
            }],
            meta: {
                allowSkipChecklist: !0,
                createdBy: "ai",
                version: 1
            }
        }]
          , l = t => c.find(n => n.id === t)
          , a = t => c.filter(n => n.area === t)
          , r = t => c.filter(n => n.category === t)
          , g = (t, n) => c.filter(i => i.area === t && i.category === n)
          , s = c
    }
}]);
