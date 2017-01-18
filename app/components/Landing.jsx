import { AppBar, FlatButton } from 'material-ui';
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <p>
          Helicopters have been thought about, as well as dreamt about, for at least 500 years.
           In 1486 Leonardo da Vinci, was believed to be, the first person to design a helicopter.
           It took however almost 450 years to build a working and practical helicopter.
           It took several more years to build a practical, by practical I mean efficient, craft.
           There were several people who built aircraft that resembled helicopters before 1938, most notable among these were:
          Sir George Cayley, Paul Cornu, Stefan Petroczy and a German by the name of Focke. Sir Cayley, in 1843, built a steam driven craft that resembled a helicopter,
          however this was far too heavy to be practical. In 1907, Paul Cornu-a Frenchman-built a full sized helicopter that even lifted him off of the ground for a few minutes, however this was not free flight because he had been tethered to the ground. Stefan Petroczy, then a Lieutenant in the Austrian army, along with Professor Theodore von Karman, developed a captive helicopter. It remained in the air, held to the ground by cables, for approximately an hour. Nevertheless it was not considered an official flight because the craft did not have any people on board.  In 1939 Igor Sikorsky flew the first, economical helicopter, called the VS-300. Soon helicopters were being used for military purposes, such as observation as well as evacuating wounded from the front lines. The Korean War was the helicopters time to shine. Thanks to the work of these aerial ambulances the death rate from wounds was the lowest of any previous war.</p>

        <p>Following the Korean war, military helicopters continued to grow and change. Before the outbreak of the Korean war, the largest helicopters could carry only 2 passengers. By the start of the Vietnam war there were helicopters that could carry upwards of 45 soldiers or close to 100 civilians. The reason for this discrepancy is that civilians do not have all of the gear (backpacks, rifles, ammo...etc) that soldiers must carry. It was during this interwar period that the U.S. Marine Corps formally adopted vertical envelopment as part of their mission. Vertical envelopment is when helicopters are used to carry soldiers behind enemy lines to strike deep into their supply lines.</p>

        <p>During the Vietnam war helicopters were invaluable in fighting the Viet Cong and the North Vietnamese army. These two groups were at best irregular forces (did not fight in open warfare, guerrillas). Helicopters began expanding from their previous role of transportation, to become not only taxis, but also gunships, airborne command centers as well as their earlier roles of aerial ambulances.</p>

        <p>After the close of the hostilities in Vietnam, helicopters began to take on more and more civilian roles, including police and hospital work, as well as, used by news teams. By the early 90's, helicopters were also being used for tours of remote places.</p>
      </div>
    );
  }
}
