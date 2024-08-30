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

export interface RotationsWarriorSpec extends Schema.Component {
  collectionName: 'components_rotations_warrior_specs';
  info: {
    displayName: 'Warrior Spec';
    icon: 'alien';
    description: '';
  };
  attributes: {
    warriorSpec: Attribute.Enumeration<['arms', 'fury', 'protection']>;
  };
}

export interface RotationsHeroSpec extends Schema.Component {
  collectionName: 'components_rotations_hero_specs';
  info: {
    displayName: 'Hero Spec';
    icon: 'alien';
  };
  attributes: {
    heroSpec: Attribute.Enumeration<['Colossus', 'Mountain Thane', 'Slayer']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'talent-buildsz.talent-builds': TalentBuildszTalentBuilds;
      'rotations.warrior-spec': RotationsWarriorSpec;
      'rotations.hero-spec': RotationsHeroSpec;
    }
  }
}
