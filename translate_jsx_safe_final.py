#!/usr/bin/env python3
import os
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
    # Header and Footer
    "Home": "Trang chủ",
    "Events": "Sự kiện",
    "Members": "Thành viên",
    "Gallery": "Bộ sưu tập ảnh",
    "About": "Giới thiệu",
    "All rights reserved.": "Bảo lưu tất cả quyền.",
    # Additional strings that might appear in the code (like in the layout)
    "A community for people who love Piano, music and meaningful connections.": "Một cộng đồng dành cho những người yêu Piano, âm nhạc và những kết nối có ý nghĩa.",
}

def translate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We'll process line by line for simplicity, but we need to handle multi-line text? 
    # In our code, visible text is usually on a single line.
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        # We'll find all matches of > ... < in the line
        # We'll use a while loop to replace from the end to avoid index shifting
        # We'll use regex to find matches
        # Pattern: >([^<>{}]*)<
        # This matches > followed by any characters that are not <, >, {, } then <
        # We'll replace the inner text if it's in our translations dictionary.
        # We'll keep the same whitespace inside the > and <.
        def replace_match(m):
            # m.group(0) is the entire match like "> text <"
            inner = m.group(1)  # the text inside
            stripped = inner.strip()
            if stripped in translations:
                # Keep the original whitespace: we'll replace the stripped part with the translation
                # but keep the leading and trailing whitespace.
                leading = inner[:len(inner) - len(inner.lstrip())]
                trailing = inner[len(inner.rstrip()):]
                return f'>{leading}{translations[stripped]}{trailing}<'
            else:
                return m.group(0)
        
        new_line = re.sub(r'>([^<>{}]*)<', replace_match, line)
        new_lines.append(new_line)
    new_content = '\n'.join(new_lines)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Translated: {filepath}")
        return True
    else:
        print(f"No changes: {filepath}")
        return False

def main():
    root = '/home/tokhatnhi/.openclaw/workspace/forte-music-community'
    # List of files to process
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
        translate_file(f)

if __name__ == '__main__':
    main()