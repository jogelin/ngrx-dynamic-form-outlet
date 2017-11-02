export enum RecordTypes {
  DEED_OF_SUCCESSION = 'deedOfSuccession',
  CERTIFICATE_EU_OF_SUCCESSION = 'certificateEuOfSuccession',
  WAVER_OF_SUCCESSION = 'waiverOfSuccession',
  PUBLIC_OF_SUCCESSION = 'publicOfSuccession',
  LONG_TYPE_OF_THE_SUCCESSION = 'LongTypeOfTheSuccession',
}

export interface RecordType {
  type: RecordTypes;
  labelKey: string;

}
