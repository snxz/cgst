import json
import string

import gspread
from oauth2client.service_account import ServiceAccountCredentials

creds = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", ["https://spreadsheets.google.com/feeds"])
client = gspread.authorize(creds)
sheet = client.open_by_url("https://docs.google.com/spreadsheets/d/1RbNrBAiWmcq_gNjFFevXHAbtie4qDT6cSMPgA6-ZBvc").sheet1.get()

header = sheet[1][1:]

themes = {}
for row in sheet[2:]:
    title = row[0]

    # Remove invalid characters
    for character in title:
        if character not in (string.ascii_letters + string.digits + " "):
            title = title.replace(character, "")
            print(f'Title {title} has invalid {character}')

    print(f"Loading theme \"{title}\"")
    for i in range(len(header)):
        if title not in themes:
            themes[title] = {}

        themes[title][header[i].replace(" ", "")] = row[i + 1]

with open("output.json", "w") as output_file:
    output_file.write(json.dumps(themes))
