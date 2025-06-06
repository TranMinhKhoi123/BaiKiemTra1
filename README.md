# Kiểm tra số dư Token ERC20 trên Ronin Saigon

Đây là một dự án đơn giản giúp bạn kiểm tra số dư của Token ERC20 trên mạng Ronin Saigon (mạng thử nghiệm). Dự án này được viết bằng TypeScript và sử dụng thư viện ethers.js để tương tác với blockchain.

## Yêu cầu hệ thống

- Node.js (phiên bản 14.0.0 trở lên)
- npm (Node Package Manager)

## Cài đặt

1. Clone hoặc tải về dự án

2. Mở terminal và di chuyển vào thư mục dự án

3. Cài đặt các thư viện cần thiết:
```bash
npm install
```

## Cách sử dụng

1. Biên dịch mã TypeScript:
```bash
npm run build
```

2. Chạy chương trình:
```bash
npm start
```

3. Nhập thông tin theo yêu cầu:
   - Địa chỉ ví (wallet address)
   - Địa chỉ hợp đồng token (contract address)

## Ví dụ

Để kiểm tra số dư WETH trên Ronin Saigon, bạn có thể sử dụng:
- Địa chỉ hợp đồng WETH: `0x2B8E9cD44C9E09D936149549a8Eb966e3c0E4BDc`
- Địa chỉ ví: [Địa chỉ ví của bạn]

## Lưu ý

- Chương trình chỉ thực hiện các thao tác đọc (read-only) và không yêu cầu private key
- Đảm bảo bạn đang sử dụng địa chỉ hợp đồng token chính xác trên mạng Ronin Saigon
- Số dư sẽ được hiển thị dưới dạng số thập phân, đã được xử lý theo decimals của token

## Cách hoạt động

1. Kết nối đến mạng Ronin Saigon thông qua node RPC công khai
2. Tạo interface để tương tác với hợp đồng ERC20 thông qua ABI tối thiểu
3. Lấy thông tin về decimals và symbol của token
4. Truy vấn số dư của địa chỉ ví
5. Chuyển đổi số dư từ wei sang đơn vị token thực tế
6. Hiển thị kết quả cho người dùng