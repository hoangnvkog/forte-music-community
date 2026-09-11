import re
import sys
import os

# Translation dictionary: English -> Vietnamese
translations = {
    # Hero
    "A community for people who love music and Piano.": "Một cộng đồng dành cho những người yêu âm nhạc và Piano.",
    "JOIN THE COMMUNITY": "THAM GIA CỘNG ĐỒNG",
    "EXPLORE EVENTS": "Khám phá sự kiện",
    # Intro
    "Forte Music Community brings together people who love Piano, music and the experience of sharing music with others.": "Forte Music Community gathers những người yêu Piano, âm nhạc và trải nghiệm chia sẻ âm nhạc với nhau.",
    # Event preview
    "Upcoming Events": "Sự kiện sắp tới",
    "Past Events": "Sự kiện đã qua",
    "View Event": "Xem sự kiện",
    # Community preview
    "Meet Our Members": "Gặp gỡ thành viên của chúng tôi",
    "View Profile": "Xem hồ sơ",
    # Gallery preview
    "Community Gallery": "Bộ sưu tập ảnh cộng đồng",
    "View Gallery": "Xem bộ sưu tập ảnh",
    # Join community
    "Come play with us.": "Hãy chơi cùng chúng tôi.",
    "JOIN FORTE MUSIC COMMUNITY": "THAM GIA FORTE MUSIC COMMUNITY",
    # Header nav
    "Home": "Trang chủ",
    "Events": "Sự kiện",
    "Members": "Thành viên",
    "Gallery": "Bộ sưu tập ảnh",
    "About": "Giới thiệu",
    # Footer
    "All rights reserved.": "Bảo lưu tất cả quyền.",
    # Event detail
    "Welcome": "Chào mừng",
    "Free Piano": "Piano tự do",
    "Community Performance": "Bàn biểu diễn cộng đồng",
    "Social": "Giao lưu",
    "JOIN EVENT": "THAM GIA SỰ KIỆN",
    # Member detail
    "About Me": "Về tôi",
    "Interests": "Sở thích",
    "Favorite Artists": "Nhà izd yêu thích",
    "Favorite Genres": "Thể loại yêu thích",
    "Instagram": "Instagram",
    "Facebook": "Facebook",
    "YouTube": "YouTube",
    "Joined:": "Tham gia từ:",
    "Piano Level:": "Trình độ Piano:",
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
    # Additional strings from components
    "Demo Piano Gathering": "Buổi họp Piano mẫu",
    "Demo Piano Workshop": "Workshop Piano mẫu",
    "Community Meetup": "Họp cộng đồng",
    "Piano Gathering #12": "Buổi họp Piano #12",
    "Piano Night #11": "Đêm Piano #11",
    "Workshop #10": "Workshop #10",
}

def translate_text(text):
    # If the text is in our dict, return translation, else return original
    return translations.get(text, text)

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We'll replace text that appears between > and <, but not if it contains { or } (to avoid dynamic content)
    # Use a regex to find all >...< segments
    # We'll use a while loop to replace from the end to avoid index shifting
    # Pattern: >([^<>{}]+)<  (captures text that does not contain <, >, {, })
    # However, this will also match inside JSX props like className="..." because there is no > before?
    # Actually props are inside the tag, e.g., <div className="...">, so there is no > before the prop value.
    # The pattern >...< will only match between > and <, i.e., the children of a tag.
    # This should be safe.
    
    # We'll use a function to replace each match
    def replace_match(m):
        # m.group(0) is the entire match like ">text<"
        inner = m.group(1)
        translated = translate_text(inner)
        if translated != inner:
            return f'>{translated}<'
        else:
            return m.group(0)
    
    new_content = re.sub(r'>([^<>{}]+)<', replace_match, content)
    
    # Also need to handle self-closing tags? Not needed.
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Translated: {filepath}")
    else:
        print(f"No changes: {filepath}")

def main():
    root = '/home/tokhatnhi/.openclaw/workspace/forte-music-community'
    # List of files to process
    files = []
    for dirpath, dirnames, filenames in os.walk(os.path.join(root, 'src')):
        for f in filenames:
            if f.endswith('.tsx'):
                files.append(os.path.join(dirpath, f))
    for f in files:
        process_file(f)

if __name__ == '__main__':
    main()
