let menuIcons = document.querySelectorAll('.menu-icon'),
    menuBar = document.querySelector('.menu ul'),
    // images inputs
    img1Input = document.getElementById('defualt-img-01-btn'),
    img2Input = document.getElementById('defualt-img-02-btn'),
    // action upload btns
    uploadImg1 = document.getElementById('custom-img-01-btn'),
    uploadImg2 = document.getElementById('custom-img-02-btn'),
    img1 = document.querySelector('.image_1_container img'),
    img2 = document.querySelector('.image_2_container img'),
    // image reviewer
    imageContainer = document.querySelector('.image-container'),
    cancelBtn = document.querySelector('.image-container .cancel-btn'),
    tryBtn = document.getElementById('try-now'),
    // image cancel btns
    img1CancelBtns = document.getElementById('cancel-img-01-btn'),
    img2CancelBtns = document.getElementById('cancel-img-02-btn'),
    // 
    submitImageCont = document.querySelector('.image-container .submit'),
    submitUploadedImagesBtn = document.querySelector('.image-container .submit .submit-btn'),
    //
    wrapper = document.querySelectorAll('.image-container .wrapper'),
    // editting container
    edittingCancelBtn = document.querySelector('.editing-container .cancel-btn'),
    edittingContainer = document.querySelector('.editing-container'),
    editImg_01 = document.querySelector('.img-01-edit img'),
    editImg_02 = document.querySelector('.img-02-edit img'),
    // editImg_03 = document.querySelector('.img-03-edit img'),
    // editImg_04 = document.querySelector('.img-04-edit img'),
    image_workspace_img1 = document.querySelectorAll('.image-workspace img')[0],
    image_workspace_img2 = document.querySelectorAll('.image-workspace img')[1],
    // image_workspace_img3 = document.querySelectorAll('.image-workspace img')[2],
    // image_workspace_img4 = document.querySelectorAll('.image-workspace img')[3],
    // settings image 1
    settingImg1 = document.querySelector('.img-01-edit .settings'),
    settingBtn1 = document.querySelector('.img-01-edit .image-setting i'),
    cropShow1 = document.querySelector('.img-01-edit .crop'),
    rotateShow1 = document.querySelector('.img-01-edit .rotate'),
    zoomShow1 = document.querySelector('.img-01-edit .zoom'),
    cropCont1 = document.querySelector('.img-01-edit .crop-cont'),
    rotateCont1 = document.querySelector('.img-01-edit .rotate-cont'),
    zoomCont1 = document.querySelector('.img-01-edit .zoom-cont'),
    aspect1 = document.querySelector('.img-01-edit .aspect i'),
    aspect1Ul = document.querySelector('.img-01-edit .aspect ul'),
    // settings image 2
    settingImg2 = document.querySelector('.img-02-edit .settings'),
    settingBtn2 = document.querySelector('.img-02-edit .image-setting i'),
    cropShow2 = document.querySelector('.img-02-edit .crop'),
    rotateShow2 = document.querySelector('.img-02-edit .rotate'),
    zoomShow2 = document.querySelector('.img-02-edit .zoom'),
    cropCont2 = document.querySelector('.img-02-edit .crop-cont'),
    rotateCont2 = document.querySelector('.img-02-edit .rotate-cont'),
    zoomCont2 = document.querySelector('.img-02-edit .zoom-cont'),
    aspect2 = document.querySelector('.img-02-edit .aspect i'),
    aspect2Ul = document.querySelector('.img-02-edit .aspect ul'),
    // settings image 3
    // settingImg3 = document.querySelector('.img-03-edit .settings'),
    // settingBtn3 = document.querySelector('.img-03-edit .image-setting i'),
    // cropShow3 = document.querySelector('.img-03-edit .crop'),
    // rotateShow3 = document.querySelector('.img-03-edit .rotate'),
    // zoomShow3 = document.querySelector('.img-03-edit .zoom'),
    // cropCont3 = document.querySelector('.img-03-edit .crop-cont'),
    // rotateCont3 = document.querySelector('.img-03-edit .rotate-cont'),
    // zoomCont3 = document.querySelector('.img-03-edit .zoom-cont'),
    // aspect3 = document.querySelector('.img-03-edit .aspect i'),
    // aspect3Ul = document.querySelector('.img-03-edit .aspect ul'),
    // // settings image 4
    // settingImg4 = document.querySelector('.img-04-edit .settings'),
    // settingBtn4 = document.querySelector('.img-04-edit .image-setting i'),
    // cropShow4 = document.querySelector('.img-04-edit .crop'),
    // rotateShow4 = document.querySelector('.img-04-edit .rotate'),
    // zoomShow4 = document.querySelector('.img-04-edit .zoom'),
    // cropCont4 = document.querySelector('.img-04-edit .crop-cont'),
    // rotateCont4 = document.querySelector('.img-04-edit .rotate-cont'),
    // zoomCont4 = document.querySelector('.img-04-edit .zoom-cont'),
    // aspect4 = document.querySelector('.img-04-edit .aspect i'),
    // aspect4Ul = document.querySelector('.img-04-edit .aspect ul'),
    // action btns 1
    cropBtns1 = document.querySelectorAll('.img-01-edit .crop-cont  li'),
    rotateBtns1 = document.querySelectorAll('.img-01-edit .rotate-cont  li'),
    zoomBtns1 = document.querySelectorAll('.img-01-edit .zoom-cont  li'),
    aspectRat1 = document.querySelectorAll('.img-01-edit .aspect ul li'),
    // action btns 2
    aspectRat2 = document.querySelectorAll('.img-02-edit .aspect ul li'),
    cropBtns2 = document.querySelectorAll('.img-02-edit .crop-cont  li'),
    rotateBtns2 = document.querySelectorAll('.img-02-edit .rotate-cont  li'),
    zoomBtns2 = document.querySelectorAll('.img-02-edit .zoom-cont li'),
    checkbox = document.querySelector("input[id=flexCheckDefault]");

