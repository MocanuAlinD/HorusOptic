import React from "react";
import {
  CardContainer,
  Mission,
  Title,
  MissionList,
  MissionItem,
  Cards,
  CardTitle,
  ForHide,
  CardText,
  CardButton,
} from "./IndexCard.style";
import Arrows from "../Arrows";
import Link from "next/link";
import { INDEX_DATA } from "../../actions";

const IndexCard = () => {
  const shorten = (text, maxLength) => {
    if (text && text.length >= maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text.substr(0, maxLength);
  };

  return (
    <CardContainer>
      <Mission>
        <Title>
          Misiunea noastra
          <Arrows />
        </Title>

        <MissionList className="ulMission">
          <hr color="#cfdbd5" style={{ height: ".1rem", margin: ".2rem 0" }} />
          <MissionItem>
            Preturi incepand de la 100 lei perechea de ochelari
          </MissionItem>
          <MissionItem>
            Garantie 2 ani la toate produsele comercializate
          </MissionItem>
          <MissionItem>
            Posibilitatea achitarii produselor achizitionate, in mai multe rate
            lunare stabilite de comun acord – <strong>FARA DOBANDA</strong>
          </MissionItem>
          <MissionItem>
            Oferirea de consultatii optometrice profesioniste gratuite
            indiferent daca se achizitioneaza sau nu produsele companiei.
          </MissionItem>
          <MissionItem>
            Consultanta de specialitate cu privire la tipurile de protectie
            necesare pentru ochi (in functie de domeniul de activitate).
          </MissionItem>
          <MissionItem>
            Furnizarea de produse si servicii de calitate superioara si la
            preturi minime.
          </MissionItem>
          <MissionItem>
            Informarea clientilor despre afectiunile ochilor.
          </MissionItem>
          <MissionItem>
            Informarea clientilor despre noutatile din lumea opticii medicale
            (tip rame, tip lentile etc).
          </MissionItem>
        </MissionList>
      </Mission>

      {INDEX_DATA.map((item) => (
        <Cards key={item.id}>
          <CardTitle>
            {item.title}
            <Arrows />
          </CardTitle>

          <ForHide className="forHide">
            <hr color="#cfdbd5" style={{ height: ".1rem" }} />
            <CardText>{shorten(item.text, 200)}</CardText>
            <CardButton>
              <Link href={item.url}>
                <a>{item.button}</a>
              </Link>
            </CardButton>
          </ForHide>
        </Cards>
      ))}
    </CardContainer>
  );
};

export default IndexCard;
