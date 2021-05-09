import React from 'react';
import styles from '../../styles/LinksFooter.module.css'

const optica = () => {
    return (
        <div className={styles.container}>
            <h4>Consult optica medicala, specialisti prescriptie dioptrii, acuitate vizuala</h4>
            <p>Acuitatea vizuala este cu siguranță cel mai important test.
                Toți purtătorii de ochelari cunosc acest test.
                Aceasta reprezintă o informaţie despre agerimea/claritatea vederii, 
                legată in special de calitatea imaginilor (care este dependentă de 
                precizia focalizării pe retină),
                sensibilitatea elementelor nervoase, precum şi facultatea interpretativă 
                a creierului.</p>
            <p>„În practica optometrică, acuitatea vizuală este o măsură cantitativă a 
                abilităţii de a identifica simboluri negre pe un fond alb, la o anumita 
                distanţă standard, pe măsură ce mărimea simbolurilor variază. Acuitatea 
                este reprezentată de cea mai mică mărime care poate fi identificată şi 
                este cea mai cunoscută metodă clinică de măsurare a funcţiei vizuale. 
                Bine-cunoscuta expresie „vedere 20-20” se referă la distanţa (măsurată în picioare) 
                la care diverse obiecte văzute („separate”) sub un unghi de 1 minut de arc pot fi 
                distinse clar ca şi obiecte separate. Echivalentul metric este de „vedere 6-6”.</p>
            <h4>Specialisti in determinarea dioptriei</h4>
            <p>Specialistul in determinarea unei dioptrii trebuie sa duca la bun sfarsit procesul 
                de stabilire a puteri de refracție al unei  lentile în corecția viciilor de 
                refracție în cauză ale pacientului.
                Metoda constă în testarea subiectivă a vederii la distanță(Televizorul) , 
                interemeidar (Becurile din bordul mașini noaptea) sau zonă de aproape (Pc).
                Comunicarea dintre optometrist și pacient este esențială în acest proces 
                pentru stabilirea exactă a dioptriilor potrivite</p>
        </div>
    );
}

export default optica;