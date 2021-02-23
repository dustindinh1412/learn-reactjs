import React from 'react';
import { Album } from '../../../../interfaces/AlbumItemInterface';

import './style.css';

function AlbumItem(props: {albumItem: Album}) {
    const {albumItem} = props;
    return (
        <li className="album-card__item">
            <img className="album-card__item-image" src={albumItem.imageUrl} alt={albumItem.imageAlt}/>
            <p className="album-card__item-title">{albumItem.title}</p>
        </li>
    );
}

export default AlbumItem;