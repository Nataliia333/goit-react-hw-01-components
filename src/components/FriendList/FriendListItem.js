import React from 'react';
import defaultImage from './default.jpg';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classStatus = [styles.status, styles.isOnline];
  return (
    <li className={styles.item}>
      <span className={isOnline ? classStatus.join(' ') : styles.status}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

export default FriendListItem;
