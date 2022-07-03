const init = options => {
    console.log(options);
    let items               = options.menu.getElementsByClassName('al360__item');
    let itemCount           = items.length;

    //calculate item size and set in options
    options.itemSize        = options.menuSize / itemCount;
    options.itemCount       = itemCount;

    let root                = document.documentElement;
    
    if(options.tooltipPosition == 'top'){
        options.toolTipArrowRotate  = 'rotateX(180deg)';
        options.toolTipArrowTop     =  '100%' ;
        options.toolTipArrowBottom  =  '' ;
        options.tooltipTop          = 'calc(var(--item-size) / -2 - var(--tool-tip-gap))';
        root.style.setProperty('--menu-padding-top',options.itemSize+'px');
    }
    else{
        options.toolTipArrowRotate  = '';
        options.toolTipArrowTop     =  '' ;
        options.toolTipArrowBottom  =  '100%' ;
        options.tooltipBottom       = 'calc(var(--item-size) / -2 - var(--tool-tip-gap))';
        root.style.setProperty('--menu-padding-top',0+'px');
    }
    

    root.style.setProperty('--menu-size',  options.menuSize+'px');
    
    root.style.setProperty('--item-count', options.itemCount);
    root.style.setProperty('--item-size',  options.itemSize+'px');

    root.style.setProperty('--social-link-background',options.LinkBG);
    root.style.setProperty('--social-link-shadow',options.LinkShadow);
    root.style.setProperty('--social-link-border',options.LinkBorder);

    root.style.setProperty('--tool-tip-top',options.tooltipTop);
    root.style.setProperty('--tool-tip-bottom',options.tooltipBottom);
    root.style.setProperty('--tool-tip-color',options.toolTipColor);
    root.style.setProperty('--tool-tip-arrow-color',options.toolTipArrowColor);
    root.style.setProperty('--tool-tip-arrow-shadow',options.toolTipArrowShadow);
    root.style.setProperty('--tool-tip-gap',options.toolTipGap);
    root.style.setProperty('--tooltip-arrow-rotate',options.toolTipArrowRotate);
    root.style.setProperty('--tool-tip-arrow-top',options.toolTipArrowTop);
    root.style.setProperty('--tool-tip-arrow-bottom',options.toolTipArrowBottom);
    
    root.style.setProperty('--toggle-button-background',options.toggleBg);
    root.style.setProperty('--toggle-button-color',options.toggleButtonColor);
    root.style.setProperty('--toggle-button-border',options.toggleButtonBorder);
    root.style.setProperty('--toggle-button-shadow',options.toggleButtonShadow);

    options.toggleAnimation? root.style.setProperty('--toggle-transform','rotate(315deg)'):false;
    
    let j           = itemCount - 1;
    for(let i= 0; i<itemCount; i+=1){
        let element = items[i];
        element.style.setProperty('--i',i);
        element.style.setProperty('--j',j);
        j -=1;
    }
}
const openMenu = (menu) => {
    console.log(menu);
    menu.classList.toggle("active");
}
const toggler = (params) => {
    
    
    options = {
        //set the menu element 
        menu                : document.getElementById(params.menuId),
        //set the toggle element
        toggle              : document.getElementById(params.toggleId),
        //set menu size from param if param doesn't contain set 200 as default
        menuSize            : params.menuSize?params.menuSize:200,
        //if exist set style options for links else set defaults
        LinkBG              : params.LinkBG?params.LinkBG:'#fff',
        LinkShadow          : params.LinkShadow?params.LinkShadow:'0 3px 4px rgba(0,0,0,.15);',
        LinkBorder          : params.LinkBorder?params.LinkBorder:'1px solid #00000030',
        //if exist set tooltip options for tooltips else set defaults
        toolTipColor        : params.toolTipColor?params.toolTipColor:'#1DA1F2',
        toolTipArrowColor   : params.toolTipArrowColor?params.toolTipArrowColor:'#8f8f8f',
        toolTipArrowShadow  : params.toolTipArrowShadow?params.toolTipArrowShadow:'0 1px 8px rgba(255,255,255,0.5)',
        //if exist set toggle button options for toggle else set defaults
        toggleBg            : params.toggleBg?params.toggleBg:'#fff',
        toggleButtonColor   : params.toggleButtonColor?params.toggleButtonColor:'#00000090',
        toggleButtonBorder  : params.toggleButtonBorder?params.toggleButtonBorder:'1px solid #00000030',
        toggleButtonShadow  : params.toggleButtonShadow?params.toggleButtonShadow:'0 3px 4px rgba(0,0,0,.15)',
        toggleAnimation     : params.toggleAnimation?params.toggleAnimation:1,
        toolTipGap          : params.toolTipGap?params.toolTipGap:'15px',
        tooltipPosition     : params.tooltipPosition?params.tooltipPosition:'bottom',
        tooltipTop          : params.tooltipTop?params.tooltipTop:'',
        tooltipBottom       : params.tooltipBottom?params.tooltipBottom:'',
    };
    
    let toggle  = options.toggle; 
    let menu    = options.menu;
    init(options);
    setTimeout(() => {
        menu.style.setProperty('display','flex');
    },500);
    toggle.addEventListener("click",()=>{openMenu(options.menu)});
}