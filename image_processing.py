import cv2
import numpy as np
import matplotlib

# preparing matplotlib in order to save figures into files
matplotlib.use('agg')


class ImageProcessing:
    def __init__(self, img_edges, img_path, case):
        self.img_edges = img_edges
        self.img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
        self.case = case

    def get_selected_region(self, arr):
        if (self.case == 0):
            for i in range(arr.shape[0]):
                for j in range(arr.shape[1]):
                    if (i < self.img_edges[0][0] or i >= self.img_edges[0][1]) or (j <= self.img_edges[1][0] or j >= self.img_edges[1][1]):
                        arr[i][j] = 0
            return arr
        else:
            for i in range(len(arr)):
                for j in range(len(arr[0])):
                    # y      cropped less than 747 or
                    if (i >= self.img_edges[0][0] and i <= self.img_edges[0][1]) and (j > self.img_edges[1][0] and j < self.img_edges[1][1]):
                        arr[i][j] = 0
            return arr

    def get_transform(self):
        img_trans = np.fft.fft2(self.img)
        img_trans_shift = np.fft.fftshift(img_trans)
        img_trans_crop = self.get_selected_region(img_trans_shift)
        # get magnitude of the cropped region
        img_magn = np.abs(img_trans_crop)
        img_phase = np.angle(img_trans_crop)
        return [img_magn, img_phase]
