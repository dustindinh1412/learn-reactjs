import React from 'react';
import { Album } from '../../../../interfaces/AlbumItemInterface';
import AlbumItem from '../AlbumItem';

import './style.css';
interface Props {
    albumListItems: Album[],
}

const AlbumList: React.FC<Props> = (props: Props) => {
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