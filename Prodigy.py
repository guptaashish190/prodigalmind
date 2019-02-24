import urllib.request
from bs4 import BeautifulSoup
import random
import numpy as np
import json
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
import requests


def processInitialData():
    resu = open('data/testexam.json', 'r')
    pap = open('data/paper.json', 'r')
    resucs = open('data/testexam.csv', 'w+')
    papcs = open('data/topics.csv', 'w+')
    jr = json.load(resu)
    jp = json.load(pap)
    # print(jp['papers_array'])
    s = ''
    for a in jp['papers_array']:
        temp = []
        for b in range(len(a['topics'])):
            s += a['subject']+','
            s += a['topics'][b]+','
            s += str(a['marks'][b])+','
            s = s[:-1]
            s += '\n'
            papcs.write(s)
            s = ''

    pap.close()

    for a in jr:
        for b in a:
            s += str(b['roll'])+','
            for c in b['marks']:
                s += str(c)+','
            s=s[:-1]
            s+='\n'
         
        print("test=> ", s)
        if s:
            resucs.write(s)
        s=''
    resu.close()

def getResultsData():
    url = "http://prodigalmind.herokuapp.com/getResults"
    response_json = requests.get(url).json()
    # response_json = response_json.decode('utf-8')
    dataform = str(response_json).strip("'<>() ").replace('\'', '\"')
    response = json.loads(dataform)
    f = open('data/testexam.json','w+')
    json.dump(response,f)
    f.close()
    url = "http://prodigalmind.herokuapp.com/getPaper"
    response_json = requests.get(url).json()
    # response_json = response_json.decode('utf-8')
    dataform = str(response_json).strip("'<>() ").replace('\'', '\"')
    response = json.loads(dataform)
    f2 = open('data/paper.json','w+')
    json.dump(response,f2)

# processInitialData()


def returnVideo(textToSearch):
    query = urllib.parse.quote(textToSearch)
    url = "https://www.youtube.com/results?search_query=" + query
    response = urllib.request.urlopen(url)
    html = response.read()
    soup = BeautifulSoup(html, 'html.parser')
    lisOfVideo = []
    for vid in soup.findAll(attrs={'class':'yt-uix-tile-link'}):
        if(len(lisOfVideo)<3):
            lisOfVideo.append('https://www.youtube.com' + vid['href'])
    
    return 'https://www.youtube.com' + vid['href']

# marking per exam per student
def markingPerExam(topicWiseMarks):
    tot = 0
    finda = open('data/studentdata.csv','a+')
    with open('data/topics.csv','r') as f:
        txt = f.readlines()
        for a in range(len(topicWiseMarks)):
            tot+=int(a.split(',')[-1])*topicWiseMarks[a]
    return tot

# random marks
def ran(ren):
    return str(random.randint(1,ren))
# random studentid
def ranstudent():
    return '19BCE{}'.format(str(random.randint(1000,3000)))
# random dataentry
def dataentry():
    f = open('data/testexam.csv','w+')
    
    for a in range(20):
        dat = [ranstudent(),str(random.randint(1,14)),str(random.randint(1,12)),str(random.randint(1,16)),str(random.randint(1,10)),str(random.randint(1,18)),str(random.randint(1,14)),str(random.randint(1,12)),str(random.randint(1,16)),str(random.randint(1,10)),str(random.randint(1,18))]
        f.write(','.join(dat)+'\n')
        f.flush()
    f.close()
# dataentry()

# class stats for every class id
def stats(classid):
    examRes = open('data/testexam.csv','r').readlines()
    topList = open('data/topics.csv','r').readlines()
    finalJson = open('results/aggregate.json','ab+')
    finalCSV = open('results/aggregate.csv','a+')
    indivCSV = open('results/indivcsv.csv','a+')
    topicDict = []
    ids = []
    # topic list
    for a in topList:
        spl = a.split(',')
        topicDict.append([spl[1],spl[-1]])
    # aggregate marks per topic
    totalNo = len(examRes)
    # print(totalNo)
    # aggregateDict = {'physics':{},'history':{}}
    finLis = []
    tot = [len(topicDict[0])]
    # create initial dict
    for a in examRes:
        spl = a.split(',')
        # print([int(x.strip()) for x in spl[1::]])
        ids.append(spl[0])
        finLis.append([int(x.strip()) for x in spl[1::]])
    # print(finLis)
    for a in finLis:
        tot= np.add(tot,a)
    # stats = [(x/(int(topicDict[1])*totalNo))*100 for x in tot]
    totMarks = [int(x[1].strip())*totalNo for x in topicDict]
    # print(totMarks)
    # print(tot)
    # percentage marks per sections
    stats = np.divide(np.asarray(totMarks),tot)*100
    # print(stats)
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
    print('Stats done')
    return json.dumps(finD)


