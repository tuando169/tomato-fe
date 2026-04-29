# Kế hoạch Phát triển Dự án: The Ethereal Gallery

## 1. Tech Stack (Công nghệ sử dụng)
Dự án được xây dựng dựa trên các tiêu chuẩn web hiện đại, tập trung vào trải nghiệm mượt mà và giao diện mang tính thẩm mỹ cao (editorial design):
- **Framework (Frontend):** 
  - **Vue 3** (Composition API) để xây dựng giao diện dưới dạng Single Page Application (SPA).
  - **Vue Router:** Dùng để quản lý định tuyến (routing) giữa các trang.
  - **Pinia:** Dùng làm State Management để lưu trữ và quản lý dữ liệu (từ `data.json`).
- **Cấu trúc (HTML):** Sử dụng HTML5 với các thẻ Semantic (`<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`) kết hợp cú pháp của Vue.
- **Style và Layout (CSS):**
  - **Tailwind CSS:** Tích hợp trực tiếp vào dự án Vue. Thiết lập cấu hình trong `tailwind.config.js` để custom các biến màu sắc (custom colors - mint, sage, seafoam...), typography và các khoảng cách dùng chung cho toàn dự án.
  - **Vanilla CSS:** Tinh chỉnh các hiệu ứng không có sẵn hoặc phức tạp (ẩn thanh cuộn `hide-scrollbar`, tùy chỉnh icon, tạo chiều sâu thị giác).
  - **Glassmorphism:** Sử dụng `backdrop-blur` và background bán trong suốt (ví dụ: `bg-white/40`) cho các thanh điều hướng và nhãn dán.
- **Typography:**
  - **Noto Serif:** Dùng cho các tiêu đề (Heading), mang lại cảm giác cổ điển, nghệ thuật và sang trọng.
  - **Manrope:** Dùng cho nội dung văn bản (Body text, Labels), hiện đại, rõ ràng, tương phản tốt với Noto Serif.
- **Iconography:** Sử dụng bộ thư viện **Material Symbols Outlined** của Google (các icon được tùy chỉnh độ mỏng `wght 300` để phù hợp với sự thanh lịch của thiết kế).
- **Design System Concepts:**
  - **Tonal Architecture:** Không dùng viền (`border`) 1px cứng nhắc mà phân tách các khu vực bằng sự thay đổi độ sáng của màu nền (tonal shift).
  - **Bố cục bất đối xứng (Asymmetric Layout):** Phá vỡ lưới truyền thống, để các hình ảnh và khối text lấn vào nhau, tạo không gian "thở" cho tác phẩm nghệ thuật.
  - **Lưu ý về Spacing (Khoảng cách):** Cần đặc biệt chú ý tinh chỉnh lại các giá trị margin/padding (`m-`, `p-`, `gap-`) khi triển khai code thực tế. Đảm bảo các khoảng trắng (white-space) được phân bổ hợp lý, cân đối và thoáng đãng hơn, do các bản mẫu (prototype) HTML hiện tại có tỷ lệ khoảng cách chưa được chuẩn.

## 2. Mô tả chức năng, giao diện từng trang và chi tiết tương tác

Dự án bao gồm 5 trang chính, mỗi trang được lưu trữ trong một thư mục tương ứng với tệp `code.html`.

### A. Trang Chủ
- **Tệp HTML:** `trang_ch_h_a_s_pastel/code.html`
- **Mô tả chức năng:** Là trang đích (landing page), thu hút người dùng bằng hình ảnh nổi bật, giới thiệu ngắn gọn về triết lý nghệ thuật, trưng bày một số tác phẩm tiêu biểu và kêu gọi đặt vẽ.
- **Chi tiết giao diện và tương tác (Nút bấm & Hình ảnh):**
  - **Thanh điều hướng (Navbar cố định):** 
    - Có hiệu ứng kính mờ (backdrop-blur).
    - Các liên kết văn bản ("Phòng trưng bày", "Triển lãm", "Xưởng vẽ", "Giới thiệu", "Liên hệ"): Có hiệu ứng hover mờ dần (`transition-opacity hover:text-emerald-900`).
    - Nút bấm (Button) **"Liên hệ"**: Đổi màu nền khi trỏ chuột (`hover:bg-primary-dim`).
  - **Hero Section:**
    - Hình ảnh tác phẩm lớn: Đặt trong khung có đổ bóng (`shadow-2xl`).
    - Nút bấm **"XEM BỘ SƯU TẬP"**: Dạng hình chữ nhật bo góc, chuyển màu nền mượt mà khi hover. Có chức năng dẫn đến trang thư viện.
    - Liên kết **"Tuyên ngôn nghệ sĩ"**: Có hiệu ứng gạch chân khi hover (`hover:border-primary`).
  - **Phần "Tác phẩm Tiêu biểu":**
    - Nút bấm **"Xem Kho Lưu Trữ"**: Dạng text kèm icon mũi tên `arrow_forward`.
    - **Lưới 3 hình ảnh tác phẩm (Interactive Images):** Mỗi thẻ hình ảnh đều là một khối có thể tương tác. Khi trỏ chuột (hover), toàn bộ thẻ (card) sẽ nổi lên thông qua hiệu ứng tăng độ bóng (`hover:shadow-md transition-shadow`).
  - **Phần "Đặt vẽ theo yêu cầu":**
    - Form nhập liệu tương tác: Khi click (focus) vào các ô input (Tên, Email, Ý tưởng), nền chuyển sang trắng sáng và xuất hiện viền xanh (`focus:bg-white focus:ring-1 focus:ring-primary`).
    - Nút bấm **"Gửi Yêu Cầu"**: Nút Submit toàn chiều rộng, đổi màu `hover:bg-primary-dim`.
  - **Footer:** Nút liên kết dạng icon hình tròn (Camera, Mail) đổi nền sang trắng sáng toàn bộ khi hover.

