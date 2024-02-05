import React from 'react';
import styles from './ObjectCard.module.scss';
import {createLucideIcon} from "lucide-react";
import {MapPin} from "lucide-react";
import {WhatsApp} from "@shared/ui/Icons";

export const ObjectCard = () => {
  return (
    <div className={styles.objectCard}>
      <div className={styles.imageContainer}>
        <img src="path-to-your-image.jpg" alt="Serena Living Tower" />
      </div>
      <div className={styles.content}>
         <div className={styles.content_1}>
            <h1>Serena Living Tower</h1>
            <p><MapPin />Dubai, Serenia Living</p>
            <p className={styles.price}>AED 159,000,000</p>

        </div>
          <div className={styles.content_2}>
              <button className={styles.button_1}>Whatsapp &nbsp;<WhatsApp/></button>
            </div>
      </div>
    </div>
  );
};
