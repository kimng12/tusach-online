// Comprehensive Product Data for Tủ Sách Online
const productsData = {
    // Văn học Việt Nam
    1: {
        id: 1,
        title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
        author: "Nguyễn Nhật Ánh",
        price: "85.000₫",
        originalPrice: 85000,
        category: "van-hoc-viet-nam",
        categoryName: "Văn học Việt Nam",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
        rating: 4.9,
        reviewCount: 1240,
        description: "Câu chuyện tuổi thơ trong trẻo, đượm buồn của hai anh em Thiều – Tường giữa làng quê yên bình.",
        features: [
            "Ngôn từ mộc mạc, giàu cảm xúc",
            "Tác phẩm nổi tiếng được chuyển thể thành phim",
            "Phù hợp với mọi lứa tuổi"
        ],
        inStock: true,
        bestseller: true
    },
    2: {
        id: 2,
        title: "Cánh Đồng Bất Tận",
        author: "Nguyễn Ngọc Tư",
        price: "72.000₫",
        originalPrice: 72000,
        category: "van-hoc-viet-nam",
        categoryName: "Văn học Việt Nam",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        rating: 4.8,
        reviewCount: 890,
        description: "Tập truyện ngắn phản ánh những góc khuất của con người miền Tây Nam Bộ.",
        features: [
            "Giọng văn chân thật, giản dị",
            "Thấm đẫm tình người và nỗi xót xa",
            "Được dịch và xuất bản tại nhiều quốc gia"
        ],
        inStock: true,
        bestseller: false
    },
    3: {
        id: 3,
        title: "Chí Phèo",
        author: "Nam Cao",
        price: "58.000₫",
        originalPrice: 58000,
        category: "van-hoc-viet-nam",
        categoryName: "Văn học Việt Nam",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
        rating: 4.7,
        reviewCount: 2100,
        description: "Tác phẩm kinh điển về bi kịch của con người trong xã hội phong kiến.",
        features: [
            "Giá trị hiện thực và nhân đạo sâu sắc",
            "Văn học Việt Nam hiện đại tiêu biểu",
            "Phù hợp cho học sinh, sinh viên"
        ],
        inStock: true,
        bestseller: true
    },

    // Văn học nước ngoài
    4: {
        id: 4,
        title: "Nhà Giả Kim",
        author: "Paulo Coelho",
        price: "89.000₫",
        originalPrice: 89000,
        category: "van-hoc-nuoc-ngoai",
        categoryName: "Văn học nước ngoài",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
        rating: 4.9,
        reviewCount: 3200,
        description: "Hành trình đi tìm ước mơ của cậu bé chăn cừu Santiago, đầy triết lý và cảm hứng.",
        features: [
            "Truyền cảm hứng mạnh mẽ",
            "Ngôn ngữ nhẹ nhàng, dễ hiểu",
            "Sách bán chạy hàng đầu thế giới"
        ],
        inStock: true,
        bestseller: true
    },
    5: {
        id: 5,
        title: "Hoàng Tử Bé",
        author: "Antoine de Saint-Exupéry",
        price: "65.000₫",
        originalPrice: 65000,
        category: "van-hoc-nuoc-ngoai",
        categoryName: "Văn học nước ngoài",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
        rating: 4.8,
        reviewCount: 1800,
        description: "Câu chuyện triết lý về tình yêu, cô đơn và sự trong sáng của tâm hồn con người.",
        features: [
            "Ngắn gọn, dễ đọc",
            "Ý nghĩa sâu sắc về nhân sinh",
            "Dành cho cả trẻ em và người lớn"
        ],
        inStock: true,
        bestseller: false
    },
    6: {
        id: 6,
        title: "Chuông Nguyện Hồn Ai",
        author: "Ernest Hemingway",
        price: "110.000₫",
        originalPrice: 110000,
        category: "van-hoc-nuoc-ngoai",
        categoryName: "Văn học nước ngoài",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        rating: 4.6,
        reviewCount: 950,
        description: "Bức tranh bi tráng về chiến tranh và tình yêu con người trong thời khắc tàn khốc.",
        features: [
            "Tác phẩm văn học kinh điển",
            "Văn phong mạnh mẽ, cảm xúc chân thực",
            "Phản ánh sâu sắc giá trị nhân đạo"
        ],
        inStock: true,
        bestseller: false
    },

    // Kinh tế - Quản trị
    7: {
        id: 7,
        title: "Từ Tốt Đến Vĩ Đại",
        author: "Jim Collins",
        price: "139.000₫",
        originalPrice: 139000,
        category: "kinh-te-quan-tri",
        categoryName: "Kinh tế - Quản trị",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
        rating: 4.8,
        reviewCount: 1500,
        description: "Phân tích cách các doanh nghiệp xuất sắc đạt được thành công lâu dài.",
        features: [
            "Dựa trên nghiên cứu thực tế",
            "Nội dung mang tính ứng dụng cao",
            "Sách gối đầu giường cho nhà quản trị"
        ],
        inStock: true,
        bestseller: true
    },
    8: {
        id: 8,
        title: "Khởi Nghiệp Tinh Gọn",
        author: "Eric Ries",
        price: "130.000₫",
        originalPrice: 130000,
        category: "kinh-te-quan-tri",
        categoryName: "Kinh tế - Quản trị",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
        rating: 4.9,
        reviewCount: 2200,
        description: "Hướng dẫn cách xây dựng doanh nghiệp hiệu quả, giảm rủi ro và tối ưu chi phí.",
        features: [
            "Mô hình Lean Startup hiện đại",
            "Thực tiễn, dễ áp dụng",
            "Được giới startup toàn cầu ưa chuộng"
        ],
        inStock: true,
        bestseller: true
    },
    9: {
        id: 9,
        title: "Cha Giàu Cha Nghèo",
        author: "Robert Kiyosaki",
        price: "99.000₫",
        originalPrice: 99000,
        category: "kinh-te-quan-tri",
        categoryName: "Kinh tế - Quản trị",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
        rating: 4.8,
        reviewCount: 5000,
        description: "So sánh tư duy tài chính giữa hai người cha để giúp người đọc hiểu về tự do tài chính.",
        features: [
            "Ngôn ngữ đơn giản, dễ hiểu",
            "Thay đổi tư duy về tiền bạc",
            "Bán chạy toàn cầu hơn 30 năm qua"
        ],
        inStock: true,
        bestseller: true
    },

    // Kỹ năng sống & Phát triển bản thân
    10: {
        id: 10,
        title: "Đắc Nhân Tâm",
        author: "Dale Carnegie",
        price: "89.000₫",
        originalPrice: 89000,
        category: "ky-nang-song",
        categoryName: "Kỹ năng sống & Phát triển bản thân",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        rating: 4.9,
        reviewCount: 5000,
        description: "Cuốn sách kinh điển giúp bạn thấu hiểu tâm lý con người, nghệ thuật giao tiếp và tạo ảnh hưởng tích cực trong mọi mối quan hệ.",
        features: [
            "Bản dịch chuẩn, ngôn ngữ dễ hiểu",
            "Bài học thực tế, ứng dụng cao",
            "Sách bán chạy nhất mọi thời đại"
        ],
        inStock: true,
        bestseller: true
    },
    11: {
        id: 11,
        title: "7 Thói Quen Hiệu Quả",
        author: "Stephen R. Covey",
        price: "115.000₫",
        originalPrice: 115000,
        category: "ky-nang-song",
        categoryName: "Kỹ năng sống & Phát triển bản thân",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
        rating: 4.8,
        reviewCount: 2800,
        description: "Giúp người đọc hình thành thói quen tích cực, nâng cao hiệu quả cá nhân và công việc.",
        features: [
            "Cấu trúc rõ ràng, dễ thực hành",
            "Áp dụng cho cá nhân và tổ chức",
            "Được giới lãnh đạo toàn cầu khuyên đọc"
        ],
        inStock: true,
        bestseller: true
    },
    12: {
        id: 12,
        title: "Tôi Tài Giỏi, Bạn Cũng Thế!",
        author: "Adam Khoo",
        price: "95.000₫",
        originalPrice: 95000,
        category: "ky-nang-song",
        categoryName: "Kỹ năng sống & Phát triển bản thân",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
        rating: 4.7,
        reviewCount: 1600,
        description: "Truyền cảm hứng học tập và khơi dậy tiềm năng trong mỗi người trẻ.",
        features: [
            "Câu chuyện thật của tác giả",
            "Động lực mạnh mẽ cho giới trẻ",
            "Hướng dẫn kỹ năng học và tư duy tích cực"
        ],
        inStock: true,
        bestseller: false
    },

    // Tâm lý - Tình cảm
    13: {
        id: 13,
        title: "Đàn Ông Sao Hỏa, Đàn Bà Sao Kim",
        author: "John Gray",
        price: "99.000₫",
        originalPrice: 99000,
        category: "tam-ly-tinh-cam",
        categoryName: "Tâm lý - Tình cảm",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
        rating: 4.7,
        reviewCount: 1900,
        description: "Giúp bạn hiểu rõ sự khác biệt giữa nam và nữ trong tình yêu và giao tiếp.",
        features: [
            "Cẩm nang hôn nhân nổi tiếng",
            "Ngôn ngữ dễ hiểu, thực tế",
            "Được dịch ra hơn 40 ngôn ngữ"
        ],
        inStock: true,
        bestseller: false
    },
    14: {
        id: 14,
        title: "Yêu Những Điều Không Hoàn Hảo",
        author: "Haemin Sunim",
        price: "110.000₫",
        originalPrice: 110000,
        category: "tam-ly-tinh-cam",
        categoryName: "Tâm lý - Tình cảm",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        rating: 4.9,
        reviewCount: 1200,
        description: "Lời nhắn nhủ dịu dàng về cách yêu bản thân và chấp nhận những thiếu sót của cuộc sống.",
        features: [
            "Giọng văn nhẹ nhàng, sâu sắc",
            "Hình minh họa tinh tế",
            "Dành cho người đang tìm bình an nội tâm"
        ],
        inStock: true,
        bestseller: true
    },
    15: {
        id: 15,
        title: "Tâm Lý Học Về Tiền",
        author: "Morgan Housel",
        price: "125.000₫",
        originalPrice: 125000,
        category: "tam-ly-tinh-cam",
        categoryName: "Tâm lý - Tình cảm",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
        rating: 4.8,
        reviewCount: 800,
        description: "Khám phá mối quan hệ giữa cảm xúc, hành vi và tài chính trong cuộc sống hiện đại.",
        features: [
            "Cách nhìn mới về tiền bạc",
            "Kết hợp giữa tâm lý và kinh tế học",
            "Được giới tài chính đánh giá cao"
        ],
        inStock: true,
        bestseller: false
    },

    // Lịch sử - Văn hóa
    16: {
        id: 16,
        title: "Lược Sử Loài Người",
        author: "Yuval Noah Harari",
        price: "179.000₫",
        originalPrice: 179000,
        category: "lich-su-van-hoa",
        categoryName: "Lịch sử - Văn hóa",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
        rating: 4.9,
        reviewCount: 3500,
        description: "Hành trình tiến hóa của nhân loại từ thuở sơ khai đến hiện đại, qua góc nhìn lịch sử và triết học.",
        features: [
            "Kiến thức phong phú, tư duy sâu rộng",
            "Ngôn ngữ dễ hiểu",
            "Sách bán chạy tại hơn 60 quốc gia"
        ],
        inStock: true,
        bestseller: true
    },
    17: {
        id: 17,
        title: "Việt Nam Sử Lược",
        author: "Trần Trọng Kim",
        price: "95.000₫",
        originalPrice: 95000,
        category: "lich-su-van-hoa",
        categoryName: "Lịch sử - Văn hóa",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
        rating: 4.7,
        reviewCount: 1100,
        description: "Tác phẩm sử học đầu tiên của Việt Nam viết bằng chữ Quốc ngữ, trình bày hệ thống lịch sử dân tộc.",
        features: [
            "Ngắn gọn, súc tích",
            "Phù hợp người yêu lịch sử",
            "Tài liệu tham khảo đáng tin cậy"
        ],
        inStock: true,
        bestseller: false
    },
    18: {
        id: 18,
        title: "Lược Sử Thời Gian",
        author: "Stephen Hawking",
        price: "140.000₫",
        originalPrice: 140000,
        category: "lich-su-van-hoa",
        categoryName: "Lịch sử - Văn hóa",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        rating: 4.8,
        reviewCount: 1800,
        description: "Tác phẩm nổi tiếng về vũ trụ học, giải thích nguồn gốc và bản chất của thời gian, không gian.",
        features: [
            "Dễ hiểu cho người mới học vật lý",
            "Viết bởi nhà khoa học thiên tài",
            "Sách khoa học bán chạy nhất mọi thời đại"
        ],
        inStock: true,
        bestseller: true
    },

    // Khoa học - Công nghệ
    19: {
        id: 19,
        title: "Vũ Trụ Trong Vỏ Hạt Dẻ",
        author: "Stephen Hawking",
        price: "175.000₫",
        originalPrice: 175000,
        category: "khoa-hoc-cong-nghe",
        categoryName: "Khoa học - Công nghệ",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
        rating: 4.9,
        reviewCount: 900,
        description: "Cuốn sách giải thích những khái niệm vật lý vũ trụ học phức tạp như thuyết tương đối, lỗ đen, không-thời gian… bằng ngôn ngữ sinh động, dễ hiểu.",
        features: [
            "Kiến thức khoa học hiện đại được trình bày trực quan",
            "Có nhiều hình minh họa giúp dễ tiếp cận"
        ],
        inStock: true,
        bestseller: false
    },
    20: {
        id: 20,
        title: "Cỗ Máy Tri Giác",
        author: "Jeff Hawkins",
        price: "160.000₫",
        originalPrice: 160000,
        category: "khoa-hoc-cong-nghe",
        categoryName: "Khoa học - Công nghệ",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
        rating: 4.6,
        reviewCount: 600,
        description: "Giải mã cơ chế hoạt động của não người để phát triển trí tuệ nhân tạo thế hệ mới.",
        features: [
            "Kết hợp giữa khoa học thần kinh và AI",
            "Cung cấp góc nhìn khác biệt về trí thông minh nhân tạo",
            "Dễ hiểu cho người yêu công nghệ và tâm lý học"
        ],
        inStock: true,
        bestseller: false
    },
    21: {
        id: 21,
        title: "Tư Duy Nhanh Và Chậm",
        author: "Daniel Kahneman",
        price: "189.000₫",
        originalPrice: 189000,
        category: "khoa-hoc-cong-nghe",
        categoryName: "Khoa học - Công nghệ",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
        rating: 4.7,
        reviewCount: 2500,
        description: "Giải thích cách bộ não con người ra quyết định, kết hợp giữa tâm lý học và khoa học hành vi.",
        features: [
            "Do nhà kinh tế học đạt giải Nobel viết",
            "Giúp hiểu rõ hơn về tư duy logic và cảm xúc",
            "Phù hợp cho cả độc giả yêu công nghệ, kinh tế và phát triển bản thân"
        ],
        inStock: true,
        bestseller: true
    },

    // Thiếu nhi
    22: {
        id: 22,
        title: "Những Câu Chuyện Cổ Tích Việt Nam",
        author: "Nhiều tác giả",
        price: "49.000₫",
        originalPrice: 49000,
        category: "thieu-nhi",
        categoryName: "Thiếu nhi",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        rating: 4.7,
        reviewCount: 800,
        description: "Tuyển tập các truyện cổ tích quen thuộc như Tấm Cám, Thạch Sanh, Cây Tre Trăm Đốt.",
        features: [
            "Minh họa màu sắc sinh động",
            "Truyền tải bài học đạo đức",
            "Phù hợp làm quà cho trẻ nhỏ"
        ],
        inStock: true,
        bestseller: false
    },
    23: {
        id: 23,
        title: "Harry Potter Và Hòn Đá Phù Thủy",
        author: "J.K. Rowling",
        price: "120.000₫",
        originalPrice: 120000,
        category: "thieu-nhi",
        categoryName: "Thiếu nhi",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
        rating: 5.0,
        reviewCount: 4500,
        description: "Phần mở đầu hành trình huyền thoại của cậu bé phù thủy Harry Potter.",
        features: [
            "Thế giới phép thuật kỳ ảo, hấp dẫn",
            "Phù hợp cho trẻ em và người lớn yêu văn học tưởng tượng",
            "Sách bán chạy nhất mọi thời đại"
        ],
        inStock: true,
        bestseller: true
    },
    24: {
        id: 24,
        title: "Chú Bé Mang Pyjama Sọc",
        author: "John Boyne",
        price: "95.000₫",
        originalPrice: 95000,
        category: "thieu-nhi",
        categoryName: "Thiếu nhi",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
        rating: 4.8,
        reviewCount: 1200,
        description: "Câu chuyện cảm động về tình bạn giữa hai cậu bé ở hai thế giới khác nhau trong Thế chiến II.",
        features: [
            "Giàu ý nghĩa nhân văn",
            "Ngắn gọn, sâu sắc",
            "Gợi suy ngẫm về hòa bình và tình người"
        ],
        inStock: true,
        bestseller: false
    },

    // Giáo dục - Học tập
    25: {
        id: 25,
        title: "Đọc Sách Như Một Nghệ Thuật",
        author: "Mortimer Adler",
        price: "110.000₫",
        originalPrice: 110000,
        category: "giao-duc-hoc-tap",
        categoryName: "Giáo dục - Học tập",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
        rating: 4.8,
        reviewCount: 700,
        description: "Hướng dẫn cách đọc sâu, hiểu đúng và ghi nhớ lâu các tác phẩm.",
        features: [
            "Rèn luyện tư duy phản biện",
            "Dành cho người yêu tri thức",
            "Sách kinh điển về kỹ năng đọc hiểu"
        ],
        inStock: true,
        bestseller: false
    },
    26: {
        id: 26,
        title: "Deep Work",
        author: "Cal Newport",
        price: "145.000₫",
        originalPrice: 145000,
        category: "giao-duc-hoc-tap",
        categoryName: "Giáo dục - Học tập",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        rating: 4.9,
        reviewCount: 1300,
        description: "Hướng dẫn cách tập trung sâu để học và làm việc hiệu quả trong thời đại xao nhãng.",
        features: [
            "Dựa trên nghiên cứu khoa học về năng suất trí tuệ",
            "Giúp rèn luyện khả năng tập trung và tư duy sâu",
            "Phù hợp với học sinh, sinh viên, người làm tri thức"
        ],
        inStock: true,
        bestseller: true
    },
    27: {
        id: 27,
        title: "Làm Chủ Tư Duy, Thay Đổi Vận Mệnh",
        author: "Adam Khoo",
        price: "98.000₫",
        originalPrice: 98000,
        category: "giao-duc-hoc-tap",
        categoryName: "Giáo dục - Học tập",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
        rating: 4.7,
        reviewCount: 900,
        description: "Truyền cảm hứng học tập, phát triển bản thân và vươn tới thành công.",
        features: [
            "Dễ hiểu, truyền động lực mạnh mẽ",
            "Kết hợp giữa lý thuyết và thực hành",
            "Đặc biệt phù hợp với học sinh, sinh viên"
        ],
        inStock: true,
        bestseller: false
    },

    // Sách ngoại ngữ
    28: {
        id: 28,
        title: "English Grammar In Use",
        author: "Raymond Murphy",
        price: "180.000₫",
        originalPrice: 180000,
        category: "ngoai-ngu",
        categoryName: "Sách ngoại ngữ",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
        rating: 5.0,
        reviewCount: 2000,
        description: "Bộ sách ngữ pháp tiếng Anh nổi tiếng với ví dụ rõ ràng và bài tập thực hành.",
        features: [
            "Dễ học, dễ nhớ",
            "Phù hợp cho mọi trình độ",
            "Được sử dụng rộng rãi toàn cầu"
        ],
        inStock: true,
        bestseller: true
    },
    29: {
        id: 29,
        title: "3000 Từ Vựng Tiếng Anh Thông Dụng Nhất",
        author: "Nhiều tác giả",
        price: "79.000₫",
        originalPrice: 79000,
        category: "ngoai-ngu",
        categoryName: "Sách ngoại ngữ",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
        rating: 4.8,
        reviewCount: 1500,
        description: "Tổng hợp từ vựng tiếng Anh nền tảng kèm ví dụ và hình ảnh minh họa.",
        features: [
            "Dễ học cho người mới bắt đầu",
            "Có bài tập ôn luyện",
            "Hỗ trợ giao tiếp cơ bản"
        ],
        inStock: true,
        bestseller: false
    },
    30: {
        id: 30,
        title: "Minna No Nihongo - Tập 1",
        author: "Nhiều tác giả",
        price: "210.000₫",
        originalPrice: 210000,
        category: "ngoai-ngu",
        categoryName: "Sách ngoại ngữ",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        rating: 4.9,
        reviewCount: 800,
        description: "Giáo trình học tiếng Nhật chuẩn quốc tế, được sử dụng tại các trung tâm Nhật ngữ.",
        features: [
            "Bài học rõ ràng, khoa học",
            "Thích hợp cho người mới bắt đầu",
            "Có bản dịch và giải thích tiếng Việt"
        ],
        inStock: true,
        bestseller: true
    }
};

