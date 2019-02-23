from flask import Flask
from Prodigy import stats, aggregateStats, allCluster
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"


@app.route('/classPerfomance', methods=['GET'])
def classPerfomance():
    return allCluster()
    # return "Hello World!"


if __name__ == '__main__':
    app.run(debug=True)
