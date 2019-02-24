import cv2
import os
import numpy as np
from PIL import Image
import pytesseract
import imutils
import pickle
from matplotlib import pyplot as plt
from sklearn import datasets, svm, metrics
from sklearn.externals import joblib
from skimage.feature import hog
from sklearn.svm import LinearSVC


with open('range.pickle','rb') as f:
	t = pickle.load(f)
hsv_lower = np.array([t[0],t[1],t[2]])
hsv_upper = np.array([t[3],t[4],t[5]])

def train():
    dataset = datasets.fetch_mldata("MNIST Original")
    features = np.array(dataset.data, 'int16') 
    labels = np.array(dataset.target, 'int')
    list_hog_fd = []
    for feature in features:
        fd = hog(feature.reshape((28, 28)), orientations=9, pixels_per_cell=(14, 14), cells_per_block=(1, 1), visualise=False)
        list_hog_fd.append(fd)
    hog_features = np.array(list_hog_fd, 'float64')
    clf = LinearSVC()
    clf.fit(hog_features, labels)
    joblib.dump(clf, "model.pkl", compress=3)



img = cv2.imread('paper_2.jpg')
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

im_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
ret, im_th = cv2.threshold(im_gray, 90, 255, cv2.THRESH_BINARY_INV)

# Find contours in the image
_,ctrs, hier = cv2.findContours(im_th.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Get rectangles contains each contour
rects = [cv2.boundingRect(ctr) for ctr in ctrs]
clf = joblib.load("model.pkl")

