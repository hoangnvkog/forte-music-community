import sys
import os
import re

# Define translations mapping from English to Vietnamese
translations = {
    # Common UI strings
    "A community for people who love music and Piano.": "Một cộng đồng dành cho những người yêu âm nhạc và Piano.",
    "JOIN THE COMMUNITY": "THAM GIA CỘNG ĐỒNG",
    "EXPLORE EVENTS": "Khám phá sự kiện",
    "Upcoming Events": "Sự kiện sắp tới",
    "Past Events": "Sự kiện đã qua",
    "View Event": "Xem sự kiện",
    "Meet Our Members": "Gặp gỡ thành viên của chúng tôi",
    "View Profile": "Xem hồ sơ",
    "Community Gallery": "Bộ sưu tập ảnh cộng đồng",
    "View Gallery": "Xem bộ sưu tập ảnh",
    "Come play with us.": "Hãy chơi cùng chúng tôi.",
    "JOIN FORTE MUSIC COMMUNITY": "THAM GIA FORTE MUSIC COMMUNITY",
    "Home": "Trang chủ",
    "Events": "Sự kiện",
    "Members": "Thành viên",
    "Gallery": "Bộ sưu tập ảnh",
    "About": "Giới thiệu",
    "All rights reserved.": "Bảo lưu tất cả quyền.",
    "Welcome": "Chào mừng",
    "Free Piano": "Piano tự do",
    "Community Performance": "Bàn biểu diễn cộng đồng",
    "Social": "Giao lưu",
    "JOIN EVENT": "THAM GIA SỰ KIỆN",
    "About Me": "Về tôi",
    "Interests": "Sở thích",
    "Favorite Artists": "Nhà izd yêu thích",
    "Favorite Genres": "Thể loại yêu thích",
    "Instagram": "Instagram",
    "Facebook": "Facebook",
    "YouTube": "YouTube",
    "Joined:": "Tham gia từ:",
    "Piano Level:": "Trình độ Piano:",
    "Our Story": "Câu chuyện của chúng tôi",
    "What We Do": "Chúng tôi làm gì",
    "Our Values": "Giá trị của chúng tôi",
    "Piano Gatherings": "Buổi họp Piano",
    "Music Sharing Sessions": "Buổi chia sẻ âm nhạc",
    "Workshops": "Workshop",
    "Community Performances": "Bàn biểu diễn cộng đồng",
    "Meetups": "Buổi gặp gỡ",
    "Love Music": "Yêu âm nhạc",
    "Share Knowledge": "Chia sẻ kiến thức",
    "Encourage One Another": "Khuyến khích lẫn nhau",
    "Create Meaningful Connections": "Tạo ra những kết nối có ý nghĩa",
    # Add more as needed
}

def translate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Replace each occurrence
    for eng, vie in translations.items():
        content = content.replace(eng, vie)
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Translated: {filepath}")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python translate.py <file1> [file2 ...]")
        sys.exit(1)
    for filepath in sys.argv[1:]:
        if os.path.exists(filepath):
            translate_file(filepath)
        else:
            print(f"File not found: {filepath}")