### B. Trang Giới thiệu Họa sĩ
- **Tệp HTML:** `gi_i_thi_u_h_a_s_pastel/code.html`
- **Mô tả chức năng:** Nêu bật tiểu sử, phong cách, danh sách các buổi triển lãm và cung cấp thông tin liên hệ xưởng vẽ của họa sĩ Elena Vance.
- **Chi tiết giao diện và tương tác (Nút bấm & Hình ảnh):**
  - **Navbar:** Tương tự trang chủ, Nút CTA là **"Yêu cầu"**.
  - **Hero Section:** Ảnh chân dung có thẻ nhãn xoay nghiêng mờ ở phía sau tạo chiều sâu thị giác.
  - **Phần Tiểu sử (Bio) - Hình ảnh tương tác (Interactive Image):** Có một ảnh cận cảnh bức tranh ở dạng đen trắng và hơi mờ (`grayscale opacity-70`). Khi người dùng trỏ chuột vào, ảnh từ từ chuyển sang hình ảnh có màu sắc sống động và rõ nét (`hover:grayscale-0 transition-all duration-700`). Đây là một chi tiết UX tinh tế.
  - **Danh sách Triển lãm:** 
    - Các hàng hiển thị thông tin năm/tên triển lãm có thể tương tác. Khi hover, nền chuyển sáng (`hover:bg-surface-container-lowest`).
    - Nút bấm Ẩn/Hiện: Khi hover vào một hàng, phần text "Xem Danh mục" và mũi tên `arrow_forward` (mặc định trong suốt `opacity-0`) sẽ mượt mà hiện ra (`group-hover:opacity-100`).
  - **Phần Xưởng vẽ (Studio):** Nút **"Yêu cầu tham quan"** đổi màu khi hover. Các nút icon mạng xã hội hình tròn sẽ đổi màu nền từ trắng sang xanh, icon từ xanh sang trắng (`hover:bg-primary hover:text-white`).

### C. Trang Thư viện Tác phẩm (Phòng trưng bày)
- **Tệp HTML:** `th_vi_n_t_c_ph_m_pastel/code.html`
- **Mô tả chức năng:** Nơi duyệt toàn bộ các tác phẩm nghệ thuật (đã lược bỏ hệ thống bộ lọc).
- **Chi tiết giao diện và tương tác (Nút bấm & Hình ảnh):**
  - **Navbar:** Nút CTA là **"Yêu cầu tư vấn"**.
  - **Lưới Tác phẩm (Interactive Images - Trọng tâm):**
    - Toàn bộ khối của mỗi tác phẩm đều bấm được (`group cursor-pointer`).
    - Khi trỏ chuột (hover) vào thẻ: Toàn bộ thẻ sẽ trôi nhẹ lên trên (`group-hover:-translate-y-2`).
    - Hình ảnh bên trong thẻ: Sẽ từ từ phóng to (`group-hover:scale-105 transition-transform duration-700`), tạo cảm giác đang bước đến gần bức tranh.
  - **Nút "Xem bộ sưu tập 2023" (Load more/Pagination):** Nút viền mỏng (outline), khi hover sẽ đổ màu nền nhạt (`hover:bg-surface-container`).

