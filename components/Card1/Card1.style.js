import styled from "styled-components";

// .cardContainer
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  transition: all 0.35s ease-in-out;
`;

// .mission
export const Mission = styled.div`
  width: 30rem;
  height: 3rem;
  background: none;
  padding: 1rem;
  padding-top: 0.5rem;
  margin-top: 0.2rem;
  border-radius: 0.3rem;
  border-left: 1px solid var(--color-primary-lighten2);
  border-bottom: 1px solid var(--color-primary-lighten2);
  transition: all 0.35s ease-in-out;
  user-select: none;
  backdrop-filter: blur(5px);
  overflow: hidden;
  &:hover {
    height: 23rem;
    /* background: var(--color-primary-lighten1); */
  }
  &:hover .ulMission {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.2s;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: fit-content;
    /* background: var(--color-extra-light); */
    &:hover {
      height: fit-content;
    }
    &:hover .ulMission {
      transform: none;
      opacity: 1;
      transition-delay: none;
    }
  }
`;

// h3 title
export const Title = styled.h3`
  color: var(--color-primary-lighten1);
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

// .ulMission ul
export const MissionList = styled.ul`
  padding-left: 1rem;
  transition: all 0.35s ease-in-out;
  transform: translateY(100%);
  opacity: 0;
  @media screen and (max-width: 768px) {
    transform: none;
    opacity: 1;
  }
`;

// li
export const MissionItem = styled.li`
  color: var(--color-primary-lighten1);
  font-family: var(--font-family-poppins);
  font-size: 0.9rem;
  font-weight: 200;
  &::marker {
    color: var(--color-primary-light);
  }
`;

// .cards
export const Cards = styled.div`
  height: 3rem;
  width: 30rem;
  margin: 0.2rem 0;
  background: none;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  padding: 0 1rem;
  padding-top: 0.4rem;
  border-left: 1px solid var(--color-primary-lighten2);
  border-bottom: 1px solid var(--color-primary-lighten2);
  transition: all 0.35s ease-in-out;
  user-select: none;
  backdrop-filter: blur(5px);
  overflow: hidden;
  a {
    color: var(--color-primary-dark2);
    font-family: var(--font-family-poppins);
    font-size: 1rem;
    width: fit-content;
    padding: 0 0.2rem;
    margin: 0.2rem;
    background: var(--color-primary-light);
    outline: none;
    border: none;
    border-bottom: 1px solid transparent;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 350ms ease-in-out;
  }
  a:hover {
    background: var(--color-primary-dark2);
    color: var(--color-primary-light);
    border-bottom: 1px solid var(--color-primary-light);
  }
  &:hover {
    height: 11rem;
    /* background: var(--color-primary-lighten1); */
  }
  &:hover .forHide {
    transform: translateY(0);
    transition-delay: 0.2s;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    /* background: var(--color-primary-lighten1); */
    height: fit-content;
    padding-bottom: 0.5rem;
    &:hover {
      height: fit-content;
      background: var(--color-primary-lighten1);
    }
    &:hover .forHide {
      transform: none;
      transition-delay: none;
    }
  }
`;

// h3 card title
export const CardTitle = styled.h3`
  color: var(--color-primary-lighten1);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-family-poppins);
  font-weight: var(--font-w600);
  display: flex;
  justify-content: space-between;
`;

// .forHide div
export const ForHide = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateY(100%);
  transition: all 0.35s ease-in-out;
  @media screen and (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateY(0);
    transition: all 0.35s ease-in-out;
    opacity: 1;
  }
`;

// h4 card text
export const CardText = styled.h4`
  color: var(--color-primary-lighten1);
  font-family: var(--font-family-poppins);
  font-size: 0.9rem;
  font-weight: var(--font-w200);
  margin-top: 0.5rem;
  text-align: left;
`;

// .button
export const CardButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  padding-bottom: 0.5rem;
  a {
    align-self: flex-end;
  }
`;
