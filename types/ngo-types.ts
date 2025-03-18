export interface INGO {
  name: string;
  nationalId: string;
  establishmentYear: number | null;
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
  specificCultureGroup: {
    has: boolean;
    describtion: string;
  };
  specificActiveAreas: string[];
  areaOfExpertise: string[];
  areaOfExpertiseValue: string;
  PopulationConcentration: string[];
  PopulationConcentrationValue: string;
  group: string[];
  additionalInformation: string;
  socialMedia: {
    instagram: string;
    telegram: string;
    linkedIn: string;
  };
  cooperation: string[];
  license: {
    has: boolean;
    describtion: string;
  };
  expiryDate: string;

  issuedBy: boolean;
  publish: boolean;
}