### D. Trang Chi tiết Tác phẩm
- **Tệp HTML:** `chi_ti_t_t_c_ph_m_pastel/code.html`
- **Mô tả chức năng:** Tập trung hoàn toàn vào một tác phẩm cụ thể, cung cấp dữ liệu chi tiết và nút mua.
- **Chi tiết giao diện và tương tác (Nút bấm & Hình ảnh):**
  - **Navbar:** Nút CTA là **"Tìm hiểu"**.
  - **Khu vực hiển thị ảnh (Interactive Images):**
    - Ảnh lớn chính: Hiển thị nổi bật với bóng đổ.
    - 3 Hình ảnh nhỏ (Thumbnails) bên dưới: Bấm được (`cursor-pointer`). Khi hover, hình ảnh nhỏ sẽ xuất hiện viền bao quanh (`hover:ring-2 hover:ring-primary-container`), mô phỏng thao tác chọn ảnh để đổi ảnh chính (trong phiên bản tích hợp JS).
  - **Khu vực Thông tin & Nút hành động chính:**
    - Nút bấm **"Liên hệ Mua" (Primary)**: Nút quan trọng nhất, có đổ bóng. Khi hover, màu nền tối đi một chút và nút hơi phóng to nhẹ (`hover:scale-[1.01]`). **Lưu ý: Nút này sẽ chuyển hướng thẳng đến trang Instagram (IG) của họa sĩ để giao dịch.**
    - Nút bấm **"Yêu cầu xem trực tiếp" (Secondary)**: Nút viền, đổi màu nền nhẹ khi hover.
  - **Phần "Tác phẩm liên quan":**
    - Nút (liên kết) **"Xem tất cả"**: Hiệu ứng đổi màu text.
    - 3 Thẻ tác phẩm (Interactive Images): Tương tự trang thư viện. Hình ảnh phóng to khi hover (`group-hover:scale-105`). Thêm vào đó, khi hover xuất hiện một lớp phủ màu xanh mờ đè lên ảnh (`bg-primary/10 opacity-0 group-hover:opacity-100`) và text tiêu đề sẽ chuyển màu xanh.

### E. Trang Tư vấn & Yêu cầu Đặt vẽ (Commission)
- **Tệp HTML:** `t_v_y_u_c_u_pastel/code.html`
- **Mô tả chức năng:** Trang cung cấp thông tin về dịch vụ đặt vẽ riêng. Thay vì dùng biểu mẫu phức tạp trên web, khách hàng sẽ được điều hướng thẳng sang nền tảng khác để trao đổi.
- **Chi tiết giao diện và tương tác (Nút bấm & Hình ảnh):**
  - **Navbar:** Nút CTA là **"Yêu cầu"**.
  - **Hình ảnh minh họa:** Ảnh bức tranh đang vẽ với khung bo tròn, nhãn text "Đang nhận đặt vẽ" đè lên dạng kính mờ (backdrop-blur) ở góc. Không có hiệu ứng tương tác phức tạp để tránh phân tâm.
  - **Nút Hành động (CTA):** Đã lược bỏ toàn bộ biểu mẫu nhập liệu (Họ tên, Email, Kích thước...). Thay vào đó chỉ sử dụng một Nút bấm nổi bật duy nhất (ví dụ: **"Nhắn tin đặt vẽ"**).
    - Nút có viền bóng đổ (`shadow-xl shadow-primary/10`). Trạng thái hover đổi màu nền. 
    - **Lưu ý quan trọng: Khi nhấp vào, nút sẽ chuyển hướng thẳng đến trang Instagram (IG) của họa sĩ.**
  - **Footer:** Nút icon đổi màu khi di chuột vào (`hover:opacity-100`).

## 3. Cấu trúc dữ liệu (Data Structure - data.json)
Dữ liệu của dự án được tổ chức dưới dạng file JSON (`data.json`) làm nguồn cấp dữ liệu giả lập (mock data) cho giao diện. Cấu trúc bao gồm 4 phần chính:

### A. Đối tượng `artist` (Thông tin họa sĩ)
Chứa các thông tin cá nhân và liên hệ của họa sĩ để hiển thị ở Trang chủ và Trang giới thiệu:
- `name`: Tên họa sĩ.
- `experienceYears`: Số năm kinh nghiệm.
- `completedWorks`: Số lượng tác phẩm đã hoàn thành.
- `soloExhibitions`: Số lượng triển lãm cá nhân.
- `philosophy`: Tuyên ngôn / Triết lý nghệ thuật.
- `contact`: Chứa `address` (địa chỉ xưởng vẽ) và `email`.

