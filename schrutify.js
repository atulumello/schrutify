const path = 'https://github.com/atulumello/schrutify/blob/master/schrutes/'
const raw = '?raw=true'
const schrutes = [
    'schrute_1.jpg',
    'schrute_2.jpg',
    'schrute_3.gif',
    'schrute_4.gif',
    'schrute_5.gif',
    'schrute_6.gif',
    'schrute_7.png',
    'schrute_8.jpg',
    'schrute_9.gif'
]

$(document).ready(function() {
    var chance = Math.floor(Math.random() * 100)
	if(chance == 69) {
		schrutify()
	}
})

const schrutify = () => {
    setTimeout(function(){
        $("img").each(function(){
            var randomSchrute = schrutes[Math.floor(Math.random()*schrutes.length)]
            $(this).attr("src" , `${path}${randomSchrute}${raw}`)
        })
    } , 2000)
}
