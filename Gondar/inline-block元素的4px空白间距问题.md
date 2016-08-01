##inline-block元素的4px空白间距解决方案

可以变成一行解决

	<div>
		<a href="">1</a><a href="">1</a><a href="">1</a><a href="">1</a>
	</div>

最兼容方法

	.finally-solve {
			letter-spacing: -4px;
			word-spacing: -4px;
			/*根据不同字体字号或许需要做一定的调整*/
			font-size: 0;
		}
		
		.finally-solve li {
			width: 50px;
			height: 50px;
			border: solid 1px;
			font-size: 16px;
			letter-spacing: normal;
			word-spacing: normal;
			display: inline-block;
			*display: inline;
			zoom: 1;
		}

	<ul class="finally-solve">
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>


原文：
[http://www.jb51.net/css/68785.html](http://www.jb51.net/css/68785.html)