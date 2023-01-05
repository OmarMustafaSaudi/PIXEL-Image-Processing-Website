from flask import Flask, render_template, request, redirect, jsonify, make_response
import base64
from combine_imgs import *
import os


app = Flask(__name__)


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/request', methods=['GET', 'POST'])
def getRequest():
    if request.method == "POST":
        list_img = os.listdir("static/imgs/download")
        for img in list_img:
            path = "static/imgs/download/" + img
            print(img)
            os.remove(path)
        req = request.get_json()

        upld_img1 = base64.b64decode(req["img1"].split(',')[1])
        upld_img2 = base64.b64decode(req["img2"].split(',')[1])

        upld_crop_rgn1_edges = ((int(req['img1_y1']), int(req['img1_y2'])),
                                (int(req['img1_x1']), int(req['img1_x2'])))
        upld_crop_rgn2_edges = ((int(req['img2_y1']), int(req['img2_y2'])),
                                (int(req['img2_x1']), int(req['img2_x2'])))

        upld_img1_file = './static/imgs/upload/upld_img1.png'
        upld_img2_file = './static/imgs/upload/upld_img2.png'

        invert_case = int(req['case'])

        with open(upld_img1_file, 'wb') as f:
            f.write(upld_img1)
        with open(upld_img2_file, 'wb') as f:
            f.write(upld_img2)
        # #
        rslt_imgs = combine_imgs(upld_crop_rgn1_edges, upld_crop_rgn2_edges,
                                 upld_img1_file, upld_img2_file, invert_case)
        res = make_response(
            jsonify({'Message': "Transformation has been done successfully", 'rslt_imgs': rslt_imgs}), 200)
        return res


if __name__ == "__main__":
    app.run()
