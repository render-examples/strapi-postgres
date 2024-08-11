import type { Schema, Attribute } from '@strapi/strapi';

export interface TalentBuildszTalentBuilds extends Schema.Component {
  collectionName: 'components_talent_buildsz_talent_builds';
  info: {
    displayName: 'talentBuilds';
    icon: 'apps';
    description: '';
  };
  attributes: {
    wowImportString: Attribute.String;
    talentBuildPic: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buildName: Attribute.String;
  };
}

export interface RotationsOpeners extends Schema.Component {
  collectionName: 'components_rotations_openers';
  info: {
    displayName: 'rotation';
    icon: 'alien';
    description: '';
  };
  attributes: {
    rotationText: Attribute.RichText;
    heroSpec: Attribute.Enumeration<['Slayer', 'Colossus', 'Mountain Thane']>;
    rotationType: Attribute.Enumeration<['opener', 'execute', 'normal']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'talent-buildsz.talent-builds': TalentBuildszTalentBuilds;
      'rotations.openers': RotationsOpeners;
    }
  }
}
