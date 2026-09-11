#!/usr/bin/env python3
import sys
import os
import re

# Translation dictionary: English -> Vietnamese
translations = {
    # Common strings
    "Forte is a community built around the love of Piano and music.": "Forte là một cộng đồng được xây dựng quanh tình yêu Piano và âm nhạc.",
    "A community for people who love music and Piano.": "Một cộng đồng dành cho những người yêu âm nhạc và Piano.",
    "JOIN THE COMMUNITY": "THAM GIA CỘNG ĐỒNG",
    "EXPLORE EVENTS": "Khám phá sự kiện",
    "Come play with us.": "Hãy chơi cùng chúng tôi.",
    "JOIN FORTE MUSIC COMMUNITY": "THAM GIA FORTE MUSIC COMMUNITY",
    "Upcoming Events": "Sự kiện sắp tới",
    "Past Events": "Sự kiện đã qua",
    "View Event": "Xem sự kiện",
    "Meet Our Members": "Gặp gỡ thành viên của chúng tôi",
    "View Profile": "Xem hồ sơ",
    "Community Gallery": "Bộ sưu tập ảnh cộng đồng",
    "View Gallery": "Xem bộ sưu tập ảnh",
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
    "Demo Piano Gathering": "Buổi họp Piano mẫu",
    "Demo Piano Workshop": "Workshop Piano mẫu",
    "Community Meetup": "Họp cộng đồng",
    "Piano Gathering #12": "Buổi họp Piano #12",
    "Piano Night #11": "Đêm Piano #11",
    "Workshop #10": "Workshop #10",
    "Regular meetups where members play piano, share pieces, and enjoy music together.": "Các buổi họp thường lệ nơi các thành viên chơi piano, chia sẻ các triển tub và cùng nhau tận hưởng âm nhạc.",
    "Informal gatherings to listen to and discuss piano music and performances.": "Buổi họp non formal để lắng nghe và thảo luận về âm nhạc piano và các buổi biểu diễn.",
    "Educational sessions on piano technique, music theory, and performance practice.": "Các buổi học về kỹ thuật piano, lý thuyết âm nhạc và thực hành biểu diễn.",
    "Opportunities for members to perform in a supportive environment.": "Cơ hội cho các thành viên biểu diễn trong một môi trường hỗ trợ.",
    "Social events to build connections and friendships through music.": "Các sự kiện xã hội để xây dựng kết nối và tình bạn qua âm nhạc.",
    "We share a deep appreciation for piano music and the joy it brings.": "Chúng tôi chia sẻ sự trân trọng sâu sắc đối với âm nhạc piano và niềm pleasure nó mang lại.",
    "We believe in learning from each other and growing together.": "Chúng tôi tin rằng chúng ta học hỏi lẫn nhau và cùng nhau phát triển.",
    "We create a supportive environment where everyone feels welcome to share their musical journey.": "Chúng tôi tạo ra một môi trường hỗ trợ nơi mọi người cảm thấy được chào đón để chia sẻ hành trình âm nhạc của mình.",
    "We foster lasting friendships and connections through our shared passion for music.": "Chúng tôi thúc đẩy các mối quan hệ bạn bè và kết nối bền vỏ thông qua đam mê chung cho âm nhạc.",
    "All rights reserved.": "Bảo lưu tất cả quyền.",
    "Home": "Trang chủ",
    "Events": "Sự kiện",
    "Members": "Thành viên",
    "Gallery": "Bộ sưu tập ảnh",
    "About": "Giới thiệu",
}

def translate_string(s):
    # Replace all occurrences of each English string with Vietnamese
    for eng, vie in translations.items():
        s = s.replace(eng, vie)
    return s

def translate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We'll translate only the text that is outside of string literals and template literals.
    # We'll use a simple state machine: we iterate through the string and keep track of whether we are inside a string.
    # We consider single quotes, double quotes, and backticks.
    # We also need to handle escaped quotes.
    result = []
    i = 0
    n = len(content)
    while i < n:
        ch = content[i]
        if ch == '"' or ch == "'" or ch == '`':
            # We are entering a string literal. We need to copy until the matching quote, handling escapes.
            quote = ch
            result.append(ch)
            i += 1
            while i < n:
                ch = content[i]
                if ch == '\\':
                    # Escape next character
                    result.append(ch)
                    i += 1
                    if i < n:
                        result.append(content[i])
                        i += 1
                elif ch == quote:
                    result.append(ch)
                    i += 1
                    break
                else:
                    result.append(ch)
                    i += 1
        else:
            # Outside of string literals, we can translate.
            # But we need to be careful not to break JSX syntax. However, we are only replacing known English phrases.
            # We'll just translate the whole chunk? Instead, we can translate the whole content outside strings by doing replacement on the whole content but then we risk replacing inside strings that we skipped? 
            # Actually, we are skipping strings, so we can safely do replacement on the outside parts.
            # We'll extract the next segment that is not a string.
            start = i
            while i < n and content[i] not in ('"', "'", "`"):
                i += 1
            segment = content[start:i]
            translated_segment = translate_string(segment)
            result.append(translated_segment)
    new_content = ''.join(result)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Translated: {filepath}")
        return True
    else:
        print(f"No changes: {filepath}")
        return False

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python translate_file.py <filepath>")
        sys.exit(1)
    translate_file(sys.argv[1])