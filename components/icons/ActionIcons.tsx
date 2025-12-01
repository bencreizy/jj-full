import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const DirectionsIcon: React.FC<IconProps> = (props) => (
    <img src="https://raw.githubusercontent.com/bencreizy/JJ_icons_videos/main/Logopit_1761426975198.png" alt="Get Directions" className={props.className} draggable="false" />
);


export const ShareIcon: React.FC<IconProps> = (props) => (
    <img src="https://raw.githubusercontent.com/bencreizy/JJ_icons_videos/main/1761427840070.png" alt="Share Location" className={props.className} draggable="false" />
);