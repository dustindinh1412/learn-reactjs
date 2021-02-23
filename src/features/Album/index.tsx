import React from 'react';
import {Album} from '../../interfaces/AlbumItemInterface';
import AlbumList from './components/AlbumList';


function AlbumFeature() {

    const albumItemsList: Album[] = [
        {
            id: 0,
            title: "V-Pop Nhạc Mới Nổi Bật",
            imageUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/1/7/d/017dbc601d894c9d88ac88a8d6850180.jpg",
            imageAlt: "nhac vpop"
        },
        {
            id: 1,
            title: "Nhạc Trẻ Gây Nghiện",
            imageUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/5/4/0/7540fbc87a23ac44fb5b00b08db6a4b0.jpg",
            imageAlt: "nhac tre"
        },
        {
            id: 2,
            title: "Nghe Thôi... Đã Thấy HIT!",
            imageUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/7/2/7/6727114fc39171b24e75b68ff60079af.jpg",
            imageAlt: "nhac nghe thoi"
        },
        {
            id: 3,
            title: "Channel X",
            imageUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/8/3/6/c836f29527c9bc0e5352ee21e3da4555.jpg",
            imageAlt: "x"
        },
    ];

    return (
        <AlbumList albumListItems={albumItemsList}/>
    );
}

export default AlbumFeature;