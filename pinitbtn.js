jQuery(document).ready(function($)
	{
	$('body').append('<img style="visibility:hidden;
	" class="pinimgload" src="'+bs_pinButtonURL+'" >');
	$('#bs_pinOnHover').hide();
	var l;
	var m;
	var n;
	$('.pinimgload').load(function()
		{
		m=$('.pinimgload').outerWidth(true);
		n=$('.pinimgload').outerHeight(true);
		$('.pinimgload').remove()
	}
	);
	var o=$('#bs_pinOnHover').html().indexOf("arlinadzgn.com");
	o!=-1&&hoverCheck();
	function hoverCheck()
		{
		$('.entry-content img,.post-body img,.entry-summary img').not('.nopin,.nopin img').mouseenter(function()
			{
			$('.pinit-wrapper').css("visibility","hidden");
			clearTimeout(l);
			var a=$(this);
			var b=parseInt(a.css("margin-top"));
			var c=parseInt(a.css("margin-left"));
			var d;
			var e;
			switch(bs_pinButtonPos)
				{
				case'center':d=a.position().top+a.outerHeight(true)/2-n/2;
				e=a.position().left+a.outerWidth(true)/2-m/2;
				break;
				case'topright':d=a.position().top+b+5;
				e=a.position().left+c+a.outerWidth()-m-5;
				break;
				case'topleft':d=a.position().top+b+5;
				e=a.position().left+c+5;
				break;
				case'bottomright':d=a.position().top+b+a.outerHeight()-n-5;
				e=a.position().left+c+a.outerWidth()-m-5;
				break;
				case'bottomleft':d=a.position().top+b+a.outerHeight()-n-5;
				e=a.position().left+c+5;
				break
			}
			var f=a.prop('src');
			var g=a.closest('.post,.hentry,.entry').find('.post-title,.entry-title,.entry-header');
			var h=g.text();
			if(typeof bs_pinPrefix==='undefined')
				{
				bs_pinPrefix=''
			}
			if(typeof bs_pinSuffix==='undefined')
				{
				bs_pinSuffix=''
			}
			if(g.find('a').length)
				{
				pinitURL=g.find('a').attr('href').replace(/\#.+\b/gi,"")
			}
			else
				{
				pinitURL=$(location).attr('href').replace(/\#.+\b/gi,"")
			}
			var i='<div class="pinit-wrapper" style="display:none;
			position: absolute;
			z-index: 9999;
			 cursor: pointer;
			" ><a href="http://pinterest.com/pin/create/button/?url='+pinitURL+'&media='+f+'&description='+bs_pinPrefix+h+bs_pinSuffix+'" style="display:block;
			outline:none;
			" target="_blank"><img class="pinimg" style="
			box-shadow:none;
			background:transparent;
			margin: 0;
			padding: 0;
			border:0;
			" src="'+bs_pinButtonURL+'" title="Pin on Pinterest" ></a></div>';
			var j=a.parent().is('a')?a.parent():a;
			if(!j.next().hasClass('pinit-wrapper'))
				{
				j.after(i);
				if(typeof l==='undefined')
					{
					j.next('.pinit-wrapper').attr("onmouseover","this.style.opacity=1;
					this.style.visibility='visible'")
				}
				else
					{
					j.next('.pinit-wrapper').attr("onmouseover","this.style.opacity=1;
					this.style.visibility='visible';
					clearTimeout(bsButtonHover)")
				}
			}
			var k=j.next(".pinit-wrapper");
			k.css(
				{
				"top":d,"left":e
			}
			);
			k.css("visibility","visible");
			k.stop().fadeTo(300,1.0,function()
				{
				$(this).show()
			}
			)
		}
		);
		$('.entry-content img,.post-body img,.entry-summary img').on('mouseleave',function()
			{
			if($.browser.msie)
				{
				var a=$(this).next('.pinit-wrapper');
				var b=$(this).parent('a').next('.pinit-wrapper');
				l=setTimeout(function()
					{
					a.stop().css("visibility","hidden");
					b.stop().css("visibility","hidden")
				}
				,3000)
			}
			else
				{
				$('.pinit-wrapper').stop().fadeTo(0,0.0)
			}
		}
		)
	}
}
);