// action btns 3
// cropBtns3 = document.querySelectorAll('.img-03-edit .crop-cont  li'),
// rotateBtns3 = document.querySelectorAll('.img-03-edit .rotate-cont  li'),
// zoomBtns3 = document.querySelectorAll('.img-03-edit .zoom-cont  li'),
// aspectRat3 = document.querySelectorAll('.img-03-edit .aspect ul li'),
// // action btns 4
// aspectRat4 = document.querySelectorAll('.img-04-edit .aspect ul li'),
// cropBtns4 = document.querySelectorAll('.img-04-edit .crop-cont  li'),
// rotateBtns4 = document.querySelectorAll('.img-04-edit .rotate-cont  li'),
// zoomBtns4 = document.querySelectorAll('.img-04-edit .zoom-cont li');
let submitUpDownBtn = document.querySelector('.submit-regition .up-down-btn'),
    submitRegion = document.querySelector('.submit-regition'),
    sendBtn = document.querySelector('.submit-regition .submit-btn');

let hideResult = document.querySelector('.results .cancel'),
    rslt = document.querySelector('.results');
let rslt_img1 = document.querySelector('.r-1 .img-conateiner img'),
    rslt_img2 = document.querySelector('.r-2 .img-conateiner img');

let myData = {};    // the object that containes the required data sent to the server side
myData.case = 0;
hideResult.addEventListener('click', _ => {
    rslt.classList.remove('active');
    edittingContainer.classList.add('active');
    submitRegion.classList.toggle('active');
    submitUpDownBtn.querySelector('i').classList.toggle('fa-angles-up');
    submitUpDownBtn.querySelector('i').classList.toggle('fa-angles-down');
})


submitUpDownBtn.addEventListener('click', _ => {
    submitRegion.classList.toggle('active');
    submitUpDownBtn.querySelector('i').classList.toggle('fa-angles-up');
    submitUpDownBtn.querySelector('i').classList.toggle('fa-angles-down');
});



settingBtn1.addEventListener('click', _ => {
    settingImg1.classList.toggle('inactive')
    cropCont1.classList.remove('active')
    rotateCont1.classList.remove('active')
    zoomCont1.classList.remove('active')
});
cropShow1.addEventListener('click', _ => cropCont1.classList.toggle('active'));
rotateShow1.addEventListener('click', _ => rotateCont1.classList.toggle('active'));
zoomShow1.addEventListener('click', _ => zoomCont1.classList.toggle('active'));
aspect1.addEventListener('click', _ => aspect1Ul.classList.toggle('active'));

