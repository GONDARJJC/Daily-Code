//setInterval(function(){},n*1000):每隔n秒执行function(){}一次。
function interval(element) {
	element.disabled = true,element.value = '剩余'+ 10 +'秒';
	var t = 10;
	var time = setInterval(function(){
			t = t - 1,element.value = '剩余'+ t +'秒';//倒计时没结束之前只执行这一行代码t次
			if (t == 0) {
				element.value = '获取验证码(setInterval)',element.disabled = false;
				clearInterval(time);
			}
		},1000);
}
//setTimeout(function(){},n):n秒后执行function(){}一次。
var timeout_t = 10;
function timeout(element) {
	if (timeout_t == 0) {
		element.value = '获取验证码(setTimeout)',timeout_t = 10,element.disabled = false;
		return false;
	}else{		
		element.value = '剩余'+ (timeout_t--) +'秒',element.disabled = true;
		setTimeout(function(){timeout(element)},1000);//倒计时没结束之前执行整个timeout(element)方法timeout_t次
	}
}