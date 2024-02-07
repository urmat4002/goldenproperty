// Room.js
import React from 'react';
import styles from './Room.module.scss';

import { Form } from '@/features/Form/Form'
import { ArrowDownToLine } from 'lucide-react'

export const Room = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2>Description</h2>
        <span>Introducing Aqua Dimore, a contemporary residential building in Science Park that symbolizes elegance and innovation.</span>
      </div>
      <div className={styles.section}>
        <h4>Installment plan for 5 years!</h4>
        <p>Pay only 1% per month <br/> 8% guaranteed income during the construction period<br/> 8%-10% plus annual rental income after project completion.</p>
      </div>
      <div className={styles.section}>
        <h4>STUNKING, OPEN VIEW</h4>
        <p>View of Science park and Arjan park <br/> View of the community with villas <br/> View of the courtyard with lagoon</p>
      </div>
      <div className={styles.section}>
        <h4>LOCATION / DISTANCES</h4>
        <p>11 Top schools within 5 minutes <br/>Proximity to the metro 500 m<br/>3 minutes to 2 main hospitals<br/>A few minutes from supermarkets, cafes, banks, pharmacies<br/>5 minutes to the Dubai Hills shopping center, 7 minutes to the Mall of Emirates shopping center</p>
      </div>
      <div className={styles.section}>
        <h4>CONVENIENCES AND PRIVILEGES FOR RESIDENTS</h4>
        <p>Enjoy the infinity pool and jacuzzi <br/>Panoramic indoor gym <br/>Own infinity pool with a marble finish bar<br/>Children's pool<br/>Meditation area<br/>Sauna<br/>Garden with gazebos in your own yard<br/>Lots of water features<br/>Indoor parking<br/>Relaxation areas with greenery and water attractions<br/>Open-air cinema<br/>Children's play area<br/>B+G+3 parking levels+19 floors, in a complex of studios, 1, 2 and 3 apartments with a spacious layout<br/>Built-in kitchen appliances Bosch<br/>
        </p>
        </div>
      <div className={styles.section}>
        <h4>On each floor</h4>
        <p>Studios – 21 <br/>
Studios with a swimming pool – 2<br/>
1 room with swimming pool – 20<br/>
1 room with children's room and swimming pool – 2<br/>
2 rooms with swimming pool – 3<br/>
2 rooms with children's room and swimming pool – 3<br/>
3 rooms - 1<br/>
*SIZES AND PRICES*<br/>
Studio with an area of ​​39 sq.m. Prices start from $190,000<br/>
Studio with a pool starting from 47 sq.m. Prices start from $245,000<br/>
1 room with a pool of 70 sq.m. Prices start from $341,000<br/>
1 room with a children's room and a swimming pool of 100 sq.m. Prices start from $388,000<br/>
2 rooms with a pool area of ​​114 sq.m. Prices start from $492,000<br/>
2 rooms with a children's room and a swimming pool with an area of ​​128 sq.m. Prices start from $562,000<br/>
3 rooms with a pool area of ​​165 sq.m. Prices start from $656,000</p>
      </div>
    </div>
  );
};
  return (
    <div>
      <div>Room</div>
      <Form
        btnTitle={'Catalog'}
        inputPlaceholder1="Email"
        inputPlaceholder2="Select Role"
        icon={<ArrowDownToLine />}
      />
    </div>
  )
}