//
settingBtn2.addEventListener('click', _ => {
    settingImg2.classList.toggle('inactive');
    cropCont2.classList.remove('active')
    rotateCont2.classList.remove('active')
    zoomCont2.classList.remove('active')
});
cropShow2.addEventListener('click', _ => cropCont2.classList.toggle('active'));
rotateShow2.addEventListener('click', _ => rotateCont2.classList.toggle('active'));
zoomShow2.addEventListener('click', _ => zoomCont2.classList.toggle('active'));
aspect2.addEventListener('click', _ => aspect2Ul.classList.toggle('active'));

let img1Act = false,
    img2Act = false;
// img01_url,
// img02_url,
// img03_url,
// img04_url;

cancelBtn.addEventListener('click', _ => imageContainer.classList.remove('active'));
tryBtn.addEventListener('click', _ => imageContainer.classList.add('active'));
uploadImg1.addEventListener('click', _ => img1Input.click());
uploadImg2.addEventListener('click', _ => img2Input.click());

edittingCancelBtn.addEventListener('click', _ => {
    edittingContainer.classList.remove('active');
    editImg_01.src = '';
    editImg_02.src = '';
    window.location.reload();
});



// show images in their containers
img1Input.addEventListener('change', _ => {
    let file = img1Input.files[0];
    if (file) {
        let reader = new FileReader();
        // let url = window.URL.createObjectURL(new Blob([file], { type: 'image/jpg' }));
        reader.onload = _ => {
            let url = reader.result;
            img1.src = url;
            myData.img1 = url;
            // console.log(url)
            img1.classList.add('active');
            wrapper[0].classList.add('active');
            img1Act = true
            // console.log(`image1: ${url}`);
            check();
        }
        img1CancelBtns.addEventListener('click', _ => {
            img1.classList.remove('active');
            wrapper[0].classList.remove('active');
            img1.src = "";
            img01_url = "";
            submitImageCont.classList.remove('active');
            img1Act = false
            check();
        })
        reader.readAsDataURL(file);
    }
});

img2Input.addEventListener('change', _ => {
    let file = img2Input.files[0];
    if (file) {
        // let url = window.URL.createObjectURL(new Blob([file], { type: 'image/jpg' }));
        let reader = new FileReader();
        reader.onload = _ => {
            let url = reader.result;
            img2.src = url;
            myData.img2 = url;
            img2.classList.add('active');
            wrapper[1].classList.add('active');
            img2Act = true;
            // console.log(`image2: ${url}`);
            check();
        }
        img2CancelBtns.addEventListener('click', _ => {
            img2.classList.remove('active');
            wrapper[1].classList.remove('active');
            img2.src = " ";
            img2Act = false;
            check();
        })
        reader.readAsDataURL(file);
    }
});


