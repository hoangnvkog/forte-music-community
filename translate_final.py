#!/usr/bin/env python3
import re
import os
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
    # Header
    "Home": "Trang chủ",
    "Events": "Sự kiện",
    "Members": "Thành viên",
    "Gallery": "Bộ sưu tập ảnh",
    "About": "Giới thiệu",
    # Footer
    "All rights reserved.": "Bảo lưu tất cả quyền.",
}

def translate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    # We'll process line by line to avoid breaking multiline strings? But our translations are single line.
    # We'll use a regex that matches > ... < and replaces the inner text if it's exactly one of our English phrases.
    # However, we want to replace even if there is extra whitespace.
    # We'll use a function to replace each match.
    def replace_match(m):
        # m.group(0) is the entire match like "> text <"
        inner = m.group(1)  # the text inside
        stripped = inner.strip()
        if stripped in translations:
            # Keep the original whitespace inside the > and <
            # We'll replace the stripped part with the translation, but keep the surrounding whitespace.
            # Actually, we can just replace the inner with the translation, but we want to keep the same amount of whitespace? 
            # For simplicity, we'll replace the entire inner with the translation, and keep the same outer whitespace? 
            # But we don't know the original whitespace. We'll just return > + translation + <, and let the whitespace be as in the original? 
            # We'll keep the same leading/trailing whitespace as in the inner? Actually, we captured the whole inner, so we can just replace the inner with the translation.
            return f'>{translations[stripped]}<'
        else:
            return m.group(0)
    
    # We need to match > ... < but not if there is a { or } inside (to avoid JSX expressions).
    # We'll use a regex that matches > then any characters that are not <, {, or } then <.
    # This will break if there are nested tags, but in our JSX, the text nodes are usually flat.
    # We'll use: >([^<>{}]*)<
    # However, this will also match >{something}< because we excluded { and }.
    # Actually, we want to avoid matching if there is a { or } inside, so we exclude them.
    pattern = r'>([^<>{}]*)<'
    new_content = re.sub(pattern, replace_match, content)
    
    # Also, we might have text that is not wrapped in a tag? In JSX, text must be inside a tag, so we are safe.
    
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