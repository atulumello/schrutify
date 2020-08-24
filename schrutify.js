const path = 'https://github.com/atulumello/schrutify/blob/master/schrutes/'
const raw = '?raw=true'
const schrutes = [
    path + 'schrute_1.jpg' + raw,
    path + 'schrute_2.jpg' + raw,
    path + 'schrute_3.gif' + raw,
    path + 'schrute_4.gif' + raw,
    path + 'schrute_5.gif' + raw,
    path + 'schrute_6.gif' + raw,
    path + 'schrute_7.png' + raw,
    path + 'schrute_8.jpg' + raw,
    path + 'schrute_9.gif' + raw
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
            $(this).attr("src" , randomSchrute)
        })
    } , 2000)
}
