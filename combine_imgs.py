import cv2
import numpy as np
from random import randint
from image_processing import ImageProcessing


def combine_imgs(crop_rgn1_edges, crop_rgn2_edges, img1_path, img2_path, case):
    img_1 = ImageProcessing(crop_rgn1_edges, img1_path, case)
    img_2 = ImageProcessing(crop_rgn2_edges, img2_path, case)
    img_1_magnitude = img_1.get_transform()[0]
    img_1_phase = img_1.get_transform()[1]
    img_2_magnitude = img_2.get_transform()[0]
    img_2_phase = img_2.get_transform()[1]

    combinedImage1 = img_1_magnitude*np.exp(1J*img_2_phase)
    combinedImage2 = img_2_magnitude*np.exp(1J*img_1_phase)

    comb_img1 = np.real(np.fft.ifft2(combinedImage1))
    comb_img2 = np.real(np.fft.ifft2(combinedImage2))

    img1_rslt_path = f'static/imgs/download/{randint(1,10000000000000000)}_comb_img_1_mag_1_phs_2.png'
    img2_rslt_path = f'static/imgs/download/{randint(1,10000000000000000)}_comb_img_2_mag_2_phs_1.png'
    cv2.imwrite(img1_rslt_path, comb_img1)
    cv2.imwrite(img2_rslt_path, comb_img2)

    return [img1_rslt_path, img2_rslt_path]
