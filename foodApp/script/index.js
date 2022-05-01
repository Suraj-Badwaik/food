let receipes=[
    'https://hdwallsource.com/img/2014/4/chicken-food-wallpaper-hd-43054-44081-hd-wallpapers.jpg',
    'https://wallpapercave.com/wp/wp3138446.jpg',
    'https://www.indiafoodnetwork.in/wp-content/uploads/2020/06/sindhi.jpg',
    'http://www.schoolchalao.com/img/extraimages/school-chalao-sindhi2.jpg',
    'https://sevantiinstitute.com/wp-content/uploads/2017/02/Indian-food-2.jpg',
    'https://i.ndtvimg.com/i/2017-07/rajasthani-food-festival_620x350_41500037747.jpg',
    'https://wallpaperforu.com/wp-content/uploads/2020/10/food-wallpaper-201003132304211920x1080.jpg',
    'https://assets.cntraveller.in/photos/60ba1de12267328f9d2456f0/master/pass/dosa-recipes-1366x768.jpg',
    'https://thumbs.dreamstime.com/b/punjabi-samosa-indian-popular-street-food-punjabi-samosa-indian-popular-street-food-easily-available-every-part-123515979.jpg',
    'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/adacs00xvgul0i8yrat3',
]

let img = document.getElementById('slideShow');

let index=0;

setInterval(function slide(){
    img.setAttribute('src',receipes[index]);
    index++;

    if(index>=receipes.length){
        index=0;
    }
},3000)