### B. Mảng `collections` (Bộ sưu tập)
Quản lý danh sách các bộ sưu tập tác phẩm. Việc tách riêng giúp dễ dàng quản lý và cập nhật tên bộ sưu tập mà không phải sửa từng tác phẩm.
- `id`: Mã định danh duy nhất của bộ sưu tập (vd: `col_1`). Dùng để liên kết với tác phẩm.
- `name`: Tên bộ sưu tập.
- `year`: Năm ra mắt.
- `description`: Mô tả ngắn gọn về bộ sưu tập.

### C. Mảng `categories` (Danh mục / Phân loại)
Định nghĩa các thẻ (tags) phân loại tác phẩm, dùng để hiển thị nhãn.
- `id`: Mã định danh duy nhất của danh mục (vd: `cat_1`). Dùng để liên kết với tác phẩm.
- `type`: Phân loại danh mục, gồm `material` (chất liệu) hoặc `subject` (chủ đề).
- `name`: Tên danh mục hiển thị trên giao diện (vd: "Sơn dầu", "Phong cảnh").

### D. Mảng `artworks` (Danh sách tác phẩm nghệ thuật)
Là phần lõi chứa chi tiết từng bức tranh.
- `id`: Mã hệ thống của tác phẩm (vd: `art_1`).
- `code`: Mã số hiển thị cho người dùng và quản lý kho (vd: `EG-2024-012`). Rất quan trọng khi khách hàng nhắn tin hỏi mua tác phẩm cụ thể.
- `title`: Tên bức tranh.
- `material`: Chuỗi mô tả chi tiết chất liệu dùng để vẽ.
- `year`: Năm sáng tác.
- `price`: Giá bán (USD).
- `collectionId`: ID trỏ đến một bộ sưu tập trong mảng `collections`. Ám chỉ tính chất liên kết (Relational) giữa tác phẩm và bộ sưu tập.
- `categoryIds`: Mảng chứa các ID trỏ đến mảng `categories`. Giúp hiển thị các "viên thuốc" (pill badge) thông tin trên giao diện.
- `dimensions`: Kích thước vật lý của bức tranh.
- `certification`: Tình trạng chứng nhận tác phẩm (vd: "Bao gồm chữ ký").
- `description`: Đoạn văn miêu tả ý nghĩa, cảm hứng sáng tác của tác phẩm.
- `images`: Mảng chứa các đường dẫn (URL) hình ảnh. Ảnh đầu tiên thường được lấy làm ảnh bìa (Thumbnail).
- `highlight`: Cờ đánh dấu `true`/`false`. Nếu là `true`, tác phẩm này sẽ được hệ thống ưu tiên bốc ra để hiển thị ở vị trí "Tác phẩm tiêu biểu" trên Trang chủ.

## 4. Các Lưu ý Quan trọng khi Triển khai Code (Implementation Notes)
- **Tối ưu hóa hình ảnh (Image Optimization):** Giao diện phụ thuộc rất nhiều vào nghệ thuật thị giác. Cần sử dụng kĩ thuật Lazy Loading (`loading="lazy"`) và chuyển đổi ảnh sang định dạng WebP. 
- **Xử lý Responsive cho Bố cục Bất đối xứng:** Bố cục dạng Editorial/Asymmetric rất đẹp trên Desktop (PC) nhưng rất dễ bị vỡ hoặc khó nhìn trên Mobile. Phải tận dụng tốt hệ thống breakpoint của Tailwind (`sm:`, `md:`, `lg:`).
- **Vấn đề SEO với Vue 3 (SPA):** Do chốt sử dụng **Vue 3 thuần** (không dùng Nuxt), trang web sẽ hoạt động dưới dạng Single Page Application (SPA). Để cải thiện SEO, team sẽ cần tích hợp thêm thư viện cấu hình thẻ meta (như `unhead` hoặc `vue-meta`) để chủ động thay đổi Title và thẻ Meta động cho từng trang.
- **Tối ưu Hiệu ứng (Performance Animations):** Có rất nhiều hiệu ứng `backdrop-blur`, `grayscale` chuyển sang màu, và `scale` từ từ (`duration-700`). Cần đảm bảo sử dụng thuộc tính `transform` và `opacity` cho các animation để trình duyệt sử dụng GPU kết xuất.
- **Quản lý Trạng thái (State Management):** Dữ liệu từ `data.json` sẽ được gọi một lần khi khởi tạo app và lưu vào **Pinia store** để dùng chung giữa các trang.

## 5. Tổ chức mã nguồn (Project Setup)
- **Vị trí cài đặt:** Mã nguồn của ứng dụng Vue sẽ được khởi tạo trực tiếp tại thư mục gốc của frontend (`tomato-fe`), không tạo thêm thư mục con lồng nhau để dễ dàng quản lý.
