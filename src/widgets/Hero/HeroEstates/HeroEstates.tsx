import { Section } from "@/features";
import style from './HeroEstates.module.scss'


export const HeroEstates = () => {
  const objectEstates = [
    {
      title: 'Living in Dubai has several advantages:',
    },
    {
      id:1,
      body: '.Economic Growth: The city provides ample career opportunities with a vibrant economy and many business opportunities.'
    },
    {
      id:2,
      body: '.International character: Dubai is a cultural bridge between East and West, providing unique diversity and intercultural experiences.'
    },
    {
      id: 3,
      body: '.Infrastructure: The city is known for its modern infrastructure '
    },
  ]
  
  return (
    <Section title="Dubai estates" container>
      <div className={style.HeroEstates}>
        {objectEstates.map(item => 
          <div className={style.HeroEstatesItem}>
            <p>{item.title}</p>
            <p>{item.id}{item.body}</p>
          </div>
        )}
      </div>
    </Section>
  )
};
