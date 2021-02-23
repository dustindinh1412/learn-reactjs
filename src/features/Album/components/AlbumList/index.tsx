import React from 'react';
import { Album } from '../../../../interfaces/AlbumItemInterface';
import AlbumItem from '../AlbumItem';

import './style.css';
function AlbumList(props: {albumListItems: Album[]}) {
    const {albumListItems} = props;
    return (
        <ul className="album-card">
            {
                albumListItems.map(albumItem => {
                    return <AlbumItem key={albumItem.id} albumItem={albumItem}/>
                })
            }
        </ul>
    )
}

export default AlbumList;