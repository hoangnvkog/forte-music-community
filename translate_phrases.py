#!/usr/bin/env python3
import re
import os
import sys

# List of (English, Vietnamese) phrases to translate
translations = [
    # Hero
    ("A community for people who love music and Piano.", "Một cộng đồng dành cho những người yêu âm nhạc và Piano."),
    ("JOIN THE COMMUNITY", "THAM GIA CỘNG ĐỒNG"),
    ("EXPLORE EVENTS", "Khám phá sự kiện"),
    # IntroSection
    ("Forte Music Community brings together people who love Piano, music and the experience of sharing music with others.", "Forte Music Community gathers những người yêu Piano, âm nhạc và trải nghiệm chia sẻ âm nhạc với nhau."),
    # EventPreview
    ("Upcoming Events", "Sự kiện sắp tới"),
    ("Past Events", "Sự kiện đã qua"),
    ("View Event", "Xem sự kiện"),
    # CommunityPreview
    ("Meet Our Members", "Gặp gỡ thành viên của chúng tôi"),
    ("View Profile", "Xem hồ sơ"),
    # GalleryPreview
    ("Community Gallery", "Bộ sưu tập ảnh cộng đồng"),
    ("View Gallery", "Xem bộ sưu tập ảnh"),
    # JoinCommunity
    ("Come play with us.", "Hãy chơi cùng chúng tôi."),
    ("JOIN FORTE MUSIC COMMUNITY", "THAM GIA FORTE MUSIC COMMUNITY"),
    # EventCard
    ("Welcome", "Chào mừng"),
    ("Free Piano", "Piano tự do"),
    ("Community Performance", "Bàn biểu diễn cộng đồng"),
    ("Social", "Giao lưu"),
    ("JOIN EVENT", "THAM GIA SỰ KIỆN"),
    # MemberCard (no visible text besides View Profile, already above)
    # About page
    ("Our Story", "Câu chuyện của chúng tôi"),
    ("What We Do", "Chúng tôi làm gì"),
    ("Our Values", "Giá trị của chúng tôi"),
    ("Piano Gatherings", "Buổi họp Piano"),
    ("Music Sharing Sessions", "Buổi chia sẻ âm nhạc"),
    ("Workshops", "Workshop"),
    ("Community Performances", "Bàn biểu diễn cộng đồng"),
    ("Meetups", "Buổi gặp gỡ"),
    ("Love Music", "Yêu âm nhạc"),
    ("Share Knowledge", "Chia sẻ kiến thức"),
    ("Encourage One Another", "Khuyến khích lẫn nhau"),
    ("Create Meaningful Connections", "Tạo ra những kết nối có ý nghĩa"),
    # Event detail page
    ("Demo Piano Gathering", "Buổi họp Piano mẫu"),
    # Member detail page
    ("About Me", "Về tôi"),
    ("Interests", "Sở thích"),
    ("Favorite Artists", "Nhà izd yêu thích"),
    ("Favorite Genres", "Thể loại yêu thích"),
    ("Instagram", "Instagram"),
    ("Facebook", "Facebook"),
    ("YouTube", "YouTube"),
    ("Joined:", "Tham gia từ:"),
    ("Piano Level:", "Trình độ Piano:"),
]

def translate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for eng, vie in translations:
        # Pattern: > optional whitespace, eng, optional whitespace <
        # We'll use a regex that matches the whole >...< and replaces the inner text.
        # We want to keep the same whitespace amount? We'll just replace eng with vie and keep surrounding whitespace.
        # We'll use lookbehind and lookahead for > and < but they are variable length? Instead, we can use:
        # re.sub(r'(>\\s*)' + re.escape(eng) + r'(\\s*<)', r'\\1' + vie + r'\\2', content)
        pattern = r'(>\\s*)' + re.escape(eng) + r'(\\s*<)'
        content = re.sub(pattern, r'\1' + vie + r'\2', content, flags=re.IGNORECASE)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Translated: {filepath}")
        return True
    else:
        print(f"No changes: {filepath}")
        return False

def main():
    root = '/home/tokhatnhi/.openclaw/workspace/forte-music-community'
    # List of files to process
    files = []
    for dirpath, dirnames, filenames in os.walk(os.path.join(root, 'src')):
        for f in filenames:
            if f.endswith('.tsx'):
                files.append(os.path.join(dirpath, f))
    for f in files:
        translate_file(f)

if __name__ == '__main__':
    main()