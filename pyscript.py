import requests
import json
import random
list = {"Physics":["NLM","Electric Charges","Gravity"],
"History":["Ancient civilisations","Roman empire","Modern history"],
"Geography":["Planet earth","India","Agriculture"]}

subject_list = ["Physics","History","Geography"]
#
# payload = {
# "paper_id":20,
# "paper_subject":"Physics",
# "paper_topics": ["NLM","Electric Charges","Gravity"],
# "paper_marks": [20,10,5],
# "q_num":30,
# "student":[{"roll":123,"marks":[10,8,3]}]
# }



for i in range(10):
    print(i)
    payload ={}
    choice = random.choice(subject_list)
    print(choice)
    payload["paper_id"] = random.randint(0, 5)
    payload["paper_subject"] = choice
    payload["paper_topics"] = list[choice]
    payload["paper_marks"] = [random.randint(0, 20),random.randint(0, 20),random.randint(0, 20)]
    payload["q_num"] = len(list)
    data = []
    for j in range(50):
        m = payload["paper_marks"]
        data.append({
            "roll":j,
            "marks":[m[0]-random.randint(0,m[0]),m[1]-random.randint(0,m[1]),m[2]-random.randint(0,m[2])]
        })
    payload["student"] = data
    print(json.dumps(payload))
    # requests.post("http://192.168.43.158:8000/uploadPaper",data = json.loads())
# resposnse = request.post()
