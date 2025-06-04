export interface INGO {
  name: string;
  nationalId: string;
  establishmentYear: string;
  activityField: string[];
  otherActivityField: string;
  country: string;
  city: string;
  address: string;
  postal: string;
  phone: string;
  code: string;
  email: string;
  website: string;
  areaAndScope: string[];
  otherAreaAndScope: string;
  callPermition: boolean;
  locationPermition: boolean;
  specificCultureGroupValue: string[];
  specificCultureGroupDescription: string;
  specificCultureGroup: {
    has: boolean;
    description: string;
  };
  specificActiveAreas: [];
  areaOfExpertise: string[];
  areaOfExpertiseValue: string;
  populationConcentration: string[];
  populationConcentrationValue: string;
  group: [];
  additionalInformation: string;
  socialMedia: {
    instagram: string;
    telegram: string;
    linkedIn: string;
  };
  instagram: string;
  telegram: string;
  linkedIn: string;
  cooperationSelect: string[];
  cooperation: boolean;
  licenseValue: string[];
  licenseDescription: string;
  license: {
    has: boolean;
    description: string;
  };
  expiryDate: string;
  documents: [];
  publishSelect: string[];
  publishValue: string;
  publish: {
    status: number;
    description: string;
  };
  publishImages: string[];
  conditonAndConfirm: [];
  logo: string;
  documentsFile: [];
  username: string;
  password: string;
  confirmPassword: string;
}
