
//image optimizer

//guides
//optimize-vite = https://www.npmjs.com/package/vite-imagetools
//image-lazyloading = https://web.dev/articles/browser-level-image-lazy-loading


export const standardPreset = [640,960,1200];

export const mountImageSrcSet = (id,img,preset=standardPreset)=>{
    let str = preset.map((v,k)=>{
        return `${img[k]} ${v}w`;
    }).join(', ');
    document.getElementById(id).srcset = str;
}

export const mountSingleImage = (id,img)=>{
    document.getElementById(id).src = img;
}







//images.map((w) => console.log(`${w}`))

//document.getElementById('hero').src = image;