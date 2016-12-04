# a quick sandbox for playing around with the BeautifulSoup library


from bs4 import BeautifulSoup
from urllib.request import urlopen
import datetime
from pathlib import Path

# checking to see if the file is already there
my_file = Path("rawpulldown.txt")
if my_file.is_file():
	print("File already exists. We'll just write entries below")
else:
	file = open("rawpulldown.txt", "w")
	file.write("Henry's Little Web Scraper" + "\n" +"\n")
	file.close

sourcepage = "https://www.happyballs.com/collections/standard-antenna-balls"
mydoc = urlopen(sourcepage)
soup = BeautifulSoup(mydoc, "lxml")
strsave = str(soup.title.string)
#now let's print our result to check
print (soup.title.string)
timestamp = str(datetime.datetime.now())
entrycount = 1
entry = str(entrycount)

def NewWrite(): 
	file = open("rawpulldown.txt", "a+")
	file.write("Entry #"+entry+" : ")
	file.write(timestamp + " (local time) " +"\n") 
	file.write("Site URL: "+sourcepage + "\n")
	file.write(strsave)
	file.close 

NewWrite()
print("Confirmed! You saved the scrape from " + sourcepage)
