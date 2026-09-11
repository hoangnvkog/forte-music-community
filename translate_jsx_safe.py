import re
import sys

# Translation dictionary: English -> Vietnamese
translations = {
    # Hero
    "A community for people who love music and Piano.": "Một cộng đồng dành cho những người yêu âm nhạc và Piano.",
    "JOIN THE COMMUNITY": "THAM GIA CỘNG ĐỒNG",
    "EXPLORE EVENTS": "Khám phá sự kiện",
    # IntroSection
    "Forte Music Community brings together people who love Piano, music and the experience of sharing music with others.": "Forte Music Community gathers những người yêu Piano, âm nhạc và trải nghiệm chia sẻ âm nhạc với nhau.",
    # EventPreview
    "Upcoming Events": "Sự kiện sắp tới",
    "Past Events": "Sự kiện đã qua",
    "View Event": "Xem sự kiện",
    # CommunityPreview
    "Meet Our Members": "Gặp gỡ thành viên của chúng tôi",
    "View Profile": "Xem hồ sơ",
    # GalleryPreview
    "Community Gallery": "Bộ sưu tập ảnh cộng đồng",
    "View Gallery": "Xem bộ sưu tập ảnh",
    # JoinCommunity
    "Come play with us.": "Hãy chơi cùng chúng tôi.",
    "JOIN FORTE MUSIC COMMUNITY": "THAM GIA FORTE MUSIC COMMUNITY",
    # EventCard
    "Welcome": "Chào mừng",
    "Free Piano": "Piano tự do",
    "Community Performance": "Bàn biểu diễn cộng đồng",
    "Social": "Giao lưu",
    "JOIN EVENT": "THAM GIA SỰ KIỆN",
    # MemberCard
    "View Profile": "Xem hồ sơ",
    # GalleryGrid (no visible text, just images)
    # Header
    "Home": "Trang chủ",
    "Events": "Sự kiện",
    "Members": "Thành viên",
    "Gallery": "Bộ sưu tập ảnh",
    "About": "Giới thiệu",
    # Footer
    "All rights reserved.": "Bảo lưu tất cả quyền.",
    # About page
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
    # Event detail page
    "Demo Piano Gathering": "Buổi họp Piano mẫu",
    # Member detail page
    "About Me": "Về tôi",
    "Interests": "Sở thích",
    "Favorite Artists": "Nhà izd yêu thích",
    "Favorite Genres": "Thể loại yêu thích",
    "Instagram": "Instagram",
    "Facebook": "Facebook",
    "YouTube": "YouTube",
    "Joined:": "Tham gia từ:",
    "Piano Level:": "Trình độ Piano:",
}

def translate_text(text):
    return translations.get(text, text)

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We'll replace text that appears between > and <, but only if it doesn't contain { or }
    # Use a regex to find all >...< segments
    def replace_match(m):
        # m.group(0) is the entire match like ">text<"
        inner = m.group(1)
        # If inner contains { or }, it's likely a JSX expression, skip
        if '{' in inner or '}' in inner:
            return m.group(0)
        translated = translate_text(inner)
        if translated != inner:
            return f'>{translated}<'
        else:
            return m.group(0)
    
    new_content = re.sub(r'>([^<>{}]+)<', replace_match, content)
    
    # Also need to handle text that is not inside tags? In JSX, text must be inside a tag.
    # But there might be text in the return statement that is not wrapped? No, JSX requires a single root.
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Translated: {filepath}")
        return True
    else:
        print(f"No changes: {filepath}")
        return False

def main():
    # List of files to translate
    files = [
        'src/app/page.tsx',
        'src/app/about/page.tsx',
        'src/app/events/page.tsx',
        'src/app/events/[slug]/page.tsx',
        'src/app/members/page.tsx',
        'src/app/members/[slug]/page.tsx',
        'src/components/home/Hero.tsx',
        'src/components/home/IntroSection.tsx',
        'src/components/home/EventPreview.tsx',
        'src/components/home/CommunityPreview.tsx',
        'src/components/home/GalleryPreview.tsx',
        'src/components/home/JoinCommunity.tsx',
        'src/components/events/EventCard.tsx',
        'src/components/members/MemberCard.tsx',
        'src/components/gallery/GalleryGrid.tsx',
        'src/components/layout/Header.tsx',
        'src/components/layout/Footer.tsx',
    ]
    for f in files:
        process_file(f)

if __name__ == '__main__':
    main()
