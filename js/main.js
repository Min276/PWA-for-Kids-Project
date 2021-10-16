const container = document.querySelector(".container");
var students_projects = [
 {
    name : "Aung Phone Sint" ,
    classname : "Class A" ,
    time  : "Third Submit" ,
    rate : "Rating 4" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Aung%20Phone%20Sint/image/banner.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Aung%20Phone%20Sint/" ,
 },{
    name : "Bhone Pyae Hmat Kyaw" ,
    classname : "Class A" ,
    time  : "Third Submit" ,
    rate : "Rating 4.2" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Bhone%20Pyae%20Hmat%20Kyaw/imgs/Thadingyut%20In%20Marchikaw.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Bhone%20Pyae%20Hmat%20Kyaw/" ,
 },{
    name : "Hsu Watti Nwe" ,
    classname : "Class A" ,
    time  : "Third Submit" ,
    rate : "Rating 4" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Hsu%20Watti%20Nwe/image/banner.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Hsu%20Watti%20Nwe/" ,
 },{
    name : "Htun Tauk Ye Yint" ,
    classname : "Class A" ,
    time  : "First Submit" ,
    rate : "Rating 4.1" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Htun%20Tauk%20Ye%20Yint/image/htuntauk1.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Htun%20Tauk%20Ye%20Yint/" ,
 },{
    name : "Myat Bhone Maung" ,
    classname : "Class A" ,
    time  : "Second Submit" ,
    rate : "Rating 4.7" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Myat%20Bhone%20Maung/image/dsmbm.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Myat%20Bhone%20Maung/" ,
 },{
    name : "Nay Myo Lin" ,
    classname : "Class A" ,
    time  : "Second Submit" ,
    rate : "Rating 4.2" ,
    image : "https://cdn.dribbble.com/users/394117/screenshots/3022378/thadingyut_festival.png",
    url : "https://min276.github.io/tpi-level3-projects/Class%20A%20-%20Nay%20Myo%20Lin/" ,
 },{
    name : "Aye Pyae Sone" ,
    classname : "Class B" ,
    time  : "Third Submit" ,
    rate : "Rating 4.4" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Aye%20Pyae%20Sone/imgae/pinkly.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Aye%20Pyae%20Sone/" ,
 },{
    name : "Hpoun Myat Maung" ,
    classname : "Class B" ,
    time  : "Second Submit" ,
    rate : "Rating 4.4" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Hpoun%20Myat%20Maung/images/background_thadingyut.png",
    url : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Hpoun%20Myat%20Maung/" ,
 },{
    name : "Htet Shine" ,
    classname : "Class B" ,
    time  : "Second Submit" ,
    rate : "Rating 4.2" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Htet%20Shine/Image/thadingyut.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Htet%20Shine/" ,
 },{
    name : "Mya Pa Bar Maung" ,
    classname : "Class B" ,
    time  : "Third Submit" ,
    rate : "Rating 4.2" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Mya%20Pa%20Bar%20Maung/image/banner.jfif",
    url : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Mya%20Pa%20Bar%20Maung/" ,
 },{
    name : "Myat Phyu Syn May" ,
    classname : "Class B" ,
    time  : "Second Submit" ,
    rate : "Rating 4.3" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Myat%20Phyu%20Syn%20May/images/kantaw.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Myat%20Phyu%20Syn%20May/" ,
 },{
    name : "Myat Ra Naung" ,
    classname : "Class B" ,
    time  : "Second Submit" ,
    rate : "Rating 4.3" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Myat%20Ra%20Naung/Image/Project.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Myat%20Ra%20Naung/" ,
 },{
    name : "Nyan Htut Lwin" ,
    classname : "Class B" ,
    time  : "Second Submit" ,
    rate : "Rating 4.2" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Nyan%20Htut%20Lwin/Image/banner.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Nyan%20Htut%20Lwin/" ,
 },{
    name : "Phyo Wai Yan Zaw" ,
    classname : "Class B" ,
    time  : "Second Submit" ,
    rate : "Rating 4.4" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Phyo%20Wai%20Yan%20Zaw/image/water%20photo9.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Phyo%20Wai%20Yan%20Zaw/" ,
 },{
    name : "Su Myat Kar Yan" ,
    classname : "Class B" ,
    time  : "Second Submit" ,
    rate : "Rating 4.4" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Su%20Myat%20Kar%20Yan/image/thadingyut2.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20B%20-%20Su%20Myat%20Kar%20Yan/" ,
 },{
    name : "Aung Chan Paing" ,
    classname : "Class C" ,
    time  : "Third Submit" ,
    rate : "Rating 4.2" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Aung%20Chan%20Paing/image/halloween.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Aung%20Chan%20Paing/" ,
 },{
    name : "Aung Phone Hein" ,
    classname : "Class C" ,
    time  : "Second Submit" ,
    rate : "Rating 4.2" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Aung%20Phone%20Hein/image/banner.jfif",
    url : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Aung%20Phone%20Hein/" ,
 },{
    name : "Hpone Linn Sett" ,
    classname : "Class C" ,
    time  : "Third Submit" ,
    rate : "Rating 4.5" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Hpone%20Linn%20Sett/image/thatdingyut2.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Hpone%20Linn%20Sett/" ,
 },{
    name : "Khant Phone Myat" ,
    classname : "Class C" ,
    time  : "Third Submit" ,
    rate : "Rating 4.2" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Khant%20Phone%20Myat/image/bb.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Khant%20Phone%20Myat/" ,
 },{
    name : "Oakker Bhone Pyae" ,
    classname : "Class C" ,
    time  : "Third Submit" ,
    rate : "Rating 4.2" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Oakker%20Bhone%20Pyae/projects/oct,20.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Oakker%20Bhone%20Pyae/" ,
 },{
    name : "Phyu Sin Moe Min" ,
    classname : "Class C" ,
    time  : "Third Submit" ,
    rate : "Rating 4.2" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Phyu%20Sin%20Moe%20Min/image/banner.jfif",
    url : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Phyu%20Sin%20Moe%20Min/" ,
 },{
    name : "Pyae Sone Heinn" ,
    classname : "Class C" ,
    time  : "Third Submit" ,
    rate : "Rating 4.2" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Pyae%20Sone%20Heinn/image/blog.9jpg.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Pyae%20Sone%20Heinn/" ,
 },{
    name : "Wai Bhone Han" ,
    classname : "Class C" ,
    time  : "Third Submit" ,
    rate : "Rating 4.8" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Wai%20Bhone%20Han/images/blog4.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Wai%20Bhone%20Han/" ,
 },{
    name : "Zwe Moe Tun Zin" ,
    classname : "Class C" ,
    time  : "Third Submit" ,
    rate : "Rating 4.5" ,
    image : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Zwe%20Moe%20Tun%20Zin/image/3D.jpg",
    url : "https://min276.github.io/tpi-level3-projects/Class%20C%20-%20Zwe%20Moe%20Tun%20Zin/" ,
 },
];

const showDatas = () => {
  let output = ""
  students_projects.forEach(
    ({ name, image, classname, rate, url }) =>
      (output += `
              <div class="card" data-aos="zoom-in" data-aos-delay="500">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <p><span>${classname} |</span><span> ${rate}</span></p>
                <a class="card--link" href="${url}">Blog Link</a>
              </div>
              `)
  )
  container.innerHTML = output ;
}

document.addEventListener("DOMContentLoaded", showDatas)
// var ul = document.createElement("ul");
// var li = document.createElement("li");
// var a = docuement.createElement("a");
// var href = document.createAttribute("href")
// titleOne.innerHTML = sampleData[0].dataName;
// photoOne.src = sampleData[0].file;


