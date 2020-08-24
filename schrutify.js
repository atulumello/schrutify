const path = '/schrutes/'
const schrutes = [
    path + 'schrute_1.jpg',
    path + 'schrute_2.jpg',
    //path + 'schrute_3.gif',
    'https://i.pinimg.com/originals/59/5c/61/595c616ad216778203dce4bac756adc6.jpg',
    path + 'schrute_4.gif',
    path + 'schrute_5.gif',
    path + 'schrute_6.gif',
    path + 'schrute_7.png',
    path + 'schrute_8.jpg',
    path + 'schrute_9.gif'
]

$(document).ready(function() {
    var chance = Math.floor(Math.random() * 100)
    var chance = 69
	if(chance == 69) {
		schrutify()
	}
})

const schrutify = () => {
    setTimeout(function(){
        $("img").each(function(){
            var randomSchrute = schrutes[Math.floor(Math.random()*schrutes.length)]
            $(this).attr("src" , randomSchrute)
            console.log(randomSchrute)
        })
    } , 2000)
}