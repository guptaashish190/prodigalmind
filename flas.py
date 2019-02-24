from flask import Flask
from Prodigy import stats, aggregateStats, allCluster, getResultsData, processInitialData
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"


@app.route('/classPerfomance', methods=['GET'])
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


if __name__ == '__main__':
    app.run(debug=True)
