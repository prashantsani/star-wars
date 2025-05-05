import { CharacterDetail } from '@/lib/api/charecters/types';


export const charecterDetailsLabels: Array<[keyof CharacterDetail["properties"], string]> = [
    ['name', 'Name'],
    ['gender', 'Gender'],
    ['skin_color', 'Skin Color'],
    ['hair_color', 'Hair Color'],
    ['height', 'Height'],
    ['eye_color', 'Eye Color'],
    ['mass', 'Mass'],
    ['homeworld', 'Homeworld'],
    ['birth_year', 'Birth Year'],
  ];