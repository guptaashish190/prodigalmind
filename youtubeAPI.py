import urllib.request
from bs4 import BeautifulSoup
import random
import numpy as np
import json
import matplotlib.pyplot as plt

def returnVideo(textToSearch):
    query = urllib.parse.quote(textToSearch)
    url = "https://www.youtube.com/results?search_query=" + query
    response = urllib.request.urlopen(url)
    html = response.read()
    soup = BeautifulSoup(html, 'html.parser')
    lisOfVideo = []
    for vid in soup.findAll(attrs={'class':'yt-uix-tile-link'}):
        if(len(lisOfVideo)<4):
            lisOfVideo.append('https://www.youtube.com' + vid['href'])
    return lisOfVideo

# marking per exam per student
def markingPerExam(topicWiseMarks):
    tot = 0
    finda = open('data/studentdata.csv','a+')
    with open('data/topics.csv','r') as f:
        txt = f.readlines()
        for a in range(len(topicWiseMarks)):
            tot+=int(a.split(',')[-1])*topicWiseMarks[a]
    return tot

#random marks
def ran(ren):
    return str(random.randint(1,ren))
#random studentid
def ranstudent():
    return '19BCE{}'.format(str(random.randint(1000,3000)))
#random dataentry
def dataentry():
    f = open('data/testexam.csv','w+')
    
    for a in range(20):
        dat = [ranstudent(),str(random.randint(1,14)),str(random.randint(1,12)),str(random.randint(1,16)),str(random.randint(1,10)),str(random.randint(1,18)),str(random.randint(1,14)),str(random.randint(1,12)),str(random.randint(1,16)),str(random.randint(1,10)),str(random.randint(1,18))]
        f.write(','.join(dat)+'\n')
        f.flush()
    f.close()
dataentry()

#class stats for every class id
def stats(classid):
    examRes = open('data/testexam.csv','r').readlines()
    topList = open('data/topics.csv','r').readlines()
    finalJson = open('results/aggregate.json','ab+')
    finalCSV = open('results/aggregate.csv','a+')
    topicDict = []
    #topic list
    for a in topList:
        spl = a.split(',')
        topicDict.append([spl[1],spl[-1]])
    #aggregate marks per topic
    totalNo = len(examRes)
    # print(totalNo)
    # aggregateDict = {'physics':{},'history':{}}
    finLis = []
    tot = [len(topList[0])]
    #create initial dict
    for a in examRes:
        spl = a.split(',')
        # print([int(x.strip()) for x in spl[1::]])
        finLis.append([int(x.strip()) for x in spl[1::]])
    
    for a in finLis:
        tot= np.add(tot,a)
    # stats = [(x/(int(topicDict[1])*totalNo))*100 for x in tot]
    totMarks = [int(x[1].strip())*totalNo for x in topicDict]
    # percentage marks per sections
    stats = np.divide(tot,np.asarray(totMarks))*100
    d = {}
    # regList = [x.split(',')[0].strip() for x in examRes]
    for a in range(len(stats)):
        d[topicDict[a][0]]=stats[a]
    finD = {classid:d}
    with open('results/aggregate.json','w+') as f:
        json.dump(finD,f)
    # totMarks = np.ndarray.tolist(totMarks)
    stats = [str(np.around(x,2)) for x in stats]
    finalCSV.write(','.join([classid]+stats)+'\n')
    finalCSV.close()


stats('BCB003456')

def aggregateStats():
    examRes = open('results/aggregate.csv','r').readlines()
    topList = open('data/topics.csv','r').readlines()
    topicDict = {}
    for a in topList:
        spl = a.split(',')
        tempd = []
        topicDict[spl[1]]=[]
    # print(topicDict)


    
    

aggregateStats()


def youtubRec():
    examRes = open('data/testexam.csv','r').readlines()
    topList = open('data/topics.csv','r').readlines()
