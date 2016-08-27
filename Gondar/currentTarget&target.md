>#event.target & event.currentTarget


###event.currentTarget属性总是指向被绑定事件句柄（event handler）的元素，就是`addEventListener`之前的元素

###event.target ，则是指向触发该事件的元素。

###html：

	<div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </div>

###js：

	var div = document.querySelector('div'),
        ps = div.querySelectorAll('p');

    div.addEventListener('click', function(e) {
        console.log(e.target);
        console.log(e.currentTarget)
    });

    for (let i = 0; i < ps.length; i++) {
        ps[i].addEventListener('click', function(e) {
            console.log(e.target);
            console.log(e.currentTarget)
        });
    }

点击p1的时候，上面四个输出语句分别输出：

	console.log(e.target);
	//<p>1</p>

	console.log(e.currentTarget)
	//p>1</p>

	console.log(e.target);
	//<p>1</p>

	console.log(e.currentTarget)
	//<div>
		<p>1</p>
		<p>2</p>
		<p>3</p>
	  </div>

点击外部div的时候，上面两个输出语句（下面没有输出，因为没有事件）分别输出：

	console.log(e.target)
	//<div>
		<p>1</p>
		<p>2</p>
		<p>3</p>
	  </div>

	console.log(e.currentTarget)
	//<div>
		<p>1</p>
		<p>2</p>
		<p>3</p>
	  </div>