def lisToDict(arr):
    d = {}
    for a in arr:
        # ne = a.split(',')
        ne = a
        nam = ne[0]
        ne = [int(x) for x in ne[1::]]
        d[nam]=ne
    return d

def aggregateStats():
    examRes = open('results/aggregate.csv','r').readlines()
    topList = open('data/topics.csv','r').readlines()
    topicDict = []
    for a in topList:
        spl = a.split(',')
        tempd = []
        topicDict.append([spl[1]])
    for a in examRes:
        te = a.split(',')[1::]
        for b in range(len(te)):
            topicDict[b].append(float(te[b]))
    with open('results/aggregateOverTime.json','w') as f:
        json.dump(lisToDict(topicDict),f)
    return json.dumps(lisToDict(topicDict))

    print('Done Aggregate')


# cluster per subject
def clusterPerSub(arr):
    # print(arr)
    kmeans = KMeans(n_clusters=3, random_state=0).fit(np.asarray(arr).reshape(-1,1))
    return kmeans.labels_

def idsFromCluster():
    examRes = open('data/testexam.csv','r').readlines()
    topList = open('data/topics.csv','r').readlines()
    topicDict = []
    for a in topList:
        spl = a.split(',')
        tempd = []
        topicDict.append([spl[-1]])
    for a in examRes:
        regNo = a.split(',')[0]
        te = a.split(',')[1::]
        for b in range(len(te)):
            topicDict[b].append(float(te[b]))
    # print(topicDict)
    return topicDict
    

# cluster for all subjects- increase collab
def allCluster():
    topList = open('data/topics.csv','r').readlines()
    topicDict = []
    for a in topList:
        spl = a.split(',')[1]
        topicDict.append(spl)
    
    initDa = idsFromCluster()
    # print(initDa)
    initDa = [x[1::] for x in initDa]
    clus = open('results/cluster.json','w')
    d = {}
    c = 0
    # print(initDa)
    for a in initDa:
        retuCl = clusterPerSub(a)
        cl1,cl2,cl3=[],[],[]
        with open('data/testexam.csv','r') as f:
            li = f.readlines()
            for reading in range(len(li)):
                temp = li[reading].split(',')[0]
                chk = retuCl[reading]
                if chk==0:
                    cl1.append(temp)
                elif chk==1:
                    cl2.append(temp)
                else:
                    cl3.append(temp)
        
        d[topicDict[c]]=[cl1,cl2,cl3]
        c+=1
    json.dump(d,clus)
    clus.close()
    print('Done clustering')
    return json.dumps(d)

def youtubRec():
    topList = open('data/topics.csv','r').readlines()
    topicDict = []
    topicsList = []
    for a in topList:
        spl = a.split(',')
        topicDict.append(int(spl[2]))
        topicsList.append(spl[1])
    d = {}
    c = 0
    # print(topicsList)
    with open('data/testexam.csv','r') as f:
        li = f.readlines()
        for reading in range(len(li)):
            temp = li[reading].split(',')
            il = temp[0]
            for b in range(1,len(topicsList)):
                try:
                    # print(temp[b],topicDict[b],topicsList[b])
                    if(int(temp[b])<int(topicDict[b])):
                        if(int(temp[b])<.75*int(topicDict[b])):
                            d[il]=returnVideo(topicsList[b])
                        else:
                            d[il] = returnVideo('Basic concepts of '+ topicsList[b])
                except Exception as e: print(e)
                    
            print('Done for {}'.format(il))
    with open('results/youtube.json','w+') as f:
        json.dump(d,f)

    print('Done Youtube')

# getResultsData()
# processInitialData()
# stats('1B9C100')
# aggregateStats()
# allCluster()
# youtubRec()
