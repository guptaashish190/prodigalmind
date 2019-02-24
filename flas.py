from flask import Flask
from flask_cors import CORS
from Prodigy import stats, aggregateStats, allCluster, getResultsData, processInitialData, youtubRec
app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
    return "Hello World!"


@app.route('/classPerformance', methods=['GET'])
def classPerfomance():
    getResultsData()
    processInitialData()
    return stats("0")
    # return "Hello World!"


@app.route('/aggregateStats', methods=['GET'])
def aggregateS():
    getResultsData()
    processInitialData()
    return aggregateStats()
    # return "Hello World!"


@app.route('/allCluster', methods=['GET'])
def allClust():
    getResultsData()
    processInitialData()
    return allCluster()
    # return "Hello World!"


@app.route('/adaptiveLearning', methods=['GET'])
def adaptiveLearning():
    getResultsData()
    processInitialData()
    return youtubRec()
    # return "Hello World!"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
