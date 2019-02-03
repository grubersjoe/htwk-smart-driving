import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ImageGrid from '../../components/ImageGrid';
import TeamNav from '../../components/TeamNav';
import TeamInfo from '../../components/TeamInfo';

import Avatar from '../../components/Avatar';
import {
  avatarFabi,
  avatarLina,
  avatarJo,
  avatarMicha,
  avatarNick,
  avatarPhilipp,
} from '../../images/avatars';
import { team2016 } from '../../images/team';

import { getPageTitle } from '../../utils/helper';

const Team = props => (
  <main>
    <Helmet title={`Team 2016/2017 – ${getPageTitle(props.data)}`}>
      <meta
        name="description"
        content="Website des Studententeams HTWK Smart Driving aus Leipzig – Teammitglieder 2016/2017."
      />
    </Helmet>

    <TeamNav />
    <h1>Team Smart Driving 2016/2017</h1>

    <TeamInfo
      leader={{
        name: 'Fabian Freihube',
        email: 'fabian.freihube@stud.htwk-leipzig.de',
      }}
    />

    <a href={team2016} target="_blank">
      <img src={team2016} alt="Team Smart Driving 2017/2018" />
    </a>

    <h2>Kernteam</h2>
    <ImageGrid>
      <Avatar imgUrl={avatarFabi} caption="Fabian Freihube" />
      <Avatar imgUrl={avatarNick} caption="Nick Fahrendorff" />
      <Avatar
        imgUrl={avatarJo}
        caption="Jonathan Gruber"
        profiles={{
          website: 'https://grubersjoe.de',
          github: 'https://github.com/grubersjoe',
          xing: 'https://www.xing.com/profile/Jonathan_Gruber',
        }}
      />
      <Avatar imgUrl={avatarMicha} caption="Michael Horn" />
      <Avatar imgUrl={avatarLina} caption="Lina Peters" />
    </ImageGrid>

    <h2>Freie Mitarbeiter</h2>
    <ImageGrid>
      <Avatar imgUrl={avatarPhilipp} caption="Philipp Kleinhenz" />
      <Avatar caption="Sonja Mauersberger" />
    </ImageGrid>
  </main>
);

Team.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const PageQuery = graphql`
  query Team2016Query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Team;