// Categories data
const categoriesData = {
    "van-hoc-viet-nam": {
        name: "Văn học Việt Nam",
        icon: "📖",
        description: "Những tác phẩm kinh điển của văn học nước nhà"
    },
    "van-hoc-nuoc-ngoai": {
        name: "Văn học nước ngoài",
        icon: "🌍",
        description: "Tác phẩm văn học nổi tiếng thế giới"
    },
    "kinh-te-quan-tri": {
        name: "Kinh tế - Quản trị",
        icon: "💼",
        description: "Sách về kinh doanh và quản lý doanh nghiệp"
    },
    "ky-nang-song": {
        name: "Kỹ năng sống & Phát triển bản thân",
        icon: "🌟",
        description: "Hướng dẫn phát triển bản thân và kỹ năng"
    },
    "tam-ly-tinh-cam": {
        name: "Tâm lý - Tình cảm",
        icon: "💝",
        description: "Hiểu về tâm lý và các mối quan hệ"
    },
    "lich-su-van-hoa": {
        name: "Lịch sử - Văn hóa",
        icon: "🏛️",
        description: "Khám phá lịch sử và văn hóa nhân loại"
    },
    "khoa-hoc-cong-nghe": {
        name: "Khoa học - Công nghệ",
        icon: "🔬",
        description: "Tri thức khoa học và công nghệ hiện đại"
    },
    "thieu-nhi": {
        name: "Thiếu nhi",
        icon: "👶",
        description: "Sách dành cho trẻ em và thanh thiếu niên"
    },
    "giao-duc-hoc-tap": {
        name: "Giáo dục - Học tập",
        icon: "📚",
        description: "Phương pháp học tập và giáo dục"
    },
    "ngoai-ngu": {
        name: "Sách ngoại ngữ",
        icon: "🗣️",
        description: "Học ngoại ngữ hiệu quả"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { productsData, categoriesData };
}
