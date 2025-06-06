import { ethers } from 'ethers';
import * as readlineSync from 'readline-sync';

// ABI tối thiểu cho Token ERC20 - chỉ cần các hàm để đọc số dư và decimals
const ERC20_ABI = [
    'function balanceOf(address owner) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function symbol() view returns (string)'
];

// URL của node RPC công khai trên mạng Ronin Saigon
const RONIN_SAIGON_RPC = 'https://saigon-testnet.roninchain.com/rpc';

async function main() {
    try {
        // Kết nối đến mạng Ronin Saigon
        const provider = new ethers.providers.JsonRpcProvider(RONIN_SAIGON_RPC);

        // Nhập địa chỉ ví từ người dùng
        const walletAddress = readlineSync.question('Nhap dia chi vi (wallet address): ');
        if (!ethers.utils.isAddress(walletAddress)) {
            throw new Error('Dia chi vi khong hop le!');
        }

        // Nhập địa chỉ hợp đồng token từ người dùng
        const tokenAddress = readlineSync.question('Nhap dia chi hop dong token (contract address): ');
        if (!ethers.utils.isAddress(tokenAddress)) {
            throw new Error('Dia chi hop dong khong hop le!');
        }

        // Tạo interface để tương tác với hợp đồng token
        const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);

        // Lấy thông tin về token
        const [balance, decimals, symbol] = await Promise.all([
            tokenContract.balanceOf(walletAddress),
            tokenContract.decimals(),
            tokenContract.symbol()
        ]);

        // Chuyển đổi số dư từ wei sang đơn vị token thực tế
        const formattedBalance = ethers.utils.formatUnits(balance, decimals);

        // Hiển thị kết quả
        console.log(`\nSo du token ${symbol}: ${formattedBalance}`);

    } catch (error: any) {
        console.error('Loi:', error.message);
    }
}

// Chạy chương trình
main();