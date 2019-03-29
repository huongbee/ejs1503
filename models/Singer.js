class Singer{
    constructor(id,name,avatar,link){
        this.id = id,
        this.name=name,
        this.avatar = avatar,
        this.link = link
    }
}
const prefixImg = 'https://photo-resize-zmp3.zadn.vn/w240h240_jpeg/avatars/';
const prefixLink = 'https://zingmp3.vn/nghe-si/'

let arraySinger = [
    new Singer(1,'Mr Siro','e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg','Mr-Siro'),
    new Singer(2,'K-ICM','e/e/e/e/eeee188a74736ed2423d4231b6b41424.jpg','K-ICM'),
    new Singer(3,'Hương Giang Idol','d/4/e/f/d4ef2628425fb5a456e23cce31b50a2e.jpg','Huong-Giang-Idol'),
    new Singer(3,'Hương Giang Idol','d/4/e/f/d4ef2628425fb5a456e23cce31b50a2e.jpg','Huong-Giang-Idol')
]
module.exports = {Singer,prefixImg, prefixLink, arraySinger}