submitUploadedImagesBtn.addEventListener('click', _ => {
    edittingContainer.classList.add('active');
    editImg_01.src = img1.src;
    editImg_02.src = img2.src;
    imageContainer.classList.remove('active')

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            myData.case = 1
        } else {
            myData.case = 0
        }
    });

    // image 1
    let options1 = {
        dragMode: 'move',
        preview: ".img-preview-1",
        viewMode: 2,
        modal: false,
        background: false,
        ready: function () {
            // zoom for image
            zoomBtns1[0].addEventListener("click", _ => cropper1.zoom(0.1));
            zoomBtns1[1].addEventListener("click", _ => cropper1.zoom(-0.1));
            // rotate image
            rotateBtns1[0].addEventListener('click', _ => cropper1.rotate(45));
            rotateBtns1[1].addEventListener('click', _ => cropper1.rotate(-45));
            // drag mode
            cropBtns1[0].addEventListener('click', _ => cropper1.setDragMode("crop"));
            cropBtns1[1].addEventListener('click', _ => cropper1.setDragMode("move"));
            cropBtns1[2].addEventListener('click', _ => {
                cropBtns1[2].querySelector('i').classList.toggle('active');
                document.querySelector('.img-01-edit .cropper-face').classList.toggle('rounded');
                document.querySelector('.img-01-edit .cropper-view-box').classList.toggle('rounded');
                document.querySelector('.img-01-edit .cropper-face').classList.toggle('.cropper-view-box');
            });
            // set aspect ratio
            aspectRat1[0].addEventListener('click', _ => cropper1.setAspectRatio(16 / 9));
            aspectRat1[1].addEventListener('click', _ => cropper1.setAspectRatio(4 / 3));
            aspectRat1[2].addEventListener('click', _ => cropper1.setAspectRatio(1 / 1));
            aspectRat1[3].addEventListener('click', _ => cropper1.setAspectRatio(2 / 3));
            aspectRat1[4].addEventListener('click', _ => cropper1.setAspectRatio(0));   // free
        },
        crop: function (e) {
            myData.img1_x1 = e.detail.x
            myData.img1_y1 = e.detail.y
            myData.img1_x2 = e.detail.width + e.detail.x
            myData.img1_y2 = e.detail.height + e.detail.y
        }
    }
    let cropper1 = new Cropper(image_workspace_img1, options1);
    // image 2
    let options2 = {
        dragMode: 'move',
        preview: ".img-preview-2",
        viewMode: 2,
        modal: false,
        background: false,
        ready: function () {
            // zoom for image
            zoomBtns2[0].addEventListener("click", _ => cropper2.zoom(0.1));
            zoomBtns2[1].addEventListener("click", _ => cropper2.zoom(-0.1));
            // rotate image
            rotateBtns2[0].addEventListener('click', _ => cropper2.rotate(45));
            rotateBtns2[1].addEventListener('click', _ => cropper2.rotate(-45));
            // drag mode
            cropBtns2[0].addEventListener('click', _ => cropper2.setDragMode("crop"));
            cropBtns2[1].addEventListener('click', _ => cropper2.setDragMode("move"));
            cropBtns2[2].addEventListener('click', _ => {
                cropBtns2[2].querySelector('i').classList.toggle('active');
                document.querySelector('.img-02-edit .cropper-face').classList.toggle('rounded');
                document.querySelector('.img-02-edit .cropper-view-box').classList.toggle('rounded');
            });
            // set aspect ratio
            aspectRat2[0].addEventListener('click', _ => cropper2.setAspectRatio(16 / 9));
            aspectRat2[1].addEventListener('click', _ => cropper2.setAspectRatio(4 / 3));
            aspectRat2[2].addEventListener('click', _ => cropper2.setAspectRatio(1 / 1));
            aspectRat2[3].addEventListener('click', _ => cropper2.setAspectRatio(2 / 3));
            aspectRat2[4].addEventListener('click', _ => cropper2.setAspectRatio(0));   // free
        },
        crop: function (e) {
            myData.img2_x1 = e.detail.x
            myData.img2_y1 = e.detail.y
            myData.img2_x2 = e.detail.width + e.detail.x
            myData.img2_y2 = e.detail.height + e.detail.y
        }
    }
    let cropper2 = new Cropper(image_workspace_img2, options2);

});


menuIcons[0].addEventListener('click', _ => {
    menuBar.classList.toggle('inactive');
    menuIcons[0].querySelector('i').classList.toggle('fa-bars');
    menuIcons[0].querySelector('i').classList.toggle('fa-xmark');
});
menuIcons[1].addEventListener('click', _ => window.location.reload());

function check() {
    if (img1Act && img2Act) {
        submitImageCont.classList.add('active');
    } else { submitImageCont.classList.remove('active'); }
}


// upload data to the server
sendBtn.addEventListener('click', _ => {
    rslt_img1.src = '';
    rslt_img2.src = '';
    fetch(`${window.origin}/request`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(myData),
        cache: 'no-cache',
        headers: new Headers({
            'content-type': "application/json",
        }),
    }).then(response => {
        if (response.status !== 200) {
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(data => {
            console.log(data['Message']);
            rslt_img1.src = data['rslt_imgs'][0];
            rslt_img2.src = data['rslt_imgs'][1];
            edittingContainer.classList.remove('active');
            rslt.classList.add('active');
        })
    });
})



// download btns
let dwnld_img2 = _ => {
    let a = document.createElement('a');
    a.href = document.querySelector('.r-2 img').src;
    a.download = `comb_img_2_mag_2_phs_1.png`;
    a.click();
}
let dwnld_img1 = _ => {
    let a = document.createElement('a');
    a.href = document.querySelector('.r-1 img').src;
    let date = new Date();
    a.download = `comb_img_1_mag_1_phs_2.png`;
    a.click();
}