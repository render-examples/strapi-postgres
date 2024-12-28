import type { Schema, Struct } from '@strapi/strapi';

export interface RotationsHeroSpec extends Struct.ComponentSchema {
  collectionName: 'components_rotations_hero_specs';
  info: {
    displayName: 'Hero Spec';
    icon: 'alien';
  };
  attributes: {
    heroSpec: Schema.Attribute.Enumeration<
      ['Colossus', 'Mountain Thane', 'Slayer']
    >;
  };
}

export interface RotationsWarriorSpec extends Struct.ComponentSchema {
  collectionName: 'components_rotations_warrior_specs';
  info: {
    description: '';
    displayName: 'Warrior Spec';
    icon: 'alien';
  };
  attributes: {
    warriorSpec: Schema.Attribute.Enumeration<['arms', 'fury', 'protection']>;
  };
}

export interface TalentBuildszTalentBuilds extends Struct.ComponentSchema {
  collectionName: 'components_talent_buildsz_talent_builds';
  info: {
    description: '';
    displayName: 'talentBuilds';
    icon: 'apps';
  };
  attributes: {
    buildName: Schema.Attribute.String;
    talentBuildPic: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    wowImportString: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'rotations.hero-spec': RotationsHeroSpec;
      'rotations.warrior-spec': RotationsWarriorSpec;
      'talent-buildsz.talent-builds': TalentBuildszTalentBuilds;
    }
  }
}
